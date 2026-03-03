import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { ProcessSteps } from './ProcessSteps';
import { Link } from '@/i18n/routing';

export const TrustSteps = () => {
  const t = useTranslations('Trust');

  const steps = [
    { key: 'report', badge: '01' },
    { key: 'checklist', badge: '02' },
    { key: 'response', badge: '03' },
  ].map(({ key, badge }) => ({
    badge,
    title: t(`proofs.${key}`),
  }));

  return (
    <Section className="bg-surface/30">
      <Container>
        <div className="mb-10 framer:mb-12 text-center">
          <h2 className="h2 max-w-[600px] mx-auto">{t('title')}</h2>
        </div>
        <ProcessSteps steps={steps} layout="grid" />
        <div className="mt-10 framer:mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
          >
            {t('cta')}
          </Link>
        </div>
      </Container>
    </Section>
  );
};
