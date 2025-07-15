'use client';
import { motion } from 'framer-motion';

export function HeroQuantum() {
  return (
    <section className="relative flex items-center justify-center min-h-screen pt-4 md:pt-6 pb-10 md:pb-14 perspective-1000">
      {/* Clean geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-radial from-[var(--quantum-glow)]/5 via-transparent to-transparent"></div>
        
        {/* Static geometric frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[600px] h-[400px] md:w-[800px] md:h-[500px]">
            {/* Modern corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--quantum-glow)]/40"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--quantum-glow)]/40"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[var(--quantum-glow)]/40"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--quantum-glow)]/40"></div>
            
            {/* Subtle accent lines */}
            <div className="absolute top-8 left-8 w-12 h-0.5 bg-gradient-to-r from-[var(--quantum-glow)] to-transparent"></div>
            <div className="absolute top-8 right-8 w-12 h-0.5 bg-gradient-to-l from-[var(--quantum-glow)] to-transparent"></div>
            <div className="absolute bottom-8 left-8 w-12 h-0.5 bg-gradient-to-r from-[var(--quantum-glow)] to-transparent"></div>
            <div className="absolute bottom-8 right-8 w-12 h-0.5 bg-gradient-to-l from-[var(--quantum-glow)] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="absolute z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-6xl md:text-8xl font-extralight tracking-widest uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[var(--quantum-glow)]">
            Jason Evenson
          </span>
        </motion.h1>
        <motion.p
          className="mt-5 text-2xl md:text-3xl font-extralight tracking-wide text-[var(--quantum-cyan)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          AI Automation Strategist • 15+ Years Fortune 500 Experience
        </motion.p>
        <motion.p
          className="mt-7 text-xl md:text-2xl font-extralight tracking-wide text-gray-200 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Former Wandelbots Director & AnyLogic Regional Sales Leader. Proven track record managing $130M+ projects and driving enterprise AI transformations.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-green-400 px-10 py-5 font-semibold text-black shadow-2xl shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-green-500/40"
          >
            <span className="relative z-10 text-xl font-bold uppercase tracking-wide">SCHEDULE STRATEGY SESSION</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl border-2 border-[var(--quantum-glow)] px-10 py-5 font-semibold text-[var(--quantum-glow)] shadow-xl shadow-[var(--quantum-glow)]/20 transition-all duration-300 hover:scale-105 hover:shadow-[var(--quantum-glow)]/40"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black text-xl font-bold uppercase tracking-wide">GET ROI ASSESSMENT</span>
            <div className="absolute inset-0 bg-[var(--quantum-glow)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}