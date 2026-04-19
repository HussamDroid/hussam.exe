"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiRadio, FiTarget, FiSend, FiGlobe, FiZap, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const AviationContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");

    // Replace these strings with your actual IDs from the EmailJS Dashboard
    emailjs.sendForm(
      'service_cx9rvh8', 
      'template_2iwtgdj', 
      form.current!, 
      'oPjncrYEntlhHIMFe'
    )
    .then(() => {
        setStatus("SUCCESS");
        form.current?.reset();
        // Reset to IDLE after 5 seconds so they can send another if needed
        setTimeout(() => setStatus("IDLE"), 5000);
    }, (error) => {
        setStatus("ERROR");
        console.error("Link Failure:", error.text);
        setTimeout(() => setStatus("IDLE"), 5000);
    });
  };

  return (
    <main className="pt-40 pb-20 min-h-screen bg-[#020202] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HUD Header */}
        <div className="flex justify-between items-end border-b border-blue-500/20 pb-8 mb-12">
          <div>
            <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-2 text-glow">
              System_ID: H-DRAKE_01
            </p>
            <h1 className="text-6xl md:text-7xl font-black uppercase italic tracking-tighter">
              Connect_Sector
            </h1>
          </div>
          <div className="hidden md:block text-right font-mono text-[10px] text-gray-500 uppercase tracking-widest leading-loose">
            <p>LAT: 25.2854° N</p>
            <p>LONG: 51.5310° E</p>
            <p className={status === "SUCCESS" ? "text-green-400" : "text-blue-400"}>
              Link_Status: {status}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Data Readout */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card !p-8 rounded-[32px] border-blue-500/10 bg-blue-500/[0.01]">
              <div className="flex items-center gap-3 text-blue-400 mb-6">
                <FiTarget size={18} />
                <h3 className="font-black uppercase tracking-[0.2em] text-[10px]">Mission Control</h3>
              </div>
              <div className="space-y-4 font-mono text-[10px] uppercase tracking-wider text-gray-500">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Objective</span>
                  <span className="text-white">AI / Aviation</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Base</span>
                  <span className="text-white">Doha, QA</span>
                </div>
                <div className="flex justify-between">
                  <span>Signal</span>
                  <span className={status === "SUCCESS" ? "text-green-400" : "text-blue-400 animate-pulse"}>
                    {status === "IDLE" ? "Stable" : status}
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card !p-8 rounded-[32px] border-white/5">
              <div className="flex items-center gap-3 text-purple-400 mb-6">
                <FiRadio size={18} />
                <h3 className="font-black uppercase tracking-[0.2em] text-[10px]">Comm Channels</h3>
              </div>
              <div className="space-y-4">
                <a href="https://linkedin.com/in/hussam" target="_blank" className="flex items-center gap-4 text-xs font-bold hover:text-blue-400 transition-all group">
                   <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors"><FiGlobe /></div>
                   LINKEDIN_NODE
                </a>
                <a href="https://github.com/hussamdroid" target="_blank" className="flex items-center gap-4 text-xs font-bold hover:text-blue-400 transition-all group">
                   <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors"><FiZap /></div>
                   GITHUB_REPOS
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-8">
            <div className="glass-card !p-10 rounded-[40px] border-blue-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-[0.03]"></div>
              
              <div className="flex items-center gap-3 mb-10">
                <div className={`w-2 h-2 rounded-full ${status === "SUCCESS" ? "bg-green-500" : "bg-blue-500 animate-ping"}`}></div>
                <h2 className="text-2xl font-black uppercase tracking-tighter italic">Establish_Link</h2>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] ml-1">Callsign</label>
                    <input name="user_name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500/50 outline-none transition-all font-mono text-sm" placeholder="IDENTIFY..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] ml-1">Frequency (Email)</label>
                    <input name="user_email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500/50 outline-none transition-all font-mono text-sm" placeholder="ADDRESS..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] ml-1">Encrypted Transmission</label>
                  <textarea name="message" required rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500/50 outline-none transition-all resize-none font-mono text-sm" placeholder="MESSAGE DATA..."></textarea>
                </div>

                <button 
                  disabled={status === "SENDING" || status === "SUCCESS"}
                  type="submit" 
                  className={`group w-full py-5 font-black uppercase tracking-[0.4em] rounded-2xl transition-all flex items-center justify-center gap-4 ${
                    status === "SUCCESS" ? "bg-green-600 text-white" : "bg-blue-600 hover:bg-blue-500 text-white"
                  }`}
                >
                  {status === "IDLE" && (
                    <>INITIATE_BROADCAST <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                  {status === "SENDING" && "UPLOADING_DATA..."}
                  {status === "SUCCESS" && (
                    <>LINK_ESTABLISHED <FiCheckCircle /></>
                  )}
                  {status === "ERROR" && (
                    <>LINK_FAILURE <FiAlertCircle /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AviationContact;