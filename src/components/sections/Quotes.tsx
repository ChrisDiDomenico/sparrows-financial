'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const quotes = [
  {
    text: 'Working with Chris completely changed how I think about money. For the first time I have a real plan.',
    attribution: 'Sarah M.',
  },
  {
    text: 'The process felt personal, not transactional. Chris took the time to understand our whole situation.',
    attribution: 'James & Linda T.',
  },
  {
    text: 'I came in overwhelmed. I left with a step-by-step roadmap I actually believe in.',
    attribution: 'Marcus D.',
  },
];

function Quote({ text, attribution, index }: { text: string; attribution: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-3" style={{ lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '72px',
            color: '#c4715a',
            opacity: 0.25,
            lineHeight: 1,
            display: 'block',
            marginBottom: '-16px',
          }}
        >
          &ldquo;
        </span>
      </div>
      <p
        className="text-[22px] leading-[1.65] italic mb-4"
        style={{ color: '#574d3f', fontFamily: 'var(--font-inter)' }}
      >
        {text}
      </p>
      <p className="text-[14px] font-medium" style={{ color: '#b9a591' }}>
        — {attribution}
      </p>
    </motion.div>
  );
}

export default function Quotes() {
  return (
    <section className="py-40">
      <div style={{ borderTop: '1px solid #ddd0bc' }} className="mb-0" />
      <div className="max-w-[680px] mx-auto px-6 pt-24">
        <div className="flex flex-col gap-20">
          {quotes.map((q, i) => (
            <Quote key={i} text={q.text} attribution={q.attribution} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
