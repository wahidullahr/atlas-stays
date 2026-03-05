'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { Check } from 'lucide-react';

const POINTS = ['flat_percentage', 'no_hidden_costs', 'guest_pays_fees'] as const;

export const RentFeeTransparency = () => {
  const t = useTranslations('RentPage.feeTransparency');

  return (
    <section className="bg-background py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-8 framer:mb-12">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.4rem] framer:text-[2.25rem] font-bold text-foreground leading-[1.15] tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="max-w-[640px] mx-auto">
          <ul className="space-y-4 framer:space-y-5">
            {POINTS.map((key) => (
              <li
                key={key}
                className="flex items-start gap-4 framer:gap-5 bg-white rounded-xl p-5 framer:p-6 border border-border/20 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-accent" strokeWidth={2.5} />
                </div>
                <p className="text-[15px] framer:text-[17px] font-medium text-foreground leading-[1.4] pt-0.5">
                  {t(`points.${key}`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
