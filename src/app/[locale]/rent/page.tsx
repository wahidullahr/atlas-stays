import type { Metadata } from 'next';
import { Navbar } from '@/components/nav/Navbar';
import { RentHero } from '@/components/rent/RentHero';
import { buildMetadata } from '@/lib/metadata';
import { RentPlatforms } from '@/components/rent/RentPlatforms';
import { RentProcess } from '@/components/rent/RentProcess';
import { RentWhySection } from '@/components/rent/RentWhySection';
import { RentPropertiesSection } from '@/components/rent/RentPropertiesSection';
import { RentServices } from '@/components/rent/RentServices';
import { RentFeeTransparency } from '@/components/rent/RentFeeTransparency';
import { RentTestimonials } from '@/components/rent/RentTestimonials';
import { RentFAQ } from '@/components/rent/RentFAQ';
import { RentFinalCTA } from '@/components/rent/RentFinalCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/rent',
    title: 'Short-Term Rental',
    description:
      'Your apartment listed on Airbnb, Booking.com and more. Full management: cleaning, inspections, keys, guest support. Stress-free short-term rental operations in Morocco.',
  });
}

export default function RentPage() {
  return (
    <>
      <Navbar />
      <main className="-mt-[88px]">
        <RentHero />
        <RentPlatforms />
        <RentProcess />
        <RentWhySection />
        <RentPropertiesSection />
        <RentServices />
        <RentFeeTransparency />
        <RentTestimonials />
        <RentFAQ />
        <RentFinalCTA />
      </main>
    </>
  );
};
