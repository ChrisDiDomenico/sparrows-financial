import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import MeetChris from '@/components/sections/MeetChris';
import FAQ from '@/components/sections/FAQ';
import YouTube from '@/components/sections/YouTube';
import SparrowsProgram from '@/components/sections/SparrowsProgram';
import FinalCTA from '@/components/sections/FinalCTA';

const block: React.CSSProperties = {
  borderRadius: '24px',
  overflow: 'hidden',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div style={{ background: '#b9a591', display: 'flex', flexDirection: 'column', gap: '48px', padding: '48px 24px 96px' }}>

          {/* 1 — Philosophy: bone */}
          <div style={{ ...block, background: '#ede4da' }}>
            <Philosophy />
          </div>

          {/* 2 — Iceberg placeholder */}
          <div style={{ ...block, background: '#b9a591' }}>
            <div style={{ padding: '80px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                border: '2px dashed #8a7a6a',
                borderRadius: '16px',
                padding: '60px 80px',
                textAlign: 'center',
                color: '#8a7a6a',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}>
                [ Iceberg image coming soon ]
              </div>
            </div>
          </div>

{/* 4 — Meet Chris: slate blue */}
          <div style={{ ...block, background: '#6b8fa3' }}>
            <MeetChris dark />
          </div>

          {/* 5 — FAQ: purple */}
          <div style={{ ...block, background: '#8b7aaa' }}>
            <FAQ dark />
          </div>

          {/* 6 — YouTube: umber */}
          <div style={{ ...block, background: '#574d3f' }}>
            <YouTube dark />
          </div>

          {/* 7 — Sparrows Program: forest green */}
          <div style={{ ...block, background: '#4a6741' }}>
            <SparrowsProgram />
          </div>

          {/* 8 — Final CTA: terracotta */}
          <div style={{ ...block, background: '#c4715a' }}>
            <FinalCTA />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
