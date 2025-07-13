'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaRobot, FaBuilding, FaCogs, FaFileAlt, FaUsers } from 'react-icons/fa';

interface Deliverable {
  icon: React.ReactElement;
  title: string;
  description: string;
  examples: string[];
  value: string;
}

const Deliverables = () => {
  const deliverables: Deliverable[] = [
    {
      icon: <FaChartLine />,
      title: 'Executive AI Reports',
      description: 'Strategic analysis and ROI projections for C-suite decision making',
      examples: [
        'AI Readiness Assessment',
        'Automation Opportunity Analysis', 
        'ROI Impact Projections',
        'Implementation Roadmaps'
      ],
      value: 'Save 40+ hours of research'
    },
    {
      icon: <FaRobot />,
      title: 'Custom AI Chatbots',
      description: 'Revenue-generating conversational AI for sales and support',
      examples: [
        'Lead Qualification Bots',
        'Customer Support AI',
        'Sales Funnel Automation',
        'FAQ & Knowledge Bases'
      ],
      value: '24/7 customer engagement'
    },
    {
      icon: <FaBuilding />,
      title: 'AI Agency Systems',
      description: 'White-label AI solutions for agencies and consultants',
      examples: [
        'Client Onboarding Automation',
        'Report Generation Tools',
        'Proposal Creation Systems',
        'Performance Dashboards'
      ],
      value: 'Scale without hiring'
    },
    {
      icon: <FaCogs />,
      title: 'Business Process Automation',
      description: 'End-to-end workflow optimization with measurable outcomes',
      examples: [
        'Invoice Processing Automation',
        'CRM Data Synchronization',
        'Email Marketing Workflows',
        'Inventory Management Systems'
      ],
      value: 'Reduce manual work by 60%+'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What You Actually Get
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Tangible business tools and systems that drive immediate value. No abstract concepts—just results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-[var(--quantum-glow)]/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl text-[var(--quantum-glow)] mt-1">
                  {deliverable.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {deliverable.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {deliverable.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--quantum-glow)]/20 text-[var(--quantum-glow)] text-sm font-medium">
                    {deliverable.value}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  Examples Include:
                </h4>
                <ul className="space-y-2">
                  {deliverable.examples.map((example, exampleIndex) => (
                    <li 
                      key={exampleIndex}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--quantum-glow)]" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Ready to see what's possible for your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-black font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform"
          >
            <FaUsers />
            Schedule Your Strategy Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export { Deliverables };