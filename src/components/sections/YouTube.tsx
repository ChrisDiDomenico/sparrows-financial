'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { YOUTUBE_URL } from '@/lib/constants';

const videos = [
  { title: 'How to Build a Budget That Actually Works' },
  { title: 'Roth vs Traditional IRA: Which Is Right For You?' },
];

export default function YouTube({ dark }: { dark?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const headlineColor = dark ? '#ffffff' : '#36302a';
  const bodyColor = dark ? 'rgba(255,255,255,0.82)' : '#574d3f';
  const eyebrowColor = dark ? 'rgba(255,255,255,0.55)' : '#b9a591';
  const linkColor = dark ? 'rgba(255,255,255,0.9)' : '#c4715a';

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-[40%]"
          >
            <p style={{ color: eyebrowColor, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', fontWeight: 500, marginBottom: '24px' }}>
              Education
            </p>
            <h2
              className="font-black leading-[1.05]"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                color: headlineColor,
                fontFamily: 'var(--font-inter)',
                marginBottom: '32px',
              }}
            >
              Learn from my weekly videos.
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: bodyColor, marginBottom: '32px' }}>
              Every week I publish a new video breaking down real financial planning concepts in
              plain English. No jargon. No sales. Just honest education you can actually use.
            </p>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', fontWeight: 500, color: linkColor }}
              className="hover:opacity-70 transition-opacity"
            >
              Subscribe on YouTube →
            </a>
          </motion.div>

          {/* Right — video cards */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-[60%] flex flex-col gap-6"
          >
            {videos.map((video, i) => (
              <a
                key={i}
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', background: '#36302a', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none', transition: 'transform 0.2s' }}
                className="group hover:-translate-y-1"
              >
                <div
                  style={{
                    aspectRatio: '16/9',
                    background: i === 0 ? '#4a6b8a' : '#5a6b7a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{ width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
                    className="group-hover:scale-110 transition-transform"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <p style={{ fontWeight: 600, fontSize: '16px', color: '#ffffff', lineHeight: 1.35 }}>{video.title}</p>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#c4715a', marginLeft: '24px', flexShrink: 0 }}>
                    Watch →
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
