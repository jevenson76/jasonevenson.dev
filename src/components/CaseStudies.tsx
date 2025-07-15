'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface CaseStudy {
  company: string;
  summary: string;
  results: string;
  details: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: 'Acme Manufacturing',
    summary: 'Implemented AI-driven process automation across 7 plants.',
    results: 'Reduced operating costs by 42% and increased throughput 1.8×.',
    details: [
      'Robotic vision quality control system rolled out in 3 weeks.',
      'Predictive maintenance model saved $2.1M in unplanned downtime.',
      'Real-time executive dashboard for 120 KPIs company-wide.',
    ],
    image: 'https://source.unsplash.com/800x600/?factory,robotics',
  },
  {
    company: 'Globex SaaS',
    summary: 'Built growth engine uncovering hidden expansion revenue.',
    results: '$6.4M in new ARR uncovered within first 120 days.',
    details: [
      'Customer-segmentation ML model predicted churn with 91% accuracy.',
      'Dynamic pricing algorithm boosted average contract value by 18%.',
      'Automated upsell sequences generated 3,400 SQLs in Q1.',
    ],
    image: 'https://source.unsplash.com/800x600/?saas,charts',
  },
  {
    company: 'Nimbus Logistics',
    summary: 'Unified data architecture with real-time optimization.',
    results: 'Cut delivery times 27% and fuel spend 19%.',
    details: [
      'Route-optimization AI recomputes 50k+ deliveries / hr.',
      'Driver mobile app decreased empty miles by 14%.',
      'Executive visibility increased NPS from 43 → 71.',
    ],
    image: 'https://source.unsplash.com/800x600/?logistics,map',
  },
];

export function CaseStudies() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <>
      <section id="case-studies" className="py-19 md:py-29 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-blue-600/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-5xl md:text-6xl font-bold text-white mb-16"
          >
            Case Studies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={cs.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelected(cs)}
                className="cursor-pointer bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-[var(--quantum-glow)]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all"
              >
                <img src={cs.image} alt={cs.company} className="w-full h-52 object-cover" />
                <div className="p-8 space-y-4 min-h-[200px] flex flex-col justify-between">
                  <h3 className="text-2xl font-semibold text-[var(--quantum-glow)]">
                    {cs.company}
                  </h3>
                  <p className="text-gray-300 flex-grow">{cs.summary}</p>
                  <p className="text-sm text-cyan-300 font-light">{cs.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-10 border border-[var(--quantum-glow)]/30 shadow-lg">
            <button
              aria-label="Close details"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes size={24} />
            </button>

            <img src={selected.image} alt={selected.company} className="w-full h-64 object-cover rounded-lg mb-8" />
            <h3 className="text-3xl font-bold text-[var(--quantum-glow)] mb-4">
              {selected.company}
            </h3>
            <p className="text-lg text-gray-300 mb-6">{selected.summary}</p>
            <h4 className="text-xl font-semibold text-white mb-3">Key Outcomes</h4>
            <p className="text-cyan-300 mb-6">{selected.results}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {selected.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}