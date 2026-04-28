'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SparrowsProgram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.15em] text-[13px] font-medium mb-6"
          style={{ color: '#c4715a' }}
        >
          The Sparrows Program
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05] mb-8"
          style={{
            fontSize: 'clamp(36px, 4.5vw, 60px)',
            color: '#ffffff',
            fontFamily: 'var(--font-inter)',
            maxWidth: '720px',
          }}
        >
          Raising the next generation of financial advisors.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[17px] leading-[1.9] mb-12"
          style={{ color: '#b9a591', maxWidth: '640px' }}
        >
          The Sparrows Program trains university students as financial planning residents — under
          full senior advisor supervision — while delivering pro-bono planning to clients who need
          it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="/contact"
            className="text-[15px] font-medium hover:opacity-70 transition-opacity"
            style={{ color: '#c4715a' }}
          >
            Get involved as a client →
          </Link>
          <Link
            href="/sparrows-program"
            className="text-[15px] font-medium hover:opacity-70 transition-opacity"
            style={{ color: '#c4715a' }}
          >
            Learn about the program →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
