'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCHEDULE_URL, YOUTUBE_URL } from '@/lib/constants';

const SparrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3C10.5 3 9 3.8 8 5C7.2 5.8 6.8 7 7 8.5C5.5 8.8 4 9.8 3 11.5C2.2 12.8 2 14.5 2.5 16C3 17.5 4 18.8 5.5 19.5C5 20 4.5 20.5 4 21H7C8 21 9 20.5 10 20C10.5 20.8 11.2 21.5 12 21.8C12.8 21.5 13.5 20.8 14 20C15 20.5 16 21 17 21H20C19.5 20.5 19 20 18.5 19.5C20 18.8 21 17.5 21.5 16C22 14.5 21.8 12.8 21 11.5C20 9.8 18.5 8.8 17 8.5C17.2 7 16.8 5.8 16 5C15 3.8 13.5 3 12 3Z"
      fill="currentColor"
    />
    <circle cx="9.5" cy="7.5" r="1" fill="#b9a591" />
  </svg>
);

const ResourcesMenu = () => (
  <div
    style={{
      background: '#faf6f0',
      borderTop: '1px solid #ddd0bc',
      boxShadow: '0 24px 60px rgba(54,48,42,0.10)',
    }}
    className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] py-10 px-10 rounded-b-2xl z-50"
  >
    <div className="grid grid-cols-2 gap-8">
      <div>
        <p className="uppercase tracking-[0.15em] text-[11px] font-medium mb-5" style={{ color: '#b9a591' }}>
          Learn
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/blog" className="text-[17px] font-medium hover:text-[#c4715a] transition-colors" style={{ color: '#36302a' }}>
            Blog
          </Link>
          <Link href="/faq" className="text-[17px] font-medium hover:text-[#c4715a] transition-colors" style={{ color: '#36302a' }}>
            FAQ
          </Link>
          <Link href="/who-we-serve" className="text-[17px] font-medium hover:text-[#c4715a] transition-colors" style={{ color: '#36302a' }}>
            Who We Serve
          </Link>
        </div>
      </div>
      <div>
        <div className="rounded-xl p-6 h-full flex flex-col justify-between" style={{ background: '#c4715a' }}>
          <div>
            <p className="text-white font-semibold text-[18px] leading-snug mb-2">Watch on YouTube</p>
            <p className="text-[13px] leading-relaxed mb-5 text-white/80">
              Weekly financial planning videos, free.
            </p>
          </div>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium text-[14px] hover:opacity-80 transition-opacity"
          >
            Watch Now →
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'resources' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = (menu: 'resources') => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(250,246,240,0.95)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 #ddd0bc, 0 4px 20px rgba(54,48,42,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" style={{ color: '#36302a' }}>
          <span className="group-hover:text-[#c4715a] transition-colors">
            <SparrowIcon />
          </span>
          <span className="font-semibold text-[16px] tracking-tight" style={{ fontFamily: 'var(--font-inter)' }}>
            Sparrows Financial
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Resources dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openMenu('resources')}
            onMouseLeave={scheduleClose}
          >
            <button
              className="flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-[#c4715a]"
              style={{ color: '#36302a' }}
              onClick={() => setActiveMenu(activeMenu === 'resources' ? null : 'resources')}
            >
              Resources
              <svg className="w-3.5 h-3.5 mt-0.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {activeMenu === 'resources' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  onMouseEnter={() => openMenu('resources')}
                  onMouseLeave={scheduleClose}
                >
                  <ResourcesMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href={SCHEDULE_URL}
            className="px-6 py-3 rounded-full text-[15px] font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: '#c4715a' }}
          >
            See if you&apos;re a fit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: '#36302a',
              transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: '#36302a',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: '#36302a',
              transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-30 flex flex-col pt-20 px-8 pb-12 overflow-y-auto"
            style={{ background: '#b9a591' }}
          >
            <nav className="flex flex-col gap-6 text-[28px] font-bold" style={{ color: '#36302a' }}>
              <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
              <Link href="/who-we-serve" onClick={() => setMobileOpen(false)}>Who We Serve</Link>
            </nav>
            <div className="mt-auto pt-10">
              <Link
                href={SCHEDULE_URL}
                onClick={() => setMobileOpen(false)}
                className="block text-center px-8 py-4 rounded-full text-[16px] font-semibold text-white"
                style={{ background: '#c4715a' }}
              >
                See if you&apos;re a fit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
