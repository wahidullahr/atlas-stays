import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { HowItWorks } from '@/components/process/HowItWorks';
import { TrustSteps } from '@/components/process/TrustSteps';
import { CTA } from '@/components/layout/CTA';

export default function HowItWorksPage() {
  const t = useTranslations('HowItWorks');

  return (
    <>
      <Section className="pt-16 framer:pt-24 pb-12 framer:pb-16 bg-surface/30">
        <Container className="text-center max-w-[800px] mx-auto">
          <h1 className="h1 mb-6">{t('title')}</h1>
          <p className="body-muted mb-8 max-w-[600px] mx-auto">
            {t('description')}
          </p>
        </Container>
      </Section>
      <HowItWorks />
      <TrustSteps />
      <CTA />
    </>
  );
}
