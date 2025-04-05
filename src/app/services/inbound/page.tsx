"use client";

import { ServicePageLayout } from "@/components/ui/service-page-layout";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { BiDirectionalScroll } from "@/components/ui/bi-directional-scroll";
import { IndustryUseCases } from "@/components/ui/industry-use-cases";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactForm } from "@/components/ui/contact-form";
import { BookingSection } from "@/components/sections/booking-section";

import {
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Smart Call Routing",
    description: "Automatically direct calls to the right AI agent based on customer needs and query type.",
    icon: PhoneIcon,
  },
  {
    title: "Natural Language Understanding",
    description: "Advanced AI that understands context, intent, and customer sentiment in real-time.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service without any downtime, holidays, or wait times.",
    icon: ClockIcon,
  },
  {
    title: "Real-time Analytics",
    description: "Monitor call performance, customer satisfaction, and key metrics in real-time.",
    icon: ChartBarIcon,
  },
  {
    title: "Multi-language Support",
    description: "Handle customer calls in multiple languages with native-level understanding.",
    icon: UserGroupIcon,
  },
  {
    title: "Custom Integration",
    description: "Seamlessly integrate with your existing CRM and business systems.",
    icon: CogIcon,
  },
];

const benefits = [
  {
    title: "24/7 Intelligent Response",
    description: "Never miss a call with AI agents that handle inquiries around the clock, providing instant, accurate responses.",
    icon: PhoneIcon,
    highlight: "100% call answer rate"
  },
  {
    title: "Smart Call Routing",
    description: "AI intelligently routes calls to the right department or agent based on context and urgency.",
    icon: UserGroupIcon,
    highlight: "Reduces transfer time by 80%"
  },
  {
    title: "Multilingual Support",
    description: "Handle calls in multiple languages with natural-sounding AI that understands context and nuance.",
    icon: ChatBubbleBottomCenterTextIcon,
    highlight: "Support for 10+ languages"
  },
  {
    title: "Automated Resolution",
    description: "Resolve common inquiries automatically while seamlessly escalating complex issues to human agents.",
    icon: CogIcon,
    highlight: "70% automated resolution rate"
  }
];

const inboundUseCases = [
  {
    industry: "Healthcare",
    description: "Transform patient support and appointment scheduling with AI-powered voice agents.",
    benefits: [
      "24/7 appointment scheduling and reminders",
      "Patient inquiry handling and triage",
      "Insurance verification automation",
      "Post-care follow-up calls"
    ]
  },
  {
    industry: "E-commerce & Retail",
    description: "Enhance customer service and support for online and retail businesses.",
    benefits: [
      "Order status tracking and updates",
      "Return and exchange processing",
      "Product information and availability",
      "Shopping assistance and recommendations"
    ]
  },
  {
    industry: "Financial Services",
    description: "Provide secure and efficient banking and financial support services.",
    benefits: [
      "Account balance and transaction inquiries",
      "Fraud alert verification",
      "Bill payment assistance",
      "Investment product information"
    ]
  },
  {
    industry: "Travel & Hospitality",
    description: "Streamline booking and customer service for travel-related businesses.",
    benefits: [
      "Reservation management and modifications",
      "Travel itinerary assistance",
      "Loyalty program support",
      "Emergency travel support"
    ]
  },
  {
    industry: "Technology",
    description: "Deliver technical support and product assistance efficiently.",
    benefits: [
      "Technical troubleshooting",
      "Product setup assistance",
      "Software and hardware support",
      "Service outage updates"
    ]
  },
  {
    industry: "Insurance",
    description: "Handle claims and policy inquiries with automated efficiency.",
    benefits: [
      "Claims status updates",
      "Policy information requests",
      "Coverage verification",
      "Premium payment processing"
    ]
  }
];

export default function InboundPage() {
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
              <span className="text-base font-medium tracking-wide text-gray-600 uppercase">
                Inbound Call Solutions
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]"
          >
            Transform Your
            <br />
            <span className="relative">
              Customer Service
              <div className="absolute inset-0 bg-black/10 -skew-x-6 transform -z-10 translate-y-4"></div>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Handle incoming calls with AI-powered voice agents that understand context,
            respond naturally, and deliver exceptional customer experiences 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 text-lg font-semibold rounded-full bg-black hover:bg-black/90 text-white inline-flex items-center gap-3 shadow-lg shadow-black/20 transition-all duration-200 hover:scale-[1.02]"
            >
              <PhoneIcon className="w-5 h-5" />
              Book a call
            </button>
          </motion.div>
        </div>
        <Spotlight className="hidden md:block opacity-50" />
      </section>

      <BiDirectionalScroll />
      <IndustryUseCases useCases={inboundUseCases} variant="inbound" />
      <BenefitsSection benefits={benefits} variant="inbound" />
      <BookingSection />
      <ContactForm />
    </>
  );
} 