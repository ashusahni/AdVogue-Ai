"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const comparisonData = [
  {
    us: "Hyper-Specific AI Systems",
    them: "Generic, One-Size-Fits-All Solutions",
    description: "We perform a comprehensive audit and develop AI strategies specifically addressing your business's operational loopholes."
  },
  {
    us: "Risk-Free Satisfaction Guarantee",
    them: "Risky Contracts, No Guarantees",
    description: "Full refund if we don't meet agreed-upon KPIs—no questions asked."
  },
  {
    us: "Cutting-Edge Industry Technology",
    them: "Outdated Technology Stacks",
    description: "Our solutions leverage the latest advancements, ensuring your business stays ahead of the curve."
  },
  {
    us: "Comprehensive Multilingual Support",
    them: "Limited Language Capabilities",
    description: "AI agents fluent in English, Spanish, Chinese, and more, with custom language requests fully accommodated."
  },
  {
    us: "Eliminate Operational Bottlenecks",
    them: "Persistent Operational Inefficiencies",
    description: "Streamline efficiency by automating repetitive tasks and removing time-draining busywork."
  },
  {
    us: "Significant Cost & Time Savings",
    them: "Hidden Costs & Wasted Resources",
    description: "Reduce unnecessary expenditures and inefficiencies through intelligently designed automation solutions."
  },
  {
    us: "Seamless System Integration",
    them: "Poor Integration Support",
    description: "We integrate directly into your existing CRMs, calendars, support systems, and internal tools—no need to change your tech stack."
  }
];

export function ComparisonSection() {
  return (
    <section className="py-20 px-4 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose AdVogue AI?
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Our Side */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  AdVogue.ai
                </h3>
              </div>
              
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <Disclosure key={`us-${index}`}>
                    {({ open }) => (
                      <div className="rounded-lg overflow-hidden">
                        <Disclosure.Button className="flex w-full items-center justify-between text-left p-4 hover:bg-slate-50 transition-colors duration-200">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0">
                              <CheckIcon className="w-5 h-5 text-teal-500" />
                            </div>
                            <span className="text-slate-900 font-medium">
                              {item.us}
                            </span>
                          </div>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-4 w-4 text-slate-500 transition-transform duration-200`}
                          />
                        </Disclosure.Button>
                        
                        <AnimatePresence>
                          {open && (
                            <Disclosure.Panel
                              static
                              as={motion.div}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: "auto", 
                                opacity: 1,
                                transition: {
                                  height: { duration: 0.3 },
                                  opacity: { duration: 0.2, delay: 0.1 }
                                }
                              }}
                              exit={{ 
                                height: 0, 
                                opacity: 0,
                                transition: {
                                  height: { duration: 0.3 },
                                  opacity: { duration: 0.2 }
                                }
                              }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 bg-slate-50 text-sm text-slate-600">
                                {item.description}
                              </div>
                            </Disclosure.Panel>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>

            {/* Others Side */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Other Development Agencies
                </h3>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <Disclosure key={`them-${index}`}>
                    {({ open }) => (
                      <div className="rounded-lg overflow-hidden">
                        <Disclosure.Button className="flex w-full items-center justify-between text-left p-4 hover:bg-slate-50 transition-colors duration-200">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0">
                              <XMarkIcon className="w-5 h-5 text-red-500" />
                            </div>
                            <span className="text-slate-500 font-medium">
                              {item.them}
                            </span>
                          </div>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-4 w-4 text-slate-500 transition-transform duration-200`}
                          />
                        </Disclosure.Button>
                        
                        <AnimatePresence>
                          {open && (
                            <Disclosure.Panel
                              static
                              as={motion.div}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: "auto", 
                                opacity: 1,
                                transition: {
                                  height: { duration: 0.3 },
                                  opacity: { duration: 0.2, delay: 0.1 }
                                }
                              }}
                              exit={{ 
                                height: 0, 
                                opacity: 0,
                                transition: {
                                  height: { duration: 0.3 },
                                  opacity: { duration: 0.2 }
                                }
                              }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 bg-slate-50 text-sm text-slate-600">
                                Lack deep understanding of your unique operational challenges and provide generic solutions that don't address your specific needs.
                              </div>
                            </Disclosure.Panel>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </Disclosure>
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
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
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