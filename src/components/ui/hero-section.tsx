"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import React from "react";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center pt-16 pb-24 px-4 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="mx-auto mb-6">
            <Link href="/" className="inline-block">
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter inline-flex items-baseline justify-center w-full">
                <span className="text-black">advogue</span>
                <span className="text-black font-bold">.</span>
                <span className="text-black ml-0.5 font-bold text-[0.85em] tracking-normal relative -top-0.5">AI</span>
              </h1>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 text-base">
            <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
            <span className="font-medium">
              Outbound Call Solutions
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-24 leading-[1.1]"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <span>Proactive</span>
            </div>
            <div className="flex items-center relative">
              <span className="relative z-10">Customer Engagement</span>
              <div 
                className="absolute inset-0 bg-gradient-to-r from-rose-100 to-pink-100 opacity-60 -skew-x-6 transform z-0"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.2) brightness(1.1)'
                }}
              ></div>
            </div>
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <button
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 text-lg font-medium rounded-full bg-black text-white inline-flex items-center gap-3 shadow-lg shadow-indigo-500/20"
          >
            <PhoneIcon className="w-5 h-5" />
            Book a call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
