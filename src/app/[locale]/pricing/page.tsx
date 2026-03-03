import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PricingTabs } from '@/components/tabs/PricingTabs';
import { CTA } from '@/components/layout/CTA';

export default function PricingPage() {
  const t = useTranslations('Pricing');

  return (
    <>
      <Section className="pt-16 framer:pt-24 pb-12 framer:pb-16 bg-surface/30">
        <Container className="text-center max-w-[800px] mx-auto">
          <h1 className="h1 mb-6">{t('title')}</h1>
          <p className="body-muted mb-8 max-w-[600px] mx-auto">
            Transparent pricing for every stage of your hosting journey.
          </p>
        </Container>
      </Section>
      <PricingTabs />
      <CTA />
    </>
  );
}
