import Timeline from "@/components/Timeline";
import CertificationMarquee from "@/components/CertificationMarquee";
import { FiArrowUpRight } from "react-icons/fi"


export default function CredentialsPage() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Centered Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center flex flex-col items-center overflow-hidden">
        <p className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4">
          Verification / History
        </p>
        
        {/* 1. text-[14vw] scales based on screen width
            2. md:text-9xl kicks in for laptops
            3. leading-[0.8] removes extra vertical space
        */}
        <h1 className="w-full text-[14vw] md:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8] break-all md:break-normal">
          Credentials
        </h1>
        
        <p className="max-w-2xl text-gray-400 text-sm md:text-lg mt-6 leading-relaxed opacity-80 px-4">
          Explore my journey. Each section represents a milestone in my continuous learning path.
        </p>
      </div>

    <CertificationMarquee />
      <Timeline />
      
    
    </main>
  );
}

const CertificationCard = ({ title, issuer, date, link }: { title: string, issuer: string, date: string, link: string }) => (
  <a 
    href={link} 
    target="_blank" 
    className="glass-card !p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all"
  >
    <div>
      <h4 className="text-sm font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
        {title}
      </h4>
      <p className="text-[10px] text-gray-700 font-mono uppercase tracking-widest mt-1">
        {issuer}
      </p>
    </div>
    <div className="text-right flex flex-col items-end gap-2">
      <span className="text-[10px] font-bold text-gray-600 uppercase">{date}</span>
      <FiArrowUpRight className="text-gray-700 group-hover:text-white transition-colors" />
    </div>
  </a>
);