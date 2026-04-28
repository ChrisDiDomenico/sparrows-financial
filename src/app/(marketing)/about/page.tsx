import PageHero from '@/components/sections/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata = {
  title: 'About — Sparrows Financial',
  description: "The story behind Sparrows Financial and our commitment to honest, human-first financial advice.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        headline="Built on the belief that advice should feel like a conversation."
        subheadline="Sparrows Financial was founded to bring honest, judgment-free financial planning to people who deserve it."
      />

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <p
                className="uppercase tracking-[0.15em] text-[13px] font-medium mb-8"
                style={{ color: '#b9a591' }}
              >
                Our Mission
              </p>
              <p className="text-[17px] leading-[1.9] mb-6" style={{ color: '#574d3f' }}>
                We believe every person — regardless of their net worth — deserves a trusted advisor
                who understands their full picture. Someone who asks the right questions, listens
                deeply, and helps them build a life they actually want.
              </p>
              <p className="text-[17px] leading-[1.9]" style={{ color: '#574d3f' }}>
                [PLACEHOLDER — expanded mission statement. What drove Chris to start this firm.
                What he saw broken in the industry. The spark moment.]
              </p>
            </div>
            <div>
              <p
                className="uppercase tracking-[0.15em] text-[13px] font-medium mb-8"
                style={{ color: '#b9a591' }}
              >
                Our Values
              </p>
              <div className="flex flex-col gap-8">
                {['Transparency over commissions.', 'People over portfolios.', 'Clarity over complexity.'].map((v) => (
                  <div key={v} style={{ borderTop: '1px solid #ddd0bc' }} className="pt-6">
                    <p className="font-semibold text-[18px]" style={{ color: '#36302a' }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #ddd0bc' }} className="max-w-[1200px] mx-auto" />

      <section className="py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p
            className="uppercase tracking-[0.15em] text-[13px] font-medium mb-6"
            style={{ color: '#b9a591' }}
          >
            A Note From Chris
          </p>
          <blockquote
            className="text-[22px] leading-[1.7] italic mb-8"
            style={{ color: '#574d3f' }}
          >
            &ldquo;[PLACEHOLDER — personal letter from Chris. Warm, honest, human. About what
            drives him every day and why he started Sparrows Financial.]&rdquo;
          </blockquote>
          <p className="font-medium" style={{ color: '#36302a' }}>— Chris DiDomenico</p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
