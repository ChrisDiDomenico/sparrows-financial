import PageHero from '@/components/sections/PageHero';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata = {
  title: 'FAQ — Sparrows Financial',
  description: 'Answers to the most common questions about working with Sparrows Financial.',
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        headline="Your questions, answered."
        subheadline="The most common things people ask before they reach out."
      />
      <FAQ />
      <FinalCTA />
    </>
  );
}
