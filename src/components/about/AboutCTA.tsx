'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const CTA_IMAGE =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop';

export const AboutCTA = () => {
  const t = useTranslations('About.cta');

  return (
    <section className="relative w-full min-h-[440px] framer:min-h-[520px] flex items-center justify-center overflow-hidden">
      <Image
        src={CTA_IMAGE}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6 framer:px-10 py-24 framer:py-32 max-w-[640px] mx-auto">
        <h2 className="text-white text-[1.75rem] framer:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
          {t('title')}
        </h2>
        <p className="text-white/80 text-[15px] framer:text-[19px] mb-10 leading-relaxed">
          {t('description')}
        </p>
        <Link
          href="/sell"
          className="inline-flex items-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 shadow-[0_6px_24px_rgba(5,150,105,0.35)]"
        >
          {t('button')}
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
};
