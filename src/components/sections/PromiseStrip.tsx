'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout/Container';

export const PromiseStrip = () => {
  const t = useTranslations('PromiseStrip');

  const promises = [
    { key: 'calls' },
    { key: 'qualify' },
    { key: 'notary' },
  ] as const;

  return (
    <section className="border-y border-border bg-surface/50 py-5 framer:py-6" aria-label={t('ariaLabel')}>
      <Container>
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-4 framer:gap-0">
          {promises.map(({ key }, i) => (
            <p
              key={key}
              className={cn(
                'text-center framer:text-start text-[15px] framer:text-base text-foreground/80 font-normal framer:px-8',
                i > 0 && 'framer:border-s framer:border-border'
              )}
            >
              {t(key)}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
};
