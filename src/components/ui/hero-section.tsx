"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import React, { useState } from "react";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { Spotlight } from "./spotlight";
import { AnimatedLogo } from "./animated-logo";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleSectionClick = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center pt-16 sm:pt-24 pb-16 sm:pb-20 px-4 w-full overflow-hidden bg-[#faf9f7] relative">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <AnimatedLogo width={500} height={100} className="mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 sm:mb-8 px-2 sm:px-0"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
            Handle Real Calls
          </h1>
          <div className="relative mt-2 sm:mt-0 inline-block">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
              with AI Voice Agents.
            </h1>
            <div className="absolute inset-0 bg-red-500/40 -skew-x-6 transform -z-10 translate-y-4"></div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6"
        >
          Revolutionize your customer engagement with AI-powered voice solutions
          that drive growth, automate tasks, and deliver exceptional experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
        >
          <button
            onClick={() => handleSectionClick("booking")}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-medium rounded-full bg-black hover:bg-black/90 text-white inline-flex items-center justify-center gap-3 shadow-lg shadow-black/20"
          >
            <PhoneIcon className="w-5 h-5" />
            Book a call
          </button>
          <button
            onClick={() => handleSectionClick("services")}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-medium rounded-full bg-white hover:bg-gray-50 text-gray-900 inline-flex items-center justify-center gap-3 shadow-lg shadow-black/5"
          >
            Our Services
          </button>
        </motion.div>
      </div>
      <Spotlight className="hidden md:block opacity-50" />
    </section>
  );
}
