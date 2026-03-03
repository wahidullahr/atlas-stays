'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Repeat, MapPin, Clock, FileCheck } from 'lucide-react';
import { Container } from '../layout/Container';

const HERO_IMAGE_SRC =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop';

const PROMISE_KEYS = ['calls', 'qualify', 'notary'] as const;

export const Hero = () => {
  const t = useTranslations('Hero');
  const tPromise = useTranslations('PromiseStrip');

  const floatingCardItems = [
    { key: 'turnovers', icon: Repeat, value: t('stat_turnovers'), label: t('stat_turnovers_label') },
    { key: 'cities', icon: MapPin, value: t('stat_cities'), label: t('stat_cities_label') },
    { key: 'response', icon: Clock, value: t('stat_response'), label: t('stat_response_label') },
    { key: 'valuation', icon: FileCheck, value: t('cta_primary'), label: t('panel_valuation_label') },
  ] as const;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[88px]">
      {/* Single full-bleed image covering the entire hero */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_SRC}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Green overlay tint */}
        <div className="absolute inset-0 bg-accent/25" aria-hidden />
        {/* Dark gradient from left so text is readable */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 from-0% via-black/25 via-[45%] to-transparent to-70%"
          aria-hidden
        />
      </div>

      <Container className="relative z-10 pt-2 framer:pt-4 pb-8 framer:pb-12">
        <div className="grid grid-cols-1 framer:grid-cols-2 gap-12 framer:gap-20 items-center">
          {/* Left: Copy - structured, larger, high visibility */}
          <div className="order-2 framer:order-1 max-w-[600px]">
            <p className="text-[13px] framer:text-[14px] font-semibold tracking-[0.14em] uppercase text-white mb-10">
              {t('eyebrow')}
            </p>

            <h1 className="text-white font-normal mb-12 leading-[1.12] tracking-[-0.025em] text-[clamp(2rem,5vw,3.5rem)] framer:text-[clamp(2.5rem,5.5vw,4rem)]">
              {t('title')}
            </h1>

            <ul className="text-[16px] framer:text-[18px] leading-[1.5] text-white max-w-[540px] mb-14 space-y-4 list-none ps-0">
              {PROMISE_KEYS.map((key) => (
                <li key={key} className="flex items-center gap-4">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-white" aria-hidden />
                  {tPromise(key)}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-5 mb-14">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-white text-fg rounded-xl font-semibold text-[17px] hover:bg-white/95 transition-all duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent [box-shadow:var(--shadow-elevated)]"
              >
                {t('cta_primary')}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </a>
              <a
                href="https://wa.me/4741351547"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-[17px] hover:bg-white/10 transition-all duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                <MessageCircle className="w-5 h-5" />
                {t('cta_secondary')}
              </a>
            </div>

            <p className="text-[15px] framer:text-[16px] font-medium text-white/95">
              {t('trust_line')}
            </p>
          </div>

          {/* Right: empty on desktop so panel lives in corner; on mobile keep space for stacking */}
          <div className="relative order-1 framer:order-2 min-h-0 framer:min-h-0" aria-hidden />
        </div>
      </Container>

      {/* Bottom-right panel stuck to corner, 50% hero width (reference: Homely) */}
      <div className="absolute bottom-0 end-0 z-10 w-1/2 min-w-[280px] max-w-[720px]" aria-label={t('panel_aria')}>
        <div className="bg-white rounded-ss-lg p-6 framer:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] w-full">
          <div className="flex flex-wrap framer:flex-nowrap justify-center framer:justify-between gap-5 framer:gap-6">
            {floatingCardItems.map(({ key, icon: Icon, value, label }) => (
              <div key={key} className="flex flex-col items-center text-center min-w-0">
                <Icon className="w-5 h-5 text-fg mb-2 shrink-0" strokeWidth={1.8} aria-hidden />
                <span className="text-[13px] framer:text-sm font-semibold text-fg block">{value}</span>
                {label ? (
                  <span className="text-[11px] framer:text-xs text-muted block mt-0.5">{label}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
