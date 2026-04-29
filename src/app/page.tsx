import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import EmotionalStatement from '@/components/sections/EmotionalStatement';
import Process from '@/components/sections/Process';
import MeetChris from '@/components/sections/MeetChris';
import FAQ from '@/components/sections/FAQ';
import YouTube from '@/components/sections/YouTube';
import SparrowsProgram from '@/components/sections/SparrowsProgram';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div
          className="flex flex-col px-6 pb-24"
          style={{ gap: '48px', paddingTop: '48px', background: '#b9a591' }}
        >
          {/* 1 — Philosophy: bone */}
          <div className="rounded-3xl overflow-hidden" style={{ background: '#ede4da' }}>
            <Philosophy />
          </div>

          {/* 2 — Emotional Statement: sage green */}
          <div className="rounded-3xl overflow-hidden" style={{ background: '#7e9e6b' }}>
            <EmotionalStatement dark />
          </div>

          {/* 3 — Process: dark brown */}
          <div className="rounded-3xl overflow-hidden" style={{ background: '#36302a' }}>
            <Process dark />
          </div>

          {/* 4 — Meet Chris: slate blue */}
          <div className="rounded-3xl overflow-hidden" style={{ background: '#6b8fa3' }}>
            <MeetChris dark />
          </div>

          {/* 5 — FAQ: purple */}
          <div className="rounded-3xl overflow-hidden" style={{ background: '#8b7aaa' }}>
            <FAQ dark />
          </div>

          {/* 6 — YouTube: umber */}
          <div className="rounded-3xl overflow-hidden" style={{ background: '#574d3f' }}>
            <YouTube dark />
          </div>

          {/* 7 — Sparrows Program: forest green */}
          <div className="rounded-3xl overflow-hidden" style={{ background: '#4a6741' }}>
            <SparrowsProgram />
          </div>

          {/* 8 — Final CTA: terracotta */}
          <div className="rounded-3xl overflow-hidden" style={{ background: '#c4715a' }}>
            <FinalCTA />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
