'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Sparkles, ClipboardCheck, Key, Shirt, ShoppingBag } from 'lucide-react';
import { Container } from '../layout/Container';

const SERVICES = [
  { key: 'cleaning', icon: Sparkles },
  { key: 'inspection', icon: ClipboardCheck },
  { key: 'keys', icon: Key },
  { key: 'linen', icon: Shirt },
  { key: 'restocking', icon: ShoppingBag },
] as const;

export const RentServices = () => {
  const t = useTranslations('RentPage.services');

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
          <p className="text-[14px] framer:text-[16px] text-muted leading-relaxed max-w-xl mx-auto mt-2">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 framer:grid-cols-3 gap-4 framer:gap-6 max-w-[1000px] mx-auto">
          {SERVICES.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex items-start gap-4 p-5 framer:p-6 bg-white rounded-xl border border-border/20 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground mb-1">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-[13px] framer:text-[14px] text-muted leading-snug">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
