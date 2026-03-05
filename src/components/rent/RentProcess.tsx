'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';

const STEPS = [
  { key: 'list', number: '01' },
  { key: 'manage', number: '02' },
  { key: 'report', number: '03' },
] as const;

export const RentProcess = () => {
  const t = useTranslations('RentPage.process');

  return (
    <section className="bg-background py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-10 framer:mb-14">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.4rem] framer:text-[2.25rem] font-bold text-foreground leading-[1.15] tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto space-y-6 framer:space-y-8">
          {STEPS.map(({ key, number }) => (
            <div key={key} className="flex gap-5 framer:gap-6 items-start">
              <div className="shrink-0 w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-accent/10 text-accent text-[14px] framer:text-[16px] font-bold flex items-center justify-center">
                {number}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className="text-[16px] framer:text-[18px] font-bold text-foreground mb-1.5">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="text-[14px] framer:text-[15px] text-muted leading-relaxed">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
