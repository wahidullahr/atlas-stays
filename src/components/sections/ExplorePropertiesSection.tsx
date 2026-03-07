'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Home } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const IMAGES = {
  top: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
  bottomLeft: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
  bottomCenter: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
  bottomRight: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
} as const;

export const ExplorePropertiesSection = () => {
  const t = useTranslations('ExploreProperties');

  return (
    <section className="relative bg-background overflow-hidden py-14 framer:py-24">
      {/* Subtle geometric accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-20 inset-s-0 w-[80%] max-w-[500px] h-px bg-accent/10 -rotate-12 origin-top-left" />
        <div className="absolute top-40 inset-s-0 w-[60%] max-w-[400px] h-px bg-accent/8 rotate-[-8deg] origin-top-left" />
        <div className="absolute bottom-40 inset-s-0 w-[70%] max-w-[450px] h-px bg-accent/10 rotate-[5deg] origin-bottom-left" />
      </div>

      <Container className="relative z-10 max-w-[1360px]">
        {/* Mobile: stacked. Desktop: 2-col grid */}
        <div className="grid grid-cols-1 framer:grid-cols-[0.85fr_1.15fr] gap-8 framer:gap-x-8 framer:gap-y-6 framer:items-start">
          {/* Text + CTA */}
          <div className="order-2 framer:order-0 framer:col-start-1 framer:row-start-1 max-w-[560px]">
            <div className="flex items-center gap-2.5 framer:gap-3 mb-5 framer:mb-8">
              <div className="flex items-center justify-center w-10 h-10 framer:w-12 framer:h-12 rounded-xl bg-accent/10 text-accent">
                <Home className="w-5 h-5 framer:w-6 framer:h-6" strokeWidth={1.8} aria-hidden />
              </div>
              <p className="text-[13px] framer:text-[16px] font-semibold tracking-widest uppercase text-foreground">
                {t('eyebrow')}
              </p>
            </div>
            <h2 className="text-[1.75rem] framer:text-[3.5rem] font-bold text-foreground leading-[1.15] framer:leading-[1.12] tracking-tight mb-4 framer:mb-8">
              {t('title')}
            </h2>
            <p className="text-[15px] framer:text-[19px] text-muted leading-relaxed mb-6 framer:mb-10">
              {t('description')}
            </p>
            <Link
              href="/areas"
              className="inline-flex items-center justify-center px-7 py-3.5 framer:px-10 framer:py-5 bg-accent text-white rounded-xl font-semibold text-[15px] framer:text-[18px] hover:bg-accent/90 transition-colors duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              {t('cta')}
            </Link>
          </div>

          {/* Top image */}
          <div className="order-1 framer:order-0 framer:col-start-2 framer:row-start-1 w-full">
            <div className="relative w-full aspect-video framer:aspect-4/3 rounded-xl framer:rounded-2xl overflow-hidden bg-surface">
              <Image
                src={IMAGES.top}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 810px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Bottom-left image */}
          <div className="order-3 framer:order-0 framer:col-start-1 framer:row-start-2 max-w-[560px]">
            <div className="relative w-full aspect-video framer:aspect-auto framer:h-[325px] rounded-xl framer:rounded-2xl overflow-hidden bg-surface mt-2 framer:mt-0">
              <Image
                src={IMAGES.bottomLeft}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 810px) 100vw, 42vw"
              />
            </div>
          </div>

          {/* Bottom-right images */}
          <div className="order-4 framer:order-0 framer:col-start-2 framer:row-start-2 w-full grid grid-cols-2 gap-2 framer:gap-3">
            <div className="relative w-full aspect-4/3 framer:aspect-auto framer:h-[325px] rounded-xl framer:rounded-2xl overflow-hidden bg-surface">
              <Image
                src={IMAGES.bottomCenter}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 810px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full aspect-4/3 framer:aspect-auto framer:h-[325px] rounded-xl framer:rounded-2xl overflow-hidden bg-surface">
              <Image
                src={IMAGES.bottomRight}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 810px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
