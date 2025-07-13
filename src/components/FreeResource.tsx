'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCheckCircle } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const FreeResource = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  const benefits = [
    '10 AI tools that save hours daily',
    'Step-by-step automation workflows',
    'Real case studies with ROI data',
    'Exclusive prompts and templates',
    'Future updates included free'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl p-8 md:p-12 border border-purple-500/20 backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6"
            >
              <HiLightningBolt className="text-4xl text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Free AI Automation Playbook
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover how top companies are using AI to 10x their productivity. 
              Get the exact tools and workflows I use with my $50k+ clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                What's Inside:
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 border-2 border-gray-900"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  Join 2,847+ professionals already using this playbook
                </p>
              </div>
            </div>

            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <FaDownload />
                        Get Free Playbook
                      </>
                    )}
                  </motion.button>
                  <p className="text-xs text-gray-500 text-center">
                    No spam. Unsubscribe anytime. Your data is secure.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <FaCheckCircle className="text-4xl text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Check Your Email!
                  </h3>
                  <p className="text-gray-300">
                    Your AI Automation Playbook is on its way to {email}
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    Didn't receive it? Check your spam folder or{' '}
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      try again
                    </button>
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Instant Download
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                No Credit Card Required
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                GDPR Compliant
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { FreeResource };