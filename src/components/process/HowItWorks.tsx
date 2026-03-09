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
    <section id="sell" className="relative bg-surface overflow-hidden py-16 framer:py-28">
      <Container className="max-w-[1360px]">
        {/* Header + image */}
        <div className="grid grid-cols-1 framer:grid-cols-2 gap-8 framer:gap-16 items-stretch mb-10 framer:mb-16">
          {/* Text */}
          <div className="flex flex-col justify-center py-0 framer:py-10">
            <div className="flex items-center gap-3 mb-5 framer:mb-7">
              <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
              <p className="text-[11px] framer:text-[13px] font-semibold tracking-[0.25em] uppercase text-accent">
                {t('eyebrow')}
              </p>
            </div>
            <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.08] tracking-tight mb-4 framer:mb-6">
              {t('title')}
            </h2>
            <p className="text-[15px] framer:text-[18px] text-muted leading-relaxed max-w-[520px]">
              {t('description')}
            </p>
          </div>

          {/* Video (EN) or image carousel */}
          <div className="relative rounded-2xl framer:rounded-3xl overflow-hidden min-h-[220px] framer:min-h-[440px] bg-foreground/5 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
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
                  className="absolute bottom-3 framer:bottom-4 inset-e-3 framer:inset-e-4 z-10 w-10 h-10 framer:w-12 framer:h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
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
                <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" aria-hidden />
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

        {/* 3 Step cards */}
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-4 framer:gap-6 mb-10 framer:mb-16">
          {STEP_KEYS.map((key, i) => (
            <div
              key={key}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl framer:rounded-3xl p-6 framer:p-10 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] border border-border/15">
                <span className="inline-flex items-center justify-center w-11 h-11 framer:w-13 framer:h-13 rounded-xl framer:rounded-2xl bg-accent/10 text-accent text-[14px] framer:text-[16px] font-bold mb-5 framer:mb-7 transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[17px] framer:text-[20px] font-bold text-foreground tracking-tight mb-2 framer:mb-3">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="text-[13px] framer:text-[15px] text-foreground/70 leading-relaxed mb-5 framer:mb-7">
                  {t(`steps.${key}.subtitle`)}
                </p>
                <ul className="space-y-2.5 framer:space-y-3">
                  {(t.raw(`steps.${key}.bullets`) as string[]).map(
                    (bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 framer:gap-3 text-[13px] framer:text-[15px] text-foreground leading-snug"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
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
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_6px_24px_rgba(5,150,105,0.35)]"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-white border border-border/30 text-foreground rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-surface transition-all duration-200 w-full sm:w-auto"
          >
            {t('ctaSecondary')}
          </a>
        </div>
      </Container>
    </section>
  );
};
