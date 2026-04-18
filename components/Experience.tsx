"use client";
import React from "react";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 relative z-20">
      <div className="mb-12">
        <p className="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-2">My Journey</p>
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase">Education & Experience</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* EDUCATION CARD */}
        <div className="glass-card !p-8 rounded-[32px] flex flex-col hover:border-white/20 transition-all duration-500 group">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
              <FiBookOpen size={24} />
            </div>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">2024 — 2027</span>
          </div>
          
          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">BSc Computer Science</h3>
            <p className="text-blue-400 font-mono text-xs uppercase tracking-wider mb-4">LJMU Qatar Campus</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Currently a Level 4 student focusing on Machine Learning, Cyber Security, and Full-Stack systems. Actively participating in research projects like MediaEval 2026.
            </p>
          </div>
        </div>

        {/* WORK CARD */}
        <div className="glass-card !p-8 rounded-[32px] flex flex-col hover:border-white/20 transition-all duration-500 group">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
              <FiBriefcase size={24} />
            </div>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Current</span>
          </div>
          
          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">Junior Developer</h3>
            <p className="text-blue-400 font-mono text-xs uppercase tracking-wider mb-4">Probation Period</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Applying AI/ML models to real-world datasets and developing scalable web architectures. Managing database schemas and session-based security protocols.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;