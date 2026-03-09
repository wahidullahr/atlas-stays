'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { Percent, Shield, CreditCard, CheckCircle2 } from 'lucide-react';

const POINTS = [
  { key: 'flat_percentage', icon: Percent, label: 'Flat %' },
  { key: 'no_hidden_costs', icon: Shield, label: 'All-in' },
  { key: 'guest_pays_fees', icon: CreditCard, label: '$0' },
] as const;

export const RentFeeTransparency = () => {
  const t = useTranslations('RentPage.feeTransparency');

  return (
    <section id="pricing" className="bg-[#f8f8f8] py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="grid grid-cols-1 framer:grid-cols-[1fr_1.2fr] gap-10 framer:gap-16 framer:items-center">
          {/* Left: headline + visual */}
          <div>
            <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
              {t('eyebrow')}
            </p>
            <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.1] tracking-tight mb-6 framer:mb-8">
              {t('title')}
            </h2>

            {/* Visual: 3 metric circles */}
            <div className="flex items-center gap-4 framer:gap-6">
              {POINTS.map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex flex-col items-center gap-2.5">
                  <div className={`relative w-20 h-20 framer:w-24 framer:h-24 rounded-full flex items-center justify-center ${
                    i === 0 ? 'bg-accent shadow-lg shadow-accent/25' : 'bg-white border border-border/20 shadow-md'
                  }`}>
                    <Icon className={`w-7 h-7 framer:w-8 framer:h-8 ${i === 0 ? 'text-white' : 'text-accent'}`} strokeWidth={1.5} />
                    {i === 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                    )}
                  </div>
                  <span className={`text-[12px] framer:text-[13px] font-bold tracking-wider uppercase ${
                    i === 0 ? 'text-accent' : 'text-foreground/50'
                  }`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3 cards stacked */}
          <div className="flex flex-col gap-4 framer:gap-5">
            {POINTS.map(({ key, icon: Icon }, i) => (
              <div
                key={key}
                className={`group relative rounded-2xl p-5 framer:p-7 transition-all duration-300 ${
                  i === 0
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'bg-white border border-border/20 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)]'
                }`}
              >
                <div className="flex items-start gap-4 framer:gap-5">
                  <div className={`shrink-0 w-11 h-11 framer:w-12 framer:h-12 rounded-xl flex items-center justify-center ${
                    i === 0 ? 'bg-white/20' : 'bg-accent/10'
                  }`}>
                    <Icon className={`w-5 h-5 framer:w-6 framer:h-6 ${i === 0 ? 'text-white' : 'text-accent'}`} strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[15px] framer:text-[17px] font-semibold leading-relaxed ${
                      i === 0 ? 'text-white' : 'text-foreground'
                    }`}>
                      {t(`points.${key}`)}
                    </p>
                  </div>
                </div>
                {/* Number badge */}
                <span className={`absolute top-4 inset-e-4 framer:top-5 framer:inset-e-6 text-[32px] framer:text-[40px] font-black leading-none tabular-nums ${
                  i === 0 ? 'text-white/15' : 'text-black/8'
                }`} aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
