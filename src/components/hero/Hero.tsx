'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Star, Globe, ShieldCheck } from 'lucide-react';
import { Container } from '../layout/Container';
import { useWhatsAppHref } from '@/hooks/useWhatsAppHref';

const HERO_IMAGE_SRC =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop';

const PROMISE_KEYS = ['calls', 'qualify', 'notary'] as const;

export const Hero = () => {
  const t = useTranslations('Hero');
  const tPromise = useTranslations('PromiseStrip');
  const whatsappHref = useWhatsAppHref();

  const floatingCardItems = [
    { key: 'owners', icon: Star, value: t('stat_owners'), label: t('stat_owners_label') },
    { key: 'countries', icon: Globe, value: t('stat_countries'), label: t('stat_countries_label') },
    { key: 'guarantee', icon: ShieldCheck, value: t('stat_guarantee'), label: t('stat_guarantee_label') },
  ] as const;

  return (
    <section className="relative min-h-svh framer:min-h-screen flex flex-col overflow-hidden pt-[88px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_SRC}
          alt=""
          fill
          className="object-cover object-center scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55 framer:bg-black/40" aria-hidden />
        <div
          className="absolute inset-0 hidden framer:block bg-linear-to-r from-black/75 from-0% via-black/50 via-50% to-transparent to-100%"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <Container className="max-w-[1360px]">
          <div className="max-w-[720px] py-12 framer:py-0">
            {/* Eyebrow with accent bar */}
            <div className="flex items-center gap-3 mb-5 framer:mb-7">
              <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
              <p className="text-[11px] framer:text-[13px] font-semibold tracking-[0.25em] uppercase text-accent">
                {t('eyebrow')}
              </p>
            </div>

            <h1 className="text-white font-bold leading-[1.05] tracking-[-0.02em] text-[2rem] framer:text-[clamp(3rem,5.5vw,4.25rem)] mb-6 framer:mb-10">
              {t('title')}
            </h1>

            <ul className="text-[15px] framer:text-[20px] leading-normal text-white/80 max-w-[580px] mb-8 framer:mb-12 space-y-3 framer:space-y-4 list-none ps-0">
              {PROMISE_KEYS.map((key) => (
                <li key={key} className="flex items-center gap-3 framer:gap-4">
                  <span className="h-1.5 w-1.5 framer:h-2 framer:w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                  {tPromise(key)}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 framer:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_6px_24px_rgba(5,150,105,0.35)]"
              >
                {t('cta_primary')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-white/10 border border-white/25 text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-white/20 backdrop-blur-sm transition-all duration-200 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                {t('cta_secondary')}
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats panel — part of flow on mobile, absolute on desktop (KEPT) */}
      <div
        className="relative z-10 framer:absolute framer:bottom-0 framer:inset-e-0 framer:w-[55%] framer:min-w-[400px] framer:max-w-[800px]"
        aria-label={t('panel_aria')}
      >
        <div className="bg-white framer:rounded-ss-2xl px-5 py-5 framer:px-10 framer:py-8 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] framer:shadow-[0_8px_30px_rgba(0,0,0,0.12)] w-full">
          <div className="grid grid-cols-3 gap-4 framer:gap-8">
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
