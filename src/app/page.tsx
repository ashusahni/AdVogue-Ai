"use client";

import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { FAQSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";
import Script from 'next/script';
import { CalendlySection } from "@/components/ui/calendly-section";


const navigationItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "#services" },
  { name: "Pricing", link: "#pricing" },
  { name: "FAQ", link: "#faq" },
  { name: "Book a Call", link: "#contact", isButton: true },
];

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
    question: "What are AI Voice Agents?",
    answer: "AI Voice Agents are advanced computer programs that use artificial intelligence to handle phone conversations naturally. They can understand context, respond appropriately, and handle complex interactions just like a human would.",
  },
  {
    question: "How accurate are the voice interactions?",
    answer: "Our AI Voice Agents achieve over 95% accuracy in understanding and responding to customer queries. They're trained on extensive datasets and continuously learn from interactions to improve their performance.",
  },
  {
    question: "Can I customize the voice and responses?",
    answer: "Yes! You can customize both the voice and responses of your AI Voice Agent. We offer voice training to match your brand's tone and personality, and you can define custom responses for specific scenarios.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including setup assistance, training, ongoing maintenance, and 24/7 technical support. Our team is always available to help you get the most out of your AI Voice Agent.",
  },
];

const CalendlyWidget: React.FC = () => {
  return (
    <>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/techy833" 
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        async
      />
    </>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <FloatingNavbar items={navigationItems} />
      <HeroSection />
      <ServicesSection />
      <CalendlySection />
      <PricingSection plans={pricingPlans} />
      
      <FAQSection items={faqItems} />

      <Footer />
    </main>
  );
}
