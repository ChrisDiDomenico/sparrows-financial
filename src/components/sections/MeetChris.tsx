'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SparrowSVG = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3C10.5 3 9 3.8 8 5C7.2 5.8 6.8 7 7 8.5C5.5 8.8 4 9.8 3 11.5C2.2 12.8 2 14.5 2.5 16C3 17.5 4 18.8 5.5 19.5C5 20 4.5 20.5 4 21H7C8 21 9 20.5 10 20C10.5 20.8 11.2 21.5 12 21.8C12.8 21.5 13.5 20.8 14 20C15 20.5 16 21 17 21H20C19.5 20.5 19 20 18.5 19.5C20 18.8 21 17.5 21.5 16C22 14.5 21.8 12.8 21 11.5C20 9.8 18.5 8.8 17 8.5C17.2 7 16.8 5.8 16 5C15 3.8 13.5 3 12 3Z"
      fill="rgba(255,255,255,0.85)"
    />
    <circle cx="9.5" cy="7.5" r="1" fill="#7e9e6b" />
  </svg>
);

const credentials = ['CFP® Candidate', 'Fee-Only', 'Fiduciary', 'XY Planning Network'];

export default function MeetChris() {
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
          Get to know your advisor 🤝
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.0] mb-4"
          style={{
            fontSize: 'clamp(52px, 6vw, 80px)',
            color: '#36302a',
            fontFamily: 'var(--font-inter)',
          }}
        >
          Hi. I&apos;m Chris.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-[18px] italic mb-16"
          style={{ color: '#574d3f' }}
        >
          Your friendly neighborhood financial advisor.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-[52%]"
          >
            <p className="text-[17px] leading-[1.9] mb-6" style={{ color: '#574d3f' }}>
              I started Sparrows Financial because I believe financial advice should feel like a
              conversation — not a sales pitch. Too many people leave their advisor&apos;s office
              more confused than when they arrived. That&apos;s not financial planning. That&apos;s a
              problem.
            </p>
            <p className="text-[17px] leading-[1.9] mb-10" style={{ color: '#574d3f' }}>
              [PLACEHOLDER — Chris&apos;s personal story, background, what drives him, and why he
              chose this work. Something warm, honest, and human that makes you feel like you already
              know him.]
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="px-4 py-1.5 rounded-full text-[14px] font-medium"
                  style={{
                    border: '1px solid #c4715a',
                    color: '#c4715a',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="text-[15px] font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#c4715a' }}
            >
              Read my full story →
            </Link>
          </motion.div>

          {/* Right photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-[48%]"
          >
            <div
              className="rounded-2xl flex flex-col items-center justify-center gap-6"
              style={{
                background: '#7e9e6b',
                aspectRatio: '4/5',
                maxHeight: '560px',
              }}
            >
              <SparrowSVG />
              <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Chris DiDomenico
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
