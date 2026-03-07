'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Camera, MessageCircle, BarChart3, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop';

const STEPS = [
  { key: 'list', number: '01', icon: Camera },
  { key: 'manage', number: '02', icon: MessageCircle },
  { key: 'report', number: '03', icon: BarChart3 },
] as const;

export const RentProcess = () => {
  const t = useTranslations('RentPage.process');

  return (
    <section className="relative py-16 framer:py-24 overflow-hidden">
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/80" aria-hidden />
      <Container className="relative z-10 max-w-[1360px]">
        <div className="text-center mb-10 framer:mb-14">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.4rem] framer:text-[2.25rem] font-bold text-foreground leading-[1.15] tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 framer:grid-cols-3 gap-5 framer:gap-7 mb-10 framer:mb-14">
          {STEPS.map(({ key, number, icon: Icon }) => (
            <div
              key={key}
              className="relative bg-white rounded-2xl p-6 framer:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 border border-black/4"
            >
              <span
                className="absolute top-5 inset-e-5 text-end text-[56px] framer:text-[72px] font-extrabold text-[#E8ECF1] leading-none select-none"
                aria-hidden
              >
                {number}
              </span>
              <div className="relative">
                <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-accent/12 flex items-center justify-center text-accent mb-4 framer:mb-5">
                  <Icon className="w-6 h-6 framer:w-7 framer:h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-[16px] framer:text-[18px] font-bold text-foreground mb-1.5 framer:mb-2">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="text-[14px] framer:text-[15px] text-muted leading-relaxed">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 framer:px-10 framer:py-4 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_4px_16px_rgba(5,150,105,0.3)] hover:-translate-y-0.5"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
