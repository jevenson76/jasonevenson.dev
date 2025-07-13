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
      icon: <FaRobot />,
      title: 'AI Development & Integration',
      description: 'Enterprise-grade AI solutions using cutting-edge APIs and frameworks',
      examples: [
        'ChatGPT & Claude API Implementation',
        'LangChain AI Agent Development',
        'Machine Learning Model Integration',
        'OpenAI API Custom Solutions',
        'Prompt Engineering & Optimization',
        'AI Strategy & Digital Transformation'
      ],
      value: 'Expert-level implementation'
    },
    {
      icon: <FaCogs />,
      title: 'Business Process Automation',
      description: 'Complete workflow automation using enterprise platforms',
      examples: [
        'Make.com & Zapier Integration',
        'N8N Workflow Development',
        'Microsoft Power Automate',
        'CRM Integration (Salesforce)',
        'Webhook & API Integration',
        'Process Mining & Optimization'
      ],
      value: 'Reduce manual work by 60%+'
    },
    {
      icon: <FaChartLine />,
      title: 'Revenue Optimization Systems',
      description: 'Data-driven solutions for sales and conversion improvement',
      examples: [
        'Sales Funnel Development',
        'ROI Analysis & Reporting',
        'Conversion Optimization',
        'Business Intelligence Dashboards',
        'Revenue Automation',
        'B2B Sales Process Enhancement'
      ],
      value: 'Measurable revenue impact'
    },
    {
      icon: <FaBuilding />,
      title: 'Enterprise Integration',
      description: 'Corporate-level technical solutions and consulting',
      examples: [
        'Enterprise Software Integration',
        'Technical Documentation',
        'Agile Project Management',
        'Data Analytics & Reporting',
        'YouTube API & Social Media',
        'Business Consulting & Strategy'
      ],
      value: 'Fortune 500 experience'
    },
    {
      icon: <FaUsers />,
      title: 'Custom Development',
      description: 'Tailored solutions built with modern technologies',
      examples: [
        'Python Development',
        'API Integration & Development',
        'Database Design & Management',
        'Cloud Solutions (DevOps)',
        'Mobile & Web Applications',
        'Blockchain & NFT Development'
      ],
      value: 'Complete technical solutions'
    },
    {
      icon: <FaFileAlt />,
      title: 'Strategic Consulting',
      description: 'Executive-level guidance for AI transformation initiatives',
      examples: [
        'Digital Transformation Planning',
        'AI Implementation Roadmaps',
        'Executive Training & Workshops',
        'Change Management Support',
        'Technology Stack Assessment',
        'ROI Projection & Analysis'
      ],
      value: 'C-suite strategic partnership'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-6 py-2 mb-6 border border-[var(--quantum-glow)]/30">
            <div className="w-2 h-2 bg-[var(--quantum-glow)] rounded-full animate-pulse"></div>
            <span className="text-[var(--quantum-glow)] font-medium">Enterprise-Grade Solutions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[var(--quantum-glow)] to-purple-400 bg-clip-text text-transparent">
              Power Up
            </span>
            <br />
            Your Revenue Engine
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stop paying for consultants who deliver PowerPoints. Get <strong className="text-white">working systems</strong> that generate revenue from day one. Built with Fortune 500 experience, delivered with startup speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl hover:border-[var(--quantum-glow)]/50 hover:shadow-2xl hover:shadow-[var(--quantum-glow)]/10 transition-all duration-300 hover:-translate-y-2"
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