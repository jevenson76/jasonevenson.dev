'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const ResultsStrip = () => {
  const stats = [
    { value: 15, suffix: '+', label: 'Years Enterprise Experience' },
    { value: 130, suffix: 'M', label: 'Project Portfolio Managed' },
    { value: 35, suffix: '%', label: 'Regional Revenue Growth' },
    { value: 30, suffix: '%', label: 'Consistently Over Quota' }
  ];

  return (
    <section className="relative py-5 md:py-7 overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 40, 200, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(40, 120, 200, 0.3) 0%, transparent 50%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-19"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Proven Results That Speak Volumes
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-extralight">
            Numbers don't lie. Here's what happens when strategy meets execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-light text-white mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  decimal="."
                  decimals={stat.decimals || 0}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-base md:text-lg text-gray-200 font-extralight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </section>
  );
};

export { ResultsStrip };