'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { useTranslations } from 'next-intl';
import { useWhatsAppHref } from '@/hooks/useWhatsAppHref';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1920&auto=format&fit=crop';

const STAT_KEYS = ['owners', 'cities', 'occupancy', 'guarantee'] as const;

export const AboutHero = () => {
  const t = useTranslations('About.hero');
  const tStats = useTranslations('About.trustStrip');
  const whatsappHref = useWhatsAppHref();

  return (
    <section className="relative min-h-[85svh] framer:min-h-[90vh] flex flex-col overflow-hidden pt-[88px]">
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

      <div className="relative z-10 flex-1 flex items-center">
        <Container>
          <div className="max-w-[640px] py-10 framer:py-20">
            <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-white mb-4 framer:mb-6">
              {t('eyebrow')}
            </p>

            <h1 className="text-white font-bold leading-[1.08] tracking-[-0.02em] text-[1.75rem] framer:text-[clamp(2.5rem,5vw,3.75rem)] mb-5 framer:mb-8">
              {t('title')}
            </h1>

            <p className="text-[14px] framer:text-[18px] text-white/75 leading-relaxed max-w-[520px] mb-6 framer:mb-8">
              {t('subtitle')}
            </p>

            <p className="text-[15px] framer:text-[18px] font-semibold text-white mb-8 framer:mb-10">
              {t('key_line')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 framer:gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_4px_20px_rgba(5,150,105,0.3)]"
              >
                {t('cta_primary')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <a
                href={whatsappHref}
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
      </div>

      {/* Trust strip — same style as Sell/Rent pages */}
      <div
        className="relative z-10 framer:absolute framer:bottom-0 framer:inset-e-0 framer:w-[55%] framer:min-w-[400px] framer:max-w-[800px]"
        aria-label={tStats('ariaLabel')}
      >
        <div className="bg-white framer:rounded-ss-2xl px-5 py-5 framer:px-10 framer:py-8 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] framer:shadow-[0_8px_30px_rgba(0,0,0,0.12)] w-full">
          <div className="grid grid-cols-4 gap-4 framer:gap-8">
            {STAT_KEYS.map((key) => (
              <div key={key} className="flex flex-col items-center text-center">
                <span className="text-[18px] framer:text-[28px] font-extrabold text-foreground block tracking-tight">
                  {tStats(`${key}.value`)}
                </span>
                <span className="text-[10px] framer:text-[14px] text-muted block mt-1 framer:mt-1.5">
                  {tStats(`${key}.label`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
