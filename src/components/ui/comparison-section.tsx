"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Logo } from "@/components/Logo";

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
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-violet-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto container-padding relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-gradient-primary"
        >
          Why Choose AdVogue.ai?
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-modern p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 rounded-3xl" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-transparent rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet-100/30 to-transparent rounded-br-3xl" />
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Our Side */}
              <div>
                <div className="mb-8 flex items-center h-[120px] md:h-[140px]">
                  <div className="relative w-[700px] h-full flex items-center">
                    <Image
                      src="/images/advogue ai new logo transparent png.png"
                      alt="advogue.ai logo"
                      fill
                      style={{ 
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                        filter: 'contrast(1.1) brightness(1.1)'
                      }}
                      priority
                      quality={100}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <Disclosure key={`us-${index}`}>
                      {({ open }) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <Disclosure.Button className="flex w-full items-center justify-between text-left p-6 hover:bg-slate-50/50 transition-colors duration-300">
                            <div className="flex items-center gap-4">
                              <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                                <CheckIcon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-slate-900 font-semibold text-lg">
                                {item.us}
                              </span>
                            </div>
                            <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-slate-500 transition-transform duration-300`}
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
                                    height: { duration: 0.4 },
                                    opacity: { duration: 0.3, delay: 0.1 }
                                  }
                                }}
                                exit={{ 
                                  height: 0, 
                                  opacity: 0,
                                  transition: {
                                    height: { duration: 0.4 },
                                    opacity: { duration: 0.3 }
                                  }
                                }}
                                className="overflow-hidden"
                              >
                                <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50/30 text-base text-slate-600 leading-relaxed">
                                  {item.description}
                                </div>
                              </Disclosure.Panel>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>

              {/* Others Side */}
              <div>
                <div className="mb-8 flex items-center h-[120px] md:h-[140px]">
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient-secondary">
                    Other Development Agencies
                  </h3>
                </div>
                <div className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <Disclosure key={`them-${index}`}>
                      {({ open }) => (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <Disclosure.Button className="flex w-full items-center justify-between text-left p-6 hover:bg-slate-50/50 transition-colors duration-300">
                            <div className="flex items-center gap-4">
                              <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                                <XMarkIcon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-slate-500 font-semibold text-lg">
                                {item.them}
                              </span>
                            </div>
                            <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-slate-500 transition-transform duration-300`}
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
                                    height: { duration: 0.4 },
                                    opacity: { duration: 0.3, delay: 0.1 }
                                  }
                                }}
                                exit={{ 
                                  height: 0, 
                                  opacity: 0,
                                  transition: {
                                    height: { duration: 0.4 },
                                    opacity: { duration: 0.3 }
                                  }
                                }}
                                className="overflow-hidden"
                              >
                                <div className="p-6 bg-gradient-to-r from-slate-50 to-red-50/30 text-base text-slate-600 leading-relaxed">
                                  Lack deep understanding of your unique operational challenges and provide generic solutions that don't address your specific needs.
                                </div>
                              </Disclosure.Panel>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary group"
          >
            Book a Call
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 