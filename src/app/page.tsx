'use client';
import { motion } from 'framer-motion';
import { HeroQuantum } from '@/components/HeroQuantum';
import { ResultsStrip } from '@/components/ResultsStrip';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { FreeResource } from '@/components/FreeResource';
import { Contact } from '@/components/Contact';
import { Deliverables } from '@/components/Deliverables';

export default function Page() {
  return (
    <>
      <HeroQuantum />
      <ResultsStrip />
      <Deliverables />
      <Services />
      <Testimonials />
      <FreeResource />
      <Contact />
    </>
  );
}