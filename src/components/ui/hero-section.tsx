"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { Spotlight } from "./spotlight";

const words = ["Powerful", "AI", "Voice"];

const ShiftingWords = ({ words }: { words: string[] }) => {
  return (
    <span className="inline-block">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
        className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
      >
        {words[0]}
      </motion.span>
    </span>
  );
};

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 w-full">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-sm font-medium text-teal-500 inline-block mb-4">
            Helping businesses implement Voice AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Handle Real Calls
          </span>
          <br />
          with <ShiftingWords words={words} /> Agents
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-8"
        >
          Our advanced AI voice agents handle customer calls with human-like precision,
          automating your business communications while maintaining the personal touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            className="px-8 py-6 text-base font-medium rounded-md bg-teal-500 hover:bg-teal-600 text-white"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book A Call
          </Button>

          <Button
            variant="outline"
            className="px-8 py-6 text-base rounded-md text-white"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {['Innovative', 'Creative', 'Dynamic', 'Efficient'].map((quality, i) => (
            <div key={quality} className="text-zinc-300 text-sm font-medium">
              {quality}
            </div>
          ))}
        </motion.div>
      </div>

      <Spotlight className="hidden md:block" />
    </section>
  );
} 