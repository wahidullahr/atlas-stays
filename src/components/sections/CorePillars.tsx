'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop';

const STEPS = ['sell', 'longTerm', 'shortTerm'] as const;

const STEP_COLORS = ['bg-accent', 'bg-foreground', 'bg-amber-600'] as const;

export const CorePillars = () => {
  const t = useTranslations('CorePillars');

  return (
    <section className="relative w-full min-h-auto framer:min-h-[800px] overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35 framer:bg-black/15" aria-hidden />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" aria-hidden />
      </div>

      {/* Card container with 3D perspective */}
      <div className="relative z-10 flex items-center min-h-auto framer:min-h-[800px] px-4 py-12 framer:px-10 framer:py-0 perspective-[1000px]">
        <div className="card-3d-premium w-full max-w-none framer:max-w-[640px] bg-white/95 backdrop-blur-sm rounded-2xl framer:rounded-3xl p-6 framer:p-14 framer:ms-[8%] shadow-[0_16px_60px_rgba(0,0,0,0.12)]">
          {/* Eyebrow with accent bar */}
          <div className="flex items-center gap-3 mb-5 framer:mb-7">
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
            <p className="text-[11px] framer:text-[13px] font-semibold tracking-[0.25em] uppercase text-accent">
              {t('eyebrow')}
            </p>
          </div>

          {/* Title */}
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.08] tracking-tight mb-3 framer:mb-5">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="text-[15px] framer:text-[18px] text-muted leading-relaxed mb-8 framer:mb-10">
            {t('description')}
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-0 mb-8 framer:mb-10">
            {STEPS.map((key, i) => (
              <div
                key={key}
                className="flex items-start gap-4 framer:gap-5 py-5 framer:py-6 border-b border-border/30 last:border-0 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col items-center gap-1 shrink-0 mt-0.5">
                  <span className={`w-8 h-8 framer:w-9 framer:h-9 rounded-lg ${STEP_COLORS[i]} flex items-center justify-center text-white text-[13px] framer:text-[14px] font-bold`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[16px] framer:text-[20px] font-bold text-foreground mb-1 framer:mb-1.5">
                    {t(`pillars.${key}.title`)}
                  </h3>
                  <p className="text-[13px] framer:text-[15px] text-foreground/70 leading-relaxed">
                    {t(`pillars.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 framer:gap-4">
            <Link
              href="/sell"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_6px_24px_rgba(5,150,105,0.35)]"
            >
              {t('cta_sell')}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <Link
              href="/rent"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-foreground text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-foreground/90 transition-all duration-200 w-full sm:w-auto"
            >
              {t('cta_rent')}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
