'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { YOUTUBE_URL } from '@/lib/constants';

const videos = [
  { title: 'How to Build a Budget That Actually Works' },
  { title: 'Roth vs Traditional IRA: Which Is Right For You?' },
];

export default function YouTube() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pb-40">
      <div style={{ borderTop: '1px solid #ddd0bc' }} />
      <div className="max-w-[1200px] mx-auto px-6 pt-24" ref={ref}>
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-[40%]"
          >
            <p
              className="uppercase tracking-[0.15em] text-[13px] font-medium mb-6"
              style={{ color: '#b9a591' }}
            >
              Education
            </p>
            <h2
              className="font-black leading-[1.05] mb-8"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                color: '#36302a',
                fontFamily: 'var(--font-inter)',
              }}
            >
              Learn from my weekly videos.
            </h2>
            <p className="text-[17px] leading-[1.9] mb-8" style={{ color: '#574d3f' }}>
              Every week I publish a new video breaking down real financial planning concepts in
              plain English. No jargon. No sales. Just honest education you can actually use.
            </p>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#c4715a' }}
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
                className="block rounded-xl overflow-hidden group transition-transform hover:-translate-y-1"
                style={{ background: '#36302a' }}
              >
                {/* Thumbnail */}
                <div
                  className="w-full"
                  style={{
                    aspectRatio: '16/9',
                    background: i === 0 ? '#4a6b8a' : '#5a6b7a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Play button */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="px-6 py-5 flex items-center justify-between">
                  <p className="font-semibold text-[16px] text-white leading-snug">{video.title}</p>
                  <span
                    className="text-[14px] font-medium ml-6 flex-shrink-0 group-hover:opacity-80 transition-opacity"
                    style={{ color: '#c4715a' }}
                  >
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
