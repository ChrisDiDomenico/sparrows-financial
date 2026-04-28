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
      'Schedule a free 30-minute discovery call. We get to know you, understand your goals, and see if we\'re a good fit. No pressure. No sales pitch.',
  },
  {
    number: '2',
    title: 'Build Your Plan',
    description:
      'We craft a comprehensive financial plan built entirely around your life — your goals, values, and timeline. Not a template. Yours.',
  },
  {
    number: '3',
    title: 'Grow Together',
    description:
      'Financial planning is ongoing. We meet regularly, track your progress, and adapt as your life evolves. Always just a call away.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pb-40">
      <div style={{ borderTop: '1px solid #ddd0bc' }} />
      <div className="max-w-[1200px] mx-auto px-6 pt-24" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.15em] text-[13px] font-medium mb-6"
          style={{ color: '#b9a591' }}
        >
          The Sparrows Method
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05] mb-6"
          style={{
            fontSize: 'clamp(40px, 5vw, 68px)',
            color: '#36302a',
            fontFamily: 'var(--font-inter)',
            maxWidth: '680px',
          }}
        >
          Simple by design. Built around your life.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-[18px] leading-[1.8] mb-20"
          style={{ color: '#574d3f', maxWidth: '520px' }}
        >
          Here&apos;s what to expect.
        </motion.p>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-[19px] top-8 bottom-16 w-px hidden md:block"
            style={{ background: '#ddd0bc' }}
          />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-8 md:gap-12"
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold"
                    style={{
                      border: '2px solid #c4715a',
                      color: '#c4715a',
                      background: '#f0e8db',
                    }}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="pb-2">
                  <h3
                    className="font-semibold text-[22px] mb-3"
                    style={{ color: '#36302a' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-[1.8]" style={{ color: '#574d3f', maxWidth: '560px' }}>
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
          className="mt-16"
        >
          <Link
            href={SCHEDULE_URL}
            className="inline-block px-9 py-4 rounded-full text-[15px] font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: '#c4715a' }}
          >
            Schedule a Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
