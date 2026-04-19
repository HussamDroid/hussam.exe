"use client";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const CERT_DATA = [
  { 
    title: "Machine Learning Professional Certificate", 
    issuer: "IBM", 
    image: "/certs/ml.jpeg", // Ensure these are in public/certs/
    link: "https://www.coursera.org/account/accomplishments/professional-cert/QDL1ZO5S70HL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
  },
  { 
    title: "Deep Learning", 
    issuer: "IBM", 
    image: "/certs/dl.png",
    link: "https://coursera.org/share/5d52f01cff1e982ae8787ba2e59e8a8a"
  },  
  { 
    title: "Developing LLM Applications with LangChain", 
    issuer: "DataCamp", 
    image: "/certs/LLM.png",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/215de5d6f0402e571b7dcec157ebc83dd8eb83fd"
  },
  { 
    title: "Prompt Hackers", 
    issuer: "DataCrumbs", 
    image: "/certs/dc.jpg",
    link: "#"
  },     
  { 
    title: "Diploma in Microsoft Power BI", 
    issuer: "Alison", 
    image: "/certs/bi.png",
    link: "https://alison.com/certification/check/48200ab2b0"
  },
  { 
    title: "Introduction to Data Science", 
    issuer: "Alison", 
    image: "/certs/ds.png",
    link: "https://alison.com/certification/check/d799c09027"
  },    
  { 
    title: "Machine Learning For All", 
    issuer: "University of London", 
    image: "/certs/uol.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/IZZ5ED07EDBO"
  },
  { 
    title: "Python for Begineers", 
    issuer: "Alison", 
    image: "/certs/python.png",
    link: "https://alison.com/certification/check/0832867f7f"
  },
  { 
    title: "Web Developement", 
    issuer: "Microsoft", 
    image: "/certs/wd.png",
    link: "https://coursera.org/share/5d52f01cff1e982ae8787ba2e59e8a8a"
  },     
  { 
    title: "Graphics Design", 
    issuer: "DigiSkills", 
    image: "/certs/gd.png",
    link: "https://drive.google.com/file/d/1p1qW-mMsD5pcgGUiP7Iaw_8_Fh0oQgFJ/view"
  },        
  // Add 3-4 more here to ensure the loop is long enough to fill the screen
];

const BigCertCard = ({ title, issuer, image, link }: any) => (
  <div className="flex-shrink-0 w-[400px] h-[260px] mx-4 relative rounded-3xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl">
    {/* Image Background */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
    />
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/20 transition-all duration-500" />
    
    {/* Text Content */}
    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-1">{issuer}</p>
          <h4 className="text-xl font-black text-white uppercase tracking-tighter leading-none">{title}</h4>
        </div>
        <a 
          href={link} 
          target="_blank"
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-white hover:text-black"
        >
          <FiExternalLink size={18} />
        </a>
      </div>
    </div>
  </div>
);

const CertificationMarquee = () => {
  return (
    <section className="py-24 overflow-hidden relative group/section">
      {/* WRAPPER: pause-on-hover 
          This class targets the children animations when you hover anywhere in this div
      */}
      <div className="pause-on-hover flex flex-col gap-8">
        
        {/* Row 1 */}
        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee-custom flex-nowrap shrink-0">
            {[...CERT_DATA, ...CERT_DATA].map((cert, i) => (
              <BigCertCard key={i} {...cert} />
            ))}
          </div>
          <div className="flex animate-marquee-custom flex-nowrap shrink-0">
            {[...CERT_DATA, ...CERT_DATA].map((cert, i) => (
              <BigCertCard key={`dup-${i}`} {...cert} />
            ))}
          </div>
        </div>

        {/* Note: If you want a second row, you'd add it here 
            with the animate-marquee-reverse-custom class 
        */}
      </div>

      {/* Cinematic Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
};


export default CertificationMarquee;