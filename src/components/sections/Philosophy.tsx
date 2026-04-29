'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { x: 120,  y: 80,  label: 'Where you are today',       sub: 'We start here — with your life as it is.' },
  { x: 480,  y: 200, label: 'Clarity on your goals',      sub: 'What matters most to you, defined.' },
  { x: 200,  y: 340, label: 'Your personalized plan',     sub: 'Built around your values, not a template.' },
  { x: 560,  y: 460, label: 'Steady progress',            sub: 'We meet regularly and adapt as life changes.' },
  { x: 280,  y: 580, label: 'Financial peace of mind',    sub: 'Confidence that your future is taken care of.' },
];

// Smooth winding cubic bezier path through all 5 points
const pathD = `
  M 120 80
  C 300 80, 520 80, 480 200
  C 440 320, 100 260, 200 340
  C 300 420, 620 380, 560 460
  C 500 540, 180 500, 280 580
`;

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }} ref={ref}>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{ color: '#b9a591', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', fontWeight: 500, marginBottom: '16px' }}>
            Your Journey
          </p>
          <h2
            className="font-black leading-[1.05]"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: '#36302a',
              fontFamily: 'var(--font-inter)',
            }}
          >
            Your path to financial clarity.
          </h2>
        </motion.div>

        {/* SVG diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%', overflowX: 'auto' }}
        >
          <svg
            viewBox="0 0 700 680"
            width="100%"
            style={{ display: 'block', minWidth: '320px' }}
            aria-hidden="true"
          >
            {/* Dashed winding path — drawn first so circles sit on top */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="#ddd0bc"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
            />

            {/* Milestone nodes */}
            {milestones.map((m, i) => {
              const isRight = m.x > 350;
              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.22, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: `${m.x}px ${m.y}px` }}
                >
                  {/* Outer ring */}
                  <circle cx={m.x} cy={m.y} r={22} fill="#ede4da" stroke="#ddd0bc" strokeWidth="1.5" />
                  {/* Inner filled circle */}
                  <circle cx={m.x} cy={m.y} r={10} fill="#c4715a" />
                  {/* Step number */}
                  <text
                    x={m.x}
                    y={m.y + 4}
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="var(--font-inter), system-ui, sans-serif"
                  >
                    {i + 1}
                  </text>

                  {/* Label group — positioned left or right of circle */}
                  <g transform={`translate(${isRight ? m.x - 28 : m.x + 28}, ${m.y})`}>
                    <text
                      x={0}
                      y={-6}
                      textAnchor={isRight ? 'end' : 'start'}
                      fill="#36302a"
                      fontSize="14"
                      fontWeight="700"
                      fontFamily="var(--font-inter), system-ui, sans-serif"
                    >
                      {m.label}
                    </text>
                    <text
                      x={0}
                      y={12}
                      textAnchor={isRight ? 'end' : 'start'}
                      fill="#574d3f"
                      fontSize="12"
                      fontFamily="var(--font-inter), system-ui, sans-serif"
                    >
                      {m.sub}
                    </text>
                  </g>
                </motion.g>
              );
            })}
          </svg>
        </motion.div>

      </div>
    </section>
  );
}
