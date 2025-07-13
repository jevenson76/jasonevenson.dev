'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashProps {
  onComplete: () => void;
}

const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50,10 90,30 90,70 50,90 10,70 10,30"
                  fill="url(#gradient)"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                />
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  className="fill-white font-bold text-2xl"
                >
                  JE
                </text>
              </svg>
            </motion.div>
          </motion.div>

          {/* Loading Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-white mb-2"
          >
            Jason Evenson
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mb-8"
          >
            Crafting Digital Experiences
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "200px" }}
            transition={{ delay: 0.7 }}
            className="mx-auto"
          >
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-sm text-gray-500 mt-2"
            >
              {progress}%
            </motion.p>
          </motion.div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: `radial-gradient(circle, ${
                  i % 2 === 0 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)'
                } 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export { Splash };