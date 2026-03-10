import { Navbar } from '@/components/nav/Navbar';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutPhilosophy } from '@/components/about/AboutPhilosophy';
import { AboutDifference } from '@/components/about/AboutDifference';
import { AboutTeam } from '@/components/about/AboutTeam';
import { AboutStandards } from '@/components/about/AboutStandards';
import { AboutInternational } from '@/components/about/AboutInternational';
import { AboutCommitment } from '@/components/about/AboutCommitment';
import { AboutDigitalPartner } from '@/components/about/AboutDigitalPartner';
import { AboutCTA } from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="-mt-[88px]">
        <AboutHero />
        <AboutPhilosophy />
        <AboutDifference />
        <AboutTeam />
        <AboutStandards />
        <AboutInternational />
        <AboutCommitment />
        <AboutDigitalPartner />
        <AboutCTA />
      </main>
    </>
  );
}
