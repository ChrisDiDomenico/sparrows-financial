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
<Philosophy />
        <EmotionalStatement />
        <Process />
        <MeetChris />
        <FAQ />
        <YouTube />
        <SparrowsProgram />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
