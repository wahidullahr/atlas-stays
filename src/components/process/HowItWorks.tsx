'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { useWhatsAppHref } from '@/hooks/useWhatsAppHref';

const STEP_KEYS = ['onboarding', 'stay', 'reporting'] as const;

const SHOWCASE_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
];

/** Video path per locale. Arabic uses French video until AR version is available. */
const LOCALE_VIDEO: Partial<Record<string, string>> = {
  en: '/videos/Property_Sale_Management_Video_Ready.mp4',
  fr: '/videos/Property_Sale_Management_FR.mp4',
  ar: '/videos/Property_Sale_Management_FR.mp4',
};

export const HowItWorks = () => {
  const t = useTranslations('HowItWorks');
  const locale = useLocale();
  const whatsappHref = useWhatsAppHref();
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);

  const videoSrc = LOCALE_VIDEO[locale];
  const useVideo = Boolean(videoSrc);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % SHOWCASE_IMAGES.length);
  }, []);

  useEffect(() => {
    if (!useVideo) {
      const timer = setInterval(next, 4000);
      return () => clearInterval(timer);
    }
  }, [next, useVideo]);

  return (
    <section id="sell" className="relative bg-surface overflow-hidden py-14 framer:py-20">
      <Container className="max-w-[1360px]">
        {/* Header + image */}
        <div className="grid grid-cols-1 framer:grid-cols-2 gap-8 framer:gap-20 items-stretch mb-8 framer:mb-14">
          {/* Text */}
          <div className="flex flex-col justify-center py-0 framer:py-10">
            <p className="text-[12px] framer:text-[17px] font-semibold tracking-[0.18em] uppercase text-accent mb-4 framer:mb-7">
              {t('eyebrow')}
            </p>
            <h2 className="text-[1.75rem] framer:text-[3.75rem] font-bold text-foreground leading-[1.12] framer:leading-[1.06] tracking-tight mb-4 framer:mb-7">
              {t('title')}
            </h2>
            <p className="text-[15px] framer:text-[22px] text-muted leading-relaxed max-w-[580px]">
              {t('description')}
            </p>
          </div>

          {/* Video (EN) or image carousel (FR/AR) */}
          <div className="relative rounded-xl framer:rounded-2xl overflow-hidden min-h-[200px] framer:min-h-[420px] bg-foreground/5">
            {useVideo && videoSrc ? (
              <>
                <video
                  src={videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  muted={muted}
                  loop
                  autoPlay
                  aria-label="Property sale management"
                />
                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  className="absolute bottom-3 framer:bottom-4 end-3 framer:end-4 z-10 w-10 h-10 framer:w-12 framer:h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label={muted ? t('video_unmute') : t('video_mute')}
                >
                  {muted ? (
                    <Volume2 className="w-5 h-5 framer:w-6 framer:h-6" />
                  ) : (
                    <VolumeX className="w-5 h-5 framer:w-6 framer:h-6" />
                  )}
                </button>
              </>
            ) : (
              <>
                {SHOWCASE_IMAGES.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt=""
                    fill
                    className={`object-cover transition-opacity duration-700 ease-in-out ${
                      i === active ? 'opacity-100' : 'opacity-0'
                    }`}
                    sizes="(max-width: 810px) 100vw, 50vw"
                    priority={i === 0}
                  />
                ))}
                {/* Dot indicators */}
                <div className="absolute bottom-3 framer:bottom-4 inset-x-0 flex items-center justify-center gap-1.5 framer:gap-2 z-10">
                  {SHOWCASE_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Image ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === active
                          ? 'w-6 h-2 framer:w-8 framer:h-2.5 bg-white'
                          : 'w-2 h-2 framer:w-2.5 framer:h-2.5 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* 3 Step cards with 3D effect */}
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-4 framer:gap-7 mb-8 framer:mb-18 [perspective:1200px]">
          {STEP_KEYS.map((key, i) => (
            <div
              key={key}
              className="group relative transition-transform duration-300"
              style={{
                transform: 'translateZ(12px) rotateY(-1deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative bg-background rounded-xl framer:rounded-2xl p-5 framer:p-10 transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_12px_24px_-8px_rgba(0,0,0,0.08)] border border-border/10"
              >
              <span className="inline-flex items-center justify-center w-11 h-11 framer:w-14 framer:h-14 rounded-xl framer:rounded-2xl bg-accent/10 text-accent text-[15px] framer:text-[18px] font-bold mb-4 framer:mb-6 transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                0{i + 1}
              </span>
              <h3 className="text-[17px] framer:text-[22px] font-bold text-foreground tracking-tight mb-2 framer:mb-3">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="text-[13px] framer:text-[15px] text-muted leading-relaxed mb-4 framer:mb-6">
                {t(`steps.${key}.subtitle`)}
              </p>
              <ul className="space-y-2 framer:space-y-3">
                {(t.raw(`steps.${key}.bullets`) as string[]).map(
                  (bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 framer:gap-3 text-[13px] framer:text-[15px] text-foreground leading-snug"
                    >
                      <span
                        className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  )
                )}
              </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 framer:gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[17px] hover:bg-accent/90 transition-colors duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 framer:w-5 framer:h-5 rtl:rotate-180" />
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 framer:px-10 framer:py-4.5 bg-transparent border-2 border-foreground text-foreground rounded-xl font-semibold text-[14px] framer:text-[17px] hover:bg-foreground hover:text-white transition-colors duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
          >
            {t('ctaSecondary')}
          </a>
        </div>
      </Container>
    </section>
  );
};
