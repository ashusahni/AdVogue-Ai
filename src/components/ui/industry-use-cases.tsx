"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShieldCheckIcon, GlobeAltIcon, ClockIcon, ChartBarIcon } from "@heroicons/react/24/outline";

interface IndustryUseCase {
  industry: string;
  description: string;
  benefits: string[];
}

interface IndustryUseCasesProps {
  useCases: IndustryUseCase[];
  className?: string;
  variant?: 'custom' | 'outbound' | 'inbound';
}

const variants = {
  custom: {
    accent: "from-violet-500 to-purple-500",
    highlight: "bg-violet-50",
    border: "border-violet-100",
    icon: "bg-violet-50 text-violet-500",
    bullet: "text-violet-500",
    card: "hover:border-violet-200",
    blur: "from-violet-100/40 to-purple-100/40"
  },
  outbound: {
    accent: "from-blue-500 to-cyan-500",
    highlight: "bg-blue-50",
    border: "border-blue-100",
    icon: "bg-blue-50 text-blue-500",
    bullet: "text-blue-500",
    card: "hover:border-blue-200",
    blur: "from-blue-100/40 to-cyan-100/40"
  },
  inbound: {
    accent: "from-emerald-500 to-teal-500",
    highlight: "bg-emerald-50",
    border: "border-emerald-100",
    icon: "bg-emerald-50 text-emerald-500",
    bullet: "text-emerald-500",
    card: "hover:border-emerald-200",
    blur: "from-emerald-100/40 to-teal-100/40"
  },
};

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Bilingual Support",
    description: "English/Spanish AI voice agents for broader market reach"
  },
  {
    icon: GlobeAltIcon,
    title: "24/7 Operations",
    description: "Round-the-clock service handling both inbound and outbound calls"
  },
  {
    icon: ClockIcon,
    title: "Time Efficiency",
    description: "Automated processes saving valuable agent time"
  },
  {
    icon: ChartBarIcon,
    title: "Pipeline Growth",
    description: "Maximized lead conversion and customer engagement"
  }
];

const keyFunctions = [
  {
    title: "Smart Call Handling",
    description: "Instantly answer inbound calls with accurate, human-like responses."
  },
  {
    title: "Policy Support",
    description: "Handle FAQs about policies, renewals, claims, and coverage options."
  },
  {
    title: "Intelligent Transfer",
    description: "Warm-transfer calls to licensed agents when needed."
  },
  {
    title: "Automated Inquiries",
    description: "Fully automates initial inquiries and collects all information needed for quoting, so your producers can focus on closing, not chasing."
  },
  {
    title: "AMS Integration",
    description: "Seamlessly integrate with AppliedEpic, EzLynx, or your AMS."
  },
  {
    title: "Task Management",
    description: "Take notes, assign tasks, and update internal tools like Jira, Slack, or custom systems."
  },
  {
    title: "Follow-up Automation",
    description: "Automate follow-ups via SMS, email, or outbound voice."
  }
];

export function IndustryUseCases({ useCases, className, variant = 'custom' }: IndustryUseCasesProps) {
  const style = variants[variant];

  return (
    <section className={cn("py-24 relative overflow-hidden bg-[#faf9f7]", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={cn("absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r rounded-full blur-3xl opacity-50", style.blur)} />
        <div className={cn("absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r rounded-full blur-3xl opacity-50", style.blur)} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-1.5 mb-6"
          >
            <span className={cn("w-2 h-2 rounded-full bg-gradient-to-r", style.accent)} />
            <span className="text-sm font-medium text-gray-800">Industry Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-8"
          >
            Use Cases by{" "}
            <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", style.accent)}>
              Industry
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Discover how our AI voice solutions transform operations across different industries
          </motion.p>
        </div>

        {/* Featured Industry - Insurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "mb-16 p-8 md:p-12 rounded-3xl border bg-white/50 backdrop-blur-sm",
            style.border,
            "hover:shadow-xl transition-all duration-300"
          )}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className={cn("p-3 rounded-2xl", style.highlight)}>
                <ShieldCheckIcon className={cn("w-8 h-8", style.bullet)} />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">Insurance Agencies</h3>
            </div>
            
            <p className="text-gray-600 text-xl leading-relaxed mb-12">
              AdVogue AI's AI Agent Squad is transforming how insurance agencies operate. From inbound support to outbound sales, 
              our bilingual (English/Spanish) AI voice agents handle everything—saving time, cutting costs, and maximizing your pipeline.
            </p>

            {/* Core Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className={cn("p-3 rounded-xl mb-4", style.highlight)}>
                    <feature.icon className={cn("w-6 h-6", style.bullet)} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Key Functions Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <div className={cn("w-1 h-8 rounded-full bg-gradient-to-b", style.accent)} />
                <h4 className="text-2xl font-semibold text-gray-900">Key Functions</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyFunctions.map((func, idx) => (
                  <motion.div
                    key={func.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "group p-6 rounded-2xl",
                      style.highlight,
                      "hover:scale-[1.02] transition-transform duration-300"
                    )}
                  >
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">{func.title}</h5>
                    <p className="text-gray-600 leading-relaxed">{func.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Guarantee Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <div className={cn(
                  "inline-block px-8 py-4 rounded-2xl bg-black text-white",
                  "transform hover:-translate-y-1 transition-transform duration-300"
                )}>
                  <p className="font-medium">
                    Guarantee: Double your pipeline in 90 days—or your money back.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Other Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group p-8 rounded-3xl border bg-white/50 backdrop-blur-sm",
                style.border,
                style.card,
                "hover:shadow-xl transition-all duration-300"
              )}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {useCase.industry}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full", style.bullet)} />
                      <span className="text-gray-600 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-white/80 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 