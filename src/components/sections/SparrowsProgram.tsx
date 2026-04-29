'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SparrowsProgram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', fontWeight: 500, marginBottom: '24px' }}
        >
          The Sparrows Program
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05]"
          style={{
            fontSize: 'clamp(36px, 4.5vw, 60px)',
            color: '#ffffff',
            fontFamily: 'var(--font-inter)',
            maxWidth: '720px',
            marginBottom: '32px',
          }}
        >
          Raising the next generation of financial advisors.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: '17px', lineHeight: 1.9, color: 'rgba(255,255,255,0.82)', maxWidth: '640px', marginBottom: '48px' }}
        >
          The Sparrows Program trains university students as financial planning residents — under
          full senior advisor supervision — while delivering pro-bono planning to clients who need
          it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'row', gap: '32px', flexWrap: 'wrap' }}
        >
          <Link
            href="/contact"
            style={{ color: '#ffffff', fontSize: '15px', fontWeight: 500, opacity: 1 }}
            className="hover:opacity-70 transition-opacity"
          >
            Get involved as a client →
          </Link>
          <Link
            href="/sparrows-program"
            style={{ color: '#ffffff', fontSize: '15px', fontWeight: 500 }}
            className="hover:opacity-70 transition-opacity"
          >
            Learn about the program →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
