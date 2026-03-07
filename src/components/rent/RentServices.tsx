'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Sparkles, ClipboardCheck, Key, Shirt, ShoppingBag } from 'lucide-react';
import { Container } from '../layout/Container';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1920&auto=format&fit=crop';

const SERVICES = [
  { key: 'cleaning', icon: Sparkles },
  { key: 'inspection', icon: ClipboardCheck },
  { key: 'keys', icon: Key },
  { key: 'linen', icon: Shirt },
  { key: 'restocking', icon: ShoppingBag },
] as const;

const RADIUS = 190;
const CENTER = 250;

export const RentServices = () => {
  const t = useTranslations('RentPage.services');

  return (
    <section className="relative py-10 framer:py-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-white/80 framer:bg-white/85"
          aria-hidden
        />
      </div>
      <Container className="relative z-10 max-w-[1360px]">
        <div className="text-center mb-10 framer:mb-14">
          <p className="text-[11px] framer:text-[14px] font-bold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.6rem] framer:text-[2.5rem] font-extrabold text-foreground leading-[1.12] tracking-tight mb-4 framer:mb-5">
            {t('title')}
          </h2>
          <p className="text-[15px] framer:text-[17px] text-foreground/75 leading-relaxed max-w-xl mx-auto font-medium">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[700px] aspect-square framer:max-w-[800px]">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 500"
              aria-hidden
            >
              <circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-black/10"
              />
              {SERVICES.map((_, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const x1 = CENTER + RADIUS * Math.cos(angle);
                const y1 = CENTER + RADIUS * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={CENTER}
                    y1={CENTER}
                    x2={x1}
                    y2={y1}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-black/10"
                  />
                );
              })}
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 framer:w-32 framer:h-32 rounded-full bg-accent/15 flex items-center justify-center border-2 border-accent/30">
                <span className="text-[13px] framer:text-[16px] font-bold text-accent text-center px-2">
                  Core
                </span>
              </div>
            </div>

            {SERVICES.map(({ key, icon: Icon }, i) => {
              const angle = (i * 72 - 90) * (Math.PI / 180);
              const x = 50 + (50 * (RADIUS / CENTER)) * Math.cos(angle);
              const y = 50 + (50 * (RADIUS / CENTER)) * Math.sin(angle);
              return (
                <div
                  key={key}
                  className="absolute w-[180px] framer:w-[220px] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div className="rounded-2xl bg-white p-5 framer:p-6 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300 text-center">
                    <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 framer:mb-4">
                      <Icon className="w-6 h-6 framer:w-7 framer:h-7 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground mb-1.5 leading-tight">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-[12px] framer:text-[14px] text-foreground/70 leading-snug line-clamp-2">
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
