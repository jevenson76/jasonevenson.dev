'use client';

import { motion } from 'framer-motion';

// Animated Aurora-like gradient blobs that slowly move and rotate across the viewport.
// This component is meant to sit behind all content as a dazzling, high-quality backdrop.
export function AuroraBackground() {
  const blobs = [
    {
      size: 480,
      className: 'from-indigo-500 via-purple-500 to-fuchsia-500',
      top: '-15%',
      left: '-10%',
      duration: 34,
    },
    {
      size: 560,
      className: 'from-cyan-500 via-sky-500 to-blue-500',
      top: '60%',
      left: '-20%',
      duration: 38,
    },
    {
      size: 420,
      className: 'from-emerald-400 via-teal-500 to-cyan-500',
      top: '70%',
      left: '60%',
      duration: 26,
    },
    {
      size: 500,
      className: 'from-rose-500 via-pink-500 to-fuchsia-500',
      top: '-20%',
      left: '55%',
      duration: 40,
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {blobs.map((blob, idx) => (
        <motion.div
          key={idx}
          className={`absolute aspect-square rounded-full blur-3xl opacity-40 bg-gradient-to-br ${blob.className}`}
          style={{
            width: blob.size,
            top: blob.top,
            left: blob.left,
            // `mix-blend-multiply` creates sumptuous color blending where blobs overlap
            mixBlendMode: 'screen',
          }}
          initial={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -75, 75, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: blob.duration,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}

      {/* You can optionally add a subtle grain overlay here for extra fidelity */}
    </div>
  );
}