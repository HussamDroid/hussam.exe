import React from "react";

// --- SUB-COMPONENT (Internal to this file) ---
// We don't export this, so it doesn't clutter your other folders
const SkillBar = ({ label, percent }: { label: string; percent: string }) => (
  <div className="space-y-3 group/skill">
    <div className="flex justify-between items-end">
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] group-hover/skill:text-blue-400 transition-colors">
        {label}
      </p>
      <p className="text-[10px] font-mono text-blue-500/50">{percent}</p>
    </div>
    <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
      <div 
        className="h-full bg-blue-500 transition-all duration-1000 ease-out shadow-[0_0_8px_#3b82f6]" 
        style={{ width: percent }} 
      />
    </div>
  </div>
);

// --- MAIN EXPORT ---
const SkillsHUD = () => {
  return (
    <div className="glass-card !p-12 rounded-[56px] border-blue-500/10 relative overflow-hidden mb-12">
      {/* Decorative HUD Elements */}
      <div className="absolute bottom-0 left-0 p-10 text-[8px] font-mono text-blue-500/10 uppercase tracking-[0.6em] hidden lg:block">
        Node_Sector: Doha_QA
      </div>
      
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
          Technical Expertise
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <SkillBar label="Machine Learning" percent="85%" />
        <SkillBar label="Web Development" percent="92%" />
        <SkillBar label="Artificial Intelligence" percent="70%" />
        <SkillBar label="Git" percent="86%" />
      </div>
    </div>
  );
};

export default SkillsHUD;