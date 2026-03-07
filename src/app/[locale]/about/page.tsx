import { Navbar } from '@/components/nav/Navbar';
import { CityGrid } from '@/components/cities/CityGrid';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutContent } from '@/components/about/AboutContent';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="-mt-[88px]">
        <AboutHero />
        <AboutContent />
        <CityGrid />
      </main>
    </>
  );
}
