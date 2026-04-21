"use client";
import React from "react";
import { FiActivity, FiTerminal, FiDatabase, FiLayers } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// --- HELPER: VITAL STAT ---
const VitalStat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
      {icon} {label}
    </div>
    <div className="text-xl font-black uppercase tracking-tighter text-white">{value}</div>
  </div>
);

// --- HELPER: SOCIAL BUTTON ---
const SocialButton = ({ icon, label, color, href }: { icon: React.ReactNode; label: string; color: string; href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full md:w-auto">
    <button className={`w-full flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r ${color} to-transparent border border-white/10 hover:border-white/20 transition-all font-black uppercase text-xs tracking-widest hover:scale-105`}>
      {icon} {label}
    </button>
  </a>
);

// --- MAIN CONTACT COMPONENT ---
const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-32 relative z-20">
      <div className="mb-16">
        <p className="text-gray-500 font-mono text-xs tracking-[0.4em] uppercase mb-2">Skills • Workflow • Identity</p>
        <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter uppercase">Reach Out</h2>
      </div>

      {/* Glass Container */}
      <div className="glass-card md:col-span-12 py-16 px-8 md:px-12 rounded-[40px] bg-gradient-to-b from-white/[0.03] to-transparent">
        <div className="text-gray-500 font-mono text-[13px] uppercase tracking-widest mb-12">Technical Vitals</div>
        
        {/* Pulse Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <VitalStat icon={<FiActivity className="text-green-400" />} label="Status" value="AI Specialist" />
          <VitalStat icon={<FiTerminal className="text-blue-400" />} label="Current Stack" value="Gen AI & ML Full Stack" />
          <VitalStat icon={<FiDatabase className="text-purple-400" />} label="Active Projects" value="MediaEval 2026" />
          <VitalStat icon={<FiLayers className="text-orange-400" />} label="Focus" value="MLOps Pipelines" />
        </div>

        <div className="h-px w-full bg-white/5 mb-12" />

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <SocialButton icon={<HiOutlineMail />} label="Mail" color="from-red-500/20" href="mailto:hussamsoomro02@gmail.com" />
          <SocialButton icon={<FaGithub />} label="GitHub" color="from-gray-500/20" href="https://github.com/HussamDroid" />
          <SocialButton icon={<FaLinkedinIn />} label="LinkedIn" color="from-blue-600/20" href="https://www.linkedin.com/in/hussam-abdul-rahim-soomro-9699b31b6/" />
        </div>
      </div>
    </section>
  );
};

export default Contact;