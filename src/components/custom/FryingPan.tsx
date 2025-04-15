"use client";
import { motion } from "framer-motion";

export default function FryingPan() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[400px] h-[350px]">
        {/* Panci dengan Efek Uap */}
        <svg width="100%" height="100%" viewBox="0 0 400 350" className="z-10">
          {/* Badan Panci */}
          <path
            d="M100 120 Q200 50 300 120 L300 270 Q200 300 100 270 Z"
            fill="#484848"
            stroke="#333"
            strokeWidth="3"
          />

          {/* Gagang Panci */}
          <path
            d="M300 180 Q350 180 370 200 Q350 220 300 220"
            fill="#555"
            stroke="#333"
            strokeWidth="3"
          />

          {/* Efek Uap Mendidih */}
          {[...Array(10)].map((_, i) => {
            const startX = 120 + (i % 5) * 40;
            const width = 4 + Math.random() * 10;
            const height = 2 + Math.random() * 5;

            return (
              <motion.ellipse
                suppressHydrationWarning
                key={i}
                cx={startX}
                cy={250 - (i % 3) * 10}
                rx={width}
                ry={height}
                fill="#ffffff"
                opacity="0.7"
                initial={{ opacity: 0, cy: 250 }}
                animate={{
                  cy: [250, 150, 50],
                  opacity: [0.8, 0.5, 0],
                  rx: [width, width * 1.5, width * 1.8],
                  ry: [height, height * 1.2, height * 1.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2,
                }}
              />
            );
          })}

          {/* Efek Air Mendidih */}
          <motion.path
            suppressHydrationWarning
            d="M120 220 Q200 200 280 220"
            stroke="#ffffff90"
            strokeWidth="25"
            fill="transparent"
            animate={{
              d: [
                "M120 220 Q200 200 280 220",
                "M120 220 Q200 180 280 220",
                "M120 220 Q200 190 280 220",
                "M120 220 Q200 200 280 220",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
}
