'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRocket, FaCrown, FaInfinity } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

interface ServiceTier {
  name: string;
  icon: React.ReactElement;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  popular?: boolean;
}

const Services = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'project'>('project');

  const tiers: ServiceTier[] = [
    {
      name: 'Growth',
      icon: <FaRocket />,
      price: billingCycle === 'project' ? '$3,000' : '$1,200',
      period: billingCycle === 'project' ? 'per project' : 'per month',
      description: 'For growing businesses ready to streamline operations',
      features: [
        'Process automation assessment',
        'Single workflow optimization',
        'Basic AI implementation',
        '2-week delivery',
        'Knowledge transfer',
        'Performance metrics'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      icon: <FaCrown />,
      price: billingCycle === 'project' ? '$8,000' : '$3,200',
      period: billingCycle === 'project' ? 'per project' : 'per month',
      description: 'Revenue-generating AI systems for established companies',
      features: [
        'Multi-process automation',
        'Custom AI integrations',
        'Advanced analytics',
        '6-week implementation',
        'Training & documentation',
        'Ongoing support included',
        'Backed by Fortune 500 experience',
        'ROI tracking & optimization'
      ],
      highlighted: true,
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      icon: <FaInfinity />,
      price: '$25,000+',
      period: 'strategic engagement',
      description: 'C-suite strategic AI transformation partnerships',
      features: [
        'Enterprise-wide automation strategy',
        'Executive-level consulting',
        'Custom AI architecture design',
        'Change management support',
        'Phased implementation roadmap',
        'Cross-functional team training',
        'Drawing from $130M+ project experience',
        'Ongoing strategic partnership'
      ],
      cta: 'Schedule Consultation'
    }
  ];

  const addOns = [
    { name: 'Executive Strategy Sessions', price: '$2,500+' },
    { name: 'Process Automation Audit', price: '$1,500+' },
    { name: 'Team Training & Workshops', price: '$3,500+' },
    { name: 'Custom AI Development', price: '$8,000+' },
    { name: 'Ongoing Optimization', price: '$1,200/mo' }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Automation Packages
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Revenue-generating AI systems with guaranteed ROI. Choose the automation level that fits your business.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-gray-900 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'project'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                tier.highlighted
                  ? 'bg-gradient-to-b from-purple-900/50 to-blue-900/50 border-2 border-purple-500 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30'
                  : 'bg-gray-900 border border-gray-800 shadow-xl hover:shadow-2xl hover:border-gray-600'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="text-5xl mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                  <span className="text-purple-400">{tier.icon}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">{tier.name}</h3>
                <p className="text-gray-400 text-base mb-6 leading-relaxed">{tier.description}</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">{tier.price}</span>
                  <span className="text-lg text-gray-400">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {tier.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <HiSparkles className="text-4xl text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Power-Up Your Project</h3>
            <p className="text-gray-400">Add these enhancements to any tier</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
              >
                <p className="text-white font-medium text-sm mb-1">{addon.name}</p>
                <p className="text-purple-400 text-sm">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Not sure which option is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
          >
            Schedule a Free Consultation
            <FaRocket />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export { Services };