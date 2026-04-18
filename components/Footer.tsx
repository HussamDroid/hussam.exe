"use client";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#050505] relative z-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Branding/Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-xl font-black tracking-tighter uppercase italic">
            Hussam<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
            © {currentYear} — Built in Qatar
          </p>
        </div>

        {/* Center: Quick Links (Optional) */}
        <nav className="flex gap-8 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
          <a href="#persona" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right Side: Socials */}
        <div className="flex gap-5">
          <a 
            href="https://github.com" 
            target="_blank" 
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a 
            href="mailto:your@email.com" 
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            <HiOutlineMail size={18} />
          </a>
        </div>

      </div>
      
      {/* Bottom subtle detail */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
         <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
         <p className="text-center text-[9px] text-gray-600 font-mono uppercase tracking-[0.5em] mt-8">
           Computer Science • LJMU Qatar
         </p>
      </div>
    </footer>
  );
};

export default Footer;