'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const IMAGES = {
  villa: '/images/villa-pool.png',
  apartment: '/images/apartment-morocco.png',
  riad: '/images/riad-courtyard.png',
  render3d: '/images/3d-floorplan.png',
} as const;

const CATEGORY_LABELS = ['label_villas', 'label_apartments', 'label_riads', 'label_commercial'] as const;

export const ExplorePropertiesSection = () => {
  const t = useTranslations('ExploreProperties');

  return (
    <section className="relative bg-background overflow-hidden py-16 framer:py-28">
      <Container className="relative z-10 max-w-[1360px]">
        {/* Mobile: stacked. Desktop: 2-col grid */}
        <div className="grid grid-cols-1 framer:grid-cols-[0.85fr_1.15fr] gap-8 framer:gap-x-12 framer:gap-y-8 framer:items-start">
          {/* Text + CTA */}
          <div className="order-2 framer:order-0 framer:col-start-1 framer:row-start-1 max-w-[560px]">
            {/* Eyebrow with accent bar */}
            <div className="flex items-center gap-3 mb-5 framer:mb-7">
              <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
              <p className="text-[11px] framer:text-[13px] font-semibold tracking-[0.25em] uppercase text-accent">
                {t('eyebrow')}
              </p>
            </div>

            <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.08] tracking-tight mb-4 framer:mb-6">
              {t('title')}
            </h2>

            <p className="text-[15px] framer:text-[18px] text-muted leading-relaxed mb-6 framer:mb-8 max-w-[500px]">
              {t('description')}
            </p>

            {/* Category tags */}
            <div className="flex flex-wrap gap-2 framer:gap-2.5 mb-8 framer:mb-10">
              {CATEGORY_LABELS.map((key) => (
                <span
                  key={key}
                  className="px-4 py-2 framer:px-5 framer:py-2.5 bg-white rounded-full text-[12px] framer:text-[13px] font-medium text-foreground/80 border border-border/30 shadow-sm"
                >
                  {t(key)}
                </span>
              ))}
            </div>

            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_6px_24px_rgba(5,150,105,0.35)]"
            >
              {t('cta')}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          {/* Top image — Moroccan Villa */}
          <div className="order-1 framer:order-0 framer:col-start-2 framer:row-start-1 w-full group">
            <div className="relative w-full aspect-video framer:aspect-4/3 rounded-2xl framer:rounded-3xl overflow-hidden bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <Image
                src={IMAGES.villa}
                alt="Moroccan villa"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 810px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" aria-hidden />
            </div>
          </div>

          {/* Bottom-left — Apartment */}
          <div className="order-3 framer:order-0 framer:col-start-1 framer:row-start-2 max-w-[560px] group">
            <div className="relative w-full aspect-video framer:aspect-auto framer:h-[325px] rounded-2xl framer:rounded-3xl overflow-hidden bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <Image
                src={IMAGES.apartment}
                alt="Modern apartment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 810px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" aria-hidden />
            </div>
          </div>

          {/* Bottom-right — Riad + 3D Visualization */}
          <div className="order-4 framer:order-0 framer:col-start-2 framer:row-start-2 w-full grid grid-cols-2 gap-3 framer:gap-4">
            <div className="relative w-full aspect-4/3 framer:aspect-auto framer:h-[325px] rounded-2xl framer:rounded-3xl overflow-hidden bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.08)] group">
              <Image
                src={IMAGES.riad}
                alt="Traditional Moroccan riad"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 810px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" aria-hidden />
            </div>
            <div className="relative w-full aspect-4/3 framer:aspect-auto framer:h-[325px] rounded-2xl framer:rounded-3xl overflow-hidden bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.08)] group">
              <Image
                src={IMAGES.render3d}
                alt="3D property visualization"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 810px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" aria-hidden />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
