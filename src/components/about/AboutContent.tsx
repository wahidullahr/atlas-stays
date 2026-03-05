'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Shield, Target, Heart, MapPin } from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop';

const VALUE_ICONS = {
  transparency: Shield,
  reliability: Target,
  quality: Heart,
  local: MapPin,
} as const;

const VALUE_KEYS = ['transparency', 'reliability', 'quality', 'local'] as const;

export const AboutContent = () => {
  const t = useTranslations('About');

  return (
    <>
      {/* Mission & Story */}
      <Section className="pt-12 framer:pt-16 pb-12 framer:pb-16">
        <Container>
          <div className="grid grid-cols-1 framer:grid-cols-2 gap-12 framer:gap-16 max-w-[1200px] mx-auto">
            <div>
              <h2 className="h2 mb-6">{t('mission.title')}</h2>
              <p className="body-muted mb-4 text-[15px] framer:text-[17px] leading-relaxed">
                {t('mission.lead')}
              </p>
              <p className="body-muted text-[14px] framer:text-[16px] leading-relaxed">
                {t('mission.body')}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-surface min-h-[280px] framer:min-h-[340px]">
              <Image
                src={HERO_IMAGE}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-16 framer:mt-24 max-w-[720px]">
            <h2 className="h2 mb-6">{t('story.title')}</h2>
            <p className="body-muted text-[15px] framer:text-[17px] leading-relaxed">
              {t('story.body')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-surface/30 py-12 framer:py-20">
        <Container>
          <div className="text-center mb-10 framer:mb-14">
            <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
              {t('values.eyebrow')}
            </p>
            <h2 className="h2">{t('values.title')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 framer:grid-cols-4 gap-6 framer:gap-8 max-w-[1200px] mx-auto">
            {VALUE_KEYS.map((key) => {
              const Icon = VALUE_ICONS[key];
              return (
                <div
                  key={key}
                  className="bg-white rounded-2xl p-6 framer:p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 framer:mb-5">
                    <Icon className="w-6 h-6 framer:w-7 framer:h-7 text-accent" />
                  </div>
                  <h3 className="text-[17px] framer:text-[19px] font-bold text-foreground mb-2 framer:mb-3">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-[14px] framer:text-[15px] text-muted leading-relaxed">
                    {t(`values.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
};
