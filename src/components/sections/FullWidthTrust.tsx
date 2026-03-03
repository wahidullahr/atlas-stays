import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';

export const FullWidthTrust = () => {
  const t = useTranslations('Trust');

  return (
    <section className="relative w-full min-h-[420px] framer:min-h-[520px] overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative max-w-[1200px] mx-auto px-6 framer:px-10 py-20 framer:py-28 flex flex-col justify-center min-h-[420px] framer:min-h-[520px]">
        <div className="max-w-[500px]">
          <p className="text-accent text-xs font-bold tracking-[0.15em] uppercase mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-white text-3xl framer:text-[2.75rem] font-bold tracking-tight leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-white/85 text-base framer:text-lg leading-relaxed mb-10">
            {t('subtitle')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black rounded-xl font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
};
