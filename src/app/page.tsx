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
import { CalendlyWidget } from "@/components/ui/calendly-widget";

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
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex space-x-10 text-3px sm:text-4xl font-semibold text-slate-600 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...tickerWords, ...tickerWords].map((word, index) => (
          <span key={index} className="px-6">
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* <ScrollingTicker /> */}
      <HeroSection />
      <BiDirectionalScroll />
      <ComparisonSection />
      <ServicesSection />
      <FAQSection items={faqItems} />
      <ContactForm />
    </>
  );
}
