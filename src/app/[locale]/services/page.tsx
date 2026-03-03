import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ServiceGrid } from '@/components/services/ServiceGrid';
import { CTA } from '@/components/layout/CTA';

export default function ServicesPage() {
  const t = useTranslations('Services');

  return (
    <>
      <Section className="pt-16 framer:pt-24 pb-12 framer:pb-16 bg-surface/30">
        <Container className="text-center max-w-[800px] mx-auto">
          <h1 className="h1 mb-6">{t('title')}</h1>
          <p className="body-muted mb-8 max-w-[600px] mx-auto">
            Comprehensive operations for your short-term rental.
          </p>
        </Container>
      </Section>
      <ServiceGrid />
      <CTA />
    </>
  );
}
