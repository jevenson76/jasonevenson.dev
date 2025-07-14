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
          {/* Premium geometric logo matching hero design */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="relative w-40 h-32 mx-auto flex items-center justify-center">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--quantum-glow)]/60"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--quantum-glow)]/60"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--quantum-glow)]/60"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--quantum-glow)]/60"></div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
              
              {/* Tech grid pattern */}
              <div className="absolute inset-2 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(var(--quantum-glow) 1px, transparent 1px),
                    linear-gradient(90deg, var(--quantum-glow) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* JRE initials */}
              <span className="relative z-10 text-4xl font-thin tracking-widest text-[var(--quantum-glow)]">
                JRE
              </span>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-thin tracking-wide text-white mb-2"
          >
            Jason Evenson
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[var(--quantum-cyan)] mb-8 font-light"
          >
            AI Automation Strategist
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

      </motion.div>
    </AnimatePresence>
  );
};

export { Splash };