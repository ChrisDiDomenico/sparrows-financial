'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CX = 460;
const CY = 480;
const R = 240;        // main circle radius
const DOT_R = 264;    // centre of number dots (just outside circle)
const LABEL_R = 312;  // where label text anchors
const INNER_R = 88;   // where radial lines start (keeps centre clear)

const MONTHS: { lines: string[] }[] = [
  { lines: ['Discovery Call'] },
  { lines: ['Build Your Plan'] },
  { lines: ['Plan Delivery'] },
  { lines: ['First Check-in'] },
  { lines: ['Tax Strategy', 'Review'] },
  { lines: ['Mid-Year Review'] },
  { lines: ['Investment', 'Check-in'] },
  { lines: ['Life Planning', 'Check-in'] },
  { lines: ['Insurance Review'] },
  { lines: ['Progress Update'] },
  { lines: ['Year-End Tax', 'Planning'] },
  { lines: ['Annual Review &', 'Goal Setting'] },
];

// Clockwise arrows sit between milestones at +45° offsets
const ARROW_ANGLES_DEG = [-45, 45, 135, 225];

function toRad(deg: number) {
  return deg * (Math.PI / 180);
}

export default function ClientJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const months = MONTHS.map(({ lines }, i) => {
    const deg = -90 + i * 30;
    const rad = toRad(deg);
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    // text-anchor depends on left / right / top-bottom
    const anchor: 'start' | 'end' | 'middle' = cos > 0.28 ? 'start' : cos < -0.28 ? 'end' : 'middle';
    return {
      lines,
      number: i + 1,
      rad,
      dotX: CX + DOT_R * cos,
      dotY: CY + DOT_R * sin,
      labelX: CX + LABEL_R * cos,
      labelY: CY + LABEL_R * sin,
      lineX1: CX + INNER_R * cos,
      lineY1: CY + INNER_R * sin,
      lineX2: CX + (R - 4) * cos,
      lineY2: CY + (R - 4) * sin,
      anchor,
    };
  });

  const arrows = ARROW_ANGLES_DEG.map((deg) => {
    const rad = toRad(deg);
    return {
      x: CX + R * Math.cos(rad),
      y: CY + R * Math.sin(rad),
      // rotate(deg + 180) aligns upward triangle tip → clockwise tangent direction
      rot: deg + 180,
    };
  });

  return (
    <section style={{ padding: '80px 0', background: '#b9a591' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }} ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontSize: '13px',
            fontWeight: 500,
            color: '#36302a',
            opacity: 0.55,
            marginBottom: '14px',
          }}
        >
          The Client Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-black"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(28px, 4vw, 52px)',
            color: '#36302a',
            fontFamily: 'var(--font-inter)',
            lineHeight: 1.05,
            marginBottom: '52px',
          }}
        >
          Your 12-month journey.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%' }}
        >
          <svg
            viewBox="0 0 920 960"
            width="100%"
            style={{ display: 'block', overflow: 'visible' }}
            aria-hidden="true"
          >
            <defs>
              {/* Subtle hand-drawn wobble filter */}
              <filter id="cj-sketch" x="-4%" y="-4%" width="108%" height="108%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.022"
                  numOctaves="3"
                  seed="11"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="2.8"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>

            {/* ── Main circle ── */}
            <motion.circle
              cx={CX} cy={CY} r={R}
              fill="none"
              stroke="#36302a"
              strokeWidth="2.8"
              strokeLinecap="round"
              filter="url(#cj-sketch)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.35, ease: 'easeInOut' }}
            />

            {/* ── Radial divider lines ── */}
            {months.map((m) => (
              <line
                key={`line-${m.number}`}
                x1={m.lineX1} y1={m.lineY1}
                x2={m.lineX2} y2={m.lineY2}
                stroke="#36302a"
                strokeWidth="1"
                strokeOpacity="0.18"
                filter="url(#cj-sketch)"
              />
            ))}

            {/* ── Clockwise arrows ── */}
            {arrows.map((a, i) => (
              <motion.g
                key={`arrow-${i}`}
                transform={`translate(${a.x},${a.y}) rotate(${a.rot})`}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.08 }}
                style={{ transformOrigin: '0px 0px' }}
              >
                <polygon points="0,-12 -8,5 8,5" fill="#c4715a" />
              </motion.g>
            ))}

            {/* ── Month dots + labels ── */}
            {months.map((m, i) => (
              <motion.g
                key={`month-${m.number}`}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.55 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: `${m.dotX}px ${m.dotY}px` }}
              >
                {/* Outer ring */}
                <circle
                  cx={m.dotX} cy={m.dotY} r={20}
                  fill="#ede4da"
                  stroke="#36302a"
                  strokeWidth="1.6"
                  filter="url(#cj-sketch)"
                />
                {/* Number */}
                <text
                  x={m.dotX}
                  y={m.dotY + 5}
                  textAnchor="middle"
                  fill="#36302a"
                  fontSize="13"
                  fontWeight="700"
                  fontFamily="var(--font-inter), system-ui, sans-serif"
                >
                  {m.number}
                </text>

                {/* Label — vertically centred for multi-line */}
                <text
                  x={m.labelX}
                  y={m.lines.length > 1 ? m.labelY - 8 : m.labelY + 5}
                  textAnchor={m.anchor}
                  fill="#36302a"
                  fontSize="13"
                  fontWeight="500"
                  fontFamily="var(--font-inter), system-ui, sans-serif"
                >
                  {m.lines.map((line, li) => (
                    <tspan key={li} x={m.labelX} dy={li === 0 ? 0 : '1.35em'}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </motion.g>
            ))}

            {/* ── Centre text ── */}
            <motion.text
              x={CX}
              y={CY - 12}
              textAnchor="middle"
              fill="#36302a"
              fontSize="21"
              fontFamily="'Neucha', cursive"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 1.3 }}
            >
              Your Financial
            </motion.text>
            <motion.text
              x={CX}
              y={CY + 16}
              textAnchor="middle"
              fill="#36302a"
              fontSize="21"
              fontFamily="'Neucha', cursive"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              Life
            </motion.text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
