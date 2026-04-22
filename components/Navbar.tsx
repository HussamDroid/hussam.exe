"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiUser, FiCode, FiFileText, FiMail, FiHome, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Projects", href: "/projects", icon: <FiCode /> },
    { name: "Credentials", href: "/credentials", icon: <FiFileText /> },
    { name: "Persona", href: "/persona", icon: <FiUser /> },
    { name: "Contact", href: "/contact", icon: <FiMail /> },
  ];

  return (
    <>
      {/* --- DESKTOP FLOATING PILL NAVBAR --- */}
      <div className="hidden md:flex fixed top-8 left-0 w-full z-[100] justify-center px-6">
        <nav className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl">
          
          {/* Brand Logo / URL Style */}
          <Link href="/" className="text-cyan-400 font-bold tracking-tight text-lg mr-4 hover:opacity-80 transition-all">
            hussam<span className="text-white/50">.ai</span>
          </Link>

          {/* Home Icon Button (Active State) */}
          <Link 
            href="/" 
            className={`p-2 rounded-xl transition-all ${
              pathname === '/' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:text-white'
            }`}
          >
            <FiHome size={20} />
          </Link>

          {/* Vertical Divider */}
          <div className="w-[1px] h-6 bg-white/10 mx-2" />

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 ${
                  pathname === link.href ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

        
        </nav>
      </div>

      {/* --- MOBILE BOTTOM DOCK (Keep your existing Mobile code here) --- */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-[100]">
        <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-full p-2 shadow-2xl flex justify-around items-center">
          {/* Your mobile link logic from the previous step */}
          <Link href="/" className={`p-4 rounded-full text-xl ${pathname === '/' ? 'text-cyan-400' : 'text-gray-500'}`}><FiHome /></Link>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`p-4 rounded-full text-xl ${pathname === link.href ? "text-cyan-400" : "text-gray-500"}`}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;