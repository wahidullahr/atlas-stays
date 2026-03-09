'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

const GROUPS = [
  { key: 'property_preparation', image: '/images/property-preparation.png' },
  { key: 'presentation_marketing', image: '/images/presentation-marketing.png' },
  { key: 'representation_negotiation', image: '/images/representation-negotiation.png' },
  { key: 'notary_closing', image: '/images/notary-closing.png' },
] as const;

const ITEMS: Record<string, readonly string[]> = {
  property_preparation: ['market_valuation', 'strategy_consultation', 'legal_review', 'pricing_plan'],
  presentation_marketing: ['professional_photography', 'visualization_3d', 'listing_creation', 'international_exposure', 'buyer_screening'],
  representation_negotiation: ['calls_handled', 'viewings_coordinated', 'buyer_qualification', 'offer_negotiation', 'deposit_coordination'],
  notary_closing: ['contract_preparation', 'notary_coordination', 'document_followup', 'completion_assistance'],
};

export const WhatWeDeliver = () => {
  const t = useTranslations('SellPage.whatWeDeliver');
  const [activeTab, setActiveTab] = useState(0);
  const [paused, setPaused] = useState(false);
  const group = GROUPS[activeTab];

  const nextTab = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % GROUPS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextTab, 30000);
    return () => clearInterval(timer);
  }, [nextTab, paused]);

  const handleTabClick = (i: number) => {
    setActiveTab(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 60000);
  };

  return (
    <section className="bg-[#f8f8f8] py-16 framer:py-28 overflow-hidden">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="mb-10 framer:mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 framer:mb-5">
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
            <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.25em] uppercase text-accent">
              {t('eyebrow')}
            </p>
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
          </div>
          <h2 className="text-[1.75rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] font-bold text-foreground tracking-tight max-w-[700px] mx-auto">
            {t('title')}
          </h2>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-2xl framer:rounded-3xl p-5 framer:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-black/4">
          {/* Tab navigation */}
          <nav className="flex items-center gap-1.5 framer:gap-2 overflow-x-auto pb-6 framer:pb-8 border-b border-border/20 mb-6 framer:mb-10" aria-label="Service categories">
            {GROUPS.map((g, i) => (
              <React.Fragment key={g.key}>
                {i > 0 && (
                  <ChevronRight className="w-4 h-4 framer:w-5 framer:h-5 text-foreground/20 shrink-0" aria-hidden />
                )}
                <button
                  type="button"
                  onClick={() => handleTabClick(i)}
                  className={`flex items-center gap-2.5 shrink-0 px-4 py-2.5 framer:px-6 framer:py-3.5 rounded-xl text-start font-semibold text-[13px] framer:text-[14px] transition-all duration-300 cursor-pointer ${
                    activeTab === i
                      ? 'bg-accent text-white shadow-[0_4px_16px_rgba(5,150,105,0.3)]'
                      : 'bg-[#f5f5f5] text-foreground/70 hover:bg-[#ebebeb] hover:text-foreground'
                  }`}
                >
                  <span className={`w-6 h-6 framer:w-7 framer:h-7 rounded-lg flex items-center justify-center text-[11px] framer:text-[12px] font-bold tabular-nums transition-colors duration-300 ${
                    activeTab === i ? 'bg-white/20 text-white' : 'bg-black/6 text-foreground/50'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="hidden sm:inline">{t(`groups.${g.key}.title`)}</span>
                </button>
              </React.Fragment>
            ))}
          </nav>

          {/* Content: Image + Details */}
          <div className="grid grid-cols-1 framer:grid-cols-2 gap-6 framer:gap-10 framer:items-start">
            {/* Image */}
            <div className="relative aspect-4/3 framer:sticky framer:top-6 rounded-xl framer:rounded-2xl overflow-hidden bg-[#f0f0f0] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              {GROUPS.map((g, i) => (
                <Image
                  key={g.key}
                  src={g.image}
                  alt={t(`groups.${g.key}.title`)}
                  fill
                  className={`object-cover object-center transition-all duration-500 ${
                    i === activeTab ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  sizes="(min-width: 810px) 50vw, 100vw"
                  priority={i === 0}
                />
              ))}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" aria-hidden />
              {/* Tab indicator dots */}
              <div className="absolute bottom-4 inset-s-4 flex items-center gap-1.5" aria-hidden>
                {GROUPS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeTab ? 'w-7 bg-accent' : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>
              {/* Step badge on image */}
              <div className="absolute top-4 inset-s-4 framer:top-5 framer:inset-s-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm text-[10px] framer:text-[11px] font-semibold tracking-widest uppercase text-white/80">
                  Step {activeTab + 1}/{GROUPS.length}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-start py-0 framer:-mt-2 framer:min-h-[480px]">
              <h3 className="text-[22px] framer:text-[28px] font-bold text-foreground mb-3 framer:mb-5 tracking-tight leading-tight">
                {t(`groups.${group.key}.title`)}
              </h3>
              <p className="text-[14px] framer:text-[16px] text-muted leading-relaxed mb-6 framer:mb-8">
                {t(`groups.${group.key}.description`)}
              </p>

              {/* Checklist */}
              <ul className="space-y-2 framer:space-y-2.5 mb-7 framer:mb-9">
                {ITEMS[group.key].map((itemKey) => (
                  <li
                    key={itemKey}
                    className="flex items-center gap-3 framer:gap-3.5 text-[14px] framer:text-[15px] text-foreground bg-[#fafafa] rounded-xl px-4 py-3 framer:px-5 framer:py-3.5 border border-border/10"
                  >
                    <CheckCircle2 className="w-[18px] h-[18px] text-accent shrink-0" strokeWidth={2} />
                    {t(`groups.${group.key}.items.${itemKey}`)}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 framer:px-9 framer:py-4 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[15px] hover:bg-accent/90 transition-all duration-200 w-fit shadow-[0_4px_16px_rgba(5,150,105,0.3)]"
              >
                {t('cta_primary')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
