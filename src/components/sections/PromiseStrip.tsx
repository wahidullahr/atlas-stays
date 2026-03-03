'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';

const PROMISE_KEYS = ['calls', 'qualify', 'notary'] as const;

export const PromiseStrip = () => {
  const t = useTranslations('PromiseStrip');

  return (
    <section
      className="bg-surface/40 py-6 framer:py-7"
      aria-label={t('ariaLabel')}
    >
      <Container>
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-4 framer:gap-8">
          {PROMISE_KEYS.map((key) => (
            <p
              key={key}
              className="text-center text-[14px] framer:text-[15px] text-fg/90 font-normal tracking-tight framer:text-center"
            >
              {t(key)}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
};
