'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Circle } from 'lucide-react';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop';

const STEPS = ['sell', 'longTerm', 'shortTerm'] as const;

export const CorePillars = () => {
  const t = useTranslations('CorePillars');

  return (
    <section className="relative w-full min-h-auto framer:min-h-[800px] overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay on mobile for card contrast against bg peek */}
        <div className="absolute inset-0 bg-black/30 framer:bg-transparent" aria-hidden />
      </div>

      {/* Card container */}
      <div className="relative z-10 flex items-center min-h-auto framer:min-h-[800px] px-4 py-10 framer:px-10 framer:py-0">
        <div className="w-full max-w-none framer:max-w-[600px] bg-white rounded-xl framer:rounded-2xl p-6 framer:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.12)] framer:ms-[8%]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 framer:gap-3 mb-5 framer:mb-8">
            <Circle className="w-3 h-3 framer:w-3.5 framer:h-3.5 text-foreground fill-foreground" />
            <p className="text-[12px] framer:text-[14px] font-semibold tracking-widest uppercase text-foreground">
              {t('eyebrow')}
            </p>
          </div>

          {/* Title */}
          <h2 className="text-[1.5rem] framer:text-[2.75rem] font-bold text-foreground leading-[1.15] framer:leading-[1.12] tracking-tight mb-3 framer:mb-5">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed mb-6 framer:mb-10">
            {t('description')}
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-5 framer:gap-8 mb-6 framer:mb-10">
            {STEPS.map((key, i) => (
              <div key={key} className="flex items-start gap-3.5 framer:gap-5">
                <span className="text-[15px] framer:text-[18px] font-bold text-foreground shrink-0 mt-0.5 w-8 framer:w-10">
                  0{i + 1}.
                </span>
                <div>
                  <h3 className="text-[16px] framer:text-[20px] font-bold text-foreground mb-1 framer:mb-1.5">
                    {t(`pillars.${key}.title`)}
                  </h3>
                  <p className="text-[13px] framer:text-[15px] text-muted leading-relaxed">
                    {t(`pillars.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3.5 framer:px-9 framer:py-4.5 bg-foreground text-white rounded-xl font-semibold text-[14px] framer:text-[17px] hover:bg-foreground/90 transition-colors duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};
