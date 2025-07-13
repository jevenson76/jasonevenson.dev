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
              className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 border-2 border-gray-700 shadow-2xl hover:border-[var(--quantum-glow)]/60 hover:shadow-[var(--quantum-glow)]/20 transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden"
            >
              {/* Premium background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--quantum-glow)]/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--quantum-glow)] to-purple-500 rounded-2xl flex items-center justify-center text-3xl text-black shadow-xl group-hover:scale-110 transition-transform duration-300">
                      {deliverable.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--quantum-glow)] to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--quantum-glow)] transition-colors duration-300">
                      {deliverable.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {deliverable.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[var(--quantum-glow)]/20 to-purple-500/20 border border-[var(--quantum-glow)]/30 text-[var(--quantum-glow)] font-semibold">
                      💎 {deliverable.value}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white border-b border-[var(--quantum-glow)]/30 pb-2">
                    What You Get:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {deliverable.examples.map((example, exampleIndex) => (
                      <div 
                        key={exampleIndex}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-[var(--quantum-glow)] to-purple-500 rounded-full shadow-lg"></div>
                        <span className="font-medium">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Premium corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--quantum-glow)]/10 to-transparent"></div>
            
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