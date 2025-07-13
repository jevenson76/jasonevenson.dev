'use client';
import { motion } from 'framer-motion';

export function HeroQuantum() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] perspective-1000">
      {/* Probability cloud */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="absolute w-[600px] h-[600px] rounded-full bg-radial from-[rgba(129,140,248,0.1)] to-transparent"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 2 }}
          />
        ))}
      </div>

      {/* 3D Core */}
      <motion.div
        className="relative w-80 h-80 md:w-96 md:h-96"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateX: 360, rotateY: 360, rotateZ: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {/* Qubit |0> */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-2 border-[var(--quantum-glow)] bg-radial from-[rgba(129,140,248,0.1)] flex items-center justify-center text-3xl font-light shadow-[0_0_40px_rgba(129,140,248,0.5)]"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8], translateZ: [100, 150, 100] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
        >
          |0⟩
        </motion.div>

        {/* Qubit |1> */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-2 border-[var(--quantum-glow)] bg-radial from-[rgba(129,140,248,0.1)] flex items-center justify-center text-3xl font-light shadow-[0_0_40px_rgba(129,140,248,0.5)] rotate-x-180"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8], translateZ: [100, 150, 100] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror', delay: 2 }}
        >
          |1⟩
        </motion.div>

        {/* Quantum circuit nodes */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-[var(--quantum-purple)] shadow-[0_0_20px_var(--quantum-purple)]"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(100px)`,
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </motion.div>

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
          I Automate Revenue Growth with AI
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
            Book Free Audit
          </a>
          <a
            href="https://fiverr.com/jasonevenson"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--quantum-glow)] px-6 py-3 text-[var(--quantum-glow)] hover:bg-[var(--quantum-glow)] hover:text-black transition-colors"
          >
            Quick Fix ($500+)
          </a>
        </motion.div>
      </div>
    </section>
  );
}