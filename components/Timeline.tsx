"use client";
import React from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description?: string;
  isLast?: boolean;
}

const TimelineItem = ({ title, subtitle, location, date, description, isLast }: TimelineItemProps) => (
  <div className="relative pl-12 pb-12">
    {/* The Vertical Line */}
    {!isLast && (
      <div className="absolute left-[11px] top-[24px] bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 to-transparent" />
    )}
    
    {/* The Pulse Dot */}
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-blue-500 bg-[#050505] z-10">
      <div className="absolute inset-1 rounded-full bg-blue-500 animate-pulse" />
    </div>

    <div className="glass-card !p-6 rounded-2xl hover:border-white/20 transition-all group">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <div>
          <h3 className="text-xl font-black text-white uppercase tracking-tight">{title}</h3>
          <p className="text-blue-400 font-mono text-xs uppercase tracking-widest">{subtitle}</p>
        </div>
        <div className="text-right">
          <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {date}
          </span>
          <p className="text-gray-500 text-[10px] uppercase tracking-tighter mt-1">{location}</p>
        </div>
      </div>
      
      {description && (
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  </div>
);

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Education</h2>
        <div className="h-1 w-12 bg-blue-500 rounded-full" />
      </div>

      <TimelineItem 
        title="Bachelor of Science"
        subtitle="Computer Science"
        location="Liverpool John Moores University (Qatar Campus)"
        date="2024 — 2028"
        />
      <TimelineItem 
        title="Diploma of Associate Engineers"
        subtitle="Computer Information Technology"
        location="Sindh, Pakistan"
        date="2021 — 2024"
        />      

      <div className="mb-12 mt-20">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Experience</h2>
        <div className="h-1 w-12 bg-purple-500 rounded-full" />
      </div>

      <TimelineItem 
        title="AI Engineer"
        subtitle="Full Stack ML Engineer"
        location="Doha, Qatar"
        date="2026 — Present"
        isLast={true}
      />
      <TimelineItem 
        title="Web Developer"
        subtitle="Full-Stack Web Apps"
        location="Freelance"
        date="2020 — 2023"
        isLast={true}
      />      
    </div>
  );
};

export default Timeline;