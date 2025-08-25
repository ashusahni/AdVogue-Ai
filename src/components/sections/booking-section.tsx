"use client";

import { CalendlyWidget } from "@/components/ui/calendly-widget";
import { motion } from "framer-motion";

export function BookingSection() {
  return (
    <section id="booking" className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 section-padding overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-violet-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-400/15 to-pink-400/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto container-padding z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-primary mb-8">
            Book Your Demo
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Schedule a personalized demo to see how our AI agents can transform 
            your business communications and drive growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-1 relative overflow-hidden border border-slate-100">
            {/* Enhanced Decorative Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-3xl -z-10" />
            
            {/* Inner shadow for depth */}
            <div className="absolute inset-0 rounded-3xl shadow-inner" />

            {/* Enhanced Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-transparent opacity-60 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-100/50 to-transparent opacity-60 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-100/50 to-transparent opacity-60 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-100/50 to-transparent opacity-60 rounded-br-3xl" />
            
            {/* Animated Border Glow */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
                  "linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
                  "linear-gradient(45deg, #8b5cf6, #06b6d4, #3b82f6, #8b5cf6)",
                  "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-3xl opacity-20 blur-sm"
            />
            
            <CalendlyWidget />
          </div>
        </motion.div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">15-minute demo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="font-medium">No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              <span className="font-medium">Custom solution demo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 