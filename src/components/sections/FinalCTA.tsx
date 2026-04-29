'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SCHEDULE_URL } from '@/lib/constants';

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="max-w-[800px] mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05]"
          style={{
            fontSize: 'clamp(36px, 5vw, 68px)',
            fontFamily: 'var(--font-inter)',
            color: '#ffffff',
            marginBottom: '24px',
          }}
        >
          See how we can help you build your best financial life.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '48px' }}
        >
          We&apos;d love to meet you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
        >
          <Link
            href={SCHEDULE_URL}
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              borderRadius: '9999px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#ffffff',
              border: '2px solid rgba(255,255,255,0.9)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            Schedule a Call
          </Link>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
            Free 30-minute discovery call · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
