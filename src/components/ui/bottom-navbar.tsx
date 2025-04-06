"use client";

import { HomeIcon, PhoneIcon, CalendarIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";

export function BottomNavbar() {
  const handleNavigation = (id: string) => {
    if (window.location.pathname === '/') {
      // If on home page, scroll to section
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on other pages, go to home with section hash
      if (id === 'hero') {
        window.location.href = '/';
      } else {
        window.location.href = `/#${id}`;
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 pb-safe block md:hidden"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={() => handleNavigation("hero")}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-black transition-colors"
          >
            <HomeIcon className="w-6 h-6 mb-1" />
            <span className="text-xs">Home</span>
          </button>

          <button
            onClick={() => handleNavigation("services")}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-black transition-colors"
          >
            <UserGroupIcon className="w-6 h-6" />
            <span className="text-xs mt-1">Services</span>
          </button>

          <button
            onClick={() => handleNavigation("booking")}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-black transition-colors"
          >
            <CalendarIcon className="w-6 h-6" />
            <span className="text-xs mt-1">Book</span>
          </button>

          <button
            onClick={() => handleNavigation("contact")}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-black transition-colors"
          >
            <PhoneIcon className="w-6 h-6" />
            <span className="text-xs mt-1">Contact</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
} 