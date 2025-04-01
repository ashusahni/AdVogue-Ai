"use client";

import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section id="faq" className="py-16 px-4 w-full">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.details
              key={`faq-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-zinc-800 rounded-lg overflow-hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-4 bg-zinc-900/50 text-lg font-medium">
                {item.question}
                <div className="h-5 w-5 transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
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
                className="p-4 text-zinc-400"
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