'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { Percent, Shield, CreditCard, ChevronRight } from 'lucide-react';

const POINTS = [
  { key: 'flat_percentage', icon: Percent },
  { key: 'no_hidden_costs', icon: Shield },
  { key: 'guest_pays_fees', icon: CreditCard },
] as const;

export const RentFeeTransparency = () => {
  const t = useTranslations('RentPage.feeTransparency');

  return (
    <section id="pricing" className="bg-foreground py-12 framer:py-20 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-10 framer:mb-14">
          <p className="text-[11px] framer:text-[14px] font-bold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.5rem] framer:text-[2.5rem] font-extrabold text-white leading-[1.12] tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="flex flex-col framer:flex-row gap-6 framer:gap-0 framer:items-stretch">
          {POINTS.map(({ key, icon: Icon }, i) => (
            <React.Fragment key={key}>
              {i > 0 && (
                <div className="hidden framer:flex items-center justify-center px-2 shrink-0">
                  <ChevronRight className="w-8 h-8 text-white/30 shrink-0 rtl:rotate-180" aria-hidden />
                </div>
              )}
              <div className="flex-1 framer:min-w-0">
                <div className="relative h-full rounded-xl border border-white/15 bg-white/5 p-6 framer:p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full rounded-s-xl bg-accent rtl:left-auto rtl:right-0 rtl:rounded-s-none rtl:rounded-e-xl" aria-hidden />
                  <div className="flex gap-4 framer:gap-5">
                    <div className="shrink-0 w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 framer:w-7 framer:h-7 text-accent" strokeWidth={1.5} />
                    </div>
                    <p className="text-[15px] framer:text-[16px] font-medium text-white/95 leading-relaxed pt-1">
                      {t(`points.${key}`)}
                    </p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};
