'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { useTranslations } from 'next-intl';
import { useWhatsAppHref } from '@/hooks/useWhatsAppHref';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920&auto=format&fit=crop';

const HIGHLIGHTS = [
  { value: '24h', labelKey: 'highlight_response' },
  { value: '150+', labelKey: 'highlight_owners' },
  { value: '100%', labelKey: 'highlight_transparency' },
] as const;

export const ContactHero = () => {
  const t = useTranslations('ContactPage.hero');
  const whatsappHref = useWhatsAppHref();

  return (
    <section className="relative min-h-[85svh] framer:min-h-[90vh] flex flex-col overflow-hidden pt-[88px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
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

            <h1 className="text-white font-bold leading-[1.05] tracking-[-0.02em] text-[2rem] framer:text-[clamp(3rem,5.5vw,4.25rem)] mb-5 framer:mb-7">
              {t('title')}
            </h1>

            <p className="text-[15px] framer:text-[20px] text-white/70 leading-relaxed max-w-[560px] mb-4 framer:mb-6">
              {t('subtitle')}
            </p>

            <p className="text-[15px] framer:text-[18px] font-semibold text-white/90 mb-8 framer:mb-10">
              {t('key_line')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 framer:gap-4 mb-10 framer:mb-14">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_6px_24px_rgba(5,150,105,0.35)]"
              >
                {t('cta_primary')}
                <ArrowDown className="w-4 h-4" />
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

            {/* Inline highlights */}
            <div className="flex items-center gap-6 framer:gap-10">
              {HIGHLIGHTS.map(({ value, labelKey }, i) => (
                <React.Fragment key={labelKey}>
                  {i > 0 && <span className="w-px h-8 bg-white/15" aria-hidden />}
                  <div className="flex flex-col">
                    <span className="text-[20px] framer:text-[28px] font-bold text-white tracking-tight leading-none">
                      {value}
                    </span>
                    <span className="text-[11px] framer:text-[13px] text-white/50 mt-1 font-medium">
                      {t(labelKey)}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6 framer:pb-8" aria-hidden>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
