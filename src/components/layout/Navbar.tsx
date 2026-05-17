'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SparrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3C10.5 3 9 3.8 8 5C7.2 5.8 6.8 7 7 8.5C5.5 8.8 4 9.8 3 11.5C2.2 12.8 2 14.5 2.5 16C3 17.5 4 18.8 5.5 19.5C5 20 4.5 20.5 4 21H7C8 21 9 20.5 10 20C10.5 20.8 11.2 21.5 12 21.8C12.8 21.5 13.5 20.8 14 20C15 20.5 16 21 17 21H20C19.5 20.5 19 20 18.5 19.5C20 18.8 21 17.5 21.5 16C22 14.5 21.8 12.8 21 11.5C20 9.8 18.5 8.8 17 8.5C17.2 7 16.8 5.8 16 5C15 3.8 13.5 3 12 3Z"
      fill="currentColor"
    />
    <circle cx="9.5" cy="7.5" r="1" fill="#b9a591" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
