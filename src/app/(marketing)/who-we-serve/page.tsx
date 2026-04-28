import PageHero from '@/components/sections/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata = {
  title: 'Who We Serve — Sparrows Financial',
  description: "We work with people who are ready to get serious about their financial future.",
};

const profiles = [
  {
    label: 'Young Professionals',
    description:
      "You're early in your career, building income, and want to make smart decisions from the start. You want a plan, not a product.",
  },
  {
    label: 'Dual-Income Families',
    description:
      'Life is busy. Two incomes, competing goals, a mortgage, kids on the horizon. You need someone to help you prioritize and stay on track.',
  },
  {
    label: 'Pre-Retirees',
    description:
      "You're 5–15 years from retirement and want to make sure you're on the right path. The decisions you make now matter more than ever.",
  },
  {
    label: 'Business Owners',
    description:
      'Your finances are more complex than most. You need an advisor who understands both the business and the personal picture.',
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        headline="We work best with people who want a real plan."
        subheadline="Not a product. Not a pitch. A thoughtful, comprehensive financial plan built for your actual life."
      />

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {profiles.map((profile) => (
              <div key={profile.label} style={{ borderTop: '1px solid #ddd0bc' }} className="pt-8">
                <h3
                  className="font-bold text-[22px] mb-4"
                  style={{ color: '#36302a' }}
                >
                  {profile.label}
                </h3>
                <p className="text-[16px] leading-[1.85]" style={{ color: '#574d3f' }}>
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <p
            className="uppercase tracking-[0.15em] text-[13px] font-medium mb-6"
            style={{ color: '#b9a591' }}
          >
            Is this you?
          </p>
          <p className="text-[22px] leading-[1.65] mb-8 font-black" style={{ color: '#36302a', fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: 'var(--font-inter)' }}>
            If you&apos;re not sure whether we&apos;re a fit, let&apos;s find out together.
          </p>
          <p className="text-[17px] leading-[1.9]" style={{ color: '#574d3f' }}>
            [PLACEHOLDER — soft CTA paragraph. No judgment. No minimums. Just a conversation.]
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
