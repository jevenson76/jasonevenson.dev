'use client';

import { motion } from 'framer-motion';

export function OceanLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Multiple ocean-like lines with varying opacity and speed */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="oceanGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#6b46c1', stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="oceanGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#6b46c1', stopOpacity: 0.08 }} />
            <stop offset="50%" style={{ stopColor: '#818cf8', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.08 }} />
          </linearGradient>
          <linearGradient id="oceanGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.05 }} />
            <stop offset="50%" style={{ stopColor: '#6b46c1', stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: '#818cf8', stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>
        
        {/* First wave line */}
        <motion.path
          d="M0,200 Q350,150 700,200 T1400,200 L1400,202 Q1050,252 700,202 T0,202 Z"
          fill="url(#oceanGradient1)"
          initial={{ d: "M0,200 Q350,150 700,200 T1400,200 L1400,202 Q1050,252 700,202 T0,202 Z" }}
          animate={{
            d: [
              "M0,200 Q350,150 700,200 T1400,200 L1400,202 Q1050,252 700,202 T0,202 Z",
              "M0,200 Q350,180 700,160 T1400,200 L1400,202 Q1050,222 700,162 T0,202 Z",
              "M0,200 Q350,170 700,190 T1400,200 L1400,202 Q1050,242 700,192 T0,202 Z",
              "M0,200 Q350,150 700,200 T1400,200 L1400,202 Q1050,252 700,202 T0,202 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Second wave line */}
        <motion.path
          d="M0,350 Q350,300 700,350 T1400,350 L1400,352 Q1050,402 700,352 T0,352 Z"
          fill="url(#oceanGradient2)"
          initial={{ d: "M0,350 Q350,300 700,350 T1400,350 L1400,352 Q1050,402 700,352 T0,352 Z" }}
          animate={{
            d: [
              "M0,350 Q350,300 700,350 T1400,350 L1400,352 Q1050,402 700,352 T0,352 Z",
              "M0,350 Q350,320 700,330 T1400,350 L1400,352 Q1050,382 700,332 T0,352 Z",
              "M0,350 Q350,310 700,340 T1400,350 L1400,352 Q1050,392 700,342 T0,352 Z",
              "M0,350 Q350,300 700,350 T1400,350 L1400,352 Q1050,402 700,352 T0,352 Z"
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Third wave line */}
        <motion.path
          d="M0,500 Q350,450 700,500 T1400,500 L1400,502 Q1050,552 700,502 T0,502 Z"
          fill="url(#oceanGradient3)"
          initial={{ d: "M0,500 Q350,450 700,500 T1400,500 L1400,502 Q1050,552 700,502 T0,502 Z" }}
          animate={{
            d: [
              "M0,500 Q350,450 700,500 T1400,500 L1400,502 Q1050,552 700,502 T0,502 Z",
              "M0,500 Q350,470 700,480 T1400,500 L1400,502 Q1050,532 700,482 T0,502 Z",
              "M0,500 Q350,460 700,490 T1400,500 L1400,502 Q1050,542 700,492 T0,502 Z",
              "M0,500 Q350,450 700,500 T1400,500 L1400,502 Q1050,552 700,502 T0,502 Z"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Thin horizontal lines with gentle motion */}
        <motion.line
          x1="0"
          y1="100"
          x2="1400"
          y2="100"
          stroke="url(#oceanGradient1)"
          strokeWidth="1"
          opacity="0.4"
          animate={{
            y1: [100, 95, 105, 100],
            y2: [100, 95, 105, 100]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.line
          x1="0"
          y1="600"
          x2="1400"
          y2="600"
          stroke="url(#oceanGradient2)"
          strokeWidth="1"
          opacity="0.3"
          animate={{
            y1: [600, 605, 595, 600],
            y2: [600, 605, 595, 600]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>
    </div>
  );
}