'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaPencilAlt, FaRobot, FaChartLine, FaInstagram, FaYoutube } from 'react-icons/fa';

interface ContentService {
  icon: React.ReactElement;
  title: string;
  description: string;
  outcome: string;
  deliverables: string[];
  investment: string;
  timeline: string;
}

const ContentCreationServices = () => {
  const services: ContentService[] = [
    {
      icon: <FaRobot />,
      title: 'AI Content Automation System',
      description: 'Complete AI-powered content creation pipeline that generates high-quality content across all platforms',
      outcome: 'Produce 30 days of content in 2 hours',
      deliverables: [
        'Custom AI content generation workflows',
        'Multi-platform content repurposing system',
        'Brand voice training & consistency',
        'Automated scheduling & distribution',
        'Performance tracking dashboard',
        'Content calendar management'
      ],
      investment: '$3,500',
      timeline: '2 weeks'
    },
    {
      icon: <FaVideo />,
      title: 'Video Content Factory',
      description: 'AI-driven video creation system for consistent, engaging video content that builds your personal brand',
      outcome: 'Create 20+ videos per week effortlessly',
      deliverables: [
        'AI video script generation',
        'Automated video editing workflows',
        'Custom thumbnail generation',
        'Multi-format video optimization',
        'YouTube & social media integration',
        'Analytics & optimization system'
      ],
      investment: '$4,200',
      timeline: '3 weeks'
    },
    {
      icon: <FaPencilAlt />,
      title: 'Newsletter & Blog Empire',
      description: 'Automated content system that builds your authority through consistent, valuable written content',
      outcome: 'Publish 3x per week with zero stress',
      deliverables: [
        'AI-powered article generation',
        'Newsletter automation system',
        'SEO optimization workflows',
        'Content distribution network',
        'Subscriber growth automation',
        'Engagement tracking & optimization'
      ],
      investment: '$2,800',
      timeline: '2 weeks'
    },
    {
      icon: <FaInstagram />,
      title: 'Social Media Domination',
      description: 'Complete social media automation that grows your following while you focus on high-value activities',
      outcome: 'Grow followers by 500% in 90 days',
      deliverables: [
        'Multi-platform posting automation',
        'AI-generated captions & hashtags',
        'Story and post templates',
        'Engagement automation system',
        'Influencer outreach workflows',
        'Growth analytics dashboard'
      ],
      investment: '$3,200',
      timeline: '2 weeks'
    },
    {
      icon: <FaYoutube />,
      title: 'YouTube Growth Engine',
      description: 'End-to-end YouTube automation system that builds your channel while you sleep',
      outcome: 'Reach 10K subscribers in 6 months',
      deliverables: [
        'AI video topic research',
        'Automated thumbnail creation',
        'SEO-optimized descriptions',
        'Comment management system',
        'Subscriber engagement automation',
        'Revenue optimization tracking'
      ],
      investment: '$4,800',
      timeline: '3 weeks'
    },
    {
      icon: <FaChartLine />,
      title: 'Content-to-Revenue Pipeline',
      description: 'Transform your content into a revenue-generating machine with automated sales funnels',
      outcome: 'Generate $10K+ monthly from content',
      deliverables: [
        'Content-based lead magnets',
        'Automated email sequences',
        'Product launch workflows',
        'Sales funnel optimization',
        'Revenue attribution tracking',
        'Customer journey automation'
      ],
      investment: '$5,500',
      timeline: '4 weeks'
    }
  ];

  return (
    <section className="py-19 md:py-29 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-19 md:mb-24"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-gray-400/20 rounded-full px-6 py-2 mb-6 border border-cyan-400/30">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-gray-300 rounded-full animate-pulse"></div>
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-gray-300 bg-clip-text font-medium">Content Creation Systems</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-7">
            Solopreneur Content Domination
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto font-extralight">
            Stop trading time for content. Get <strong className="text-white font-normal">AI-powered systems</strong> that create endless high-quality content while you focus on what matters most.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-black rounded-2xl p-10 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] flex flex-col justify-between h-full"
            >
              {/* Icon */}
              <div className="flex justify-center mb-7">
                <div className="w-19 h-19 bg-gradient-to-br from-cyan-500/20 to-gray-400/10 rounded-full flex items-center justify-center border border-cyan-400/30">
                  <div className="text-cyan-400 text-3xl">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              {/* Top section - Icon, Title, Description, Outcome */}
              <div className="flex-grow">
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-gray-300 bg-clip-text mb-5 transition-colors leading-tight text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xl text-gray-200 mb-7 leading-relaxed text-center font-extralight">
                  {service.description}
                </p>

                {/* Outcome */}
                <div className="bg-gradient-to-r from-cyan-400/30 to-cyan-500/20 rounded-lg p-5 mb-7 border border-cyan-400/50">
                  <p className="text-lg text-transparent bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text font-light text-center">
                    {service.outcome}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="mb-7">
                  <ul className="space-y-3">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-gray-300 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-200 text-base leading-relaxed font-extralight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom section - Investment & Timeline */}
              <div className="flex justify-between items-center pt-5 border-t border-gray-800 mt-auto">
                <div className="text-center">
                  <div className="text-3xl font-light text-white">{service.investment}</div>
                  <div className="text-base text-gray-400 font-extralight">Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-transparent bg-gradient-to-r from-cyan-400 to-gray-300 bg-clip-text">{service.timeline}</div>
                  <div className="text-base text-gray-400 font-extralight">Timeline</div>
                </div>
              </div>

              {/* Premium corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-tr-2xl"></div>
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
            Ready to automate your content creation and dominate your market?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-400 to-gray-300 hover:from-cyan-500 hover:to-gray-400 text-black px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105"
          >
            <span className="text-xl font-bold uppercase tracking-wide">GET YOUR CONTENT SYSTEM</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentCreationServices;