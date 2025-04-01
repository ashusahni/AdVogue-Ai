import type React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100 + delay); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <div className={cn("relative", className)}>
      <span className="opacity-0 select-none absolute">{text}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {currentText}
      </motion.span>
    </div>
  );
};

export interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Spotlight({
  children,
  className = "",
  ...props
}: SpotlightProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-full mx-auto overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-transparent via-transparent to-black/30 dark:to-black/60" />
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-teal-400 opacity-50 blur-3xl" />
        <div className="absolute -bottom-32 right-40 h-96 w-96 rounded-full bg-teal-600 opacity-50 blur-3xl" />
      </div>
      <div className="relative z-20">{children}</div>
    </div>
  );
}

export interface ShiftingWordsProps extends React.HTMLAttributes<HTMLSpanElement> {
  words: string[];
  className?: string;
}

export const ShiftingWords = ({
  words,
  className,
  ...props
}: ShiftingWordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={cn("inline-block relative", className)}
      {...props}
    >
      <span className="invisible">{words[0]}</span>
      {words.map((word, index) => (
        <motion.span
          key={word}
          className="absolute left-0 top-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            y: index === currentIndex ? 0 : 20,
          }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
