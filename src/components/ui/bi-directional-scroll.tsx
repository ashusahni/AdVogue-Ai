"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = [
  {
    text: "Innovative",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    text: "Creative",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    text: "Dynamic",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    text: "Efficient",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    text: "Powerful",
    gradient: "from-red-500 to-orange-500"
  },
  {
    text: "Intelligent",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    text: "Seamless",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    text: "Advanced",
    gradient: "from-indigo-500 to-blue-500"
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
      className="w-full py-20 overflow-hidden bg-[#faf9f7] relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent opacity-20" />
      
      <motion.div 
        className="w-[80%] mx-auto"
        style={{ opacity }}
      >
        {/* Top row - right to left */}
        <div className="relative overflow-hidden mb-6">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["0%", "-33.33%"]
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {duplicatedWords.map((word, idx) => (
              <motion.div
                key={idx}
                className="inline-flex items-center justify-center mx-3 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className={`px-6 py-3 rounded-2xl bg-white shadow-lg backdrop-blur-sm bg-opacity-80 
                  border border-slate-200 transition-all duration-300
                  group-hover:shadow-xl group-hover:border-slate-300`}
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
              duration: 15,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {duplicatedWords.map((word, idx) => (
              <motion.div
                key={idx}
                className="inline-flex items-center justify-center mx-3 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className={`px-6 py-3 rounded-2xl bg-white shadow-lg backdrop-blur-sm bg-opacity-80 
                  border border-slate-200 transition-all duration-300
                  group-hover:shadow-xl group-hover:border-slate-300`}
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