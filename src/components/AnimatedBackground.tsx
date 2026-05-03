"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Create a few random particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.08] dark:opacity-[0.12]">
      {/* Large Floating Orbs */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            x: `${p.x}%`, 
            y: `${p.y}%`,
            scale: 0.8,
          }}
          animate={{
            x: [`${p.x}%`, `${(p.x + 10) % 100}%`, `${p.x}%`],
            y: [`${p.y}%`, `${(p.y + 15) % 100}%`, `${p.y}%`],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
          className="absolute rounded-full bg-primary"
          style={{
            width: p.size,
            height: p.size,
            filter: "blur(60px)",
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjYsIDU4LCAxMDcsIDAuMDUpIi8+PC9zdmc+')] bg-repeat"></div>
      
      {/* Subtle lines or structures */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <path d="M25 0L50 14.4V43.4L25 57.8L0 43.4V14.4L25 0Z" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-primary" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
}
