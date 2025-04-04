"use client";

import { motion } from "framer-motion";

interface FAQSectionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section id="faq" className="py-16 px-4 w-full bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-teal-500 mb-2 block">FAQ</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Common Questions
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about our AI Voice Agents
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {items.map((item, index) => (
            <motion.details
              key={`faq-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-4 md:p-6 bg-white text-base md:text-lg font-medium text-slate-900">
                <span>{item.question}</span>
                <div className="ml-4 shrink-0 rounded-full bg-slate-100 p-1.5 group-open:bg-teal-50 group-open:text-teal-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </summary>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 md:p-6 pt-0 md:pt-0 text-sm md:text-base text-slate-600 border-t border-slate-100"
              >
                {item.answer}
              </motion.div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
} 