"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
  variant?: "default" | "muted" | "transparent";
  showGrid?: boolean;
  showOrbs?: boolean;
  showAccent?: boolean;
  className?: string;
}

export const SectionBackground = ({
  variant = "default",
  showGrid = true,
  showOrbs = true,
  showAccent = false,
  className,
}: SectionBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Enhanced Grid Pattern */}
      {showGrid && (
        <div className="absolute inset-0">
          {/* Rotated Squares (Diamonds) Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diamond-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                {/* Square Grid Lines */}
                <rect
                  x="25"
                  y="25"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
          </svg>
          
          {/* Accent Dots at Diamond Centers */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          
          {/* Subtle Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20" />
        </div>
      )}

      {/* Gradient Orbs */}
      {showOrbs && (
        <>
          <motion.div
            className={cn(
              "absolute top-0 -left-40 w-[500px] h-[500px] rounded-full blur-3xl",
              variant === "default" && "bg-primary/10",
              variant === "muted" && "bg-primary/5",
              variant === "transparent" && "bg-primary/3"
            )}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={cn(
              "absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full blur-3xl",
              variant === "default" && "bg-primary/10",
              variant === "muted" && "bg-primary/5",
              variant === "transparent" && "bg-primary/3"
            )}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Geometric Accent (optional, mainly for Hero) */}
      {showAccent && (
        <motion.div
          className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-primary/30 rounded-2xl"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
};
