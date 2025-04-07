"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, ChartBarIcon, ClockIcon, CpuChipIcon, ArrowPathIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import Image from "next/image";

const EvervaultCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMouseX(x);
    setMouseY(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={cn(
        "relative w-full h-full rounded-2xl bg-white shadow-lg overflow-hidden group",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          maskImage: isHovered
            ? `radial-gradient(${mouseX}px ${mouseY}px at ${mouseX}px ${mouseY}px, white, transparent)`
            : "",
          WebkitMaskImage: isHovered
            ? `radial-gradient(${mouseX}px ${mouseY}px at ${mouseX}px ${mouseY}px, white, transparent)`
            : "",
        }}
      />
      <motion.div
        className="relative h-full"
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${(mouseY - 300) / 20}deg) rotateY(${(mouseX - 200) / 20}deg) scale3d(1.02, 1.02, 1.02)`
            : "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

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
    icon: CpuChipIcon,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service without any downtime or delays",
    icon: ClockIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Seamless Integration",
    description: "Easy integration with your existing systems and workflows",
    icon: ArrowPathIcon,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Custom Voice Training",
    description: "Personalized voice agents that match your brand identity",
    icon: UserGroupIcon,
    gradient: "from-orange-500 to-yellow-500"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 bg-[#faf9f7]">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Transform Your Customer Service
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Experience the future of customer interactions with our AI-powered voice agents.
            Seamless, efficient, and available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EvervaultCard>
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative z-10"
                  >
                    <service.icon className="w-10 h-10 text-gray-800 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 relative z-10">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="block w-full py-3 px-4 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 relative z-10"
                  >
                    Learn More
                  </a>
                </div>
              </EvervaultCard>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-32">
          <div className="flex justify-center mb-12">
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              get started today
            </button> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={cn(
                  "inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br mb-6",
                  feature.gradient
                )}>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
} 