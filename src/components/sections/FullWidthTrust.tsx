'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FileText, ClipboardCheck, Box, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';

const PROOF_ITEMS = [
  {
    key: 'report' as const,
    icon: FileText,
    image: '/images/photo-report.png',
    blurred: false,
  },
  {
    key: 'checklist' as const,
    icon: ClipboardCheck,
    image: '/images/checklist-inspection.png',
    blurred: false,
  },
  {
    key: 'render' as const,
    icon: Box,
    image: '/images/3d-render-screen.png',
    blurred: false,
  },
];

export const FullWidthTrust = () => {
  const t = useTranslations('Trust');

  return (
    <section id="proof" className="relative bg-background overflow-hidden py-16 framer:py-28">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="text-center mb-10 framer:mb-16">
          <div className="flex items-center justify-center gap-3 mb-5 framer:mb-7">
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
            <p className="text-[11px] framer:text-[13px] font-semibold tracking-[0.25em] uppercase text-accent">
              {t('eyebrow')}
            </p>
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
          </div>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.08] tracking-tight mb-4 framer:mb-6">
            {t('title')}
          </h2>
          <p className="text-[15px] framer:text-[18px] text-muted max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Proof Cards */}
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-5 framer:gap-6 mb-12 framer:mb-16">
          {PROOF_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="group relative rounded-2xl framer:rounded-3xl border border-border/15 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 810px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" aria-hidden />

                  {/* Icon badge */}
                  <div className="absolute top-4 inset-s-4">
                    <div className="w-10 h-10 framer:w-11 framer:h-11 rounded-xl bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5 framer:p-7">
                  <h3 className="text-[15px] framer:text-[18px] font-bold text-foreground mb-1.5 framer:mb-2">
                    {t(`proofs.${item.key}.title`)}
                  </h3>
                  <p className="text-[13px] framer:text-[15px] text-foreground/70 leading-relaxed">
                    {t(`proofs.${item.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2.5 px-8 py-4 framer:px-10 framer:py-4.5 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 shadow-[0_6px_24px_rgba(5,150,105,0.35)]"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
