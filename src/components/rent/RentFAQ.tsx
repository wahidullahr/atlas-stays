'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { Container } from '../layout/Container';

const FAQ_KEYS = [
  'platforms',
  'cleaning',
  'support',
  'reporting',
  'abroad',
  'pricing',
] as const;

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border/30 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 framer:py-6 text-start focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] framer:text-[17px] font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[13px] framer:text-[15px] text-muted leading-relaxed pb-5 framer:pb-6 pe-10">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export const RentFAQ = () => {
  const t = useTranslations('RentPage.faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="grid grid-cols-1 framer:grid-cols-[1fr_1.5fr] gap-10 framer:gap-20">
          <div className="framer:sticky framer:top-32 framer:self-start">
            <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
              {t('eyebrow')}
            </p>
            <h2 className="text-[1.5rem] framer:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-3 framer:mb-5">
              {t('title')}
            </h2>
            <p className="text-[13px] framer:text-[16px] text-muted leading-relaxed max-w-sm">
              {t('subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 framer:p-8 border border-border/20 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            {FAQ_KEYS.map((key, i) => (
              <FAQItem
                key={key}
                question={t(`items.${key}.q`)}
                answer={t(`items.${key}.a`)}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
