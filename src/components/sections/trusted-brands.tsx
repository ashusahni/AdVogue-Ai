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

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-12"
        >
          Trusted by 500+ Leading Brands
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-items-center"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              whileHover={{ scale: 1.05 }}
              className="relative w-48 h-20 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 