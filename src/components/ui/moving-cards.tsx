import type React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MovingCardProps {
  items: {
    id?: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const MovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: MovingCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Guard clause if no children
      if (!scrollerContent.length) return;

      for (const item of scrollerContent) {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      }

      setStart(true);
    }
  };

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "20s";
      case "normal":
        return "30s";
      case "slow":
        return "40s";
      default:
        return "30s";
    }
  };

  const directionClass = direction === "left" ? "" : "animate-rtl";

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
          directionClass
        )}
        style={
          start
            ? {
                animationDuration: getSpeed(),
              }
            : {}
        }
      >
        {items.map((item, idx) => (
          <li
            key={item.id || `item-${item.title}-${idx}`}
            className="w-[300px] max-w-full relative group flex-shrink-0"
          >
            <CardItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const CardItem = ({
  item,
}: {
  item: {
    id?: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
  };
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative h-full w-full p-6 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-300"
    >
      <div className="relative z-10">
        <div className="p-2 w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
          {item.icon}
        </div>
        <h3 className="font-medium text-xl text-zinc-200 mb-2">{item.title}</h3>
        <p className="text-zinc-400 text-sm">{item.description}</p>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};
