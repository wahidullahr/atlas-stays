'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';

export const AboutCommitment = () => {
  const t = useTranslations('About.commitment');

  return (
    <section className="bg-surface/50 py-16 framer:py-28">
      <Container>
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-5 framer:mb-7">
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
            <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.25em] uppercase text-accent">
              {t('eyebrow')}
            </p>
          </div>

          <h2 className="text-[1.75rem] framer:text-[clamp(2rem,3.5vw,2.75rem)] font-bold text-foreground leading-[1.15] tracking-tight mb-8 framer:mb-10">
            {t('title')}
          </h2>

          <div className="space-y-5 framer:space-y-6">
            <p className="text-[15px] framer:text-[18px] text-foreground/90 leading-relaxed font-medium">
              {t('body1')}
            </p>
            <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed">
              {t('body2')}
            </p>
            <p className="text-[14px] framer:text-[17px] text-foreground/80 leading-relaxed font-semibold italic">
              {t('body3')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
