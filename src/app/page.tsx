'use client';
import { motion } from 'framer-motion';
import { HeroQuantum } from '@/components/HeroQuantum';
import { ResultsStrip } from '@/components/ResultsStrip';
import Services from '@/components/Services';
import TestimonialsSimple from '@/components/TestimonialsSimple';
import { FreeResource } from '@/components/FreeResource';
import { Contact } from '@/components/Contact';
import ServiceCardsDark from '@/components/ServiceCardsDark';

export default function Page() {
  return (
    <>
      <HeroQuantum />
      <ResultsStrip />
      <ServiceCardsDark />
      <Services />
      <TestimonialsSimple />
      <FreeResource />
      <Contact />
    </>
  );
}