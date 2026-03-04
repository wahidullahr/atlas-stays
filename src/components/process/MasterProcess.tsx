'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Globe, Users, BarChart3 } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const STEP_KEYS = ['list', 'manage', 'report'] as const;

const STEP_ICONS = [Globe, Users, BarChart3];

const PLATFORMS = [
  'Airbnb',
  'Booking.com',
  'Hotels.com',
  'Expedia',
  'Facebook',
  'VRBO',
];

export const MasterProcess = () => {
  const t = useTranslations('MasterProcess');

  return (
    <section id="rent" className="relative bg-foreground overflow-hidden py-14 framer:py-28">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="text-center mb-8 framer:mb-14">
          <p className="text-[11px] framer:text-[15px] font-semibold tracking-[0.18em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.5rem] framer:text-[3.25rem] font-bold text-white leading-[1.15] framer:leading-[1.08] tracking-tight mb-4 framer:mb-6 max-w-[780px] mx-auto">
            {t('title')}
          </h2>
          <p className="text-[14px] framer:text-[19px] text-white/60 leading-relaxed max-w-[640px] mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Platform badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 framer:gap-3 mb-10 framer:mb-20">
          <span className="text-[11px] framer:text-[13px] text-white/40 font-medium me-0.5 framer:me-1 w-full framer:w-auto text-center mb-1 framer:mb-0">
            {t('platformsLabel')}
          </span>
          {PLATFORMS.map((name) => (
            <span
              key={name}
              className="inline-flex items-center px-3 py-1.5 framer:px-4 framer:py-2 rounded-full bg-white/10 text-[11px] framer:text-[14px] font-medium text-white/80 border border-white/10"
            >
              {name}
            </span>
          ))}
        </div>

        {/* 3 Step cards */}
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-4 framer:gap-7 mb-8 framer:mb-18">
          {STEP_KEYS.map((key, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div
                key={key}
                className="group relative bg-white/6 backdrop-blur-sm border border-white/10 rounded-xl framer:rounded-2xl p-5 framer:p-10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 framer:gap-4 mb-3 framer:mb-5">
                  <span className="inline-flex items-center justify-center w-11 h-11 framer:w-14 framer:h-14 rounded-xl framer:rounded-2xl bg-accent text-white">
                    <Icon className="w-5 h-5 framer:w-6 framer:h-6" />
                  </span>
                  <div>
                    <span className="block text-[11px] framer:text-[12px] font-bold text-accent tracking-wider mb-0.5">
                      0{i + 1}
                    </span>
                    <h3 className="text-[16px] framer:text-[22px] font-bold text-white tracking-tight">
                      {t(`steps.${key}.title`)}
                    </h3>
                  </div>
                </div>
                <p className="text-[13px] framer:text-[15px] text-white/50 leading-relaxed mb-4 framer:mb-6">
                  {t(`steps.${key}.subtitle`)}
                </p>
                <ul className="space-y-2 framer:space-y-3">
                  {(t.raw(`steps.${key}.items`) as string[]).map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 framer:gap-3 text-[13px] framer:text-[15px] text-white/80 leading-snug"
                    >
                      <span
                        className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
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

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 framer:gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[17px] hover:bg-accent/90 transition-colors duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-foreground"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 framer:w-5 framer:h-5 rtl:rotate-180" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 framer:px-10 framer:py-4.5 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold text-[14px] framer:text-[17px] hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-foreground"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </Container>
    </section>
  );
};
