"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { CheckIcon } from "@heroicons/react/24/outline";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  type: string;
  features: string[];
  cta: string;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 px-4 bg-zinc-900/30 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-teal-500 inline-block mb-2">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={`pricing-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-zinc-800 bg-zinc-900/50">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <span className="text-sm font-medium text-teal-500 inline-block mb-2">
                      {plan.name}
                    </span>
                    <h3 className="text-xl font-semibold mb-1">
                      {plan.description}
                    </h3>
                  </div>

                  <div className="text-3xl font-bold mb-6">
                    {plan.price}{" "}
                    <span className="text-sm text-zinc-400 font-normal">
                      {plan.type}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div
                        key={`feature-${index}-${i}`}
                        className="flex items-center"
                      >
                        <CheckIcon className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
            onClick={() =>
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Your AI Voice Agent Discovery Call Today
          </Button>
        </div>
      </div>
    </section>
  );
} 