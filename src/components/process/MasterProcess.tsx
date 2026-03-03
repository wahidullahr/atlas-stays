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
    <section className="relative bg-foreground overflow-hidden py-20 framer:py-28">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="text-center mb-10 framer:mb-14">
          <p className="text-[13px] framer:text-[15px] font-semibold tracking-[0.18em] uppercase text-accent mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[2.25rem] framer:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight mb-6 max-w-[780px] mx-auto">
            {t('title')}
          </h2>
          <p className="text-[17px] framer:text-[19px] text-white/60 leading-relaxed max-w-[640px] mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Platform badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 framer:mb-20">
          <span className="text-[13px] text-white/40 font-medium me-1">
            {t('platformsLabel')}
          </span>
          {PLATFORMS.map((name) => (
            <span
              key={name}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-[13px] framer:text-[14px] font-medium text-white/80 border border-white/10"
            >
              {name}
            </span>
          ))}
        </div>

        {/* 3 Step cards */}
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-6 framer:gap-7 mb-14 framer:mb-18">
          {STEP_KEYS.map((key, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div
                key={key}
                className="group relative bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-8 framer:p-10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent text-white">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="block text-[12px] font-bold text-accent tracking-wider mb-0.5">
                      0{i + 1}
                    </span>
                    <h3 className="text-[19px] framer:text-[22px] font-bold text-white tracking-tight">
                      {t(`steps.${key}.title`)}
                    </h3>
                  </div>
                </div>
                <p className="text-[14px] framer:text-[15px] text-white/50 leading-relaxed mb-6">
                  {t(`steps.${key}.subtitle`)}
                </p>
                <ul className="space-y-3">
                  {(t.raw(`steps.${key}.items`) as string[]).map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[14px] framer:text-[15px] text-white/80 leading-snug"
                    >
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-accent text-white rounded-xl font-semibold text-[16px] framer:text-[17px] hover:bg-accent/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-foreground"
          >
            {t('cta')}
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold text-[16px] framer:text-[17px] hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-foreground"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </Container>
    </section>
  );
};
