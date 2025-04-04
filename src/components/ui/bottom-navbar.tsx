"use client";

import { HomeIcon, PhoneIcon, CalendarIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export function BottomNavbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800 z-50 pb-safe"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-around items-center h-14 md:h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex flex-col items-center justify-center text-zinc-400 hover:text-teal-500 transition-colors"
          >
            <HomeIcon className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs mt-1">Home</span>
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="flex flex-col items-center justify-center text-zinc-400 hover:text-teal-500 transition-colors"
          >
            <UserGroupIcon className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs mt-1">Services</span>
          </button>

          <button
            onClick={() => scrollToSection("booking")}
            className="flex flex-col items-center justify-center text-zinc-400 hover:text-teal-500 transition-colors"
          >
            <CalendarIcon className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs mt-1">Book</span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex flex-col items-center justify-center text-zinc-400 hover:text-teal-500 transition-colors"
          >
            <PhoneIcon className="w-6 h-6" />
            <span className="text-xs mt-1">Contact</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
} 