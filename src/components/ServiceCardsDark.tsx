'use client';

// components/ServiceCardsDark.tsx - Dark theme version matching quantum aesthetic
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI-Powered Revenue Systems',
    description:
      'Custom AI solutions that directly increase your bottom line through intelligent automation and optimization.',
    benefit: 'Average 40% revenue increase within 6 months',
    features: [
      'AI sales agents that qualify leads 24/7',
      'Predictive analytics for demand forecasting',
      'Dynamic pricing optimization algorithms',
      'Automated customer lifecycle management',
      'Intelligent content generation at scale',
      'Real-time competitive intelligence',
    ],
  },
  {
    title: 'Enterprise Automation Infrastructure',
    description:
      'Mission-critical automation that eliminates operational bottlenecks and scales with your growth.',
    benefit: 'Reduce operational costs by 65% while doubling capacity',
    features: [
      'End-to-end sales pipeline automation',
      'Intelligent document processing & routing',
      'Cross-platform data synchronization',
      'Automated compliance & reporting systems',
      'Smart inventory & supply chain management',
      'Real-time performance monitoring dashboards',
    ],
  },
  {
    title: 'Data-Driven Growth Engine',
    description:
      'Advanced analytics and intelligence systems that reveal hidden profit opportunities in your business.',
    benefit: 'Identify $2M+ in untapped revenue opportunities',
    features: [
      'Customer lifetime value prediction models',
      'Churn prevention & retention automation',
      'Market opportunity identification systems',
      'Revenue attribution & optimization',
      'Predictive inventory management',
      'Executive KPI dashboards with AI insights',
    ],
  },
  {
    title: 'Enterprise-Grade Integration',
    description:
      'Seamless technology integration that connects your entire business ecosystem for maximum efficiency.',
    benefit: 'Fortune 500-level infrastructure at startup speed',
    features: [
      'CRM-ERP unified data architecture',
      'Legacy system modernization',
      'Multi-cloud infrastructure optimization',
      'Real-time business intelligence platforms',
      'Secure API ecosystem development',
      'Enterprise-grade security implementation',
    ],
  },
  {
    title: 'Custom AI Solutions',
    description:
      'Bespoke AI applications designed specifically for your industry and competitive landscape.',
    benefit: 'Proprietary AI advantage over competitors',
    features: [
      'Industry-specific AI models & algorithms',
      'Proprietary data processing pipelines',
      'Custom machine learning applications',
      'AI-powered mobile & web platforms',
      'Blockchain integration for transparency',
      'Scalable cloud-native architecture',
    ],
  },
  {
    title: 'AI Transformation Strategy',
    description:
      'Executive-level strategic guidance to position your company as an AI-first market leader.',
    benefit: 'Become the dominant AI-enabled player in your market',
    features: [
      'AI readiness assessment & roadmap',
      'Competitive advantage identification',
      'Technology stack modernization plan',
      'Team training & change management',
      'ROI measurement & optimization',
      'Innovation pipeline development',
    ],
  },
];

export default function ServiceCardsDark() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--quantum-glow)_0%,_transparent_50%)] opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-6 py-2 mb-6 border border-[var(--quantum-glow)]/30">
            <div className="w-2 h-2 bg-[var(--quantum-glow)] rounded-full animate-pulse"></div>
            <span className="text-[var(--quantum-glow)] font-medium">Enterprise Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Powered Business Transformation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop paying for consultants who deliver PowerPoints. Get <strong className="text-white">working systems</strong> that generate revenue from day one.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-[var(--quantum-glow)]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              {/* Quantum glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--quantum-glow)]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--quantum-glow)] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-4 mb-6 border border-[var(--quantum-glow)]/30">
                  <p className="text-[var(--quantum-glow)] font-semibold text-center">
                    {service.benefit}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[var(--quantum-glow)] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--quantum-glow)]/10 to-transparent rounded-tr-2xl"></div>
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
          <p className="text-gray-300 mb-6">
            Ready to see what's possible for your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105"
          >
            Schedule Your Strategy Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}