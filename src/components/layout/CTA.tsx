import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

const CTA_IMAGE =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop';

export const CTA = () => {
  const t = useTranslations('CTA');

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
        <h2 className="text-white text-3xl framer:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
          {t('text')}
        </h2>
        <p className="text-white/80 text-lg framer:text-xl mb-10 leading-relaxed">
          {t('subtext')}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black rounded-xl font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent [box-shadow:var(--shadow-elevated)]"
        >
          {t('button')}
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </a>
      </div>
    </section>
  );
};
