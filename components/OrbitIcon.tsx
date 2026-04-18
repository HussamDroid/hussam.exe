"use client";
import React from "react";
import { motion } from "framer-motion";

interface OrbitProps {
  Icon: any;
  diameter: number;
  speed: number;
  delay?: number;
  label?: string;
}

const OrbitIcon = ({ Icon, diameter, speed, delay = 0, label }: OrbitProps) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: speed, repeat: Infinity, ease: "linear", delay }}
    className="absolute flex items-start justify-center pointer-events-none"
    style={{ width: diameter, height: diameter }}
  >
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear", delay }}
      className="flex flex-col items-center gap-2 pointer-events-auto group -translate-y-1/2"
    >
      <div className="p-3 bg-black/80 border border-white/10 rounded-xl backdrop-blur-md text-blue-400 group-hover:text-white group-hover:border-blue-500/50 transition-all shadow-xl">
        <Icon size={22} className="transition-colors duration-300 group-hover:text-inherit"/>
      </div>
      {label && (
        <span className="text-[10px] font-bold font-mono text-blue-400/80 uppercase tracking-widest whitespace-nowrap bg-black/40 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      )}
    </motion.div>
  </motion.div>
);

export default OrbitIcon;