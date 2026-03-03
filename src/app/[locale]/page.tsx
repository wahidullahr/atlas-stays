import { Navbar } from '@/components/nav/Navbar';
import { Hero } from '@/components/hero/Hero';
import { PromiseStrip } from '@/components/sections/PromiseStrip';
import { ProblemGrid } from '@/components/cards/ProblemGrid';
import { CorePillars } from '@/components/sections/CorePillars';
import { ServiceGrid } from '@/components/services/ServiceGrid';
import { HowItWorks } from '@/components/process/HowItWorks';
import { CityGrid } from '@/components/cities/CityGrid';
import { FullWidthTrust } from '@/components/sections/FullWidthTrust';
import { PricingTabs } from '@/components/tabs/PricingTabs';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { CategoriesSection } from '@/components/sections/CategoriesSection';
import { CTA } from '@/components/layout/CTA';
import { ContactForm } from '@/components/forms/ContactForm';
import { JsonLdLocalBusiness } from '@/components/seo/JsonLdLocalBusiness';

export default function HomePage() {
  return (
    <>
      <JsonLdLocalBusiness />
      <Navbar />
      <main>
        <Hero />
        <PromiseStrip />
        <ProblemGrid />
        <CorePillars />
        <HowItWorks />
        <ServiceGrid />
        <CityGrid />
        <FullWidthTrust />
        <PricingTabs />
        <TestimonialsSection />
        <StatsSection />
        <CategoriesSection />
        <CTA />
        <ContactForm />
      </main>
    </>
  );
}
