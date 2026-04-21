"use client";
import React from "react";
import { motion } from "framer-motion";

import OrbitIcon from "@/components/OrbitIcon";
import Typewriter from "@/components/Typewriter";

// --- ICON IMPORTS ---
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { 
  SiPython, SiPandas, SiNumpy, SiTensorflow, 
  SiPytorch, SiCplusplus 
} from "react-icons/si";
import { 
  FaJs, FaReact, FaGithub, FaAws, 
  FaDocker, FaGitAlt, FaLinkedinIn, FaNodeJs
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { FiMapPin, FiActivity, FiTerminal, FiDatabase, FiLayers } from "react-icons/fi";

// 1. Wrap the JSX in a function component
const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* CENTERED ORBIT SYSTEM */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div className="relative flex items-center justify-center">
              {/* Inner Ring */}
              <div className="absolute border border-white/10 rounded-full w-[450px] h-[450px]" />
              <OrbitIcon Icon={SiPython} diameter={450} speed={15} label="Python" delay={0} />
              <OrbitIcon Icon={SiPandas} diameter={450} speed={15} label="Pandas" delay={1.875} />
              <OrbitIcon Icon={SiNumpy} diameter={450} speed={15} label="Numpy" delay={3.75} />
              <OrbitIcon Icon={GiArtificialIntelligence} diameter={450} speed={15} label="AI" delay={5.625} />
              <OrbitIcon Icon={FaAws} diameter={450} speed={15} label="AWS" delay={7.5} />
              <OrbitIcon Icon={FaDocker} diameter={450} speed={15} label="Docker" delay={9.375} />
              <OrbitIcon Icon={SiTensorflow} diameter={450} speed={15} label="TensorFlow" delay={11.25} />
              <OrbitIcon Icon={SiPytorch} diameter={450} speed={15} label="PyTorch" delay={13.125} />

              {/* Outer Ring */}
              <div className="absolute border border-white/5 rounded-full w-[680px] h-[680px]" />
              <OrbitIcon Icon={FaJs} diameter={680} speed={20} label="JS" delay={0} />
              <OrbitIcon Icon={SiCplusplus} diameter={680} speed={20} label="C++" delay={2.5} />
              <OrbitIcon Icon={FaReact} diameter={680} speed={20} label="React" delay={5} />
              <OrbitIcon Icon={RiNextjsLine} diameter={680} speed={20} label="NextJS" delay={7.5} />
              <OrbitIcon Icon={RiTailwindCssFill} diameter={680} speed={20} label="Tailwind" delay={10} />
              <OrbitIcon Icon={FaGitAlt} diameter={680} speed={20} label="Git" delay={12.5} />
              <OrbitIcon Icon={FaNodeJs} diameter={680} speed={20} label="NodeJS" delay={15} />
              <OrbitIcon Icon={FaGithub} diameter={680} speed={20} label="GitHub" delay={17.5} />
            </div>
        </div>

        {/* HERO TEXT CONTENT */}
        <div className="relative z-10 text-center px-6 pointer-events-none">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 font-mono tracking-[0.5em] text-[15px] uppercase mb-4">
            HELLO! I'M
          </motion.p>
          <h1 className="text-7xl md:text-[140px] font-black tracking-tighter text-white leading-none">
            Hussam
          </h1>
          <div className="mt-4">
            <h2 className="text-4xl md:text-[50px] font-black text-white uppercase tracking-tighter leading-none min-h-[80px]"> 
              <Typewriter words={[
                "an ML / AI Engineer",
                "CS Student", 
                "a Researcher",
                "an Aviation Tech"
              ]} />
            </h2>
            <div className="w-24 md:w-40 h-1.5 md:h-2 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_40px_rgba(37,99,235,0.9)]" />
          </div>

          {/* HERO BUTTONS */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 pointer-events-auto">
            <button className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3">
              Resume & CV <FiArrowUpRight size={24} strokeWidth={3} />
            </button>
            <button className="w-full md:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white/10 hover:scale-105 transition-all flex items-center justify-center gap-3">
              Get in Touch <HiOutlineMail size={24} />
            </button>
          </div>
        </div>
      </section>
  );
};

export default Hero;