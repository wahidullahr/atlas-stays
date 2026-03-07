'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';

const GROUPS = [
  { key: 'property_preparation', image: '/images/floor-plan.png' },
  { key: 'presentation_marketing', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=700&fit=crop&q=80' },
  { key: 'representation_negotiation', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=700&fit=crop&q=80' },
  { key: 'notary_closing', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=700&fit=crop&q=80' },
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
  const group = GROUPS[activeTab];

  return (
    <section className="bg-[#f8f8f8] py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="mb-10 framer:mb-14 text-center">
          <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] font-bold text-foreground tracking-tight max-w-[700px] mx-auto">
            {t('title')}
          </h2>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-2xl framer:rounded-3xl p-5 framer:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-black/4">
          {/* Tab navigation — horizontal */}
          <nav className="flex gap-2 framer:gap-3 overflow-x-auto pb-5 framer:pb-8 mb-0" aria-label="Service categories">
            {GROUPS.map((g, i) => (
              <button
                key={g.key}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2.5 shrink-0 px-4 py-2.5 framer:px-5 framer:py-3 rounded-full text-start font-semibold text-[13px] framer:text-[14px] transition-all duration-200 cursor-pointer ${
                  activeTab === i
                    ? 'bg-accent text-white shadow-md shadow-accent/20'
                    : 'bg-[#f5f5f5] text-foreground hover:bg-[#ebebeb]'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold tabular-nums ${
                  activeTab === i ? 'bg-white/20 text-white' : 'bg-black/5 text-foreground/60'
                }`}>
                  {i + 1}
                </span>
                {t(`groups.${g.key}.title`)}
              </button>
            ))}
          </nav>

          {/* Content: Image + Details — balanced 2-column */}
          <div className="grid grid-cols-1 framer:grid-cols-2 gap-6 framer:gap-10">
            {/* Image */}
            <div className="relative aspect-4/3 rounded-xl framer:rounded-2xl overflow-hidden bg-[#f0f0f0]">
              {GROUPS.map((g, i) => (
                <Image
                  key={g.key}
                  src={g.image}
                  alt={t(`groups.${g.key}.title`)}
                  fill
                  className={`object-cover object-center transition-opacity duration-500 ${
                    i === activeTab ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(min-width: 810px) 50vw, 100vw"
                  priority={i === 0}
                />
              ))}
              <div className="absolute bottom-4 inset-s-4 flex items-center gap-1.5" aria-hidden>
                {GROUPS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === activeTab ? 'w-6 bg-accent' : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center py-1 framer:py-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] framer:text-[12px] font-semibold tracking-widest uppercase text-accent mb-3 framer:mb-4">
                Step {activeTab + 1} of {GROUPS.length}
              </span>
              <h3 className="text-[20px] framer:text-[26px] font-bold text-foreground mb-3 framer:mb-4 tracking-tight leading-tight">
                {t(`groups.${group.key}.title`)}
              </h3>
              <p className="text-[14px] framer:text-[16px] text-muted leading-relaxed mb-5 framer:mb-7">
                {t(`groups.${group.key}.description`)}
              </p>
              <ul className="space-y-2.5 framer:space-y-3 mb-6 framer:mb-8">
                {ITEMS[group.key].map((itemKey) => (
                  <li key={itemKey} className="flex items-center gap-3 text-[14px] framer:text-[15px] text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {t(`groups.${group.key}.items.${itemKey}`)}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] framer:text-[15px] font-semibold text-accent hover:text-accent/80 transition-colors w-fit"
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
