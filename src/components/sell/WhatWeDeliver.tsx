'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';

const GROUPS = [
  {
    key: 'property_preparation',
    items: ['market_valuation', 'strategy_consultation', 'legal_review', 'pricing_plan'],
  },
  {
    key: 'presentation_marketing',
    items: ['professional_photography', 'visualization_3d', 'listing_creation', 'international_exposure', 'buyer_screening'],
  },
  {
    key: 'representation_negotiation',
    items: ['calls_handled', 'viewings_coordinated', 'buyer_qualification', 'offer_negotiation', 'deposit_coordination'],
  },
  {
    key: 'notary_closing',
    items: ['contract_preparation', 'notary_coordination', 'document_followup', 'completion_assistance'],
  },
] as const;

export const WhatWeDeliver = () => {
  const t = useTranslations('SellPage.whatWeDeliver');

  return (
    <section className="bg-surface py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-8 framer:mb-14">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.4rem] framer:text-[2.25rem] font-bold text-foreground leading-[1.15] tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 framer:gap-6 max-w-[1100px] mx-auto">
          {GROUPS.map(({ key: groupKey, items }) => (
            <div key={groupKey} className="bg-white rounded-xl p-5 framer:p-6 border border-border/20 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-shadow duration-200">
              <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground mb-3 framer:mb-4">
                {t(`groups.${groupKey}.title`)}
              </h3>
              <ul className="space-y-2 framer:space-y-2.5">
                {items.map((itemKey) => (
                  <li
                    key={itemKey}
                    className="flex items-center gap-3 text-[14px] framer:text-[15px] text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                    {t(`groups.${groupKey}.items.${itemKey}`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
