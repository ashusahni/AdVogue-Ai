"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  ShieldCheckIcon, 
  HomeIcon, 
  ChartBarIcon, 
  PaintBrushIcon, 
  HeartIcon,
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon
} from "@heroicons/react/24/outline";

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

const industries = [
  {
    icon: ShieldCheckIcon,
    title: "Insurance Agencies",
    description: "AdVogue AI's AI Agent Squad is transforming how insurance agencies operate. From inbound support to outbound sales, our bilingual (English/Spanish) AI voice agents handle everything—saving time, cutting costs, and maximizing your pipeline.",
    features: [
      { title: "Bilingual Support", description: "English/Spanish AI voice agents for broader market reach" },
      { title: "24/7 Operations", description: "Round-the-clock service handling both inbound and outbound calls" },
      { title: "Time Efficiency", description: "Automated processes saving valuable agent time" },
      { title: "Pipeline Growth", description: "Maximized lead conversion and customer engagement" }
    ],
    keyFunctions: [
      { title: "Smart Call Handling", description: "Instantly answer inbound calls with accurate, human-like responses." },
      { title: "Policy Support", description: "Handle FAQs about policies, renewals, claims, and coverage options." },
      { title: "Intelligent Transfer", description: "Warm-transfer calls to licensed agents when needed." },
      { title: "Automated Inquiries", description: "Fully automates initial inquiries and collects all information needed for quoting, so your producers can focus on closing, not chasing." },
      { title: "AMS Integration", description: "Seamlessly integrate with AppliedEpic, EzLynx, or your AMS." },
      { title: "Task Management", description: "Take notes, assign tasks, and update internal tools like Jira, Slack, or custom systems." },
      { title: "Follow-up Automation", description: "Automate follow-ups via SMS, email, or outbound voice." }
    ]
  },
  {
    icon: HomeIcon,
    title: "Real Estate Brokerages",
    description: "Never miss a qualified lead again. Our AI voice agents answer listing inquiries 24/7, pre-qualify buyers, and schedule showings in real time by syncing with your calendar.",
    features: [
      { title: "24/7 Availability", description: "Never miss a property inquiry, day or night" },
      { title: "Smart Scheduling", description: "Automated showing appointments with calendar sync" },
      { title: "Lead Qualification", description: "Pre-qualify buyers through intelligent conversations" },
      { title: "CRM Integration", description: "Seamless data sync with your existing tools" }
    ],
    keyFunctions: [
      { title: "Property Inquiries", description: "Instantly respond to property inquiries (pricing, availability, features)." },
      { title: "Lead Qualification", description: "Pre-qualify leads with voice conversations." },
      { title: "Calendar Management", description: "Book appointments with calendar sync." },
      { title: "CRM Integration", description: "Sync call data with your CRM or tools like HighLevel." }
    ]
  },
  {
    icon: ChartBarIcon,
    title: "Marketing Agencies",
    description: "Let your AI assistant handle lead qualification, appointment setting, and routine client communications, so your team can stay focused on performance and creative strategy.",
    features: [
      { title: "Lead Filtering", description: "AI-powered qualification of prospects" },
      { title: "Smart Onboarding", description: "Automated client onboarding processes" },
      { title: "Multi-channel", description: "Voice, SMS, and email communication" },
      { title: "Global Support", description: "Multilingual capabilities for international reach" }
    ],
    keyFunctions: [
      { title: "Lead Qualification", description: "AI-powered lead qualification to filter high-intent prospects." },
      { title: "Client Onboarding", description: "Client onboarding through smart voice flows." },
      { title: "Appointment Setting", description: "Appointment scheduling via voice, SMS, or email." },
      { title: "Tool Integration", description: "CRM updates, reminders, and summaries sent directly to your tools." },
      { title: "Language Support", description: "Multilingual support for international clients." }
    ]
  },
  {
    icon: PaintBrushIcon,
    title: "Design Agencies",
    description: "Don't let your creative momentum be slowed down by repetitive admin work. Our AI voice agents streamline client interactions, qualify leads, and automate routine communications.",
    features: [
      { title: "Project Intake", description: "Automated brief collection and qualification" },
      { title: "Smart Routing", description: "Direct leads to the right creative team" },
      { title: "Discovery Calls", description: "Automated scheduling of initial consultations" },
      { title: "Time Savings", description: "Reduce administrative overhead" }
    ],
    keyFunctions: [
      { title: "Lead Management", description: "Answer project inquiries and qualify leads." },
      { title: "Project Briefs", description: "Collect detailed project briefs through dynamic voice flows." },
      { title: "Team Routing", description: "Route leads to the right designer or department." },
      { title: "Discovery Booking", description: "Schedule discovery calls with integrated calendar booking." }
    ]
  },
  {
    icon: HeartIcon,
    title: "Healthcare Providers",
    description: "Enhance patient experience and reduce front-desk overload with HIPAA-conscious, multilingual AI voice agents.",
    features: [
      { title: "HIPAA Compliant", description: "Secure, compliant patient communications" },
      { title: "Appointment Management", description: "Automated scheduling and reminders" },
      { title: "Billing Support", description: "Handle insurance and payment inquiries" },
      { title: "Patient Care", description: "Follow-up and check-in automation" }
    ],
    keyFunctions: [
      { title: "Appointment Management", description: "Book, confirm, or reschedule appointments automatically." },
      { title: "Billing Support", description: "Handle insurance and billing-related inquiries." },
      { title: "Patient Follow-up", description: "Post-visit reminders and patient check-ins." },
      { title: "Language Support", description: "Multilingual support for diverse patient bases." }
    ]
  }
];

export function IndustryUseCases({ className, variant = 'custom' }: IndustryUseCasesProps) {
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

        <div className="space-y-24">
          {industries.map((industry, industryIndex) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "p-8 md:p-12 rounded-3xl border bg-white/50 backdrop-blur-sm",
                style.border,
                "hover:shadow-xl transition-all duration-300"
              )}
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn("p-3 rounded-2xl", style.highlight)}>
                    <industry.icon className={cn("w-8 h-8", style.bullet)} />
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900">{industry.title}</h3>
                </div>
                
                <p className="text-gray-600 text-xl leading-relaxed mb-12">
                  {industry.description}
                </p>

                {/* Core Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {industry.features.map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group"
                    >
                      <div className={cn("p-3 rounded-xl mb-4", style.highlight)}>
                        <DocumentTextIcon className={cn("w-6 h-6", style.bullet)} />
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
                    {industry.keyFunctions.map((func, idx) => (
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 