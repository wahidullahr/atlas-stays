'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Presentation, UserCheck, Handshake, FileCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { useWhatsAppHref } from '@/hooks/useWhatsAppHref';

const BG_IMAGE = '/images/why-sell-bg.png';

const STEPS = [
  { key: 'presentation', icon: Presentation },
  { key: 'qualification', icon: UserCheck },
  { key: 'negotiation', icon: Handshake },
  { key: 'notary', icon: FileCheck },
] as const;

export const WhyChooseUs = () => {
  const t = useTranslations('SellPage.whyUs');
  const whatsappHref = useWhatsAppHref();

  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 framer:bg-black/40" aria-hidden />
        <div
          className="absolute inset-0 hidden framer:block bg-linear-to-b from-black/55 via-black/30 to-black/55"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 framer:py-28">
        <Container className="max-w-[1360px]">
          {/* Header */}
          <div className="text-center mb-12 framer:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 framer:mb-6">
              <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
              <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.25em] uppercase text-accent">
                {t('eyebrow')}
              </p>
              <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
            </div>
            <h2 className="text-[1.75rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight max-w-[780px] mx-auto mb-4 framer:mb-6">
              {t('title')}
            </h2>
            <p className="text-[15px] framer:text-[18px] text-white/60 leading-relaxed max-w-[560px] mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 framer:grid-cols-4 gap-6 framer:gap-10 mb-12 framer:mb-16">
            {STEPS.map(({ key, icon: Icon }, i) => (
              <div key={key} className="group flex flex-col items-center text-center">
                {/* Circle */}
                <div className="relative mb-5 framer:mb-7">
                  {/* Outer ring */}
                  <div className="w-[100px] h-[100px] framer:w-[140px] framer:h-[140px] rounded-full border border-white/12 group-hover:border-white/25 bg-white/5 backdrop-blur-md group-hover:bg-white/10 transition-all duration-500 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] group-hover:scale-105">
                    {/* Inner icon circle */}
                    <div className="w-[56px] h-[56px] framer:w-[76px] framer:h-[76px] rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center group-hover:bg-accent/25 group-hover:border-accent/40 transition-all duration-500">
                      <Icon className="w-6 h-6 framer:w-8 framer:h-8 text-accent" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-1 -inset-e-1 framer:-top-1.5 framer:-inset-e-1.5 w-8 h-8 framer:w-9 framer:h-9 rounded-full bg-accent text-white text-[12px] framer:text-[13px] font-bold tabular-nums flex items-center justify-center shadow-[0_4px_14px_rgba(5,150,105,0.5)] ring-2 ring-black/20">
                    {i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[15px] framer:text-[19px] font-bold text-white tracking-tight leading-snug mb-2 framer:mb-3">
                  {t(`cards.${key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-[12px] framer:text-[15px] text-white/45 leading-relaxed group-hover:text-white/65 transition-colors duration-300 max-w-[220px] framer:max-w-[260px]">
                  {t(`cards.${key}.description`)}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 framer:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_6px_24px_rgba(5,150,105,0.35)]"
            >
              {t('cta_primary')}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-white/20 backdrop-blur-sm transition-all duration-200 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              {t('cta_secondary')}
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
};
