"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardContainer, CardBody, CardItem } from "./3d-card";

interface IndustryUseCase {
  industry: string;
  description: string;
  benefits: string[];
}

interface IndustryUseCasesProps {
  useCases: IndustryUseCase[];
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

export function IndustryUseCases({ useCases, className }: IndustryUseCasesProps) {
  return (
    <section className={cn("py-32 bg-white", className)}>
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
          className="text-4xl font-bold text-center mb-6 text-slate-900"
        >
          Use Cases by Industry
        </motion.h2>
        <motion.p
          variants={textVariants}
          custom={1}
          className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Discover how our AI voice solutions transform operations across different industries
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              variants={textVariants}
              custom={index + 2}
            >
              <CardContainer containerClassName="py-10">
                <CardBody className="relative h-auto w-full border border-slate-200 rounded-xl p-8 bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow">
                  <CardItem translateZ="50" className="w-full">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      {useCase.industry}
                    </h3>
                  </CardItem>
                  <CardItem translateZ="60" className="w-full">
                    <p className="text-slate-600 mb-6">
                      {useCase.description}
                    </p>
                  </CardItem>
                  <CardItem translateZ="80" className="w-full">
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span className="text-slate-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 