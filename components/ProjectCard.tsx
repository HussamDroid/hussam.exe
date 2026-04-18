"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  accentColor: string; // e.g., "#3b82f6" for blue
}

const ProjectCard = ({ title, description, tags, accentColor }: ProjectProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex flex-col h-full group transition-all hover:border-white/20"
    >
      {/* Top Accent Line */}
      <div 
        className="w-12 h-1 rounded-full mb-6" 
        style={{ backgroundColor: accentColor }}
      />

      <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-wider"
            style={{ borderColor: `${accentColor}20` }} // Subtle colored border
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;