'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Globe, MessageSquare, Shield, BarChart3, Sparkles, TrendingUp } from 'lucide-react';
import { Container } from '../layout/Container';

const CARDS = [
  { key: 'listing', icon: Globe },
  { key: 'guest_management', icon: MessageSquare },
  { key: 'support', icon: Shield },
  { key: 'transparency', icon: BarChart3 },
  { key: 'cleaning_maintenance', icon: Sparkles },
  { key: 'pricing_revenue', icon: TrendingUp },
] as const;

export const RentWhySection = () => {
  const t = useTranslations('RentPage.whyUs');

  return (
    <section id="why-rent" className="bg-surface py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-8 framer:mb-12">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.4rem] framer:text-[2rem] font-bold text-foreground leading-[1.15] tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 framer:grid-cols-3 gap-4 framer:gap-6 max-w-[1200px] mx-auto">
          {CARDS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group relative bg-white rounded-xl p-5 framer:p-6 border border-border/20 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <div className="w-10 h-10 framer:w-11 framer:h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3 framer:mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground mb-1.5 tracking-tight">
                {t(`cards.${key}.title`)}
              </h3>
              <p className="text-[13px] framer:text-[14px] text-muted leading-snug">
                {t(`cards.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
