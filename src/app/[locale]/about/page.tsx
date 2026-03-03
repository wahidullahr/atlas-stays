import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CTA } from '@/components/layout/CTA';

export default function AboutPage() {
  const t = useTranslations('Nav');

  return (
    <>
      <Section className="pt-16 framer:pt-24 pb-12 framer:pb-16 bg-surface/30">
        <Container className="text-center max-w-[800px] mx-auto">
          <h1 className="h1 mb-6">{t('about')}</h1>
          <p className="body-muted mb-8 max-w-[600px] mx-auto">
            AtlasStays is built for remote owners who need a reliable partner on
            the ground.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid grid-cols-1 framer:grid-cols-2 gap-10 framer:gap-12 items-center">
            <div>
              <h2 className="h2 mb-6">Our Mission</h2>
              <p className="body-muted mb-4">
                To provide stress-free short-term rental management for owners
                who are not physically present.
              </p>
              <p className="body-muted">
                We focus on transparency, reliability, and quality. No hidden
                fees, no surprises.
              </p>
            </div>
            <div className="bg-surface h-[320px] framer:h-[400px] rounded-lg" />
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
