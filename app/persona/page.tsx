"use client";
import React from "react";
import { FiCompass, FiMap, FiGlobe, FiZap } from "react-icons/fi";

// Import your new components
import EducationCard from "@/components/persona/EducationCard";
import AboutText from "@/components/persona/AboutText";
import SkillsHUD from "@/components/persona/SkillsHUD";
import SocialsHUD from "@/components/persona/SocialsHUD";

export default function PersonaPage() {
  return (
    <main className="pt-40 pb-20 min-h-screen bg-[#050505]">
      
      {/* Header */}
      
         {/* 1. Centered Header */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center flex flex-col items-center">
        <div className="px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6">
          About me // Who am I
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
          Hussam Abdul Rahim Soomro
        </h1>
      </div>
      
        {/* BODY */}
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Philosophy & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AboutText />

          <div className="h-fit">
            <EducationCard />
          </div>
        </div>

        {/* Skills HUD */}
        <SkillsHUD />

        {/* Interests */}
        <SocialsHUD />

      </div>


    </main>
  );
}