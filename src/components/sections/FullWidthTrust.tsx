'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FileText, ClipboardCheck, Box, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';

const PROOF_ITEMS = [
  {
    key: 'report' as const,
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    blurred: false,
  },
  {
    key: 'checklist' as const,
    icon: ClipboardCheck,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop',
    blurred: false,
  },
  {
    key: 'render' as const,
    icon: Box,
    image: '/images/3d-render.png',
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
          <p className="text-[11px] framer:text-[15px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.6rem] framer:text-[3rem] font-bold text-foreground leading-[1.1] tracking-tight mb-3 framer:mb-5">
            {t('title')}
          </h2>
          <p className="text-[13px] framer:text-[17px] text-muted max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Proof Cards */}
        <div
          className="grid grid-cols-1 framer:grid-cols-3 gap-5 framer:gap-8 mb-12 framer:mb-16"
          style={{ perspective: '1200px' }}
        >
          {PROOF_ITEMS.map((item, i) => {
            const Icon = item.icon;
            const tiltDeg = i === 0 ? 2 : i === 2 ? -2 : 0;

            return (
              <div
                key={item.key}
                className="group relative rounded-2xl border border-border/20 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                style={{
                  transform: `rotateY(${tiltDeg}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className={`object-cover transition-all duration-500 ${
                      item.blurred
                        ? 'blur-[6px] scale-105 group-hover:blur-[3px]'
                        : 'scale-100 group-hover:scale-105'
                    }`}
                    sizes="(max-width: 810px) 100vw, 33vw"
                  />
                  {item.blurred && <div className="absolute inset-0 bg-white/40" />}

                  {/* Icon badge — only on blurred cards */}
                  {item.blurred && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 framer:w-16 framer:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 framer:w-7 framer:h-7 text-accent" />
                      </div>
                    </div>
                  )}

                  {/* Badge label — only on blurred cards */}
                  {item.blurred && (
                    <div className="absolute top-3 inset-e-3 px-2.5 py-1 bg-foreground/80 text-white text-[10px] framer:text-[11px] font-bold uppercase tracking-wider rounded-md">
                      {t(`proofs.${item.key}.badge`)}
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-5 framer:p-6 border-t border-border/10">
                  <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground mb-1.5">
                    {t(`proofs.${item.key}.title`)}
                  </h3>
                  <p className="text-[12px] framer:text-[14px] text-muted leading-relaxed">
                    {t(`proofs.${item.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[15px] hover:bg-accent/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>
      </Container>
    </section>
  );
};
