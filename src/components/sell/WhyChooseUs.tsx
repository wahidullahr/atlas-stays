'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Presentation, UserCheck, Handshake, FileCheck } from 'lucide-react';
import { Container } from '../layout/Container';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop';

const STEPS = [
  { key: 'presentation', icon: Presentation },
  { key: 'qualification', icon: UserCheck },
  { key: 'negotiation', icon: Handshake },
  { key: 'notary', icon: FileCheck },
] as const;

export const WhyChooseUs = () => {
  const t = useTranslations('SellPage.whyUs');

  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/85" aria-hidden />

      <div className="relative z-10">
        <Container className="max-w-[1360px] p-0">
          <div className="grid grid-cols-1 framer:grid-cols-2 gap-0 framer:items-stretch">
            {/* Left: headline */}
            <div className="py-16 framer:py-24 px-6 framer:px-10 framer:flex framer:items-center">
              <div>
                <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
                  {t('eyebrow')}
                </p>
                <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.1] tracking-tight mb-6 framer:mb-8">
                  {t('title')}
                </h2>
                <p className="text-[18px] framer:text-[24px] text-muted leading-relaxed">
                  {t('subtitle')}
                </p>
              </div>
            </div>

            {/* Right: timeline */}
            <div className="py-16 framer:py-24 px-6 framer:px-10">
              <div className="relative pl-1">
                <div
                  className="absolute top-4 bottom-4 inset-s-4 w-px bg-border rtl:inset-s-auto rtl:inset-e-4"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-0">
                  {STEPS.map(({ key, icon: Icon }, i) => (
                    <div
                      key={key}
                      className="group flex items-start gap-5 framer:gap-6 py-5 framer:py-6 first:pt-0 last:pb-0 border-b border-border/40 last:border-0"
                    >
                      <div className="relative z-10 shrink-0 w-8 h-8 framer:w-9 framer:h-9 rounded-full bg-accent flex items-center justify-center text-white text-[12px] framer:text-[13px] font-bold tabular-nums">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <div className="w-9 h-9 framer:w-10 framer:h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                          <Icon className="w-4 h-4 framer:w-5 framer:h-5 text-accent" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground mb-1.5">
                          {t(`cards.${key}.title`)}
                        </h3>
                        <p className="text-[13px] framer:text-[14px] text-foreground/70 leading-relaxed">
                          {t(`cards.${key}.description`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
