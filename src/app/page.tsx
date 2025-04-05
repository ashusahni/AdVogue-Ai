"use client";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { ComparisonSection } from "@/components/ui/comparison-section";
import { BiDirectionalScroll } from "@/components/ui/bi-directional-scroll";
import { TrustedBrands } from "@/components/sections/trusted-brands";
import { ScheduleDemo } from "@/components/sections/schedule-demo";
import { BookingSection } from "@/components/sections/booking-section";

const pricingPlans = [
  {
    name: "Inbound Voice Agent",
    description: "Perfect for handling incoming customer calls",
    price: "$499",
    type: "/month",
    features: [
      "24/7 Call Handling",
      "Custom Voice Training",
      "Natural Language Processing",
      "Real-time Analytics",
      "CRM Integration",
      "Priority Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Outbound Voice Agent",
    description: "Ideal for proactive customer engagement",
    price: "$699",
    type: "/month",
    features: [
      "Automated Outreach",
      "Custom Voice Training",
      "Campaign Management",
      "Performance Analytics",
      "CRM Integration",
      "Priority Support",
    ],
    cta: "Get Started",
  },
];

const faqItems = [
  {
    question: "What types of calls can your AI agents handle?",
    answer:
      "Our AI voice agents can handle a wide range of calls including customer service inquiries, appointment scheduling, order tracking, and basic troubleshooting. They're designed to manage both inbound and outbound calls efficiently.",
  },
  {
    question: "How accurate is the voice recognition?",
    answer:
      "Our AI utilizes state-of-the-art natural language processing, achieving over 95% accuracy in voice recognition across various accents and languages. The system continuously learns and improves from interactions.",
  },
  {
    question: "Can the AI agents be customized for my business?",
    answer:
      "Yes, our AI agents are fully customizable to match your brand voice, business processes, and specific industry requirements. We work closely with you to ensure the AI represents your company accurately.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Currently, our AI agents support multiple languages including English, Spanish, French, and German. We're continuously adding support for more languages based on client needs.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We implement enterprise-grade security measures including end-to-end encryption, secure data storage, and compliance with GDPR, HIPAA, and other relevant regulations to protect all call data and customer information.",
  },
];

const tickerWords = ["Innovative", "Creative", "Dynamic", "Efficient"];

const ScrollingTicker = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ 
            x: [0, -1000] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {Array(4).fill(tickerWords).flat().map((word, index) => (
            <span 
              key={index} 
              className="inline-block px-8 text-2xl sm:text-3xl font-semibold text-slate-600/80"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <main className="flex min-h-screen flex-col items-center w-full">
        <HeroSection />
        <BiDirectionalScroll />
        <ComparisonSection />
        <ServicesSection />
        <TrustedBrands />
        <ScrollingTicker />
        {/* <PricingSection plans={pricingPlans} />
        <FAQSection items={faqItems} /> */}
        <BookingSection />
        <ContactForm />
      </main>
    </div>
  );
}
