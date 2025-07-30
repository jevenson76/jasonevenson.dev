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
          width={gridSize - 1}
          height={gridSize - 1}
          fill="none"
          stroke="rgba(165, 180, 252, 0.08)"
          strokeWidth="0.5"
          initial={{ 
            opacity: 0.05,
            x: x,
            y: y,
            rotate: 0
          }}
          animate={{
            opacity: [0.05, 0.12, 0.05],
            x: [
              x,
              x + Math.sin(delay + row * 0.1) * waveAmplitude,
              x + Math.sin(delay + row * 0.1 + Math.PI) * waveAmplitude,
              x
            ],
            y: [
              y,
              y + Math.cos(delay + col * 0.1) * waveAmplitude * 0.5,
              y + Math.cos(delay + col * 0.1 + Math.PI) * waveAmplitude * 0.5,
              y
            ],
            rotate: [0, 2, -2, 0],
            strokeWidth: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8 + (row + col) * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (row + col) * 0.05
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
              stroke="rgba(165, 180, 252, 0.04)"
              strokeWidth="0.5"
            />
          </pattern>
          
          {/* Gradient overlays for depth */}
          <radialGradient id="squareGradient1" cx="30%" cy="30%" r="70%">
            <stop offset="0%" style={{ stopColor: 'var(--quantum-glow)', stopOpacity: 0.08 }} />
            <stop offset="100%" style={{ stopColor: 'var(--quantum-glow)', stopOpacity: 0.01 }} />
          </radialGradient>
          
          <radialGradient id="squareGradient2" cx="70%" cy="70%" r="60%">
            <stop offset="0%" style={{ stopColor: 'var(--quantum-cyan)', stopOpacity: 0.07 }} />
            <stop offset="100%" style={{ stopColor: 'var(--quantum-cyan)', stopOpacity: 0.01 }} />
          </radialGradient>
          
          <radialGradient id="squareGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: 'var(--quantum-purple)', stopOpacity: 0.05 }} />
            <stop offset="100%" style={{ stopColor: 'var(--quantum-purple)', stopOpacity: 0.005 }} />
          </radialGradient>
        </defs>
        
        {/* Animated individual squares */}
        {squares}
        
        {/* Base square pattern */}
        <rect width="100%" height="100%" fill="url(#squarePattern)" />
        
        {/* Animated gradient overlays with blanket-like motion */}
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#squareGradient1)"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, -20, 0],
            y: [0, 15, 25, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#squareGradient2)"
          animate={{
            opacity: [0.15, 0.35, 0.15],
            x: [0, -25, 35, 0],
            y: [0, 20, -10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#squareGradient3)"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: [0, 15, -30, 0],
            y: [0, -25, 20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Remove floating dots */}
      </svg>
    </div>
  );
}