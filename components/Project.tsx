"use client";
import React from "react";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

// --- PROJECT DATA SOURCE ---
const PROJECT_DATA = [
  {
    title: "AeroSafe",
    description: "A Machine Learning-powered Digital Twin dashboard that predicts the Remaining Useful Life (RUL) of turbofan engines using sensor data.",
    tags: ["Python", "Machine Learning", "Aviation", "Forecasting"],
    accentColor: "#3b82f6",
    image: "/projects/aerosafe.jpg", 
    codeLink: "https://github.com",
    liveLink: "https://aerosafe.demo"
  },
  {
    title: "Movie Recommender",
    description: "A content-based movie recommender built with Python and Streamlit. It suggests the top 5 similar movies using a precomputed similarity matrix.",
    tags: ["Python", "Machine Learning", "TMDB API", "Streamlit"],
    accentColor: "#f59e0b",
    image: "/projects/movie.png", 
    codeLink: "https://github.com",
    liveLink: "https://aerosafe.demo"
  },
  {
    title: "PropertySearch",
    description: "Full-stack Property Recommendation System for the Qatar Real Estate Market. Features dynamic filtering and user session favorites.",
    tags: ["PHP", "MYSQL", "Bootstrap", "Full Stack"],
    accentColor: "#a855f7",
    image: "/projects/property.png", 
    codeLink: "https://github.com",
    liveLink: "https://aerosafe.demo"
  },
  {
    title: "Renewable Energy Forecast",
    description: "Interactive dashboard that tracks and forecasts renewable energy trends worldwide. Visualizes solar, wind, hydro, and more with historical data, time-series forecasting, and interactive charts/maps for country and regional comparisons.",
    tags: ["Python", "Data Analysis", "Data Visualisation", "Machine Learning", "Streamlit"],
    accentColor: "#ef4444",
    image: "/projects/renewable.png", 
    codeLink: "https://github.com",
    liveLink: "https://aerosafe.demo"
  },
  {
    title: "Heart Disease Prediction",
    description: "This project focuses on predicting the likelihood of heart disease based on patient health data. By leveraging machine learning techniques, it provides insights for early detection and clinical decision support.",
    tags: ["Python", "Pandas", "NumPy", "Machine Learning", "Jupyter Notebook"],
    accentColor: "#44bcef",
    image: "/projects/Heart.png", 
    codeLink: "https://github.com",
    liveLink: "https://aerosafe.demo"
  },  
  {
    title: "3D Website",
    description: "A modern and interactive 3D website built with HTML, SCSS, and JavaScript. Features smooth GSAP animations, responsive design, and a futuristic interface to showcase 3D printing services and products.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP", "Gulp"],
    accentColor: "#10b981",
    image: "/projects/aerosafe.jpg", 
    codeLink: "https://github.com",
    liveLink: "https://aerosafe.demo"
  },
  {
    title: "Charity Website",
    description: "A website created for Charity Week to support a humanitarian cause. The platform showcased various fundraising activities, including homemade food sales, game stalls, and merchandise like badges and flags, allowing users to contribute and engage with the initiative.",
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap"],
    accentColor: "#10b981",
    image: "/projects/charity.png", 
    codeLink: "https://github.com",
    liveLink: "https://aerosafe.demo"
  },
  {
    title: "Travel Agency",
    description: "A fully responsive travel booking website built with HTML, CSS, Bootstrap, and JavaScript—optimized for seamless browsing across devices.",
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap"],
    accentColor: "#10b981",
    image: "/projects/travel.png", 
    codeLink: "https://github.com",
    liveLink: "https://aerosafe.demo"
  },
];


// --- SUB-COMPONENT: PROJECT CARD ---
const ProjectCard = ({ 
  title, description, tags, accentColor, image, codeLink, liveLink, isFullPage 
}: any) => (
  <div className="glass-card flex flex-col h-full rounded-[32px] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 group">
    
    {/* 1. PROJECT IMAGE (Only if on Full Page) */}
    {isFullPage && (
      <div className="relative h-48 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      </div>
    )}

    <div className="p-8 flex flex-col flex-grow">
      {/* Accent Bar */}
      <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: accentColor }} />
      
      <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      {/* Tag Cloud */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      {/* 2. EXTERNAL LINKS (Your requested style) */}
      {isFullPage && (
        <div className="flex items-center gap-6 pt-6 border-t border-white/5">
          <a 
            href={codeLink} 
            target="_blank" 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest"
          >
            <FiGithub size={13} /> Code
          </a>
          <a 
            href={liveLink} 
            target="_blank" 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest"
          >
            <FiExternalLink size={13} /> Live
          </a>
        </div>
      )}
    </div>
  </div>
);

// --- MAIN PROJECT COMPONENT ---
const Project = ({ isFullPage = false }: { isFullPage?: boolean }) => {
  const displayedProjects = isFullPage ? PROJECT_DATA : PROJECT_DATA.slice(0, 3);

  return (
    <section id="projects" className={`max-w-7xl mx-auto px-6 relative z-20 ${isFullPage ? "py-10" : "py-32"}`}>
      {!isFullPage && (
        <div className="mb-16">
          <p className="text-gray-500 font-mono text-xs tracking-[0.4em] uppercase mb-2">Featured Work</p>
          <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter uppercase">Projects</h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            isFullPage={isFullPage} 
          />
        ))}
      </div>

      {!isFullPage && (
        <div className="mt-20 flex justify-center">
          <Link href="/projects">
            <button className="group px-10 py-4 bg-white/5 border border-white/10 rounded-full text-blue-400 font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-black transition-all">
              View All Projects <FiArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Project;