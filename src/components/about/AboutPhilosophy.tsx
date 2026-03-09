'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';

const PHILOSOPHY_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop';

export const AboutPhilosophy = () => {
  const t = useTranslations('About.philosophy');

  return (
    <section className="py-16 framer:py-28">
      <Container>
        <div className="grid grid-cols-1 framer:grid-cols-2 gap-10 framer:gap-16 items-center max-w-[1200px] mx-auto">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-5 framer:mb-7">
              <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
              <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.25em] uppercase text-accent">
                {t('eyebrow')}
              </p>
            </div>

            <h2 className="text-[1.75rem] framer:text-[clamp(2rem,3.5vw,2.75rem)] font-bold text-foreground leading-[1.15] tracking-tight mb-8 framer:mb-10">
              {t('title')}
            </h2>

            <div className="space-y-5 framer:space-y-6">
              <p className="text-[15px] framer:text-[18px] text-foreground/90 leading-relaxed font-medium">
                {t('body1')}
              </p>
              <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed">
                {t('body2')}
              </p>
              <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed">
                {t('body3')}
              </p>
              <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed">
                {t('body4')}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl framer:rounded-3xl overflow-hidden min-h-[300px] framer:min-h-[520px]">
            <Image
              src={PHILOSOPHY_IMAGE}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 810px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
