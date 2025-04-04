"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Innovative", "Creative", "Dynamic", "Efficient"];

export function MovingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center gap-8 overflow-hidden py-4">
      {words.map((word, index) => (
        <motion.span
          key={word}
          animate={{
            x: [
              "0%",
              index === currentIndex ? "0%" : "-100%",
            ],
            opacity: index === currentIndex ? 1 : 0.3,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-lg md:text-xl font-light text-gray-600 min-w-[120px] text-center"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
} 