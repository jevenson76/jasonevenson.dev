'use client';
import { motion } from 'framer-motion';

export function HeroQuantum() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] perspective-1000">
      {/* Premium geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main geometric frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[600px] h-[400px] md:w-[800px] md:h-[500px]">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[var(--quantum-glow)]/60"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[var(--quantum-glow)]/60"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[var(--quantum-glow)]/60"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[var(--quantum-glow)]/60"></div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-lg"></div>
            
            {/* Tech grid pattern */}
            <div className="absolute inset-4 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(var(--quantum-glow) 1px, transparent 1px),
                  linear-gradient(90deg, var(--quantum-glow) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
          </div>
        </div>
        
        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border border-[var(--quantum-glow)]/40 rotate-45 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400/30 rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-1 bg-gradient-to-r from-[var(--quantum-glow)] to-transparent"></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-12 bg-gradient-to-b from-blue-400 to-transparent"></div>
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