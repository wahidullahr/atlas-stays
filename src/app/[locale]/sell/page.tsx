import { Navbar } from '@/components/nav/Navbar';
import { SellHero } from '@/components/sell/SellHero';
import { HowItWorks } from '@/components/process/HowItWorks';
import { WhyChooseUs } from '@/components/sell/WhyChooseUs';
import { SellFAQ } from '@/components/sell/SellFAQ';
import { ContactForm } from '@/components/forms/ContactForm';

export default function SellPage() {
  return (
    <>
      <Navbar />
      <main className="-mt-[88px]">
        <SellHero />
        <HowItWorks />
        <WhyChooseUs />
        <SellFAQ />
        <ContactForm />
      </main>
    </>
  );
}
