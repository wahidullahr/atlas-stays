import { Navbar } from '@/components/nav/Navbar';
import { SellHero } from '@/components/sell/SellHero';
import { WhyChooseUs } from '@/components/sell/WhyChooseUs';
import { WhatWeDeliver } from '@/components/sell/WhatWeDeliver';
import { SalesProcess } from '@/components/sell/SalesProcess';
import { FeeTransparency } from '@/components/sell/FeeTransparency';
import { PropertiesWeRepresent } from '@/components/sell/PropertiesWeRepresent';
import { SellFAQ } from '@/components/sell/SellFAQ';
import { SellFinalCTA } from '@/components/sell/SellFinalCTA';

export default function SellPage() {
  return (
    <>
      <Navbar />
      <main className="-mt-[88px]">
        <SellHero />
        <PropertiesWeRepresent />
        <WhyChooseUs />
        <SalesProcess />
        <WhatWeDeliver />
        <FeeTransparency />
        <SellFAQ />
        <SellFinalCTA />
      </main>
    </>
  );
}
