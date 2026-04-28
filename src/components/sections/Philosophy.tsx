'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pb-40">
      <div style={{ borderTop: '1px solid #ddd0bc' }} />
      <div className="max-w-[1200px] mx-auto px-6 pt-24" ref={ref}>
        <div className="flex flex-col md:flex-row md:gap-16 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-[45%]"
          >
            <h2
              className="font-black leading-[1.05]"
              style={{
                fontSize: 'clamp(44px, 5vw, 68px)',
                color: '#36302a',
                fontFamily: 'var(--font-inter)',
              }}
            >
              We don&apos;t do cookie-cutter financial advice.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-[55%] flex flex-col gap-6"
          >
            <p className="text-[17px] leading-[1.9]" style={{ color: '#574d3f' }}>
              Our process starts with your life and is guided by your values — so we can craft a
              plan that&apos;s truly yours.
            </p>
            <p className="text-[17px] leading-[1.9]" style={{ color: '#574d3f' }}>
              Most advisors focus on your portfolio. We start with your life — your goals, your
              values, your timeline. The numbers follow the story, not the other way around.
            </p>
            <p className="text-[17px] leading-[1.9]" style={{ color: '#574d3f' }}>
              [PLACEHOLDER — personal philosophy paragraph about the conviction behind our approach
              and what makes Sparrows Financial different from a traditional advisory firm.]
            </p>
            <div className="mt-2">
              <Link
                href="/process"
                className="text-[15px] font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#c4715a' }}
              >
                See how we work →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
