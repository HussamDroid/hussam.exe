"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
 
import { HiOutlineMail } from "react-icons/hi";

import { FiArrowUpRight } from "react-icons/fi";

import {RiTailwindCssFill, 
        RiNextjsLine,
} from "react-icons/ri";

import { FaHtml5,
        FaAws,
        FaDocker,
        FaJs,
        FaNodeJs,
        FaReact,
        FaGitAlt,

        FaGithub, 
        FaLinkedinIn,
 } from "react-icons/fa";

import { 
  SiPython, 
  SiPandas,
  SiNumpy,
  SiPytorch, 
  SiJavascript, 
  SiCplusplus, 
  SiTensorflow, 
  SiArduino, 
} from "react-icons/si";

import { GiArtificialIntelligence } from "react-icons/gi";

import Lenis from 'lenis';


  // Typewriter logic
  const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000); // Wait before backspacing
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); // Speed of typing vs deleting

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="font-mono text-blue-400">
      {`${words[index].substring(0, subIndex)}`}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-2 h-8 md:h-12 bg-blue-500 ml-1 translate-y-1"
      />
    </span>
  );
};

// --- CUSTOM CURSOR ---
const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999]">
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-blue-500/50 rounded-full"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
};

// --- STARFIELD ---
const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let stars: any[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random(),
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

// --- ORBITAL ICON ---
const OrbitIcon = ({ 
  Icon, 
  diameter, 
  speed, 
  delay = 0, 
  label // Added this prop
}: { 
  Icon: any; 
  diameter: number; 
  speed: number; 
  delay?: number; 
  label?: string; // Optional type
}) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: speed, repeat: Infinity, ease: "linear", delay }}
    className="absolute flex items-start justify-center pointer-events-none"
    style={{ width: diameter, height: diameter }}
  >
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear", delay }}
      className="flex flex-col items-center gap-2 pointer-events-auto group -translate-y-1/2"
    >
      {/* Icon Container */}
      <div className="p-3 bg-black/80 border border-white/10 rounded-xl backdrop-blur-md text-blue-400 group-hover:text-white group-hover:border-blue-500/50 transition-all shadow-xl">
        <Icon size={22} 
        className="transition-colors duration-300 group-hover:text-inherit"/>
      </div>

      {/* Subtitle Label */}
      {label && (
        <span className="text-[10px] font-bold font-mono text-blue-400/80 uppercase tracking-widest whitespace-nowrap bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      )}
    </motion.div>
  </motion.div>
);

// --- BENTO GRID ITEM ---
const BentoItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, perspective: 1200 }}
      className={`relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.05] rounded-[40px] overflow-hidden ${className}`}
    >
      <div className="relative z-10 h-full w-full p-8 md:p-12">{children}</div>
    </motion.div>
  );
};

export default function Portfolio() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/40 overflow-x-hidden">
      <CustomCursor />
      <StarField />
      
  {/* HERO SECTION - Uses 'grid' to align orbits and text to the same center anchor */}
<section className="relative h-screen w-full grid place-items-center overflow-hidden">
  
  {/* ORBIT SYSTEM - Anchored to center of the grid */}
  <div className="absolute inset-0 z-0 grid place-items-center pointer-events-none">
     <div className="relative flex items-center justify-center">
        
        {/* Inner Orbital Circle */}
        <div className="absolute border border-white rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] opacity-20" />
        <OrbitIcon Icon={SiPython} diameter={450} speed={15} label="Python" delay={0.5}/>
        <OrbitIcon Icon={SiPandas} diameter={450} speed={15} label="Pandas" delay={2.5} />
        <OrbitIcon Icon={SiNumpy } diameter={450} speed={15} label="Numpy" delay={4} />
        <OrbitIcon Icon={GiArtificialIntelligence } diameter={450} speed={15} label="AI" delay={5.5} />
        <OrbitIcon Icon={FaAws} diameter={450} speed={15} label="AWS" delay={7.5} />
        <OrbitIcon Icon={FaDocker} diameter={450} speed={15} label="Docker" delay={9.5} />
        <OrbitIcon Icon={SiTensorflow} diameter={450} speed={15} label="TensorFlow" delay={11.5} />
        <OrbitIcon Icon={FaHtml5 } diameter={450} speed={15} label="HTML" delay={13.5} />

        {/* Outer Orbital Circle */}
        <div className="absolute border border-white rounded-full w-[550px] h-[550px] md:w-[650px] md:h-[650px] opacity-20" />
        <OrbitIcon Icon={FaJs} diameter={650} speed={17} label="JS" delay={1} />
        <OrbitIcon Icon={SiCplusplus} diameter={650} speed={17} label="C++" delay={3} />
        <OrbitIcon Icon={FaNodeJs} diameter={650} speed={17} label="NodeJS" delay={5} />
        <OrbitIcon Icon={FaReact} diameter={650} speed={17} label="React" delay={7} />
        <OrbitIcon Icon={FaGitAlt} diameter={650} speed={17} label="Git" delay={9} />
        <OrbitIcon Icon={RiTailwindCssFill } diameter={650} speed={17} label="Tailwind" delay={11} />
        <OrbitIcon Icon={RiNextjsLine } diameter={650} speed={17} label="NextJS" delay={13} />
        <OrbitIcon Icon={FaGithub} diameter={650} speed={17} label="GitHub" delay={15} />
        
     </div>
  </div>

  {/* HERO TEXT CONTENT - Stacked on top of the orbits */}
  <div className="relative z-10 text-center px-6 pointer-events-none">
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 font-mono tracking-[0.5em] text-[15px] uppercase mb-4">
      HELLO! I'M
    </motion.p>
    <h1 className="text-7xl md:text-[140px] font-black tracking-tighter text-white leading-none">
      Hussam
    </h1>
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
      <h2 className="text-4xl md:text-[50px] font-black text-white uppercase tracking-tighter leading-none min-h-[60px] md:min-h-[80px]"> 
        <Typewriter words={[
          "an ML/AI Engineer",
          "CS Student", 
          "a Developer",
          "an Aviation Tech"
        ]} />
      </h2>
      <div className="w-24 md:w-40 h-1.5 md:h-2 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_40px_rgba(37,99,235,0.9)]" />
    </motion.div>
    <p className="mt-10 text-gray-400 max-w-xl mx-auto text-lg md:text-2xl font-medium leading-relaxed">
      Building intelligent systems at the intersection of <span className="text-white">full-stack</span> and <span className="text-white">machine learning</span>.
    </p>
    <div className="mt-12 flex justify-center pointer-events-auto">
      <button className="bg-white text-black px-10 py-4 md:px-16 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:scale-105 transition-transform flex items-center gap-3">
        Resume & CV <FiArrowUpRight size={24} strokeWidth={3} />
      </button>
    </div>
  </div>
</section>

      {/* BENTO GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6 pb-40 relative z-20">
        <BentoItem className="md:col-span-2">
           <p className="text-blue-500 text-xs font-black uppercase tracking-widest mb-4">Portfolio</p>
           <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">Latest Projects</h3>
           <p className="text-gray-400 text-lg md:text-xl mb-10 leading-snug">
             AeroPredict aviation forecasting and MediaEval video analytics.
           </p>
           <button className="text-white font-black flex items-center gap-2 group border-b border-white/20 pb-2 text-lg">
             VIEW ALL WORK <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
           </button>
        </BentoItem>

        <BentoItem className="flex flex-col justify-center text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold font-mono">Based In</p>
          <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase">Doha, Qatar</h2>
        </BentoItem>

        <BentoItem className="flex justify-around items-center">
          {[FaGithub, FaLinkedinIn, HiOutlineMail].map((Icon, i) => (
            <motion.a key={i} whileHover={{ scale: 1.15 }} href="#" className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-[30px] text-gray-400 hover:text-white transition-all">
              <Icon size={28} />
            </motion.a>
          ))}
        </BentoItem>

        <BentoItem className="md:col-span-4 flex items-center justify-between py-12">
           <div>
             <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Credentials</h3>
             <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mt-4">Liverpool John Moores University • CS Student</p>
           </div>
           <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
             <FiArrowUpRight size={40} />
           </div>
        </BentoItem>
      </div>
    </main>
  );
}