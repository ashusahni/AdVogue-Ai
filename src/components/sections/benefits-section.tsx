"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Benefit {
  title: string;
  description: string;
  icon: any;
  highlight?: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
  variant?: 'custom' | 'outbound' | 'inbound';
}

const variants = {
  custom: {
    accent: "from-violet-500 to-purple-500",
    highlight: "bg-violet-50",
    border: "border-violet-100",
    icon: "bg-violet-50 text-violet-500",
  },
  outbound: {
    accent: "from-blue-500 to-cyan-500",
    highlight: "bg-blue-50",
    border: "border-blue-100",
    icon: "bg-blue-50 text-blue-500",
  },
  inbound: {
    accent: "from-emerald-500 to-teal-500",
    highlight: "bg-emerald-50",
    border: "border-emerald-100",
    icon: "bg-emerald-50 text-emerald-500",
  },
};

export function BenefitsSection({ benefits, variant = 'custom' }: BenefitsSectionProps) {
  const style = variants[variant];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-50/50 to-violet-50/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-50/50 to-blue-50/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-1.5 mb-6"
          >
            <span className={cn("w-2 h-2 rounded-full bg-gradient-to-r", style.accent)} />
            <span className="text-sm font-medium text-gray-800">Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-8"
          >
            Benefits that Drive{" "}
            <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", style.accent)}>
              Real Results
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative group p-8 rounded-3xl border bg-white/50 backdrop-blur-sm",
                style.border,
                "hover:shadow-xl transition-all duration-300"
              )}
            >
              <div className="relative z-10">
                <div className={cn("p-3 rounded-2xl inline-block mb-6", style.icon)}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                {benefit.highlight && (
                  <div className={cn("mt-6 p-4 rounded-xl text-sm", style.highlight)}>
                    {benefit.highlight}
                  </div>
                )}
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-white/80 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className={cn(
                "px-8 py-4 rounded-2xl text-white font-medium",
                "bg-gradient-to-r shadow-lg",
                style.accent,
                "hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              )}
            >
              Start Seeing Results Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 