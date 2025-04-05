"use client";

import { CalendlyWidget } from "@/components/ui/calendly-widget";
import { motion } from "framer-motion";

export function BookingSection() {
  return (
    <section id="booking" className="relative w-full bg-gradient-to-b from-white to-gray-50/50 py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6">
            Book Your Demo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a personalized demo to see how our AI agents can transform 
            your business communications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-1 relative overflow-hidden">
            {/* Decorative border */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl -z-10" />
            
            {/* Inner shadow for depth */}
            <div className="absolute inset-0 rounded-3xl shadow-inner" />

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent opacity-50 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-50 to-transparent opacity-50 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-50 to-transparent opacity-50 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-50 to-transparent opacity-50 rounded-br-3xl" />
            
            <CalendlyWidget />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 