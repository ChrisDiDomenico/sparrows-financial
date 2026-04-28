import PageHero from '@/components/sections/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import Link from 'next/link';

export const metadata = {
  title: 'Blog — Sparrows Financial',
  description: 'Financial planning insights, written in plain English.',
};

const posts = [
  {
    date: 'April 2026',
    category: 'Retirement',
    title: 'Why Most Retirement Calculators Are Lying to You',
    excerpt:
      'The assumptions baked into most online retirement calculators are dangerously optimistic. Here\'s what to watch out for.',
    slug: '#',
  },
  {
    date: 'March 2026',
    category: 'Investing',
    title: 'The One Investment Decision That Actually Matters',
    excerpt:
      'Asset allocation gets all the attention, but there\'s a simpler lever most investors overlook that drives more of your outcome.',
    slug: '#',
  },
  {
    date: 'March 2026',
    category: 'Tax Planning',
    title: 'Roth Conversions: When They Make Sense (and When They Don\'t)',
    excerpt:
      'Roth conversions are powerful, but the timing and amount matter enormously. Walk through the decision with me.',
    slug: '#',
  },
  {
    date: 'February 2026',
    category: 'Planning',
    title: 'How to Build a Budget That Doesn\'t Feel Like a Prison',
    excerpt:
      'Most budgets fail because they\'re built around restriction. Here\'s a framework that actually works long-term.',
    slug: '#',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        headline="Financial clarity, written for real people."
        subheadline="No jargon. No sales. Just honest, actionable insights."
      />

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col">
            {posts.map((post, i) => (
              <Link
                key={i}
                href={post.slug}
                className="group py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4 hover:opacity-80 transition-opacity"
                style={{ borderTop: '1px solid #ddd0bc' }}
              >
                <div className="md:w-[15%]">
                  <p className="text-[13px]" style={{ color: '#b9a591' }}>{post.date}</p>
                  <p
                    className="text-[13px] uppercase tracking-[0.1em] font-medium mt-1"
                    style={{ color: '#c4715a' }}
                  >
                    {post.category}
                  </p>
                </div>
                <div className="md:w-[80%]">
                  <h2
                    className="font-bold text-[22px] mb-3 leading-snug group-hover:text-[#c4715a] transition-colors"
                    style={{ color: '#36302a' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[16px] leading-[1.8]" style={{ color: '#574d3f' }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
