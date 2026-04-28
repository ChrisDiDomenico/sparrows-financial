'use client';

import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { FAQ_TABS } from '@/lib/constants';

export default function FAQ() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pb-40">
      <div style={{ borderTop: '1px solid #ddd0bc' }} />
      <div className="max-w-[1200px] mx-auto px-6 pt-24" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[1.05] mb-16"
          style={{
            fontSize: 'clamp(36px, 4.5vw, 60px)',
            color: '#36302a',
            fontFamily: 'var(--font-inter)',
          }}
        >
          Here&apos;s what people are asking.
        </motion.h2>

        {/* Tab nav */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-0 mb-16"
          style={{ borderBottom: '1px solid #ddd0bc' }}
        >
          {FAQ_TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative px-0 pb-4 mr-8 text-[15px] font-medium transition-colors"
              style={{ color: active === i ? '#36302a' : '#b9a591' }}
            >
              {tab.label}
              {active === i && (
                <motion.div
                  layoutId="faq-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: '#c4715a' }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Answer */}
        <div style={{ maxWidth: '700px' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17px] leading-[1.9]"
              style={{ color: '#574d3f' }}
            >
              {FAQ_TABS[active].answer}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
