'use client';
import { motion } from 'framer-motion';

export function HeroQuantum() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] perspective-1000">
      {/* Premium background elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Main circle */}
        <div className="w-[700px] h-[700px] md:w-[800px] md:h-[800px] rounded-full border border-[var(--quantum-glow)]/30 shadow-2xl shadow-[var(--quantum-glow)]/10" />
        
        {/* Inner accent circle */}
        <div className="absolute w-[600px] h-[600px] md:w-[700px] md:h-[700px] rounded-full border border-[var(--quantum-glow)]/10" />
        
        {/* Outer glow circle */}
        <div className="absolute w-[800px] h-[800px] md:w-[900px] md:h-[900px] rounded-full border border-[var(--quantum-glow)]/5" />
        
        {/* Premium floating particles */}
        <div className="absolute w-3 h-3 bg-[var(--quantum-glow)] rounded-full shadow-lg shadow-[var(--quantum-glow)]/50 animate-pulse" style={{top: '20%', left: '30%'}} />
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse" style={{top: '70%', right: '25%', animationDelay: '1s'}} />
        <div className="absolute w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse" style={{bottom: '25%', left: '20%', animationDelay: '2s'}} />
        <div className="absolute w-2 h-2 bg-[var(--quantum-glow)] rounded-full shadow-lg shadow-[var(--quantum-glow)]/50 animate-pulse" style={{top: '40%', right: '15%', animationDelay: '0.5s'}} />
      </div>

      {/* Headline */}
      <div className="absolute z-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-thin tracking-widest uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-[#f0f9ff] via-[var(--quantum-glow)] to-[var(--quantum-cyan)] bg-clip-text text-transparent">
            Jason Evenson
          </span>
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl font-light tracking-wide text-[var(--quantum-cyan)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          AI Automation Strategist • 15+ Years Fortune 500 Experience
        </motion.p>
        <motion.p
          className="mt-3 text-lg md:text-xl font-light tracking-wide text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Former Wandelbots Director & AnyLogic Regional Sales Leader. Proven track record managing $130M+ projects and driving enterprise AI transformations.
        </motion.p>
        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-green-400 px-8 py-4 font-semibold text-black shadow-2xl shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-green-500/40"
          >
            <span className="relative z-10">Schedule Strategy Session</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl border-2 border-[var(--quantum-glow)] px-8 py-4 font-semibold text-[var(--quantum-glow)] shadow-xl shadow-[var(--quantum-glow)]/20 transition-all duration-300 hover:scale-105 hover:shadow-[var(--quantum-glow)]/40"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Get ROI Assessment</span>
            <div className="absolute inset-0 bg-[var(--quantum-glow)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}