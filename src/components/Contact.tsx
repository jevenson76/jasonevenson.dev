'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaCalendar, FaPaperPlane } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Process Automation',
    'AI Chatbot',
    'Sales Funnel Optimization',
    'Lead Scoring System',
    'Customer Service AI',
    'Data Analytics AI',
    'Custom AI Solution',
    'Other'
  ];

  const budgetRanges = [
    'Under $10k',
    '$10k - $25k',
    '$25k - $50k',
    '$50k - $100k',
    '$100k+'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 10,
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
            Let's Automate Your Revenue Growth
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can increase your revenue by 340%.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-8">
                I specialize in building AI systems that generate measurable revenue increases and save 40+ hours per week.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:jason@jasonevenson.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-purple-400" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-500">jason@jasonevenson.com</p>
                </div>
              </a>

              <a
                href="https://calendly.com/jasonevenson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <FaCalendar className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">Schedule a Call</p>
                  <p className="text-sm text-gray-500">Free Revenue Audit</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <HiLocationMarker className="text-green-400" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-gray-500">Remote (USA Based)</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 mb-4">Connect on social:</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/jasonevenson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/jasonevenson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com/jasonevenson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your current processes, revenue goals, and automation opportunities..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-12 text-center border border-purple-500/20"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <FaPaperPlane className="text-3xl text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      projectType: '',
                      budget: '',
                      timeline: '',
                      message: ''
                    });
                  }}
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Contact };