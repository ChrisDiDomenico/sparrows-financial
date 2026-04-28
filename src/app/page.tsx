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
          <div className="rounded-3xl overflow-hidden" style={{ background: '#ede4da' }}>
            <Philosophy />
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ background: '#7e9e6b' }}>
            <EmotionalStatement dark />
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ background: '#36302a' }}>
            <Process dark />
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ background: '#ede4da' }}>
            <MeetChris />
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ background: '#f7f3ec' }}>
            <FAQ />
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ background: '#574d3f' }}>
            <YouTube dark />
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ background: '#4a6741' }}>
            <SparrowsProgram />
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ background: '#c4715a' }}>
            <FinalCTA />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
