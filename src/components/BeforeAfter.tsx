'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight, FaChartLine, FaUsers, FaDollarSign, FaClock } from 'react-icons/fa';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    icon: React.ReactElement;
  }[];
  beforeImage: string;
  afterImage: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

const BeforeAfter = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [isComparing, setIsComparing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const caseStudies: CaseStudy[] = [
    {
      id: 'anylogic-success',
      title: 'Regional Sales Leadership at AnyLogic',
      company: 'AnyLogic North America',
      industry: 'Enterprise Software',
      challenge: 'Drive AI-enabled simulation software adoption across 20-state territory',
      solution: 'Strategic C-suite partnerships and enterprise client acquisition focus',
      results: [
        { metric: 'Regional Revenue', improvement: '+35%', icon: <FaChartLine /> },
        { metric: 'Enterprise Clients', improvement: '+40%', icon: <FaUsers /> },
        { metric: 'Annual Revenue', improvement: '+$8M', icon: <FaDollarSign /> },
        { metric: 'Sales Cycle', improvement: '-30%', icon: <FaClock /> }
      ],
      beforeImage: 'https://picsum.photos/800/600?random=1',
      afterImage: 'https://picsum.photos/800/600?random=2',
      testimonial: {
        quote: "Jason's ability to translate complex AI concepts into business value drove record-breaking sales in our region.",
        author: "AnyLogic Leadership",
        role: "Regional Management Team"
      }
    },
    {
      id: 'att-enterprise',
      title: 'AT&T Enterprise Sales Excellence',
      company: 'AT&T Business',
      industry: 'Enterprise Telecommunications',
      challenge: 'Drive enterprise solution adoption in competitive telecom market',
      solution: 'Strategic B2B sales execution and robust pipeline development',
      results: [
        { metric: 'Quarterly Targets', improvement: '+30%', icon: <FaChartLine /> },
        { metric: 'Sales Pipeline', improvement: '$17M', icon: <FaDollarSign /> },
        { metric: 'YOY Revenue', improvement: '+9%', icon: <FaUsers /> },
        { metric: 'Team Performance', improvement: 'Top Nationwide', icon: <FaClock /> }
      ],
      beforeImage: 'https://picsum.photos/800/600?random=3',
      afterImage: 'https://picsum.photos/800/600?random=4',
      testimonial: {
        quote: "Jason consistently delivered exceptional results, positioning our team as top performers with his strategic approach to enterprise sales.",
        author: "AT&T Leadership",
        role: "Regional Management"
      }
    },
    {
      id: 'wandelbots-leadership',
      title: 'Wandelbots US Go-to-Market Strategy',
      company: 'Wandelbots',
      industry: 'Robotics Automation',
      challenge: 'Launch innovative robotics software in competitive US market',
      solution: 'Strategic partnerships and consultative selling of no-code automation',
      results: [
        { metric: 'Market Penetration', improvement: 'Startup to Fortune 500', icon: <FaUsers /> },
        { metric: 'Strategic Partnerships', improvement: 'Cross-Industry', icon: <FaChartLine /> },
        { metric: 'Solution Accessibility', improvement: 'All Business Sizes', icon: <FaDollarSign /> },
        { metric: 'Technology Adoption', improvement: 'Advanced Robotics', icon: <FaClock /> }
      ],
      beforeImage: 'https://picsum.photos/800/600?random=5',
      afterImage: 'https://picsum.photos/800/600?random=6',
      testimonial: {
        quote: "Jason's leadership in our US expansion demonstrated his ability to bridge cutting-edge technology with practical business applications.",
        author: "Wandelbots Team",
        role: "Executive Leadership"
      }
    }
  ];

  const currentCase = caseStudies[selectedCase];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transformations That Matter
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real results from real projects. See how strategic design and development drive business growth.
          </p>
        </motion.div>

        {/* Case Study Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setSelectedCase(index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedCase === index
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {study.company}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Case Overview */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
                <p className="text-gray-300">{currentCase.challenge}</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">The Solution</h3>
                <p className="text-gray-300">{currentCase.solution}</p>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="relative">
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                  <button
                    onClick={() => setIsComparing(!isComparing)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    {isComparing ? 'View Side by Side' : 'Compare'}
                    <FaArrowRight />
                  </button>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-400">Before</span>
                    <span className="text-white">|</span>
                    <span className="text-purple-400">After</span>
                  </div>
                </div>

                <div className="relative h-[400px] md:h-[500px]">
                  {isComparing ? (
                    <div 
                      className="relative w-full h-full cursor-ew-resize"
                      onMouseMove={handleSliderMove}
                    >
                      {/* After Image (Background) */}
                      <div className="absolute inset-0">
                        <Image
                          src={currentCase.afterImage}
                          alt="After"
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Before Image (Foreground with clip) */}
                      <div 
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                      >
                        <Image
                          src={currentCase.beforeImage}
                          alt="Before"
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Slider Line */}
                      <div 
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="relative">
                        <Image
                          src={currentCase.beforeImage}
                          alt="Before"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white font-semibold">Before</span>
                      </div>
                      <div className="relative">
                        <Image
                          src={currentCase.afterImage}
                          alt="After"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <span className="absolute bottom-4 left-4 text-purple-400 font-semibold">After</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentCase.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl text-purple-400 mb-3">
                    {result.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {result.improvement}
                  </div>
                  <p className="text-sm text-gray-400">{result.metric}</p>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20"
            >
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "{currentCase.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                <div>
                  <p className="text-white font-semibold">{currentCase.testimonial.author}</p>
                  <p className="text-sm text-gray-400">{currentCase.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export { BeforeAfter };