"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !animate) return;

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full bg-zinc-900 rounded-3xl p-0.5",
        containerClassName
      )}
    >
      <div
        className="absolute inset-0 rounded-3xl transition duration-500 opacity-[0.7] bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500"
        style={{
          maskImage: `radial-gradient(
            circle at ${position.x}px ${position.y}px,
            black,
            transparent 15%
          )`,
          WebkitMaskImage: `radial-gradient(
            circle at ${position.x}px ${position.y}px,
            black,
            transparent 15%
          )`,
          opacity: opacity,
        }}
      />
      <div className={cn("relative bg-zinc-900 rounded-[calc(1.5rem-1px)]", className)}>
        {children}
      </div>
    </div>
  );
}; 