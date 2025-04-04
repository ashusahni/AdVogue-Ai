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
    <section id="pricing" className="py-12 md:py-16 px-4 bg-zinc-900/30 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-sm font-medium text-teal-500 inline-block mb-2">
            Pricing
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={`pricing-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4 md:p-6">
                  <div className="mb-4 md:mb-6">
                    <span className="text-sm font-medium text-teal-500 inline-block mb-2">
                      {plan.name}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold mb-1">
                      {plan.description}
                    </h3>
                  </div>

                  <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                    {plan.price}{" "}
                    <span className="text-sm text-zinc-400 font-normal">
                      {plan.type}
                    </span>
                  </div>

                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {plan.features.map((feature, i) => (
                      <div
                        key={`feature-${index}-${i}`}
                        className="flex items-center"
                      >
                        <CheckIcon className="w-4 h-4 md:w-5 md:h-5 text-teal-500 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-sm md:text-base text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-black hover:bg-black/90 text-white text-sm md:text-base py-2 md:py-2.5">
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Button
            className="px-4 md:px-6 py-2.5 md:py-3 bg-black hover:bg-black/90 text-white rounded-md text-sm md:text-base"
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