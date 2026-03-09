'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Camera, FileText, Globe, Users, Layers } from 'lucide-react';
import { Container } from '../layout/Container';

const CARDS = [
  {
    key: 'photography',
    icon: Camera,
    image: '/images/about-photography.png',
  },
  {
    key: 'descriptions',
    icon: FileText,
    image: '/images/about-descriptions.png',
  },
  {
    key: 'international',
    icon: Globe,
    image: '/images/about-international.png',
  },
  {
    key: 'client',
    icon: Users,
    image: '/images/about-client.png',
  },
  {
    key: 'fullService',
    icon: Layers,
    image: '/images/about-fullservice.png',
  },
] as const;

export const AboutDifference = () => {
  const t = useTranslations('About.difference');

  return (
    <section className="py-16 framer:py-28 bg-surface/40">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-12 framer:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 framer:mb-6">
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
            <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.25em] uppercase text-accent">
              {t('eyebrow')}
            </p>
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
          </div>
          <h2 className="text-[1.75rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.1] tracking-tight max-w-[600px] mx-auto mb-4 framer:mb-5">
            {t('title')}
          </h2>
          <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed max-w-[520px] mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Top row — 2 featured cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 framer:gap-6 mb-5 framer:mb-6 max-w-[1200px] mx-auto">
          {CARDS.slice(0, 2).map(({ key, icon: Icon, image }) => (
            <div
              key={key}
              className="group bg-white rounded-2xl framer:rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-[200px] framer:h-[260px] overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 810px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" aria-hidden />
                <div className="absolute bottom-4 inset-s-4 framer:bottom-5 framer:inset-s-5">
                  <div className="w-10 h-10 framer:w-12 framer:h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 framer:w-6 framer:h-6 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div className="p-5 framer:p-8">
                <h3 className="text-[17px] framer:text-[21px] font-bold text-foreground mb-2 framer:mb-3 tracking-tight">
                  {t(`cards.${key}.title`)}
                </h3>
                <p className="text-[13px] framer:text-[16px] text-muted leading-relaxed">
                  {t(`cards.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 framer:gap-6 max-w-[1200px] mx-auto">
          {CARDS.slice(2).map(({ key, icon: Icon, image }) => (
            <div
              key={key}
              className="group bg-white rounded-2xl framer:rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-[180px] framer:h-[200px] overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 810px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" aria-hidden />
                <div className="absolute bottom-3 inset-s-3 framer:bottom-4 framer:inset-s-4">
                  <div className="w-9 h-9 framer:w-10 framer:h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4 framer:w-5 framer:h-5 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div className="p-5 framer:p-6">
                <h3 className="text-[16px] framer:text-[19px] font-bold text-foreground mb-2 framer:mb-2.5 tracking-tight">
                  {t(`cards.${key}.title`)}
                </h3>
                <p className="text-[13px] framer:text-[15px] text-muted leading-relaxed">
                  {t(`cards.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
