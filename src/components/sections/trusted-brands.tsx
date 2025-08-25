"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TrustedBrands() {
  const brands = [
    { name: "Disney+", logo: "/brands/disney.svg" },
    { name: "Castrol", logo: "/brands/castrol.svg" },
    { name: "Whirlpool", logo: "/brands/whirlpool.svg" },
    { name: "OLA", logo: "/brands/ola.svg" },
    { name: "OpenAI", logo: "/brands/openai-new-logo_f252fc.webp" },
    { name: "HighLevel", logo: "/brands/highlevel.png" },
    { name: "Paytm", logo: "/brands/paytm.svg" },
    { name: "Make", logo: "/brands/make logo.webp" }
  ];

  // Duplicate brands for infinite scroll effect
  const scrollBrands = [...brands, ...brands];

  return (
    <section className="section-padding bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-violet-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of companies already transforming their customer experience with our AI solutions
          </p>
        </motion.div>

        <div className="relative w-full">
          {/* Enhanced Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex space-x-8 overflow-hidden"
          >
            <motion.div
              animate={{ 
                x: [0, -1920],
              }}
              transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-8 shrink-0"
            >
              {scrollBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  whileHover={{ 
                    scale: 1.08,
                    y: -5,
                    filter: "brightness(1.1) contrast(1.1)",
                  }}
                  className="relative w-40 h-20 bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-500 flex items-center justify-center shrink-0 border border-slate-100 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain p-3 filter contrast-125 brightness-110 group-hover:contrast-150 group-hover:brightness-125 transition-all duration-300"
                    sizes="160px"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Duplicate for seamless loop */}
            <motion.div
              animate={{ 
                x: [0, -1920],
              }}
              transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-8 shrink-0"
            >
              {scrollBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-duplicate-${index}`}
                  whileHover={{ 
                    scale: 1.08,
                    y: -5,
                    filter: "brightness(1.1) contrast(1.1)",
                  }}
                  className="relative w-40 h-20 bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-500 flex items-center justify-center shrink-0 border border-slate-100 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain p-3 filter contrast-125 brightness-110 group-hover:contrast-150 group-hover:brightness-125 transition-all duration-300"
                    sizes="160px"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
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
              <span className="font-medium">500+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 