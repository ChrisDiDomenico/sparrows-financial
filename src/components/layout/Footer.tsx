'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CONTACT_EMAIL, CONTACT_LOCATION, SITE_NAME } from '@/lib/constants';

const SparrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3C10.5 3 9 3.8 8 5C7.2 5.8 6.8 7 7 8.5C5.5 8.8 4 9.8 3 11.5C2.2 12.8 2 14.5 2.5 16C3 17.5 4 18.8 5.5 19.5C5 20 4.5 20.5 4 21H7C8 21 9 20.5 10 20C10.5 20.8 11.2 21.5 12 21.8C12.8 21.5 13.5 20.8 14 20C15 20.5 16 21 17 21H20C19.5 20.5 19 20 18.5 19.5C20 18.8 21 17.5 21.5 16C22 14.5 21.8 12.8 21 11.5C20 9.8 18.5 8.8 17 8.5C17.2 7 16.8 5.8 16 5C15 3.8 13.5 3 12 3Z"
      fill="currentColor"
    />
    <circle cx="9.5" cy="7.5" r="1" fill="#36302a" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer style={{ background: '#36302a' }}>
      <div style={{ borderTop: '2px solid #c4715a' }}>
        <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
          {/* Top section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
            {/* Logo + tagline */}
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-4" style={{ color: '#b9a591' }}>
                <SparrowIcon />
                <span className="font-semibold text-[15px]">{SITE_NAME}</span>
              </Link>
              <p className="text-[14px] leading-relaxed max-w-xs" style={{ color: '#b9a591', opacity: 0.7 }}>
                Fee-only financial planning built around your life.
              </p>
            </div>

            {/* Newsletter */}
            <div className="max-w-sm w-full">
              <p className="font-semibold text-[17px] mb-1 text-white">Get weekly insights.</p>
              <p className="text-[14px] mb-5" style={{ color: '#b9a591' }}>
                Financial planning tips, delivered free every week.
              </p>
              {submitted ? (
                <p className="text-[14px]" style={{ color: '#c4715a' }}>
                  You&apos;re in. Talk soon. ✓
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-2.5 rounded-full text-[14px] outline-none focus:ring-2 focus:ring-[#c4715a]/40"
                    style={{
                      background: 'rgba(240,232,219,0.12)',
                      color: '#f0e8db',
                      border: '1px solid rgba(185,165,145,0.3)',
                    }}
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: '#c4715a' }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-8" style={{ background: 'rgba(185,165,145,0.2)' }} />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px]" style={{ color: '#b9a591', opacity: 0.7 }}>
            <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>·</span>
              <Link href="/form-adv" className="hover:text-white transition-colors">Form ADV</Link>
              <span>·</span>
              <Link href="/disclosures" className="hover:text-white transition-colors">Disclosures</Link>
            </div>
            <p>{CONTACT_EMAIL} · {CONTACT_LOCATION}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
