'use client';

import { motion } from 'framer-motion';

export function SquarePattern() {
  // Generate a grid of squares
  const squares = [];
  const gridSize = 30; // Size of each square
  const cols = Math.ceil(1400 / gridSize);
  const rows = Math.ceil(800 / gridSize);
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * gridSize;
      const y = row * gridSize;
      const delay = (row + col) * 0.1;
      
      squares.push(
        <motion.rect
          key={`${row}-${col}`}
          x={x}
          y={y}
          width={gridSize - 2}
          height={gridSize - 2}
          fill="none"
          stroke="rgba(129, 140, 248, 0.08)"
          strokeWidth="0.5"
          initial={{ opacity: 0.05 }}
          animate={{
            opacity: [0.05, 0.12, 0.05],
            strokeWidth: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay % 4
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
              stroke="rgba(129, 140, 248, 0.06)"
              strokeWidth="0.5"
            />
          </pattern>
          
          {/* Gradient overlays for depth */}
          <radialGradient id="squareGradient1" cx="20%" cy="20%" r="60%">
            <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: '#818cf8', stopOpacity: 0.02 }} />
          </radialGradient>
          
          <radialGradient id="squareGradient2" cx="80%" cy="80%" r="60%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.08 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.01 }} />
          </radialGradient>
          
          <radialGradient id="squareGradient3" cx="50%" cy="50%" r="40%">
            <stop offset="0%" style={{ stopColor: '#6b46c1', stopOpacity: 0.05 }} />
            <stop offset="100%" style={{ stopColor: '#6b46c1', stopOpacity: 0.01 }} />
          </radialGradient>
        </defs>
        
        {/* Base square pattern */}
        <rect width="100%" height="100%" fill="url(#squarePattern)" />
        
        {/* Animated gradient overlays */}
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#squareGradient1)"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#squareGradient2)"
          animate={{
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
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
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Floating accent squares */}
        {[...Array(12)].map((_, i) => (
          <motion.rect
            key={i}
            x={Math.random() * 1400}
            y={Math.random() * 800}
            width="2"
            height="2"
            fill="#818cf8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              x: [
                Math.random() * 1400,
                Math.random() * 1400,
                Math.random() * 1400
              ],
              y: [
                Math.random() * 800,
                Math.random() * 800,
                Math.random() * 800
              ]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </svg>
    </div>
  );
}