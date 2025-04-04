"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./background-gradient";
import { HoverEffect } from "./card-hover-effect";
import { PhoneIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Inbound Calls",
    description: "Handle customer inquiries, support tickets, and general assistance with our advanced AI voice agents.",
    icon: PhoneIcon,
    className: "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-200",
    href: "/services/inbound",
    image: "/images/inbound-calls.jpg",
  },
  {
    title: "Outbound Calls",
    description: "Proactive customer engagement, appointment scheduling, and follow-ups with natural conversation flow.",
    icon: PhoneIcon,
    className: "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-200",
    href: "/services/outbound",
    image: "/images/outbound-calls.jpg",
  },
  {
    title: "Custom & Tailored Solutions",
    description: "Get a personalized AI voice agent solution that fits your business needs and industry requirements.",
    icon: ChartBarIcon,
    className: "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-200",
    href: "services/customservices",
    image: "/images/custom-solutions.jpg",
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

export function ServicesSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative w-full py-20 overflow-hidden bg-[#faf9f7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.1),rgba(255,255,255,0))]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto"
      >
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Transform Your Customer Service
          </h2>
          <p className="text-base md:text-lg text-slate-600 mb-8">
            Experience the future of customer interactions with our AI-powered voice agents.
            Seamless, efficient, and available 24/7.
          </p>
          <Button
            onClick={scrollToBooking}
            className="bg-black hover:bg-black/90 text-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-full shadow-lg shadow-black/20"
          >
            Book a Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full">
                <CardContainer containerClassName="py-6 md:py-10">
                  <CardBody className={cn("relative h-auto w-full border rounded-card p-4 md:p-6 bg-white shadow-lg hover:shadow-xl transition-shadow", service.className)}>
                    <CardItem translateZ="50" className="w-full">
                      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-card">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                      <service.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-800 mb-4 md:mb-6" />
                    </CardItem>
                    <CardItem translateZ="60" className="w-full">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                        {service.title}
                      </h3>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="80"
                      className="text-sm md:text-base text-gray-600 mb-6 md:mb-8"
                    >
                      {service.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full">
                      <span className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors text-center py-2 px-4 rounded-button text-sm md:text-base">
                        Learn More
                      </span>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              onClick={scrollToBooking}
              className="bg-black hover:bg-black/90 text-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-full shadow-lg shadow-black/20"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 