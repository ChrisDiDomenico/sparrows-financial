'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SCHEDULE_URL } from '@/lib/constants';

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 text-center">
      <div className="max-w-[800px] mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05] mb-6 text-white"
          style={{
            fontSize: 'clamp(36px, 5vw, 68px)',
            fontFamily: 'var(--font-inter)',
          }}
        >
          See how we can help you build your best financial life.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[18px] mb-12 text-white/90"
        >
          We&apos;d love to meet you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col items-center gap-5"
        >
          <Link
            href={SCHEDULE_URL}
            className="inline-block px-10 py-4 rounded-full text-[16px] font-semibold text-white transition-all hover:bg-white hover:text-[#c4715a] active:scale-95"
            style={{ border: '2px solid rgba(255,255,255,0.9)' }}
          >
            Schedule a Call
          </Link>
          <p className="text-[13px] text-white/70">
            Free 30-minute discovery call · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
