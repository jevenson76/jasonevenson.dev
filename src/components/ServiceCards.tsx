'use client';

// components/ServiceCards.tsx
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

export default function ServiceCards() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{service.description}</p>
          <p className="text-sm font-semibold text-blue-600 mb-3">{service.benefit}</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {service.features.map((feature, featureIdx) => (
              <li key={featureIdx}>{feature}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}