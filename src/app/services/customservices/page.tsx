"use client";

import { ServicePageLayout } from "@/components/ui/service-page-layout";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { BiDirectionalScroll } from "@/components/ui/bi-directional-scroll";
import { IndustryUseCases } from "@/components/ui/industry-use-cases";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactForm } from "@/components/ui/contact-form";

import {
  PhoneIcon,
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { BookingSection } from "@/components/sections/booking-section";

const features = [
  {
    title: "Custom AI Call Campaigns",
    description: "We design AI-driven outbound calling solutions tailored to your business needs.",
    icon: PhoneIcon,
  },
  {
    title: "Adaptive Scheduling",
    description: "AI-optimized call scheduling based on your customer's behavior and preferences.",
    icon: CalendarIcon,
  },
  {
    title: "Conversational AI Customization",
    description: "Create natural, human-like interactions with AI fine-tuned to your industry.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "Data-Driven Performance Optimization",
    description: "Get insights on engagement and conversion rates with real-time analytics.",
    icon: ChartBarIcon,
  },
  {
    title: "Personalized Customer Engagement",
    description: "Integrate customer data to ensure every interaction feels personal and relevant.",
    icon: UserGroupIcon,
  },
  {
    title: "Workflow Automation & Integration",
    description: "Seamlessly integrate AI calls into your CRM, appointment scheduling, and follow-ups.",
    icon: CogIcon,
  },
];

const benefits = [
  {
    title: "Enterprise-Grade AI Voice",
    description: "Custom-trained AI models that understand your industry's terminology and context, delivering human-like conversations with 99% accuracy.",
    icon: CogIcon,
    highlight: "Powered by advanced language models and neural networks"
  },
  {
    title: "Seamless Integration",
    description: "Connect with any CRM, scheduling system, or business tool. Our AI adapts to your workflow, not the other way around.",
    icon: UserGroupIcon,
    highlight: "Works with Salesforce, HubSpot, Zoho, and more"
  },
  {
    title: "Industry-Specific Compliance",
    description: "Built-in compliance with HIPAA, GDPR, CCPA, and other regulations. Stay compliant while scaling your operations.",
    icon: ChartBarIcon,
    highlight: "100% compliance with industry regulations"
  },
  {
    title: "Real-Time Analytics",
    description: "Get actionable insights from every conversation. Track performance, identify trends, and optimize your AI's effectiveness.",
    icon: ChartBarIcon,
    highlight: "Advanced analytics dashboard included"
  }
];

const customUseCases = [
  {
    industry: "Manufacturing",
    description: "Custom AI voice solutions for supply chain and production management.",
    benefits: [
      "Supplier communication automation",
      "Inventory management alerts",
      "Quality control reporting",
      "Production schedule coordination"
    ]
  },
  {
    industry: "Legal Services",
    description: "Specialized voice AI for law firms and legal service providers.",
    benefits: [
      "Client intake automation",
      "Case status updates",
      "Document filing notifications",
      "Court date reminders"
    ]
  },
  {
    industry: "Government & Public Sector",
    description: "Tailored solutions for public service and citizen engagement.",
    benefits: [
      "Citizen service automation",
      "Public announcement systems",
      "Emergency notification services",
      "Department-specific workflows"
    ]
  },
  {
    industry: "Non-Profit Organizations",
    description: "Custom voice solutions for donor and volunteer management.",
    benefits: [
      "Donation campaign automation",
      "Volunteer coordination",
      "Event organization",
      "Impact reporting calls"
    ]
  },
  {
    industry: "Research & Development",
    description: "Specialized AI voice systems for research institutions.",
    benefits: [
      "Study participant communication",
      "Data collection automation",
      "Research update notifications",
      "Participant follow-up calls"
    ]
  },
  {
    industry: "Energy & Utilities",
    description: "Custom solutions for utility service providers.",
    benefits: [
      "Service interruption notifications",
      "Usage monitoring alerts",
      "Maintenance scheduling",
      "Emergency response coordination"
    ]
  }
];

export default function CustomServicesPage() {
  return (
    <>
      <section className="min-h-[60vh] flex items-center justify-center pt-24 pb-20 px-4 w-full overflow-hidden bg-[#faf9f7] relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-2 text-base mb-6">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <span className="descriptive-text">
                Custom AI Solutions
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900"
          >
            Tailored Voice AI
            <br />
            <span className="relative">
              For Your Business
              <div className="absolute inset-0 bg-black/10 -skew-x-6 transform -z-10 translate-y-4"></div>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="descriptive-text max-w-3xl mx-auto"
          >
            Get a custom AI voice solution designed specifically for your industry,
            with personalized features, compliance, and seamless integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 text-lg font-medium rounded-full bg-black hover:bg-black/90 text-white inline-flex items-center gap-3 shadow-lg shadow-black/20"
            >
              <PhoneIcon className="w-5 h-5" />
              Book a call
            </button>
          </motion.div>
        </div>
        <Spotlight className="hidden md:block opacity-50" />
      </section>

      <BiDirectionalScroll />
      <IndustryUseCases useCases={customUseCases} variant="custom" />
      <BenefitsSection benefits={benefits} variant="custom" />
      <BookingSection />
      <ContactForm />
    </>
  );
}
