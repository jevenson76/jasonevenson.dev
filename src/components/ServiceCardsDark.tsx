'use client';

// components/ServiceCardsDark.tsx - Dark theme version matching quantum aesthetic
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Revenue Systems',
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
    investment: '$25,000',
    timeline: '6-8 weeks',
  },
  {
    title: 'Process Automation',
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
    investment: '$18,000',
    timeline: '4-6 weeks',
  },
  {
    title: 'Growth Engine',
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
    investment: '$35,000',
    timeline: '8-12 weeks',
  },
  {
    title: 'Enterprise Integration',
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
    investment: '$45,000',
    timeline: '12-16 weeks',
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
    investment: '$65,000',
    timeline: '16-24 weeks',
  },
  {
    title: 'AI Strategy',
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
    investment: '$15,000',
    timeline: '4-6 weeks',
  },
];

export default function ServiceCardsDark() {
  return (
    <section className="py-19 md:py-29 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-800/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.05)_0%,_transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-19 md:mb-24"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-6 py-2 mb-6 border border-[var(--quantum-glow)]/30">
            <div className="w-2 h-2 bg-[var(--quantum-glow)] rounded-full animate-pulse"></div>
            <span className="text-[var(--quantum-glow)] font-medium">Enterprise Solutions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-7">
            AI-Powered Business Transformation
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto font-extralight">
            Stop paying for consultants who deliver PowerPoints. Get <strong className="text-white font-normal">working systems</strong> that generate revenue from day one.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 items-stretch">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-gray-900 rounded-2xl p-10 border border-gray-800 hover:border-[var(--quantum-glow)]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] flex flex-col justify-between h-full"
            >
              {/* Quantum glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--quantum-glow)]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Top section - Title, Description, Benefit */}
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-7 group-hover:text-[var(--color-primary)] transition-colors leading-tight text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-xl text-gray-200 mb-7 leading-relaxed font-extralight">
                    {service.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-cyan-400/30 to-cyan-500/20 rounded-lg p-5 mb-7 border border-cyan-400/50">
                    <p className="text-lg text-cyan-100 font-light text-center">
                      {service.benefit}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-7">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[var(--quantum-glow)] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-200 text-base leading-relaxed font-extralight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Bottom section - Investment & Timeline */}
                <div className="flex justify-between items-center pt-7 border-t border-gray-800 mt-auto">
                  <div className="text-center">
                    <div className="text-3xl font-light text-white">{service.investment}</div>
                    <div className="text-base text-gray-400 font-extralight">Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-[var(--quantum-glow)]">{service.timeline}</div>
                    <div className="text-base text-gray-400 font-extralight">Timeline</div>
                  </div>
                </div>
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
          className="text-center mt-19 md:mt-24"
        >
          <p className="text-gray-300 mb-6">
            Ready to see what's possible for your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105"
          >
            <span className="text-xl font-bold uppercase tracking-wide">SCHEDULE YOUR STRATEGY SESSION</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}