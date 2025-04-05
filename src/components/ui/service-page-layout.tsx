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

      {/* Hero Section - Only render if title and description are provided */}
      {title && description && (
        <section className="min-h-screen relative flex items-center justify-center py-32 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.1),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="container relative px-4 mx-auto"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                variants={textVariants}
                custom={0}
                className={cn(gradientText, "from-teal-500 to-emerald-500 font-medium mb-4")}
              >
                Helping businesses implement Voice AI
              </motion.p>
              
              <div className="flex flex-wrap justify-center gap-x-4 mb-6">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={textVariants}
                    custom={i + 1}
                    className={cn(
                      "text-6xl md:text-8xl font-bold",
                      i === 0 ? cn(gradientText, "from-teal-500 to-emerald-500") :
                      i === 1 ? cn(gradientText, "from-blue-500 to-blue-600") :
                      "text-slate-900"
                    )}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <motion.p
                variants={textVariants}
                custom={words.length + 1}
                className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
              >
                {description}
              </motion.p>

              <motion.div
                variants={textVariants}
                custom={words.length + 2}
                className="flex gap-4 justify-center"
              >
                <Button
                  onClick={scrollToBooking}
                  className={cn(
                    "px-8 py-4 rounded-full text-white text-lg font-medium",
                    "bg-black hover:bg-black/90 transition-opacity",
                    "shadow-lg shadow-black/20"
                  )}
                >
                  Book A Call
                </Button>
                <Button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 rounded-full text-slate-700 text-lg font-medium bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Our Services
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-32 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container px-4 mx-auto"
        >
          <motion.h2
            variants={textVariants}
            custom={0}
            className={cn(
              "text-4xl font-bold text-center mb-16",
              gradientText,
              "from-teal-500 to-emerald-500"
            )}
          >
            Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits?.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={textVariants}
                custom={index + 1}
                className="flex gap-6 p-8 rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 hover:border-teal-500/50 transition-colors"
              >
                {benefit.icon && <benefit.icon className="w-6 h-6 text-teal-500" />}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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