'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SCHEDULE_URL } from '@/lib/constants';

const steps = [
  {
    number: '1',
    title: 'Start a Conversation',
    description:
      "Schedule a free 30-minute discovery call. We get to know you, understand your goals, and see if we're a good fit. No pressure. No sales pitch.",
  },
  {
    number: '2',
    title: 'Build Your Plan',
    description:
      "We craft a comprehensive financial plan built entirely around your life — your goals, values, and timeline. Not a template. Yours.",
  },
  {
    number: '3',
    title: 'Grow Together',
    description:
      'Financial planning is ongoing. We meet regularly, track your progress, and adapt as your life evolves. Always just a call away.',
  },
];

export default function Process({ dark }: { dark?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const headlineColor = dark ? '#ffffff' : '#36302a';
  const bodyColor = dark ? 'rgba(255,255,255,0.78)' : '#574d3f';
  const lineColor = dark ? 'rgba(255,255,255,0.15)' : '#ddd0bc';
  const circleBg = dark ? 'transparent' : 'transparent';

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', fontWeight: 500, marginBottom: '24px' }}
        >
          The Sparrows Method
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05]"
          style={{
            fontSize: 'clamp(40px, 5vw, 68px)',
            color: headlineColor,
            fontFamily: 'var(--font-inter)',
            maxWidth: '680px',
            marginBottom: '24px',
          }}
        >
          Simple by design. Built around your life.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          style={{ fontSize: '18px', lineHeight: 1.8, color: bodyColor, maxWidth: '520px', marginBottom: '64px' }}
        >
          Here&apos;s what to expect.
        </motion.p>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: '19px',
              top: '32px',
              bottom: '64px',
              width: '1px',
              background: lineColor,
              display: 'none',
            }}
            className="md:block"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', gap: '48px' }}
              >
                <div style={{ flexShrink: 0 }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '15px',
                      fontWeight: 600,
                      border: '2px solid #c4715a',
                      color: '#c4715a',
                      background: circleBg,
                    }}
                  >
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '22px', color: headlineColor, marginBottom: '12px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: 1.8, color: bodyColor, maxWidth: '560px' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ marginTop: '64px' }}
        >
          <Link
            href={SCHEDULE_URL}
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              borderRadius: '9999px',
              fontSize: '15px',
              fontWeight: 600,
              color: '#ffffff',
              background: '#c4715a',
              textDecoration: 'none',
            }}
          >
            Schedule a Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
