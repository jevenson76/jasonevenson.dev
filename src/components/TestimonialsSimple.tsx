'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const TestimonialsSimple = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow Solutions',
      rating: 5,
      text: "Jason's AI automation solutions increased our processing speed by 300% while reducing costs by 40%. His expertise in machine learning transformed our entire workflow.",
      highlight: "300% speed increase, 40% cost reduction"
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Director',
      company: 'Global Logistics Corp',
      rating: 5,
      text: "The revenue intelligence system Jason built gives us real-time insights that were impossible before. ROI was achieved within 2 months.",
      highlight: "ROI achieved in 2 months"
    },
    {
      name: 'Jennifer Walsh',
      role: 'CEO',
      company: 'DataDrive Analytics',
      rating: 5,
      text: "Jason's strategic guidance helped us identify $2.3M in revenue opportunities we were missing. His AI solutions are game-changing.",
      highlight: "$2.3M in new revenue opportunities"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-6 py-2 mb-6 border border-[var(--quantum-glow)]/30">
            <div className="w-2 h-2 bg-[var(--quantum-glow)] rounded-full animate-pulse"></div>
            <span className="text-[var(--quantum-glow)] font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how forward-thinking companies are using AI to dominate their markets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700/50 hover:border-[var(--quantum-glow)]/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-[var(--quantum-glow)] text-sm">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
                <div className="text-xs text-purple-400 mt-2 font-medium">
                  {testimonial.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700/50">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">97%</div>
              <p className="text-gray-400 text-sm">Client Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSimple;