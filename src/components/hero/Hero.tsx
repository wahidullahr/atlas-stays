'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';

const BENTO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    alt: 'Modern Moroccan apartment',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop',
    alt: 'Villa exterior',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600&auto=format&fit=crop',
    alt: 'Interior living space',
    className: 'col-span-1 row-span-1',
  },
];

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-accent/[0.05] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 start-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <Container className="relative z-10 pt-2 framer:pt-4 pb-8 framer:pb-12">
        <div className="grid grid-cols-1 framer:grid-cols-2 gap-12 framer:gap-20 items-center">
          {/* Left: Copy */}
          <div className="order-2 framer:order-1">
            <p className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-surface border border-border mb-8 text-[13px] font-normal tracking-wide uppercase text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-muted animate-pulse" />
              {t('eyebrow')}
            </p>

            <h1 className="mb-10 text-foreground font-normal" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              {t('title')}
            </h1>

            <p className="text-[21px] framer:text-[23px] leading-relaxed text-foreground/60 max-w-[560px] mb-12">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background rounded-xl font-semibold text-[18px] hover:bg-foreground/90 transition-all duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 [box-shadow:var(--shadow-elevated)]"
              >
                {t('cta_primary')}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </a>
              <a
                href="https://wa.me/4741351547"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366]/10 text-[#128C7E] rounded-xl font-semibold text-[18px] border border-[#25D366]/25 hover:bg-[#25D366]/20 transition-all duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t('cta_secondary')}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5 rtl:space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-accent/10 border-2 border-background flex items-center justify-center"
                  >
                    <CheckCircle2 size={18} className="text-accent" />
                  </div>
                ))}
              </div>
              <p className="text-[15px] font-medium text-foreground/50">{t('trust_line')}</p>
            </div>
          </div>

          {/* Right: Bento image grid + floating stats */}
          <div className="relative order-1 framer:order-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 framer:gap-4">
              {BENTO_IMAGES.map(({ src, alt, className }, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden ${className} ${i === 0 ? 'min-h-[280px] framer:min-h-[380px]' : 'min-h-[160px] framer:min-h-[220px]'}`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes={i === 0 ? '(max-width: 810px) 100vw, 600px' : '(max-width: 810px) 50vw, 300px'}
                  />
                  {i === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                  )}
                </div>
              ))}
            </div>

            {/* Floating stat card - top right */}
            <div className="hidden framer:flex absolute -top-4 -end-4 animate-float">
              <div className="bg-background/95 backdrop-blur-lg rounded-2xl px-6 py-4 [box-shadow:var(--shadow-elevated)]">
                <p className="text-2xl font-extrabold text-foreground tracking-tight leading-none mb-1">{t('stat_turnovers')}</p>
                <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">{t('stat_turnovers_label')}</p>
              </div>
            </div>

            {/* Floating stat card - bottom left */}
            <div className="hidden framer:flex absolute -bottom-4 -start-4 animate-float-delayed">
              <div className="bg-background/95 backdrop-blur-lg rounded-2xl px-6 py-4 [box-shadow:var(--shadow-elevated)] flex items-center gap-5">
                <div>
                  <p className="text-2xl font-extrabold text-foreground tracking-tight leading-none mb-1">{t('stat_response')}</p>
                  <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">{t('stat_response_label')}</p>
                </div>
                <div className="w-px h-10 bg-foreground/10" />
                <div>
                  <p className="text-2xl font-extrabold text-foreground tracking-tight leading-none mb-1">{t('stat_cities')}</p>
                  <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">{t('stat_cities_label')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
