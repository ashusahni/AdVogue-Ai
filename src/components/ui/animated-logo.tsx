import { motion } from "framer-motion";
import { useState } from "react";
import { Logo } from "@/components/Logo";

interface AnimatedLogoProps {
  width?: number;
  height?: number;
  className?: string;
  showTagline?: boolean;
}

export function AnimatedLogo({ width = 300, height = 60, className = "", showTagline = true }: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.02 : 1,
            y: isHovered ? -5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
          className="relative"
        >
          <Logo width={width} height={height} className={className} />
          
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.5 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Subtle dot animation */}
          <motion.div
            className="absolute -right-2 -top-2 w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
      
      {showTagline && (
        <motion.div 
          className="flex items-center justify-center gap-2"
          animate={{
            y: isHovered ? 5 : 0,
            opacity: isHovered ? 0.8 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-black"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="descriptive-text">
            AI Voice Solutions
          </span>
        </motion.div>
      )}
    </div>
  );
} 