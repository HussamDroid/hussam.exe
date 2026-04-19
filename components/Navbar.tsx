"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <div className="flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {/* Logo */}
        <span className="text-blue-400 font-black tracking-tighter text-lg mr-4 uppercase">
          <Link href="/" className="hover:text-blue-400">hussam.ai</Link>
        </span>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/credentials" className="hover:text-blue-400">Credentials</Link>
          <Link href="/persona" className="hover:text-blue-400">Persona</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        
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