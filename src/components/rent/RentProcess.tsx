'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Camera, MessageCircle, BarChart3, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';

const STEPS = [
  { key: 'list', number: '01', icon: Camera, color: '#059669' },
  { key: 'manage', number: '02', icon: MessageCircle, color: '#0ea5e9' },
  { key: 'report', number: '03', icon: BarChart3, color: '#8b5cf6' },
] as const;

export const RentProcess = () => {
  const t = useTranslations('RentPage.process');

  return (
    <section className="bg-white py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="text-center mb-6 framer:mb-8">
          <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.1] tracking-tight max-w-[700px] mx-auto mb-3 framer:mb-4">
            {t('title')}
          </h2>
          <p className="text-[15px] framer:text-[17px] text-foreground/60 leading-relaxed max-w-[560px] mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps - horizontal timeline */}
        <div className="relative py-10 framer:py-14">
          {/* Connector line */}
          <div className="hidden framer:block absolute top-22 left-[16%] right-[16%] h-px bg-border" aria-hidden />

          <div className="grid grid-cols-1 framer:grid-cols-3 gap-8 framer:gap-6">
            {STEPS.map(({ key, number, icon: Icon, color }, i) => (
              <div key={key} className="flex flex-col items-center text-center group">
                {/* Number + icon circle */}
                <div className="relative mb-6 framer:mb-8">
                  <div
                    className="w-20 h-20 framer:w-24 framer:h-24 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    <Icon className="w-8 h-8 framer:w-10 framer:h-10" style={{ color }} strokeWidth={1.5} />
                  </div>
                  {/* Step number badge */}
                  <span
                    className="absolute -top-1 -right-1 w-7 h-7 framer:w-8 framer:h-8 rounded-full flex items-center justify-center text-[11px] framer:text-[12px] font-bold text-white shadow-md"
                    style={{ backgroundColor: color }}
                  >
                    {number}
                  </span>
                </div>

                {/* Arrow between steps (mobile only) */}
                {i < STEPS.length - 1 && (
                  <div className="framer:hidden flex justify-center mb-4 text-border">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                )}

                {/* Content */}
                <h3 className="text-[17px] framer:text-[20px] font-bold text-foreground tracking-tight mb-2 framer:mb-3">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="text-[13px] framer:text-[15px] text-foreground/60 leading-relaxed max-w-[280px] mx-auto">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 framer:px-10 framer:py-4 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_4px_16px_rgba(5,150,105,0.25)]"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
