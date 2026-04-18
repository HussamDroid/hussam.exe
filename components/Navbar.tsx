"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiHome, FiCpu, FiCommand } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <div className="flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {/* Logo */}
        <span className="text-blue-400 font-black tracking-tighter text-lg mr-4 uppercase">
          hussam.ai
        </span>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <NavLink label="Projects" />
          <NavLink label="Credentials" />
          <NavLink label="Forge" />
          <NavLink label="Persona" />
        </div>

        {/* Special Action Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="ml-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-2 text-[10px] font-black uppercase text-blue-400"
        >
          <FiCommand size={14} /> KIRO
        </motion.button>
      </div>
    </nav>
  );
};

const NavLink = ({ label }: { label: string }) => (
  <motion.a 
    href={`#${label.toLowerCase()}`}
    className="hover:text-white transition-colors cursor-pointer"
    whileHover={{ y: -1 }}
  >
    {label}
  </motion.a>
);

export default Navbar;