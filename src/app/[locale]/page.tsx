import { Navbar } from '@/components/nav/Navbar';
import { Hero } from '@/components/hero/Hero';
import { ExplorePropertiesSection } from '@/components/sections/ExplorePropertiesSection';
import { CorePillars } from '@/components/sections/CorePillars';
import { HowItWorks } from '@/components/process/HowItWorks';
import { MasterProcess } from '@/components/process/MasterProcess';
import { CityGrid } from '@/components/cities/CityGrid';
import { FullWidthTrust } from '@/components/sections/FullWidthTrust';


import { StatsSection } from '@/components/sections/StatsSection';


import { ContactForm } from '@/components/forms/ContactForm';
import { JsonLdLocalBusiness } from '@/components/seo/JsonLdLocalBusiness';

export default function HomePage() {
  return (
    <>
      <JsonLdLocalBusiness />
      <Navbar />
      <main className="-mt-[88px]">
        <Hero />
        <ExplorePropertiesSection />
        <CorePillars />
        <HowItWorks />
        <MasterProcess />
        <CityGrid />
        <FullWidthTrust />


        <StatsSection />


        <ContactForm />
      </main>
    </>
  );
}
