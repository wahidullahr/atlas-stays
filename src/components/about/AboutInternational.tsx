'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';
import { Container } from '../layout/Container';

export const AboutInternational = () => {
  const t = useTranslations('About.international');

  return (
    <section className="py-16 framer:py-28 bg-surface/30">
      <Container className="max-w-[1200px]">
        <div className="grid grid-cols-1 framer:grid-cols-[1fr_1.1fr] gap-10 framer:gap-14 framer:items-center">
          {/* Text content */}
          <div className="order-2 framer:order-1">
            <div className="flex items-center gap-3 mb-5 framer:mb-7">
              <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
              <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.25em] uppercase text-accent">
                {t('eyebrow')}
              </p>
            </div>

            <h2 className="text-[1.75rem] framer:text-[clamp(2rem,3.5vw,2.75rem)] font-bold text-foreground leading-[1.15] tracking-tight mb-6 framer:mb-8">
              {t('title')}
            </h2>

            <div className="space-y-5 framer:space-y-6">
              <p className="text-[15px] framer:text-[18px] text-foreground/90 leading-relaxed font-medium">
                {t('body1')}
              </p>
              <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed">
                {t('body2')}
              </p>
              <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed">
                {t('body3')}
              </p>
            </div>

            {/* Visual accent */}
            <div className="mt-8 framer:mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-accent" strokeWidth={1.75} />
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] framer:text-[14px] font-medium text-muted">
                <span>{t('highlight_local')}</span>
                <span>•</span>
                <span>{t('highlight_standards')}</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 framer:order-2 relative group">
            <div className="relative aspect-4/3 rounded-2xl framer:rounded-3xl overflow-hidden bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/about-international-global.png"
                alt="International real estate perspective — AtlasStays connects Moroccan properties with global buyers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 810px) 50vw, 100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" aria-hidden />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
