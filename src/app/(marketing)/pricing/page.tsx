import PageHero from '@/components/sections/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import Link from 'next/link';
import { SCHEDULE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Pricing — Sparrows Financial',
  description: 'Transparent, flat-fee financial planning. No commissions. No surprises.',
};

const tiers = [
  {
    name: 'Comprehensive Planning',
    price: '$X,XXX',
    cadence: 'per year',
    description:
      'Full financial plan covering retirement, investments, tax strategy, insurance, and estate planning. Ongoing access and quarterly check-ins included.',
    features: [
      'Complete financial plan',
      'Investment management',
      'Tax planning',
      'Insurance review',
      'Quarterly meetings',
      'Unlimited email access',
    ],
  },
  {
    name: 'One-Time Planning',
    price: '$X,XXX',
    cadence: 'one-time',
    description:
      'A comprehensive one-time financial plan for those who want a clear roadmap but prefer to implement on their own.',
    features: [
      'Complete financial plan',
      'One planning session',
      'Written recommendations',
      'Implementation guidance',
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        headline="Flat fees. Full transparency."
        subheadline="We are a fee-only firm. You pay us directly — no commissions, no conflicts of interest."
      />

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="p-10 rounded-2xl"
                style={{ border: '1px solid #ddd0bc' }}
              >
                <p
                  className="uppercase tracking-[0.15em] text-[12px] font-medium mb-4"
                  style={{ color: '#b9a591' }}
                >
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className="font-black text-[48px] leading-none"
                    style={{ color: '#36302a', fontFamily: 'var(--font-inter)' }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-[16px]" style={{ color: '#b9a591' }}>
                    {tier.cadence}
                  </span>
                </div>
                <p className="text-[16px] leading-[1.85] mb-8" style={{ color: '#574d3f' }}>
                  {tier.description}
                </p>
                <ul className="flex flex-col gap-3 mb-10">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[15px]" style={{ color: '#574d3f' }}>
                      <span style={{ color: '#c4715a', fontWeight: 600 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={SCHEDULE_URL}
                  className="inline-block px-8 py-3.5 rounded-full text-[15px] font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: '#c4715a' }}
                >
                  Schedule a Call
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-[640px]" style={{ borderTop: '1px solid #ddd0bc' }}>
            <div className="pt-12">
              <p
                className="uppercase tracking-[0.15em] text-[13px] font-medium mb-4"
                style={{ color: '#b9a591' }}
              >
                A note on fees
              </p>
              <p className="text-[17px] leading-[1.9]" style={{ color: '#574d3f' }}>
                [PLACEHOLDER — fee philosophy note. Why fee-only matters. What conflicts of interest
                look like in practice. Why Chris chose this model.]
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
