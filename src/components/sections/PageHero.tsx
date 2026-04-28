'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
}

export default function PageHero({ eyebrow, headline, subheadline }: PageHeroProps) {
  return (
    <section className="pt-44 pb-24" style={{ borderBottom: '1px solid #ddd0bc' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.15em] text-[13px] font-medium mb-6"
            style={{ color: '#b9a591' }}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05] mb-6"
          style={{
            fontSize: 'clamp(44px, 6vw, 88px)',
            color: '#36302a',
            fontFamily: 'var(--font-inter)',
            maxWidth: '820px',
          }}
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[18px] leading-[1.85]"
            style={{ color: '#574d3f', maxWidth: '560px' }}
          >
            {subheadline}
          </motion.p>
        )}
      </div>
    </section>
  );
}
