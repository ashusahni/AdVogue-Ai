"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  isButton?: boolean;
}

interface FloatingNavbarProps {
  items: NavItem[];
}

export function FloatingNavbar({ items }: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-4 inset-x-4 z-50 transition-all duration-300",
        "max-w-2xl mx-auto rounded-full border border-zinc-800",
        isScrolled
          ? "bg-black/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            SLICK.AI
          </span>
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className={cn(
                  "text-sm transition-colors",
                  item.isButton
                    ? "px-4 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-zinc-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
