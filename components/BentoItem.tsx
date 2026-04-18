"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface BentoProps {
  children: React.ReactNode;
  className?: string;
}

const BentoItem = ({ children, className }: BentoProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  
  // These create the subtle 3D tilt effect on hover
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, perspective: 1200 }}
      className={`relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.05] rounded-[40px] overflow-hidden ${className}`}
    >
      <div className="relative z-10 h-full w-full p-8 md:p-12">
        {children}
      </div>
    </motion.div>
  );
};

export default BentoItem;