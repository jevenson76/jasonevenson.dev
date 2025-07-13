'use client';
import { motion } from 'framer-motion';

export function HeroQuantum() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] perspective-1000">
      {/* Static background element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border border-[var(--quantum-glow)]/20" />
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
          className="mt-2 text-lg md:text-xl font-light tracking-wide text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Former Wandelbots Director & AnyLogic Regional Sales Leader. Proven track record managing $130M+ projects and driving enterprise AI transformations.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-black hover:scale-105 transition-transform"
          >
            Schedule Strategy Session
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[var(--quantum-glow)] px-6 py-3 text-[var(--quantum-glow)] hover:bg-[var(--quantum-glow)] hover:text-black transition-colors"
          >
            Get ROI Assessment
          </a>
        </motion.div>
      </div>
    </section>
  );
}