'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Home } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

const IMAGES = {
  top: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
  bottomLeft: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
  bottomCenter: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
  bottomRight: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
} as const;

export const ExplorePropertiesSection = () => {
  const t = useTranslations('ExploreProperties');

  return (
    <Section container={false} className="relative bg-background overflow-hidden pt-28 pb-10 framer:pt-40 framer:pb-14">
      {/* Subtle light green geometric lines (left side) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-20 start-0 w-[80%] max-w-[500px] h-px bg-accent/10 rotate-[-12deg] origin-left" />
        <div className="absolute top-40 start-0 w-[60%] max-w-[400px] h-px bg-accent/8 rotate-[-8deg] origin-left" />
        <div className="absolute top-64 start-10 w-[50%] max-w-[300px] h-px bg-accent/6 origin-left" />
        <div className="absolute bottom-40 start-0 w-[70%] max-w-[450px] h-px bg-accent/10 rotate-[5deg] origin-left" />
        <div className="absolute top-1/2 start-4 w-2 h-2 rounded-full bg-accent/10" />
        <div className="absolute top-1/3 end-[35%] w-1 h-1 rounded-full bg-accent/8" />
      </div>

      <Container className="relative z-10 max-w-[1360px]">
        <div className="grid grid-cols-1 framer:grid-cols-[0.85fr_1.15fr] gap-10 framer:gap-x-14 framer:gap-y-6 framer:items-start">
          {/* Left top: Text + CTA */}
          <div className="order-2 framer:order-none framer:col-start-1 framer:row-start-1 max-w-[560px]">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                <Home className="w-6 h-6" strokeWidth={1.8} aria-hidden />
              </div>
              <p className="text-[15px] framer:text-[16px] font-semibold tracking-widest uppercase text-foreground">
                {t('eyebrow')}
              </p>
            </div>
            <h2 className="text-[2.5rem] framer:text-[3.5rem] font-bold text-foreground leading-[1.12] tracking-tight mb-8">
              {t('title')}
            </h2>
            <p className="text-[17px] framer:text-[19px] text-muted leading-relaxed mb-10">
              {t('description')}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white rounded-xl font-semibold text-[17px] framer:text-[18px] hover:bg-accent/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              {t('cta')}
            </Link>
          </div>

          {/* Right top: one full-width landscape image */}
          <div className="order-1 framer:order-none framer:col-start-2 framer:row-start-1 w-full">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
              <Image
                src={IMAGES.top}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 810px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Left bottom: large image aligned with right-bottom images */}
          <div className="order-3 framer:order-none framer:col-start-1 framer:row-start-2 max-w-[560px]">
            <div className="relative w-full aspect-[16/10] framer:aspect-auto framer:h-[325px] rounded-2xl overflow-hidden bg-surface">
              <Image
                src={IMAGES.bottomLeft}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 810px) 100vw, 42vw"
              />
            </div>
          </div>

          {/* Right bottom: two images aligned to left-bottom image */}
          <div className="order-4 framer:order-none framer:col-start-2 framer:row-start-2 w-full grid grid-cols-1 framer:grid-cols-2 gap-4 framer:gap-5">
            <div className="relative w-full min-h-[220px] framer:h-[325px] rounded-2xl overflow-hidden bg-surface">
              <Image
                src={IMAGES.bottomCenter}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 810px) 100vw, 25vw"
              />
            </div>
            <div className="relative w-full min-h-[220px] framer:h-[325px] rounded-2xl overflow-hidden bg-surface">
              <Image
                src={IMAGES.bottomRight}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 810px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
