'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SCHEDULE_URL } from '@/lib/constants';

export default function EmotionalStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pb-40">
      <div style={{ borderTop: '1px solid #ddd0bc' }} />
      <div className="max-w-[720px] mx-auto px-6 pt-24 text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05] mb-8"
          style={{
            fontSize: 'clamp(40px, 5vw, 68px)',
            color: '#36302a',
            fontFamily: 'var(--font-inter)',
          }}
        >
          We want you to walk away feeling great.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[18px] leading-[1.9] mb-12"
          style={{ color: '#574d3f' }}
        >
          It isn&apos;t enough to provide an excellent financial plan. We want you to have total
          confidence in how it&apos;s delivered. Complete transparency. Real conversations. No sales
          tactics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={SCHEDULE_URL}
            className="inline-block px-10 py-4 rounded-full text-[15px] font-semibold transition-all hover:bg-[#c4715a] hover:text-white active:scale-95"
            style={{
              border: '2px solid #c4715a',
              color: '#c4715a',
            }}
          >
            See if you&apos;re a fit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
