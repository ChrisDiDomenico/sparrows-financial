'use client';

import PageHero from '@/components/sections/PageHero';
import { useState } from 'react';
import { CONTACT_EMAIL, CONTACT_LOCATION, SCHEDULE_URL } from '@/lib/constants';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: 'transparent',
    border: '1px solid #ddd0bc',
    color: '#36302a',
    borderRadius: '12px',
    padding: '14px 18px',
    width: '100%',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-inter)',
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        headline="Let's start a conversation."
        subheadline="The first step is easy. Book a free 30-minute call or send us a message below."
      />

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24">
            {/* Left — contact info */}
            <div>
              <p
                className="uppercase tracking-[0.15em] text-[13px] font-medium mb-8"
                style={{ color: '#b9a591' }}
              >
                Reach Out
              </p>

              <div className="flex flex-col gap-8">
                <div style={{ borderTop: '1px solid #ddd0bc' }} className="pt-6">
                  <p className="text-[14px] uppercase tracking-[0.1em] mb-2" style={{ color: '#b9a591' }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[18px] font-medium hover:text-[#c4715a] transition-colors"
                    style={{ color: '#36302a' }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div style={{ borderTop: '1px solid #ddd0bc' }} className="pt-6">
                  <p className="text-[14px] uppercase tracking-[0.1em] mb-2" style={{ color: '#b9a591' }}>
                    Location
                  </p>
                  <p className="text-[18px] font-medium" style={{ color: '#36302a' }}>
                    {CONTACT_LOCATION}
                  </p>
                  <p className="text-[15px] mt-1" style={{ color: '#574d3f' }}>
                    Serving clients nationwide
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #ddd0bc' }} className="pt-6">
                  <p className="text-[14px] uppercase tracking-[0.1em] mb-4" style={{ color: '#b9a591' }}>
                    Book a Call
                  </p>
                  <Link
                    href={SCHEDULE_URL}
                    className="inline-block px-8 py-3.5 rounded-full text-[15px] font-semibold text-white hover:opacity-90 transition-opacity"
                    style={{ background: '#c4715a' }}
                  >
                    Schedule a Free Discovery Call
                  </Link>
                  <p className="text-[13px] mt-3" style={{ color: '#b9a591' }}>
                    30 minutes · No commitment required
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <p
                className="uppercase tracking-[0.15em] text-[13px] font-medium mb-8"
                style={{ color: '#b9a591' }}
              >
                Send a Message
              </p>

              {submitted ? (
                <div className="py-12">
                  <p className="font-bold text-[24px] mb-3" style={{ color: '#36302a' }}>
                    Message received.
                  </p>
                  <p className="text-[17px] leading-[1.8]" style={{ color: '#574d3f' }}>
                    Thanks for reaching out. Chris will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-[13px] mb-2" style={{ color: '#b9a591' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="Jane Smith"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] mb-2" style={{ color: '#b9a591' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="jane@example.com"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] mb-2" style={{ color: '#b9a591' }}>
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      placeholder="Tell us a little about your situation and what you're looking for..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-full text-[15px] font-semibold text-white hover:opacity-90 transition-opacity self-start active:scale-95"
                    style={{ background: '#c4715a' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
