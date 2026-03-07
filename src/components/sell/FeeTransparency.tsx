'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { Wallet, FileCheck, Shield, PenLine } from 'lucide-react';

const POINTS = [
  { key: 'commission', icon: Wallet },
  { key: 'no_listing_fee', icon: FileCheck },
  { key: 'no_hidden_costs', icon: Shield },
  { key: 'written_mandate', icon: PenLine },
] as const;

const SEGMENT_COLORS = [
  { stroke: '#059669', bg: 'bg-accent' },
  { stroke: '#10b981', bg: 'bg-emerald-500' },
  { stroke: '#34d399', bg: 'bg-emerald-400' },
  { stroke: '#6ee7b7', bg: 'bg-emerald-300' },
];

export const FeeTransparency = () => {
  const t = useTranslations('SellPage.feeTransparency');

  const radius = 120;
  const strokeWidth = 28;
  const circumference = 2 * Math.PI * radius;
  const segmentGap = 8;
  const totalGap = segmentGap * POINTS.length;
  const segmentLength = (circumference - totalGap) / POINTS.length;

  return (
    <section className="bg-white py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="text-center mb-10 framer:mb-14">
          <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.1] tracking-tight max-w-[700px] mx-auto">
            {t('title')}
          </h2>
        </div>

        <div className="flex flex-col framer:flex-row items-center gap-10 framer:gap-16 framer:justify-center">
          {/* Circle diagram */}
          <div className="relative shrink-0">
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              className="w-[240px] h-[240px] framer:w-[300px] framer:h-[300px]"
            >
              {/* Background track */}
              <circle
                cx="150"
                cy="150"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
              />
              {/* Segments */}
              {POINTS.map((_, i) => {
                const offset = i * (segmentLength + segmentGap);
                return (
                  <circle
                    key={i}
                    cx="150"
                    cy="150"
                    r={radius}
                    fill="none"
                    stroke={SEGMENT_COLORS[i].stroke}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                    strokeDashoffset={-offset}
                    className="transition-all duration-500"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '150px 150px' }}
                  />
                );
              })}
            </svg>
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[28px] framer:text-[36px] font-bold text-foreground tracking-tight">0%</span>
              <span className="text-[12px] framer:text-[13px] text-muted font-medium mt-0.5">{t('eyebrow')}</span>
            </div>
          </div>

          {/* Points list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 framer:gap-5 flex-1 max-w-[640px]">
            {POINTS.map(({ key, icon: Icon }, i) => (
              <div
                key={key}
                className="flex items-start gap-4 bg-[#f8f8f8] rounded-2xl p-5 framer:p-6 border border-border/20 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-shadow duration-300"
              >
                <div className={`w-11 h-11 framer:w-12 framer:h-12 rounded-xl ${SEGMENT_COLORS[i].bg} flex items-center justify-center shrink-0 shadow-sm`}>
                  <Icon className="w-5 h-5 framer:w-6 framer:h-6 text-white" strokeWidth={1.75} />
                </div>
                <p className="text-[15px] framer:text-[16px] font-semibold text-foreground leading-snug pt-1.5">
                  {t(`points.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
