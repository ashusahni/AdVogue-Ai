"use client";

import { motion } from "framer-motion";
import { CalendarDaysIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export function ScheduleDemo() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-black p-8 md:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                backgroundSize: "24px 24px"
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center md:justify-start gap-2 mb-4"
              >
                <CalendarDaysIcon className="w-6 h-6 text-white" />
                <span className="text-white/80 font-medium">Schedule Now</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Ready to Transform Your <br className="hidden md:block" />
                Customer Experience?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-lg max-w-2xl"
              >
                Book a personalized demo to see how our AI voice agents can revolutionize your business communication.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button 
                onClick={() => {
                  const bookingSection = document.getElementById("booking");
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ 
                      behavior: "smooth",
                      block: "start"
                    });
                  }
                }}
                className="group flex items-center gap-2 bg-white px-8 py-4 rounded-full text-black font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Demo
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 