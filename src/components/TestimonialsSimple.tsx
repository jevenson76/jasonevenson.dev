'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// Add custom scrollbar styles
const scrollbarStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = scrollbarStyles;
  document.head.appendChild(style);
}

const TestimonialsSimple = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow Solutions',
      rating: 5,
      text: "Jason's AI automation solutions increased our processing speed by 300% while reducing costs by 40%. His expertise in machine learning transformed our entire workflow.",
      highlight: "300% speed increase, 40% cost reduction",
      service: "Process Automation"
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Director',
      company: 'Global Logistics Corp',
      rating: 5,
      text: "The revenue intelligence system Jason built gives us real-time insights that were impossible before. ROI was achieved within 2 months.",
      highlight: "ROI achieved in 2 months",
      service: "Growth Engine"
    },
    {
      name: 'Jennifer Walsh',
      role: 'CEO',
      company: 'DataDrive Analytics',
      rating: 5,
      text: "Jason's strategic guidance helped us identify $2.3M in revenue opportunities we were missing. His AI solutions are game-changing.",
      highlight: "$2.3M in new revenue opportunities",
      service: "AI Strategy"
    },
    {
      name: 'David Kim',
      role: 'VP of Sales',
      company: 'CloudTech Innovations',
      rating: 5,
      text: "The AI sales automation system Jason developed converted 40% more leads and freed up 30 hours per week for our sales team to focus on closing deals.",
      highlight: "40% more conversions, 30 hours saved weekly",
      service: "AI Revenue Systems"
    },
    {
      name: 'Maria Santos',
      role: 'IT Director',
      company: 'Enterprise Solutions Inc',
      rating: 5,
      text: "Jason's enterprise integration work connected our legacy systems seamlessly. What used to take weeks now happens in minutes, and our data accuracy improved by 95%.",
      highlight: "95% data accuracy improvement",
      service: "Enterprise Integration"
    },
    {
      name: 'Alex Thompson',
      role: 'Founder',
      company: 'StartupScale',
      rating: 5,
      text: "The custom AI solution Jason built for our specific industry gave us a competitive advantage that helped us secure $5M in Series A funding.",
      highlight: "$5M Series A funding secured",
      service: "Custom AI Solutions"
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

        {/* Vertical Scrolling Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="h-[600px] overflow-y-auto scrollbar-hide space-y-6 pr-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700/50 hover:border-[var(--quantum-glow)]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-xs text-[var(--quantum-glow)] bg-[var(--quantum-glow)]/10 px-3 py-1 rounded-full border border-[var(--quantum-glow)]/20">
                    {testimonial.service}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-[var(--quantum-glow)] text-sm">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-purple-400 font-medium">
                        {testimonial.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSimple;