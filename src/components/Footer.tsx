'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'AI Integration', href: '#services' },
      { name: 'Consulting', href: '#services' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
      { name: 'About', href: '#about' }
    ]
  };

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/jasonevenson', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/jasonevenson', label: 'GitHub' },
    { icon: <FaTwitter />, href: 'https://twitter.com/jasonevenson', label: 'Twitter' },
    { icon: <FaEnvelope />, href: 'mailto:jason@jasonevenson.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Jason Evenson</h3>
              <p className="text-gray-400 text-sm">
                Crafting digital experiences that drive results.
              </p>
            </motion.div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Jason Evenson. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link
                href="#contact"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#about"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                About
              </Link>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
                aria-label="Back to top"
              >
                <FaArrowUp />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      </div>
    </footer>
  );
};

export { Footer };