"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Lenis from 'lenis'

// --- COMPONENT IMPORTS ---
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import OrbitIcon from "@/components/OrbitIcon";
import BentoItem from "@/components/BentoItem";
import ProjectCard from "@/components/ProjectCard";
import Typewriter from "@/components/Typewriter";
import CustomCursor from "@/components/CustomCursor";

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

export default function Portfolio() {
  // Initialize Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/40 overflow-x-hidden">
      <Navbar />
      <StarField />
      <CustomCursor />
      
      {/* --- HERO SECTION --- */}
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
                "an ML/AI Engineer",
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

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-32 relative z-20">
        <div className="mb-16">
          <p className="text-gray-500 font-mono text-xs tracking-[0.4em] uppercase mb-2">Featured Work</p>
          <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter uppercase">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard 
            title="AeroPredict"
            description="Aviation machine learning project focused on predictive modeling for flight logistics and performance."
            tags={["Python", "Machine Learning", "Aviation", "Forecasting"]}
            accentColor="#3b82f6"
          />
          <ProjectCard 
            title="MediaEval 2026"
            description="Predicting video memorability using spatial-temporal features and EEG-based detection."
            tags={["Research", "PyTorch", "Data Science", "AI"]}
            accentColor="#f59e0b"
          />
          <ProjectCard 
            title="SecureCore"
            description="A strategic framework for modern Cybersecurity challenges in academic environments."
            tags={["Cybersecurity", "Networking", "TCP/IP", "Security"]}
            accentColor="#a855f7"
          />
        </div>

        <div className="mt-20 flex justify-center">
          <button className="group px-10 py-4 bg-white/5 border border-white/10 rounded-full text-blue-400 font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-black transition-all">
            View All Projects 
            <FiArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
          </button>
        </div>
      </section>

      {/* --- BENTO GRID INFO --- */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6 pb-40 relative z-20">
        <BentoItem className="md:col-span-2">
           <p className="text-blue-500 text-xs font-black uppercase tracking-widest mb-4">Background</p>
           <h3 className="text-5xl font-black tracking-tighter uppercase mb-6">Experience & Education</h3>
           <p className="text-gray-400 text-lg leading-snug">
             Currently pursuing CS at LJMU Qatar while undergoing a professional probation period.
           </p>
        </BentoItem>

        <BentoItem className="flex flex-col justify-center text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold font-mono">Based In</p>
          <h2 className="text-3xl font-black italic uppercase">Doha, Qatar</h2>
        </BentoItem>

        <BentoItem className="flex justify-around items-center">
          {[FaGithub, FaLinkedinIn, HiOutlineMail].map((Icon, i) => (
            <Icon key={i} size={32} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
          ))}
        </BentoItem>

        <BentoItem className="md:col-span-4 flex items-center justify-between py-12">
           <div>
             <h3 className="text-4xl font-black tracking-tighter uppercase">Academic Status</h3>
             <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] mt-4">
               Level 4 Computer Science Student • Liverpool John Moores University
             </p>
           </div>
           <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
             <FiArrowUpRight size={40} />
           </div>
        </BentoItem>
      </section>
    </main>
  );
}