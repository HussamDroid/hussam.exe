"use client";
import React, { useEffect } from "react";
import Lenis from 'lenis'

// --- COMPONENT IMPORTS ---
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Portfolio() {
  // Initialize Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/40 overflow-x-hidden">
      <Navbar />
      <StarField />
      <CustomCursor />
      
      <Hero />
      <Project />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}