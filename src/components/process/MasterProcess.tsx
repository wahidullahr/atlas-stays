'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Globe, Users, BarChart3 } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const STEP_KEYS = ['list', 'manage', 'report'] as const;

const STEP_ICONS = [Globe, Users, BarChart3];

const PLATFORMS: { name: string; bg: string; text: string }[] = [
  { name: 'Airbnb', bg: '#FF5A5F', text: '#FFFFFF' },
  { name: 'Booking.com', bg: '#003580', text: '#FFFFFF' },
  { name: 'Hotels.com', bg: '#D32F2F', text: '#FFFFFF' },
  { name: 'Expedia', bg: '#FBCC33', text: '#1A1A1A' },
  { name: 'Facebook', bg: '#1877F2', text: '#FFFFFF' },
  { name: 'VRBO', bg: '#3D5AFE', text: '#FFFFFF' },
];

export const MasterProcess = () => {
  const t = useTranslations('MasterProcess');

  return (
    <section id="rent" className="relative bg-foreground overflow-hidden py-16 framer:py-28">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="text-center mb-10 framer:mb-16">
          <div className="flex items-center justify-center gap-3 mb-5 framer:mb-7">
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
            <p className="text-[11px] framer:text-[13px] font-semibold tracking-[0.25em] uppercase text-accent">
              {t('eyebrow')}
            </p>
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
          </div>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight mb-4 framer:mb-6 max-w-[780px] mx-auto">
            {t('title')}
          </h2>
          <p className="text-[15px] framer:text-[18px] text-white/75 leading-relaxed max-w-[640px] mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Platform badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 framer:gap-3 mb-10 framer:mb-18">
          <span className="text-[11px] framer:text-[13px] text-white/60 font-medium me-0.5 framer:me-1 w-full framer:w-auto text-center mb-1 framer:mb-0">
            {t('platformsLabel')}
          </span>
          {PLATFORMS.map(({ name, bg, text }) => (
            <span
              key={name}
              dir="ltr"
              className="inline-flex items-center px-4 py-2 framer:px-5 framer:py-2.5 rounded-full text-[12px] framer:text-[14px] font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ backgroundColor: bg, color: text }}
            >
              {name}
            </span>
          ))}
        </div>

        {/* 3 Step cards */}
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-4 framer:gap-6 mb-10 framer:mb-16">
          {STEP_KEYS.map((key, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div
                key={key}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl framer:rounded-3xl p-6 framer:p-10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 framer:gap-4 mb-4 framer:mb-6">
                  <span className="inline-flex items-center justify-center w-11 h-11 framer:w-13 framer:h-13 rounded-xl framer:rounded-2xl bg-accent text-white shadow-[0_4px_16px_rgba(5,150,105,0.3)]">
                    <Icon className="w-5 h-5 framer:w-6 framer:h-6" />
                  </span>
                  <div>
                    <span className="block text-[11px] framer:text-[12px] font-bold text-accent tracking-wider mb-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[16px] framer:text-[20px] font-bold text-white tracking-tight">
                      {t(`steps.${key}.title`)}
                    </h3>
                  </div>
                </div>
                <p className="text-[13px] framer:text-[15px] text-white/70 leading-relaxed mb-5 framer:mb-7">
                  {t(`steps.${key}.subtitle`)}
                </p>
                <ul className="space-y-2.5 framer:space-y-3">
                  {(t.raw(`steps.${key}.items`) as string[]).map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 framer:gap-3 text-[13px] framer:text-[15px] text-white/85 leading-snug"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/rent"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_6px_24px_rgba(5,150,105,0.35)]"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
