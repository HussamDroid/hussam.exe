"use client";
import React from "react";
import { FiMapPin } from "react-icons/fi";

// --- SUB-COMPONENT: FOCUS CARD ---
const FocusCard = ({ title, desc, color }: { title: string; desc: string; color: string }) => (
  <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-[24px] hover:border-white/20 transition-all">
    <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-3" style={{ color }}>
      {title}
    </h4>
    <p className="text-gray-400 text-xs leading-relaxed">
      {desc}
    </p>
  </div>
);

// --- SUB-COMPONENT: BENTO ITEM ---
const BentoItem = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-[32px] border border-white/10 p-6 ${className}`}>
    {children}
  </div>
);

// --- MAIN ABOUT COMPONENT ---
const About = () => {
  return (
    <section id="persona" className="max-w-6xl mx-auto px-6 py-24 relative z-20">
      <div className="mb-12">
        <p className="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-2">Who I Am</p>
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase">About Me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* LOCATION CARD */}
        <BentoItem className="md:col-span-5 relative group cursor-crosshair overflow-hidden min-h-[300px] flex flex-col !bg-white/[0.03] !backdrop-blur-2xl">
          {/* Hover Image */}
          <div 
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-cover bg-center scale-110 group-hover:scale-100"
            style={{ backgroundImage: `url('/qatar-skyline.jpeg')` }} 
          />
          
          <div className="relative z-10 flex items-center gap-2 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
            <FiMapPin className="text-blue-400" /> Location • Hover to Explore
          </div>
          
          <div className="mt-auto relative z-10 pb-4">
            <h3 className="text-6xl font-black uppercase italic tracking-tighter text-white">
              Qatar
            </h3>
            <p className="text-gray-500 font-mono text-[12px] mt-1 leading-tight">
              25.2854° N, 51.5310° E <br />
              <span className="text-blue-400/80 uppercase">Doha • GMT+3</span>
            </p>
          </div>
        </BentoItem>

        {/* BIO CARD */}
        <BentoItem className="md:col-span-7 !bg-white/[0.03] !backdrop-blur-2xl !p-8 flex flex-col justify-center">
          <div className="text-gray-500 font-mono text-[9px] uppercase tracking-widest mb-4">./About</div>
          <p className="text-lg md:text-xl text-gray-300 leading-snug font-medium">
            I’m Hussam — a <span className="text-blue-400">Computer Science student</span> at LJMU. 
            I’m passionate about building projects in AI, machine learning, and full-stack development, 
            and I enjoy collaborating on work that makes an impact.
          </p>
          <div className="mt-6 pt-6 border-t border-white/5 text-gray-500 italic text-xs">
            "Bridging the gap between raw data and flight-ready solutions."
          </div>
        </BentoItem>

        {/* THREE BOTTOM CARDS */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <FocusCard 
            title="Pulse" 
            desc="Staying in sync with the latest shifts in AI research and neural architectures." 
            color="#3b82f6" 
          />
          <FocusCard 
            title="Mindset" 
            desc="Approaching every problem with the rigor of a researcher and the agility of a dev." 
            color="#06b6d4" 
          />
          <FocusCard 
            title="Horizon" 
            desc="Looking toward the future of autonomous systems and aerospace optimization." 
            color="#a855f7" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;