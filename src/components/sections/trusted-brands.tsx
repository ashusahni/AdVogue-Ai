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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-12"
        >
          Trusted by 500+ Leading Brands
        </motion.h2>

        <div className="relative w-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-12 overflow-hidden"
          >
            <motion.div
              animate={{ 
                x: [0, -1920],
              }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-12 shrink-0"
            >
              {scrollBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  whileHover={{ 
                    scale: 1.05,
                    filter: "brightness(1.2) contrast(1.1)",
                  }}
                  className="relative w-32 h-16 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0"
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain p-2 filter contrast-125 brightness-110"
                    sizes="128px"
                    priority
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Duplicate for seamless loop */}
            <motion.div
              animate={{ 
                x: [0, -1920],
              }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-12 shrink-0"
            >
              {scrollBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-duplicate-${index}`}
                  whileHover={{ 
                    scale: 1.05,
                    filter: "brightness(1.2) contrast(1.1)",
                  }}
                  className="relative w-32 h-16 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0"
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain p-2 filter contrast-125 brightness-110"
                    sizes="128px"
                    priority
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 