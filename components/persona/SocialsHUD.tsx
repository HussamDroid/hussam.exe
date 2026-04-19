import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

// --- INTERNAL SUB-COMPONENT ---
interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}

const InterestCard = ({ icon, title, desc, href }: InterestCardProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="glass-card !p-8 rounded-[32px] border-white/5 group relative overflow-hidden transition-all block h-full"
  >
    <div className="relative z-10">
      <div className="text-2xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
        {icon}
      </div>
      <h4 className="text-sm font-black text-white uppercase tracking-tighter mb-1">{title}</h4>
      <p className="text-[10px] text-gray-500 font-mono uppercase leading-tight tracking-[0.1em]">{desc}</p>
    </div>
    <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none" />
  </a>
);

// --- MAIN EXPORTED COMPONENT ---
const SocialsHUD = () => {
  return (
    <div className="glass-card !p-12 rounded-[56px] border-blue-500/10 relative overflow-hidden mb-12">      
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Find Me On</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InterestCard 
          icon={<FaLinkedin className="text-blue-400" />} 
          title="LinkedIn" 
          desc="Connect with me professionally" 
          href="https://linkedin.com/in/hussam-abdul-rahim-soomro-9699b31b6" 
        />
        <InterestCard 
          icon={<FaGithub className="text-white" />} 
          title="GitHub" 
          desc="Check out my repositories" 
          href="https://github.com/hussamdroid" 
        />
        <InterestCard 
          icon={<MdOutlineMailOutline className="text-green-400" />} 
          title="Email" 
          desc="Send me an email to talk more" 
          href="/contact"
        />
      </div>
    </div>
  );
};

export default SocialsHUD;