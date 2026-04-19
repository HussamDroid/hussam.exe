  import React from "react";

const EducationCard = () => (
  <div className="glass-card !p-8 rounded-[40px] border-white/5 relative overflow-hidden group h-full flex flex-col justify-between">
    <div className="flex gap-6 items-start">
      <div className="w-20 h-18 shrink-0 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black text-xl shadow-lg group-hover:border-blue-500/50 transition-colors">
        LJMU
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[20px] font-bold text-white tracking-tight leading-none">Liverpool John Moores University</h3>
        </div>
        <p className="text-lg font-medium text-cyan-400 leading-tight mb-2">
          Bachelors of Science in Computer Science
        </p>
        <p className="text-gray-500 font-mono text-xs mb-6 tracking-widest">2024 — 2028</p>
        <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
          <span>Level 4</span>
        </div>
      </div>
    </div>
    <div className="absolute bottom-6 right-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[9px] font-mono text-cyan-400 uppercase tracking-[0.3em] backdrop-blur-sm">
      2nd Year
    </div>
    <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[40px] pointer-events-none" />
  </div>
);

export default EducationCard;