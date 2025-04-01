"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./background-gradient";
import { HoverEffect } from "./card-hover-effect";
import { PhoneIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";
import { BookingDialog } from "./booking-dialog";

const services = [
  {
    title: "Inbound Calls",
    description: "Handle customer inquiries, support tickets, and general assistance with our advanced AI voice agents.",
    icon: PhoneIcon,
    link: "#",
    className: "bg-gradient-to-br from-teal-500 to-emerald-500",
  },
  {
    title: "Outbound Calls",
    description: "Proactive customer engagement, appointment scheduling, and follow-ups with natural conversation flow.",
    icon: PhoneIcon,
    link: "#",
    className: "bg-gradient-to-br from-purple-500 to-indigo-500",
  },
  {
    title: "Analytics & Insights",
    description: "Comprehensive reporting and analytics to track performance, customer satisfaction, and key metrics.",
    icon: ChartBarIcon,
    link: "#",
    className: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
];

const features = [
  {
    title: "Advanced AI Technology",
    description: "Powered by state-of-the-art language models for natural conversations",
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service without any downtime or delays",
  },
  {
    title: "Seamless Integration",
    description: "Easy integration with your existing systems and workflows",
  },
  {
    title: "Custom Voice Training",
    description: "Personalized voice agents that match your brand identity",
  },
];

export const ServicesSection: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto"
      >
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Transform Your Customer Service
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Experience the future of customer interactions with our AI-powered voice agents.
            Seamless, efficient, and available 24/7.
          </p>
          <Button
            onClick={() => setIsBookingOpen(true)}
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full"
          >
            Book a Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BackgroundGradient className="p-8 h-full">
                <service.icon className="w-10 h-10 text-white mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-400 mb-6">{service.description}</p>
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Learn More
                </Button>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <HoverEffect items={features} />
        </div>
      </motion.div>

      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}; 