"use client";
import React from "react";
import { 
  SiPython, SiPytorch, SiNextdotjs, SiTailwindcss, 
  SiMysql, SiPhp, SiDocker, SiGithub, SiCplusplus, SiTypescript 
} from "react-icons/si";

const TECH_DATA_TOP = [
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
];

const TECH_DATA_BOTTOM = [
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
  { name: "Git", icon: <SiGithub className="text-white" /> },
];

const TechBadge = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full mx-4 hover:border-blue-500/50 transition-colors group cursor-default">
    <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest group-hover:text-white">
      {name}
    </span>
  </div>
);

const TechStack = () => {
  return (
    <section className="py-16 overflow-hidden relative flex flex-col gap-6 select-none">
      
      {/* ROW 1: Sliding Left */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-custom flex-nowrap shrink-0">
          {[...TECH_DATA_TOP, ...TECH_DATA_TOP].map((tech, i) => (
            <TechBadge key={`top-${i}`} {...tech} />
          ))}
        </div>
        <div className="flex animate-marquee-custom flex-nowrap shrink-0">
          {[...TECH_DATA_TOP, ...TECH_DATA_TOP].map((tech, i) => (
            <TechBadge key={`top-dup-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* ROW 2: Sliding Right (Reverse) */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-reverse-custom flex-nowrap shrink-0">
          {[...TECH_DATA_BOTTOM, ...TECH_DATA_BOTTOM].map((tech, i) => (
            <TechBadge key={`bot-${i}`} {...tech} />
          ))}
        </div>
        <div className="flex animate-marquee-reverse-custom flex-nowrap shrink-0">
          {[...TECH_DATA_BOTTOM, ...TECH_DATA_BOTTOM].map((tech, i) => (
            <TechBadge key={`bot-dup-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* Cinematic Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default TechStack;