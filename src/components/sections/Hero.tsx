'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SCHEDULE_URL, YOUTUBE_URL } from '@/lib/constants';

const ease = [0.22, 1, 0.36, 1] as const;

const SparrowSVG = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3C10.5 3 9 3.8 8 5C7.2 5.8 6.8 7 7 8.5C5.5 8.8 4 9.8 3 11.5C2.2 12.8 2 14.5 2.5 16C3 17.5 4 18.8 5.5 19.5C5 20 4.5 20.5 4 21H7C8 21 9 20.5 10 20C10.5 20.8 11.2 21.5 12 21.8C12.8 21.5 13.5 20.8 14 20C15 20.5 16 21 17 21H20C19.5 20.5 19 20 18.5 19.5C20 18.8 21 17.5 21.5 16C22 14.5 21.8 12.8 21 11.5C20 9.8 18.5 8.8 17 8.5C17.2 7 16.8 5.8 16 5C15 3.8 13.5 3 12 3Z"
      fill="rgba(255,255,255,0.9)"
    />
    <circle cx="9.5" cy="7.5" r="1" fill="#7e9e6b" />
  </svg>
);

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', background: '#f0e8db' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center" style={{ minHeight: '100vh' }}>
        {/* Left content */}
        <div className="relative z-10 w-full md:w-[55%] pt-28 pb-20 md:py-0 md:pr-12">
          <FadeUp delay={0}>
            <p
              className="uppercase tracking-[0.15em] text-[13px] font-medium mb-8"
              style={{ color: '#b9a591' }}
            >
              Financial advisors with heart
            </p>
          </FadeUp>

          <FadeUp delay={0.12}>
            <h1
              className="font-black leading-[1.0] mb-4 whitespace-nowrap"
              style={{
                fontSize: '80px',
                color: '#36302a',
                fontFamily: 'var(--font-inter)',
              }}
            >
              Hey, I&apos;m Chris. 👋
            </h1>
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: 1.4,
                color: '#574d3f',
                maxWidth: '500px',
              }}
            >
              I am on a mission to help you have peace and clarity with your money.
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <p
              className="text-[17px] leading-[1.85] mb-10"
              style={{ color: '#574d3f', maxWidth: '500px' }}
            >
              Financial stress isn&apos;t healed by a bigger number in your account — so let&apos;s walk through what the remedy is together.
            </p>
          </FadeUp>

          <FadeUp delay={0.36} className="flex flex-col items-start gap-4">
            <Link
              href={SCHEDULE_URL}
              className="px-9 py-4 rounded-full text-[16px] font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: '#c4715a' }}
            >
              Schedule a Free Call
            </Link>
            <p className="text-[13px]" style={{ color: '#b9a591' }}>
              Free 30-minute discovery call · No commitment required
            </p>
          </FadeUp>

          <FadeUp delay={0.48} className="mt-6">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#c4715a' }}
            >
              Watch My Videos →
            </a>
          </FadeUp>
        </div>

        {/* Right photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="hidden md:flex md:w-[45%] absolute right-0 top-0 flex-col items-center justify-center"
          style={{ height: '100vh' }}
        >
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-6"
            style={{
              background: '#7e9e6b',
              borderRadius: '0 0 0 48px',
            }}
          >
            <SparrowSVG />
            <p className="text-[13px] text-center" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Chris DiDomenico · Founder, Sparrows Financial
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
