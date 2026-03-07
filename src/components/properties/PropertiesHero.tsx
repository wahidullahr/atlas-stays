'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop';

const STAT_KEYS = ['rent', 'sale', 'cities', 'owners'] as const;

export const PropertiesHero = () => {
  const t = useTranslations('Properties');
  const tStats = useTranslations('Properties.trustStrip');

  return (
    <section className="relative min-h-[55svh] framer:min-h-[60vh] flex flex-col overflow-hidden pt-[88px]">
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
        <Container className="max-w-[1360px]">
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
          </div>
        </Container>
      </div>

      {/* Trust strip — same style as Sell/Rent/About pages */}
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
