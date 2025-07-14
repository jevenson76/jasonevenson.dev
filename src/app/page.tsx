'use client';
import { motion } from 'framer-motion';
import { HeroQuantum } from '@/components/HeroQuantum';
import { ResultsStrip } from '@/components/ResultsStrip';
import ContentCreationServices from '@/components/ContentCreationServices';
import TestimonialsSimple from '@/components/TestimonialsSimple';
import { FreeResource } from '@/components/FreeResource';
import { Contact } from '@/components/Contact';

export default function Page() {
  return (
    <>
      <HeroQuantum />
      <ResultsStrip />
      <ContentCreationServices />
      <FreeResource />
      <Contact />
      <TestimonialsSimple />
    </>
  );
}