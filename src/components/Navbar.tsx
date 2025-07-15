'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { name: 'Services', href: '#services' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on scroll so it doesn\'t remain open
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-bold text-[var(--quantum-glow)]">
          JE&nbsp;AI
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="text-gray-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-black/90 md:hidden"
          >
            <div className="flex flex-col px-8 py-6 gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}