"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNavbar = ({
  items,
  className,
}: {
  items: {
    name: string;
    link: string;
    isButton?: boolean;
  }[];
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const targetId = link.split('#')[1];
    
    // If we're not on the home page and trying to scroll to a section
    if (targetId && window.location.pathname !== '/') {
      // Navigate to home page with the section anchor
      window.location.href = link.startsWith('/') ? link : `/${link}`;
    } else if (targetId) {
      // If we're already on home page, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For non-section links, just navigate
      window.location.href = link;
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={cn(
        "fixed bottom-8 inset-x-0 mx-auto w-[50vw] z-[5000]",
        className
      )}
    >
      <motion.nav 
        className="flex items-center justify-around bg-white rounded-full px-12 py-5"
        initial={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
        whileHover={{ 
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          y: -2,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={item.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href={item.link}
              onClick={(e) => handleClick(e, item.link)}
              className={cn(
                "text-base font-medium relative text-gray-500 hover:text-black transition-colors cursor-pointer",
                {
                  "flex items-center gap-2": item.isButton,
                }
              )}
            >
              {item.name}
              {item.isButton && (
                <motion.div 
                  className="w-2.5 h-2.5 rounded-full bg-[#4ade80]"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </a>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
};
