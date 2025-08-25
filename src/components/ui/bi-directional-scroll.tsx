"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = [
  {
    text: "Innovative",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    text: "Creative",
    gradient: "from-violet-600 to-purple-600"
  },
  {
    text: "Dynamic",
    gradient: "from-orange-600 to-amber-600"
  },
  {
    text: "Efficient",
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    text: "Powerful",
    gradient: "from-red-600 to-orange-600"
  },
  {
    text: "Intelligent",
    gradient: "from-violet-600 to-purple-600"
  },
  {
    text: "Seamless",
    gradient: "from-teal-600 to-cyan-600"
  },
  {
    text: "Advanced",
    gradient: "from-indigo-600 to-blue-600"
  }
];

// Duplicate words multiple times to ensure continuous flow
const duplicatedWords = [...words, ...words, ...words];

export function BiDirectionalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="w-full section-padding bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-violet-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <motion.div 
        className="w-[80%] mx-auto relative z-10"
        style={{ opacity }}
      >
        {/* Top row - right to left */}
        <div className="relative overflow-hidden mb-8">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["0%", "-33.33%"]
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {duplicatedWords.map((word, idx) => (
              <motion.div
                key={idx}
                className="inline-flex items-center justify-center mx-4 group"
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="px-8 py-4 rounded-2xl bg-white shadow-lg shadow-slate-200/50 
                  border border-slate-100 transition-all duration-500
                  group-hover:shadow-xl group-hover:shadow-slate-300/50 group-hover:border-slate-200
                  backdrop-blur-sm bg-opacity-90"
                >
                  <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${word.gradient}`}>
                    {word.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom row - left to right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["-33.33%", "0%"]
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {duplicatedWords.map((word, idx) => (
              <motion.div
                key={idx}
                className="inline-flex items-center justify-center mx-4 group"
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="px-8 py-4 rounded-2xl bg-white shadow-lg shadow-slate-200/50 
                  border border-slate-100 transition-all duration-500
                  group-hover:shadow-xl group-hover:shadow-slate-300/50 group-hover:border-slate-200
                  backdrop-blur-sm bg-opacity-90"
                >
                  <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${word.gradient}`}>
                    {word.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 