'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Star, Globe, ShieldCheck, TrendingUp } from 'lucide-react';
import { Container } from '../layout/Container';

const HERO_IMAGE_SRC =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop';

const PROMISE_KEYS = ['calls', 'qualify', 'notary'] as const;

export const Hero = () => {
  const t = useTranslations('Hero');
  const tPromise = useTranslations('PromiseStrip');

  const floatingCardItems = [
    { key: 'owners', icon: Star, value: t('stat_owners'), label: t('stat_owners_label') },
    { key: 'countries', icon: Globe, value: t('stat_countries'), label: t('stat_countries_label') },
    { key: 'occupancy', icon: TrendingUp, value: t('stat_occupancy'), label: t('stat_occupancy_label') },
    { key: 'guarantee', icon: ShieldCheck, value: t('stat_guarantee'), label: t('stat_guarantee_label') },
  ] as const;

  return (
    <section className="relative min-h-[100svh] framer:min-h-screen flex flex-col overflow-hidden pt-[88px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_SRC}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-accent/25" aria-hidden />
        {/* Mobile: full dark overlay for readability. Desktop: gradient from left */}
        <div
          className="absolute inset-0 bg-black/50 framer:bg-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden framer:block bg-linear-to-r from-black/60 from-0% via-black/25 via-[45%] to-transparent to-70%"
          aria-hidden
        />
      </div>

      {/* Main content — grows to fill space, pushes panel to bottom */}
      <div className="relative z-10 flex-1 flex items-center">
        <Container>
          <div className="max-w-[600px] py-8 framer:py-12">
            <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.14em] uppercase text-white/90 mb-5 framer:mb-10">
              {t('eyebrow')}
            </p>

            <h1 className="text-white font-bold leading-[1.1] tracking-[-0.02em] text-[1.75rem] framer:text-[clamp(2.5rem,5vw,4rem)] mb-6 framer:mb-12">
              {t('title')}
            </h1>

            <ul className="text-[14px] framer:text-[18px] leading-[1.5] text-white/90 max-w-[540px] mb-8 framer:mb-14 space-y-2.5 framer:space-y-4 list-none ps-0">
              {PROMISE_KEYS.map((key) => (
                <li key={key} className="flex items-center gap-3 framer:gap-4">
                  <span className="h-1.5 w-1.5 framer:h-2 framer:w-2 shrink-0 rounded-full bg-white" aria-hidden />
                  {tPromise(key)}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 framer:gap-5 mb-6 framer:mb-14">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 framer:px-10 framer:py-4.5 bg-white text-foreground rounded-xl font-semibold text-[15px] framer:text-[17px] hover:bg-white/95 transition-all duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
              >
                {t('cta_primary')}
                <ArrowRight className="w-4 h-4 framer:w-5 framer:h-5 rtl:rotate-180" />
              </a>
              <a
                href="https://wa.me/4741351547"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 framer:px-10 framer:py-4.5 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-[15px] framer:text-[17px] hover:bg-white/10 transition-all duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                <MessageCircle className="w-4 h-4 framer:w-5 framer:h-5" />
                {t('cta_secondary')}
              </a>
            </div>

          </div>
        </Container>
      </div>

      {/* Stats panel — part of flow on mobile, absolute on desktop */}
      <div
        className="relative z-10 framer:absolute framer:bottom-0 framer:inset-e-0 framer:w-[55%] framer:min-w-[400px] framer:max-w-[800px]"
        aria-label={t('panel_aria')}
      >
        <div className="bg-white framer:rounded-ss-2xl px-5 py-5 framer:px-10 framer:py-8 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] framer:shadow-[0_8px_30px_rgba(0,0,0,0.12)] w-full">
          <div className="grid grid-cols-4 gap-4 framer:gap-8">
            {floatingCardItems.map(({ key, value, label }) => (
              <div key={key} className="flex flex-col items-center text-center">
                <span className="text-[18px] framer:text-[28px] font-extrabold text-foreground block tracking-tight">{value}</span>
                {label ? (
                  <span className="text-[10px] framer:text-[14px] text-muted block mt-1 framer:mt-1.5">{label}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
