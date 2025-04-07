"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export function MouseEffect() {
  const mouseRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });
  const scale = useSpring(1, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseEnter = () => {
      scale.set(1.5);
    };

    const handleMouseLeave = () => {
      scale.set(1);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={mouseRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      <motion.div
        className="absolute w-4 h-4 bg-black/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          scale,
        }}
      />
      <motion.div
        className="absolute w-8 h-8 border border-black/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          scale: useTransform(scale, [1, 1.5], [1, 1.2]),
        }}
      />
    </motion.div>
  );
} 