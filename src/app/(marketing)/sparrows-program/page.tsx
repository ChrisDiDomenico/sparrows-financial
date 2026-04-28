import PageHero from '@/components/sections/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import Link from 'next/link';
import { SCHEDULE_URL } from '@/lib/constants';

export const metadata = {
  title: 'The Sparrows Program — Sparrows Financial',
  description: 'Training the next generation of financial advisors while delivering pro-bono planning.',
};

export default function SparrowsProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="The Sparrows Program"
        headline="Raising the next generation of financial advisors."
        subheadline="A residency program that gives aspiring advisors real experience — while delivering pro-bono financial planning to those who need it most."
      />

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <p
                className="uppercase tracking-[0.15em] text-[13px] font-medium mb-8"
                style={{ color: '#b9a591' }}
              >
                For Clients
              </p>
              <h3
                className="font-black text-[32px] leading-snug mb-6"
                style={{ color: '#36302a', fontFamily: 'var(--font-inter)' }}
              >
                Get a real financial plan, completely free.
              </h3>
              <p className="text-[17px] leading-[1.9] mb-6" style={{ color: '#574d3f' }}>
                Program clients receive a comprehensive financial plan delivered by a resident
                advisor — under full supervision of a senior CFP. The work is real. The plan is
                yours to keep.
              </p>
              <p className="text-[17px] leading-[1.9] mb-10" style={{ color: '#574d3f' }}>
                [PLACEHOLDER — eligibility requirements, what to expect, how to apply.]
              </p>
              <Link
                href={SCHEDULE_URL}
                className="inline-block px-8 py-3.5 rounded-full text-[15px] font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ background: '#c4715a' }}
              >
                Apply as a Client
              </Link>
            </div>

            <div>
              <p
                className="uppercase tracking-[0.15em] text-[13px] font-medium mb-8"
                style={{ color: '#b9a591' }}
              >
                For Students
              </p>
              <h3
                className="font-black text-[32px] leading-snug mb-6"
                style={{ color: '#36302a', fontFamily: 'var(--font-inter)' }}
              >
                Get the experience no classroom can provide.
              </h3>
              <p className="text-[17px] leading-[1.9] mb-6" style={{ color: '#574d3f' }}>
                Residents work directly with real clients on real plans — supervised by Chris and
                the Sparrows team. You will leave the program with experience, a portfolio, and a
                network.
              </p>
              <p className="text-[17px] leading-[1.9] mb-10" style={{ color: '#574d3f' }}>
                [PLACEHOLDER — application requirements, what the residency looks like, outcomes
                from past residents.]
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:bg-[#c4715a] hover:text-white"
                style={{ border: '2px solid #c4715a', color: '#c4715a' }}
              >
                Apply as a Resident
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <p
            className="uppercase tracking-[0.15em] text-[13px] font-medium mb-6"
            style={{ color: '#b9a591' }}
          >
            Our Philosophy
          </p>
          <blockquote
            className="text-[22px] leading-[1.65] italic mb-6"
            style={{ color: '#574d3f' }}
          >
            &ldquo;[PLACEHOLDER — Chris&apos;s quote about why he started the program and what he
            hopes it accomplishes for the profession.]&rdquo;
          </blockquote>
          <p className="font-medium" style={{ color: '#36302a' }}>— Chris DiDomenico</p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
