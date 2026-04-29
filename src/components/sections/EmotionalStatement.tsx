'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SCHEDULE_URL } from '@/lib/constants';

export default function EmotionalStatement({ dark }: { dark?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="max-w-[720px] mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05]"
          style={{
            fontSize: 'clamp(40px, 5vw, 68px)',
            color: dark ? '#ffffff' : '#36302a',
            fontFamily: 'var(--font-inter)',
            marginBottom: '32px',
          }}
        >
          We want you to walk away feeling great.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: '18px',
            lineHeight: 1.9,
            color: dark ? 'rgba(255,255,255,0.88)' : '#574d3f',
            marginBottom: '48px',
          }}
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
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              borderRadius: '9999px',
              fontSize: '15px',
              fontWeight: 600,
              border: `2px solid ${dark ? 'rgba(255,255,255,0.8)' : '#c4715a'}`,
              color: dark ? '#ffffff' : '#c4715a',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            See if you&apos;re a fit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
