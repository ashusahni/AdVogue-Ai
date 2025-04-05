"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContactForm } from "./contact-form";

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export interface ServicePageProps {
  title?: string;
  description?: string;
  benefits?: ServiceFeature[];
  className?: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const gradientText = "bg-clip-text text-transparent bg-gradient-to-r";

export function ServicePageLayout({
  title,
  description,
  benefits,
  className,
}: ServicePageProps) {
  const router = useRouter();
  
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };

  const words = title?.split(" ") || [];

  return (
    <div className="bg-[#faf9f7]">
      {/* Logo Section */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            onClick={handleHomeClick}
            className="hover:opacity-80 transition-all duration-300 hover:scale-105 inline-block cursor-pointer"
          >
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter inline-flex items-baseline justify-center w-full">
              <span className="text-black">advogue</span>
              <span className="text-black font-bold">.</span>
              <span className="text-black ml-0.5 font-bold text-[0.85em] tracking-normal relative -top-0.5">AI</span>
            </h1>
          </button>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden">
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
                AI Voice Solutions
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="descriptive-text max-w-3xl mx-auto mb-12 hidden md:block" // Hide on mobile
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 text-lg font-medium rounded-full bg-black hover:bg-black/90 text-white inline-flex items-center gap-3 shadow-lg shadow-black/20"
            >
              Book a Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {benefits?.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={textVariants}
                custom={index}
                className="relative p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                {benefit.icon && (
                  <benefit.icon className="w-8 h-8 text-gray-900 mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container px-4 mx-auto text-center"
        >
          <motion.h2
            variants={textVariants}
            custom={0}
            className={cn(
              "text-3xl font-bold mb-6",
              gradientText,
              "from-teal-500 to-emerald-500"
            )}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            variants={textVariants}
            custom={1}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Schedule a demo to see how our AI voice solutions can transform your business.
          </motion.p>
          <motion.div variants={textVariants} custom={2}>
            <Button
              onClick={scrollToBooking}
              className={cn(
                "px-6 py-3 rounded-full text-white text-base font-medium",
                "bg-black hover:bg-black/90 transition-opacity",
                "shadow-lg shadow-black/20"
              )}
            >
              Book Your Demo Now
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
} 