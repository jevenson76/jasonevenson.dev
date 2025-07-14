'use client';

import { motion } from 'framer-motion';

export function SquarePattern() {
  // Generate a grid of squares with blanket-like motion
  const squares = [];
  const gridSize = 25; // Smaller squares for finer detail
  const cols = Math.ceil(1400 / gridSize);
  const rows = Math.ceil(800 / gridSize);
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * gridSize;
      const y = row * gridSize;
      const centerX = cols / 2;
      const centerY = rows / 2;
      const distanceFromCenter = Math.sqrt((col - centerX) ** 2 + (row - centerY) ** 2);
      const delay = distanceFromCenter * 0.05;
      
      // Create organic wave motion that ripples outward
      const waveAmplitude = 3;
      const waveFrequency = 0.1;
      
      squares.push(
        <motion.rect
          key={`${row}-${col}`}
          x={x}
          y={y}
          width={gridSize - 1}
          height={gridSize - 1}
          fill="none"
          stroke="rgba(165, 180, 252, 0.12)"
          strokeWidth="0.5"
          initial={{ 
            opacity: 0.08,
            x: x,
            y: y,
            rotate: 0
          }}
          animate={{
            opacity: [0.08, 0.18, 0.08],
            x: [
              x,
              x + Math.sin(delay) * waveAmplitude,
              x + Math.sin(delay + Math.PI) * waveAmplitude,
              x
            ],
            y: [
              y,
              y + Math.cos(delay) * waveAmplitude * 0.5,
              y + Math.cos(delay + Math.PI) * waveAmplitude * 0.5,
              y
            ],
            rotate: [0, 2, -2, 0],
            strokeWidth: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay % 8
          }}
        />
      );
    }
  }
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="squarePattern" x="0" y="0" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
            <rect
              width={gridSize - 2}
              height={gridSize - 2}
              fill="none"
              stroke="rgba(165, 180, 252, 0.08)"
              strokeWidth="0.5"
            />
          </pattern>
          
          {/* Gradient overlays for depth */}
          <radialGradient id="squareGradient1" cx="30%" cy="30%" r="70%">
            <stop offset="0%" style={{ stopColor: '#a5b4fc', stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: '#a5b4fc', stopOpacity: 0.03 }} />
          </radialGradient>
          
          <radialGradient id="squareGradient2" cx="70%" cy="70%" r="60%">
            <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 0.12 }} />
            <stop offset="100%" style={{ stopColor: '#22d3ee', stopOpacity: 0.02 }} />
          </radialGradient>
          
          <radialGradient id="squareGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.08 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.01 }} />
          </radialGradient>
        </defs>
        
        {/* Base square pattern */}
        <rect width="100%" height="100%" fill="url(#squarePattern)" />
        
        {/* Animated gradient overlays with blanket-like motion */}
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#squareGradient1)"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            transform: [
              "translate(0px, 0px)",
              "translate(20px, 10px)",
              "translate(-10px, 15px)",
              "translate(0px, 0px)"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#squareGradient2)"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            transform: [
              "translate(0px, 0px)",
              "translate(-15px, 20px)",
              "translate(25px, -5px)",
              "translate(0px, 0px)"
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#squareGradient3)"
          animate={{
            opacity: [0.2, 0.6, 0.2],
            transform: [
              "translate(0px, 0px)",
              "translate(10px, -20px)",
              "translate(-20px, 10px)",
              "translate(0px, 0px)"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        {/* Floating accent squares with blanket-like motion */}
        {[...Array(20)].map((_, i) => {
          const baseX = Math.random() * 1400;
          const baseY = Math.random() * 800;
          return (
            <motion.rect
              key={i}
              x={baseX}
              y={baseY}
              width="3"
              height="3"
              fill="#a5b4fc"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                x: [
                  baseX,
                  baseX + Math.sin(i) * 50,
                  baseX + Math.cos(i) * 30,
                  baseX
                ],
                y: [
                  baseY,
                  baseY + Math.cos(i) * 30,
                  baseY + Math.sin(i) * 40,
                  baseY
                ],
                rotate: [0, 45, -45, 0],
                scale: [1, 1.5, 0.8, 1]
              }}
              transition={{
                duration: 20 + Math.random() * 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}