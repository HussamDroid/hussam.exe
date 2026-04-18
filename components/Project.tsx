"use client";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

// --- SUB-COMPONENT: PROJECT CARD ---
// This uses the established glass-card utility for consistency
const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  accentColor 
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  accentColor: string; 
}) => (
  <div className="glass-card !p-8 rounded-[32px] flex flex-col h-full hover:border-white/20 transition-all duration-500 group">
    {/* Accent Bar */}
    <div 
      className="w-12 h-1 rounded-full mb-6" 
      style={{ backgroundColor: accentColor }} 
    />
    
    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
      {title}
    </h3>
    
    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    
    {/* Tag Cloud */}
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-wider"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// --- MAIN PROJECTS COMPONENT ---
const Project = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-32 relative z-20">
      <div className="mb-16">
        <p className="text-gray-500 font-mono text-xs tracking-[0.4em] uppercase mb-2">
          Featured Work
        </p>
        <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter uppercase">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard 
          title="AeroSafe"
          description="A Machine Learning-powered Digital Twin dashboard that predicts the Remaining Useful Life (RUL) of turbofan engines."
          tags={["Python", "Machine Learning", "Aviation", "Forecasting", "Predictive-Maintenance"]}
          accentColor="#3b82f6"
        />
        <ProjectCard 
          title="Movie Recommender"
          description="A content-based movie recommender built with Python and Streamlit. It suggests the top 5 similar movies using a precomputed similarity matrix."
          tags={["Python", "Machine Learning", "TMDB API", "Streamlit"]}
          accentColor="#f59e0b"
        />
        <ProjectCard 
          title="PropertySearch"
          description="Full-stack Property Recommendation System for the Qatar Real Estate Market. Features dynamic filtering and user session favorites."
          tags={["PHP", "MYSQL", "Bootstrap", "Full Stack", "Github"]}
          accentColor="#a855f7"
        />
      </div>

      <div className="mt-20 flex justify-center">
        <button className="group px-10 py-4 bg-white/5 border border-white/10 rounded-full text-blue-400 font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-black transition-all">
          View All Projects 
          <FiArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Project;