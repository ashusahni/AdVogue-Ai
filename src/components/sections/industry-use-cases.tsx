"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "insurance",
    icon: "🛡",
    title: "Insurance Agencies",
    description: "AdVogue AI's AI Agent Squad is transforming how insurance agencies operate. From inbound support to outbound sales, our bilingual (English/Spanish) AI voice agents handle everything—saving time, cutting costs, and maximizing your pipeline.",
    keyFunctions: [
      "Instantly answer inbound calls with accurate, human-like responses",
      "Handle FAQs about policies, renewals, claims, and coverage options",
      "Warm-transfer calls to licensed agents when needed",
      "Fully automates initial inquiries and collects all information needed for quoting",
      "Seamlessly integrate with AppliedEpic, EzLynx, or your AMS",
      "Take notes, assign tasks, and update internal tools like Jira, Slack, or custom systems",
      "Automate follow-ups via SMS, email, or outbound voice"
    ]
  },
  {
    id: "realestate",
    icon: "🏡",
    title: "Real Estate Brokerages",
    description: "Never miss a qualified lead again. Our AI voice agents answer listing inquiries 24/7, pre-qualify buyers, and schedule showings in real time by syncing with your calendar.",
    keyFunctions: [
      "Instantly respond to property inquiries (pricing, availability, features)",
      "Pre-qualify leads with voice conversations",
      "Book appointments with calendar sync",
      "Sync call data with your CRM or tools like HighLevel"
    ]
  },
  {
    id: "marketing",
    icon: "📈",
    title: "Marketing Agencies",
    description: "Let your AI assistant handle lead qualification, appointment setting, and routine client communications, so your team can stay focused on performance and creative strategy.",
    keyFunctions: [
      "AI-powered lead qualification to filter high-intent prospects",
      "Client onboarding through smart voice flows",
      "Appointment scheduling via voice, SMS, or email",
      "CRM updates, reminders, and summaries sent directly to your tools",
      "Multilingual support for international clients"
    ]
  },
  {
    id: "design",
    icon: "🎨",
    title: "Design Agencies",
    description: "Don't let your creative momentum be slowed down by repetitive admin work. Our AI voice agents streamline client interactions, qualify leads, and automate routine communications.",
    keyFunctions: [
      "Answer project inquiries and qualify leads",
      "Collect detailed project briefs through dynamic voice flows",
      "Route leads to the right designer or department",
      "Schedule discovery calls with integrated calendar booking"
    ]
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Healthcare Providers",
    description: "Enhance patient experience and reduce front-desk overload with HIPAA-conscious, multilingual AI voice agents.",
    keyFunctions: [
      "Book, confirm, or reschedule appointments automatically",
      "Handle insurance and billing-related inquiries",
      "Post-visit reminders and patient check-ins",
      "Multilingual support for diverse patient bases"
    ]
  }
];

export function IndustryUseCases() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry = industries.find(i => i.id === activeTab);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff,#f9fafb,#ffffff)] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-800">Use Cases by Industry</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-4"
          >
            AI That Dials, Qualifies & Books
          </motion.h2>
        </div>

        {/* Industry Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map((industry) => (
            <motion.button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={cn(
                "relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-500",
                "hover:shadow-lg hover:-translate-y-0.5",
                activeTab === industry.id
                  ? "bg-black text-white shadow-xl"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{industry.icon}</span>
                <span>{industry.title}</span>
              </div>
              {activeTab === industry.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black rounded-2xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeIndustry && (
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50 rounded-[2.5rem] opacity-50" />
                
                <div className="relative">
                  {/* Industry Header */}
                  <div className="flex items-center gap-6 mb-10">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-50/80 backdrop-blur-sm">
                      <span className="text-5xl transform hover:scale-110 transition-transform duration-300">
                        {activeIndustry.icon}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-medium text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      {activeIndustry.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
                    {activeIndustry.description}
                  </p>

                  {/* Key Functions */}
                  <div className="space-y-8">
                    <h4 className="inline-block text-sm font-semibold uppercase tracking-wider text-gray-900 bg-gray-100 px-4 py-1.5 rounded-full">
                      Key Functions
                    </h4>
                    <div className="grid gap-5">
                      {activeIndustry.keyFunctions.map((func, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 group hover:bg-gray-50/80 p-4 rounded-2xl transition-colors duration-300"
                        >
                          <div className="rounded-xl p-2 bg-emerald-50 group-hover:bg-emerald-100 transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-emerald-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed">{func}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-10 py-5 bg-black rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
            <p className="text-white font-medium text-lg">
              Guarantee: Double your pipeline in 90 days—or your money back.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 