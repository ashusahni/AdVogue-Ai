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

  return (
    <section className="min-h-[60vh] flex items-center justify-center pt-24 pb-20 px-4 w-full overflow-hidden bg-[#faf9f7] relative">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <AnimatedLogo width={700} height={140} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900"
        >
          Handle Real Calls
          <br />
          <span className="relative">
            with AI Voice Agents.
            <div className="absolute inset-0 bg-red-500/40 -skew-x-6 transform -z-10 translate-y-4"></div>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="descriptive-text max-w-3xl mx-auto mb-12"
        >
          Revolutionize your customer engagement with AI-powered voice solutions
          that drive growth, automate tasks, and deliver exceptional experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4 flex-col sm:flex-row"
        >
          <button
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-8 py-4 text-lg font-medium rounded-full bg-black hover:bg-black/90 text-white inline-flex items-center justify-center gap-3 shadow-lg shadow-black/20"
          >
            <PhoneIcon className="w-5 h-5" />
            Book a call
          </button>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-8 py-4 text-lg font-medium rounded-full bg-white hover:bg-gray-50 text-gray-900 inline-flex items-center justify-center gap-3 shadow-lg shadow-black/5"
          >
            Our Services
          </button>
        </motion.div>
      </div>
      <Spotlight className="hidden md:block opacity-50" />
    </section>
  );
}
