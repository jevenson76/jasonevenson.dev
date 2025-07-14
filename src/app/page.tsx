'use client';
import { motion } from 'framer-motion';
import { HeroQuantum } from '@/components/HeroQuantum';
import { ResultsStrip } from '@/components/ResultsStrip';
import ContentCreationServices from '@/components/ContentCreationServices';
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
      <ContentCreationServices />
      <FreeResource />
      <Contact />
      <TestimonialsSimple />
    </>
  );
}