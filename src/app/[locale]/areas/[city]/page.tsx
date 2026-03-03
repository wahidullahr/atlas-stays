import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CTA } from '@/components/layout/CTA';
import { notFound } from 'next/navigation';

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const t = useTranslations('Areas');

  const validCities = ['marrakech', 'casablanca', 'tangier', 'agadir'];
  if (!validCities.includes(city)) {
    notFound();
  }

  const cityName = t(`cities.${city}.name`);
  const metric = t(`cities.${city}.metric`);

  return (
    <>
      <Section className="pt-16 framer:pt-24 pb-12 framer:pb-16 bg-surface/30">
        <Container className="text-center max-w-[800px] mx-auto">
          <h1 className="h1 mb-6 capitalize">{cityName}</h1>
          <p className="body-muted mb-6 max-w-[600px] mx-auto">{metric}</p>
          <p className="body-muted max-w-[600px] mx-auto">
            Short-term rental operations in {cityName}. We handle everything
            from cleaning to key exchange.
          </p>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
