import PageHero from '@/components/sections/PageHero';
import Process from '@/components/sections/Process';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata = {
  title: 'Our Process — Sparrows Financial',
  description: 'A clear, collaborative process designed around your life and your goals.',
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        headline="A process built around you."
        subheadline="Simple, transparent, and grounded in what matters most — your life."
      />

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px]">
            <p
              className="uppercase tracking-[0.15em] text-[13px] font-medium mb-8"
              style={{ color: '#b9a591' }}
            >
              Why process matters
            </p>
            <p className="text-[17px] leading-[1.9] mb-6" style={{ color: '#574d3f' }}>
              Most financial plans fail not because of math errors, but because they were never
              built around a real life. We start with yours.
            </p>
            <p className="text-[17px] leading-[1.9]" style={{ color: '#574d3f' }}>
              [PLACEHOLDER — deeper explanation of the Sparrows Method. Why the three-step
              framework works. What makes it different from traditional advisory processes.]
            </p>
          </div>
        </div>
      </section>

      <Process />
      <FinalCTA />
    </>
  );
}
