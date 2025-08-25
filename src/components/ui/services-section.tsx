"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, ChartBarIcon, ClockIcon, CpuChipIcon, ArrowPathIcon, UserGroupIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
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
        "relative w-full h-full rounded-3xl bg-gradient-to-br from-white to-slate-50/50 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
    className: "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50",
    href: "/services/inbound",
    image: "/images/inbound-calls.jpg",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Outbound Calls",
    description: "Proactive customer engagement, appointment scheduling, and follow-ups with natural conversation flow.",
    icon: PhoneIcon,
    className: "bg-gradient-to-br from-violet-50 to-violet-100/50 border-violet-200/50",
    href: "/services/outbound",
    image: "/images/outbound-calls.jpg",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Custom & Tailored Solutions",
    description: "Get a personalized AI voice agent solution that fits your business needs and industry requirements.",
    icon: ChartBarIcon,
    className: "bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200/50",
    href: "services/customservices",
    image: "/images/custom-solutions.jpg",
    gradient: "from-emerald-500 to-teal-500"
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
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Seamless Integration",
    description: "Easy integration with your existing systems and workflows",
    icon: ArrowPathIcon,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Custom Voice Training",
    description: "Personalized voice agents that match your brand identity",
    icon: UserGroupIcon,
    gradient: "from-orange-500 to-amber-500"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-violet-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-primary mb-8"
          >
            Transform Your Customer Service
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            Experience the future of customer interactions with our AI-powered voice agents.
            Seamless, efficient, and available 24/7.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <EvervaultCard>
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={cn(
                    "absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                    service.gradient
                  )}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-gradient-primary transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </EvervaultCard>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Why Choose Our AI Solutions?
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built with cutting-edge technology and designed for enterprise-grade performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-modern p-8 group"
              >
                <div className={cn(
                  "inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br mb-6 shadow-lg",
                  feature.gradient
                )}>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-gradient-primary transition-all duration-300">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 