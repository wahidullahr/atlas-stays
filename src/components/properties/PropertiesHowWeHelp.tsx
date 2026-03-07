'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';

const ITEMS = ['viewings', 'qualify', 'contracts'] as const;

export const PropertiesHowWeHelp = () => {
  const t = useTranslations('Properties.howWeHelp');

  return (
    <section
      className="bg-surface/50 py-6 framer:py-8 border-t border-border/40"
      aria-label={t('ariaLabel')}
    >
      <Container className="max-w-[1200px]">
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-4 framer:gap-8 text-center">
          {ITEMS.map((key) => (
            <p
              key={key}
              className="text-[13px] framer:text-[14px] text-muted font-medium"
            >
              {t(key)}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
};
