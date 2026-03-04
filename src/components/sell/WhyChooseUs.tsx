'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Plane, ShieldCheck, Camera, BarChart3 } from 'lucide-react';
import { Container } from '../layout/Container';

const CARDS = [
  { key: 'no_travel', icon: Plane },
  { key: 'legal', icon: ShieldCheck },
  { key: 'media', icon: Camera },
  { key: 'transparency', icon: BarChart3 },
] as const;

export const WhyChooseUs = () => {
  const t = useTranslations('SellPage.whyUs');

  return (
    <section className="bg-background py-16 framer:py-28 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-10 framer:mb-16">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.5rem] framer:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-3 framer:mb-5">
            {t('title')}
          </h2>
          <p className="text-[13px] framer:text-[17px] text-muted max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 framer:gap-8 max-w-[960px] mx-auto">
          {CARDS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group relative bg-white rounded-2xl p-6 framer:p-8 border border-border/20 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 framer:mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <Icon className="w-5 h-5 framer:w-6 framer:h-6 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[16px] framer:text-[19px] font-bold text-foreground mb-2 framer:mb-2.5 tracking-tight">
                {t(`cards.${key}.title`)}
              </h3>
              <p className="text-[13px] framer:text-[15px] text-muted leading-relaxed">
                {t(`cards.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
