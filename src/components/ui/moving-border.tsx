import type React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface MovingBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  duration?: number;
  rx?: number;
  ry?: number;
  borderClassName?: string;
  className?: string;
  containerClassName?: string;
  offset?: number;
  borderSize?: number;
  fillClassName?: string;
}

export const MovingBorder = ({
  children,
  className,
  containerClassName,
  borderClassName = "border-slate-700",
  duration = 5000,
  rx = 20,
  ry = 20,
  offset = 10,
  borderSize = 1,
  fillClassName = "fill-white dark:fill-gray-950",
  ...props
}: MovingBorderProps) => {
  return (
    <div
      className={cn("relative p-[1px] overflow-hidden", containerClassName)}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          filter: "blur(8px)",
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "500ms",
        }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter: "blur(1px)",
          }}
        >
          <motion.rect
            whileHover={{ translateX: [0, 0.5, 0] }}
            animate={{
              pathLength: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            }}
            transition={{
              duration: duration / 1000,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            rx={rx}
            ry={ry}
            x={borderSize}
            y={borderSize}
            width={100 - borderSize * 2}
            height={100 - borderSize * 2}
            stroke="#38bdf8"
            strokeWidth={borderSize}
            strokeLinecap="round"
            strokeDasharray="100, 200"
            strokeDashoffset={0}
            fill="none"
          />
        </motion.svg>
      </div>
      <div
        className={cn(
          "relative flex items-center justify-center z-10 h-full w-full backdrop-blur-[1px] rounded-md",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
