import type { Metadata } from 'next';
import { Navbar } from '@/components/nav/Navbar';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { buildMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/contact',
    title: 'Contact',
    description:
      'Get in touch with AtlasStays. Sell, rent, or list your property in Morocco. We respond within 24 hours.',
  });
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="-mt-[88px]">
        <ContactHero />
        <ContactForm />
      </main>
    </>
  );
}
