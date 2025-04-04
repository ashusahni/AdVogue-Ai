"use client";

import { motion } from "framer-motion";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const comparisonData = [
  {
    us: "Experienced AI Voice Developers",
    others: "Junior Developers"
  },
  {
    us: "Innovative Development Practices",
    others: "Outdated Technologies & Approaches"
  },
  {
    us: "Complete Custom Development",
    others: "Generic / Copy & Paste Solutions"
  },
  {
    us: "Client-Centric Approach",
    others: "Agency-Centric Approach"
  },
  {
    us: "Rigorous Testing and Validation",
    others: "Limited Testing or Inadequate Quality Control"
  },
  {
    us: "Partners With Leading AI Voice Platforms",
    others: "No Access To Platforms, No Support"
  }
];

export function ComparisonSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Benefits that Drive Success
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Our Side */}
            <div>
              <div className="mb-8">
                <Image
                  src="/logo.png"
                  alt="Slick AI"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`us-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="shrink-0">
                      <CheckIcon className="w-5 h-5 text-teal-500" />
                    </div>
                    <span className="text-slate-900 font-medium">
                      {item.us}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Others Side */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  Other Development Agencies
                </h3>
              </div>
              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`others-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="shrink-0">
                      <XMarkIcon className="w-5 h-5 text-slate-400" />
                    </div>
                    <span className="text-slate-500">
                      {item.others}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Book a Call
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 