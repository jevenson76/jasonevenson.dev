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
      title: 'AI-Powered Revenue Systems',
      description: 'Custom AI solutions that directly increase your bottom line through intelligent automation and optimization',
      examples: [
        'AI sales agents that qualify leads 24/7',
        'Predictive analytics for demand forecasting',
        'Dynamic pricing optimization algorithms',
        'Automated customer lifecycle management',
        'Intelligent content generation at scale',
        'Real-time competitive intelligence'
      ],
      value: 'Average 40% revenue increase within 6 months'
    },
    {
      icon: <FaCogs />,
      title: 'Enterprise Automation Infrastructure',
      description: 'Mission-critical automation that eliminates operational bottlenecks and scales with your growth',
      examples: [
        'End-to-end sales pipeline automation',
        'Intelligent document processing & routing',
        'Cross-platform data synchronization',
        'Automated compliance & reporting systems',
        'Smart inventory & supply chain management',
        'Real-time performance monitoring dashboards'
      ],
      value: 'Reduce operational costs by 65% while doubling capacity'
    },
    {
      icon: <FaChartLine />,
      title: 'Data-Driven Growth Engine',
      description: 'Advanced analytics and intelligence systems that reveal hidden profit opportunities in your business',
      examples: [
        'Customer lifetime value prediction models',
        'Churn prevention & retention automation',
        'Market opportunity identification systems',
        'Revenue attribution & optimization',
        'Predictive inventory management',
        'Executive KPI dashboards with AI insights'
      ],
      value: 'Identify $2M+ in untapped revenue opportunities'
    },
    {
      icon: <FaBuilding />,
      title: 'Enterprise-Grade Integration',
      description: 'Seamless technology integration that connects your entire business ecosystem for maximum efficiency',
      examples: [
        'CRM-ERP unified data architecture',
        'Legacy system modernization',
        'Multi-cloud infrastructure optimization',
        'Real-time business intelligence platforms',
        'Secure API ecosystem development',
        'Enterprise-grade security implementation'
      ],
      value: 'Fortune 500-level infrastructure at startup speed'
    },
    {
      icon: <FaCogs />,
      title: 'Custom AI Solutions',
      description: 'Bespoke AI applications designed specifically for your industry and competitive landscape',
      examples: [
        'Industry-specific AI models & algorithms',
        'Proprietary data processing pipelines',
        'Custom machine learning applications',
        'AI-powered mobile & web platforms',
        'Blockchain integration for transparency',
        'Scalable cloud-native architecture'
      ],
      value: 'Proprietary AI advantage over competitors'
    },
    {
      icon: <FaUsers />,
      title: 'AI Transformation Strategy',
      description: 'Executive-level strategic guidance to position your company as an AI-first market leader',
      examples: [
        'AI readiness assessment & roadmap',
        'Competitive advantage identification',
        'Technology stack modernization plan',
        'Team training & change management',
        'ROI measurement & optimization',
        'Innovation pipeline development'
      ],
      value: 'Become the dominant AI-enabled player in your market'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                      {deliverable.value}
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
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 font-extralight">
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

export default Deliverables;