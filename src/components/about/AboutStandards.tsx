'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';

const STANDARD_KEYS = [
  'photography',
  'descriptions',
  'details',
  'pricing',
  'presentation',
] as const;

export const AboutStandards = () => {
  const t = useTranslations('About.standards');

  return (
    <section className="bg-foreground py-16 framer:py-28">
      <Container>
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-5 framer:mb-7">
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
            <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.25em] uppercase text-accent">
              {t('eyebrow')}
            </p>
          </div>

          <h2 className="text-[1.75rem] framer:text-[clamp(2rem,3.5vw,2.75rem)] font-bold text-white leading-[1.15] tracking-tight mb-5 framer:mb-6">
            {t('title')}
          </h2>

          <p className="text-[14px] framer:text-[17px] text-white/60 leading-relaxed mb-10 framer:mb-12">
            {t('description')}
          </p>

          <div className="space-y-4 framer:space-y-5">
            {STANDARD_KEYS.map((key) => (
              <div
                key={key}
                className="flex items-start gap-4 framer:gap-5 bg-white/5 rounded-xl p-4 framer:p-5 border border-white/8"
              >
                <CheckCircle2 className="w-5 h-5 framer:w-6 framer:h-6 text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-[15px] framer:text-[17px] text-white/80 leading-relaxed font-medium">
                  {t(`items.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
