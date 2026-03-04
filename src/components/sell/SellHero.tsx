'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from '../layout/Container';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&auto=format&fit=crop';

const HIGHLIGHTS = ['highlight_1', 'highlight_2', 'highlight_3'] as const;

export const SellHero = () => {
  const t = useTranslations('SellPage.hero');

  return (
    <section className="relative min-h-[85svh] framer:min-h-[90vh] flex items-center overflow-hidden pt-[88px]">
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 framer:bg-transparent" aria-hidden />
        <div
          className="absolute inset-0 hidden framer:block bg-linear-to-r from-black/70 from-0% via-black/35 via-45% to-black/10 to-80%"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-[640px] py-10 framer:py-20">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-4 framer:mb-6">
            {t('eyebrow')}
          </p>

          <h1 className="text-white font-bold leading-[1.08] tracking-[-0.02em] text-[1.75rem] framer:text-[clamp(2.5rem,5vw,3.75rem)] mb-5 framer:mb-8">
            {t('title')}
          </h1>

          <p className="text-[14px] framer:text-[18px] text-white/75 leading-relaxed max-w-[520px] mb-6 framer:mb-10">
            {t('subtitle')}
          </p>

          <ul className="space-y-2.5 framer:space-y-3.5 mb-8 framer:mb-12 list-none ps-0">
            {HIGHLIGHTS.map((key) => (
              <li key={key} className="flex items-center gap-3 text-[13px] framer:text-[16px] text-white/90">
                <span className="w-5 h-5 framer:w-6 framer:h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 framer:w-2 framer:h-2 rounded-full bg-accent" />
                </span>
                {t(key)}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 framer:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_4px_20px_rgba(5,150,105,0.3)]"
            >
              {t('cta_primary')}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
            <a
              href="https://wa.me/4741351547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 framer:px-10 framer:py-4.5 bg-white/10 border border-white/30 text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-white/20 backdrop-blur-sm transition-all duration-200 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              {t('cta_secondary')}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
