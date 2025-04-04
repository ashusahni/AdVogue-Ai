"use client";

import { motion } from "framer-motion";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const comparisonData = [
  {
    us: "Experienced AI Voice Developers",
    them: "Junior Developers",
    description: "Our team consists of senior developers with 5+ years of experience in AI and voice technology, ensuring robust and scalable solutions for your business."
  },
  {
    us: "Innovative Development Practices",
    them: "Outdated Technologies & Approaches",
    description: "We employ cutting-edge development methodologies and stay current with the latest AI advancements to deliver modern, efficient solutions."
  },
  {
    us: "Complete Custom Development",
    them: "Generic / Copy & Paste Solutions",
    description: "Every solution is built from the ground up to match your specific requirements, ensuring perfect alignment with your business needs."
  },
  {
    us: "Client-Centric Approach",
    them: "Agency-Centric Approach",
    description: "Your success is our priority. We adapt our processes and solutions to match your business goals and user needs."
  },
  {
    us: "Rigorous Testing and Validation",
    them: "Limited Testing or Inadequate Quality Control",
    description: "Comprehensive testing protocols ensure reliable, high-quality voice solutions that perform consistently in real-world scenarios."
  },
  {
    us: "Partners With Leading AI Voice Platforms",
    them: "No Access To Platforms, No Support",
    description: "Direct partnerships with major AI platforms give us priority access to the latest features and dedicated support channels."
  }
];

export function ComparisonSection() {
  return (
    <section className="py-20 px-4 bg-[#faf9f7]">
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
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <Disclosure key={`us-${index}`}>
                    {({ open }) => (
                      <div className="rounded-lg overflow-hidden">
                        <Disclosure.Button className="flex w-full items-center justify-between text-left">
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
                            } h-4 w-4 text-slate-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-9 py-3 bg-slate-50 text-sm text-slate-600">
                          {item.description}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>

            {/* Others Side */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-400">
                  Other Development Agencies
                </h3>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <Disclosure key={`them-${index}`}>
                    {({ open }) => (
                      <div className="rounded-lg overflow-hidden">
                        <Disclosure.Button className="flex w-full items-center justify-between text-left">
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
                            } h-4 w-4 text-slate-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-9 py-3 bg-slate-50 text-sm text-slate-600">
                          Why this is a limitation: This approach often leads to suboptimal solutions, longer development times, and higher costs in the long run.
                        </Disclosure.Panel>
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