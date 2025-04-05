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
  const [activeItem, setActiveItem] = React.useState<string>('home');

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const targetId = link.split('#')[1];
    setActiveItem(targetId || link);
    
    if (targetId && window.location.pathname !== '/') {
      window.location.href = link.startsWith('/') ? link : `/${link}`;
    } else if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed bottom-10 inset-x-0 mx-auto w-fit z-[5000] hidden md:block",
        className
      )}
    >
      <motion.nav 
        className="flex items-center bg-white/90 backdrop-blur-md rounded-full px-4 py-3 shadow-lg shadow-black/5"
        initial={{ boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
      >
        <div className="flex items-center relative gap-1">
          {items.map((item, idx) => (
            <motion.div
              key={item.link}
              className="relative"
            >
              <a
                href={item.link}
                onClick={(e) => handleClick(e, item.link)}
                className={cn(
                  "px-8 py-3 rounded-full text-base font-medium transition-colors relative z-10 block",
                  item.isButton 
                    ? "text-black" 
                    : "text-gray-800"
                )}
              >
                {item.name}
                {item.isButton && (
                  <motion.div 
                    className="absolute top-3 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400"
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
              {(activeItem === (item.link.split('#')[1] || item.link)) && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 bg-black/5 rounded-full z-0"
                  transition={{ type: "spring", duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </motion.div>
  );
};
