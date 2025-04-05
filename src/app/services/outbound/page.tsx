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
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Intelligent Campaign Management",
    description: "Design and execute targeted outbound call campaigns with AI-driven optimization.",
    icon: PhoneIcon,
  },
  {
    title: "Smart Scheduling",
    description: "Automatically schedule calls at the most optimal times for each customer.",
    icon: CalendarIcon,
  },
  {
    title: "Natural Conversations",
    description: "Engage customers with human-like dialogue and contextual understanding.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "Performance Analytics",
    description: "Track campaign success, conversion rates, and customer engagement metrics.",
    icon: ChartBarIcon,
  },
  {
    title: "Personalized Interactions",
    description: "Tailor conversations based on customer history and preferences.",
    icon: UserGroupIcon,
  },
  {
    title: "Workflow Automation",
    description: "Automate follow-ups, appointment scheduling, and data entry tasks.",
    icon: CogIcon,
  },
];

const benefits = [
  {
    title: "AI-Powered Outreach",
    description: "Our AI voice agents make thousands of calls simultaneously, intelligently adapting conversations based on responses.",
    icon: PhoneIcon,
    highlight: "Up to 10,000 concurrent calls"
  },
  {
    title: "Smart Lead Qualification",
    description: "AI automatically qualifies leads using your criteria, ensuring your team only speaks with the most promising prospects.",
    icon: UserGroupIcon,
    highlight: "Increase qualified leads by 300%"
  },
  {
    title: "Dynamic Scheduling",
    description: "Seamlessly book meetings with qualified leads directly into your calendar, with smart availability management.",
    icon: CalendarIcon,
    highlight: "Automated calendar integration"
  },
  {
    title: "Performance Analytics",
    description: "Get detailed insights into call performance, conversion rates, and ROI with our advanced analytics dashboard.",
    icon: ChartBarIcon,
    highlight: "Real-time performance tracking"
  }
];

const outboundUseCases = [
  {
    industry: "Real Estate",
    description: "Automate property viewings and follow-ups with potential buyers and sellers.",
    benefits: [
      "Automated property showing scheduling",
      "Lead qualification and nurturing",
      "Market updates to property owners",
      "Post-viewing feedback collection"
    ]
  },
  {
    industry: "Healthcare",
    description: "Proactive patient engagement and preventive care management.",
    benefits: [
      "Appointment reminders and confirmations",
      "Preventive care outreach",
      "Medication adherence follow-ups",
      "Health screening campaigns"
    ]
  },
  {
    industry: "Financial Services",
    description: "Enhance client relationships and portfolio management communication.",
    benefits: [
      "Investment opportunity notifications",
      "Portfolio review scheduling",
      "Market update delivery",
      "Payment reminder calls"
    ]
  },
  {
    industry: "Education",
    description: "Improve student engagement and administrative communication.",
    benefits: [
      "Enrollment follow-ups",
      "Event and deadline reminders",
      "Attendance notification calls",
      "Parent-teacher meeting scheduling"
    ]
  },
  {
    industry: "Telecommunications",
    description: "Streamline customer engagement and service upgrades.",
    benefits: [
      "Service upgrade opportunities",
      "Customer satisfaction surveys",
      "Plan renewal reminders",
      "Network maintenance notifications"
    ]
  },
  {
    industry: "Automotive",
    description: "Enhance customer service and maintenance scheduling.",
    benefits: [
      "Service appointment scheduling",
      "Maintenance reminder calls",
      "Vehicle delivery updates",
      "Customer satisfaction follow-ups"
    ]
  }
];

export default function OutboundPage() {
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
                Outbound Call Solutions
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]"
          >
            Proactive
            <br />
            <span className="relative">
              Customer Engagement
              <div className="absolute inset-0 bg-black/10 -skew-x-6 transform -z-10 translate-y-4"></div>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Drive results with AI-powered outbound calls that engage customers,
            schedule appointments, and boost conversions with natural conversations.
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
      <IndustryUseCases useCases={outboundUseCases} variant="outbound" />
      <BenefitsSection benefits={benefits} variant="outbound" />

      <BookingSection />
      <ContactForm />
    </>
  );
} 