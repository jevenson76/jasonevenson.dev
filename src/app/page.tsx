'use client';
import { motion } from 'framer-motion';
import { HeroQuantum } from '@/components/HeroQuantum';
import { ResultsStrip } from '@/components/ResultsStrip';
import { SkillsOrbit } from '@/components/SkillsOrbit';
import { BeforeAfter } from '@/components/BeforeAfter';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { FreeResource } from '@/components/FreeResource';
import { Contact } from '@/components/Contact';

export default function Page() {
  return (
    <>
      <HeroQuantum />
      <ResultsStrip />
      <SkillsOrbit />
      <BeforeAfter />
      <Services />
      <Testimonials />
      <FreeResource />
      <Contact />
    </>
  );
}