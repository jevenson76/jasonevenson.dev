'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  highlight: string;
  projectType: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechStyle Fashion',
      avatar: 'https://i.pravatar.cc/100?img=1',
      rating: 5,
      text: "Jason transformed our e-commerce platform beyond our wildest expectations. His strategic approach to UX and performance optimization directly contributed to a 47% increase in conversions.",
      highlight: "47% increase in conversions",
      projectType: 'E-commerce Platform'
    },
    {
      id: 'michael-torres',
      name: 'Michael Torres',
      role: 'CPO',
      company: 'DataFlow Analytics',
      avatar: 'https://i.pravatar.cc/100?img=2',
      rating: 5,
      text: "Working with Jason was a game-changer for our SaaS platform. He simplified our complex dashboard while adding powerful AI features that our users love. Support tickets dropped by 73%!",
      highlight: "73% reduction in support tickets",
      projectType: 'SaaS Dashboard'
    },
    {
      id: 'alex-rivera',
      name: 'Alex Rivera',
      role: 'Founder',
      company: 'FitLife Pro',
      avatar: 'https://i.pravatar.cc/100?img=3',
      rating: 5,
      text: "Jason didn't just build an app; he created an experience. His gamification strategies and AI coaching integration increased our daily active users by 125%. Absolutely brilliant work!",
      highlight: "125% increase in DAU",
      projectType: 'Mobile Application'
    },
    {
      id: 'emma-watson',
      name: 'Emma Watson',
      role: 'Marketing Director',
      company: 'GreenTech Solutions',
      avatar: 'https://i.pravatar.cc/100?img=4',
      rating: 5,
      text: "The website Jason created for us is a work of art that converts. Beautiful, fast, and intuitive. Our lead generation improved by 89% in the first quarter after launch.",
      highlight: "89% more qualified leads",
      projectType: 'Corporate Website'
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      role: 'CTO',
      company: 'FinanceFlow',
      avatar: 'https://i.pravatar.cc/100?img=5',
      rating: 5,
      text: "Jason's technical expertise is matched only by his business acumen. He built us a secure, scalable platform that handles millions in transactions daily. A true professional.",
      highlight: "Millions in daily transactions",
      projectType: 'Financial Platform'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it. Hear from the visionaries who trusted me with their digital transformation.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 md:p-12 border border-purple-500/20"
            >
              <FaQuoteLeft className="text-4xl text-purple-400 mb-6" />
              
              <blockquote className="text-xl md:text-2xl text-white font-light mb-8 leading-relaxed">
                {testimonials[activeIndex].text}
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[activeIndex].name)}&background=6366f1&color=ffffff&size=100`;
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block">
                  <p className="text-purple-400 font-semibold">
                    {testimonials[activeIndex].highlight}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[activeIndex].projectType}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-purple-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=ffffff&size=100`;
                    }}
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p className="text-gray-400 text-sm">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">87%</p>
              <p className="text-gray-400 text-sm">Repeat Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">250+</p>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Testimonials };