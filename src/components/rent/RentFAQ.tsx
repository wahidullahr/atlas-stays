'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Plus, Minus } from 'lucide-react';
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
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`rounded-2xl transition-all duration-300 ${
        isOpen
          ? 'bg-accent/6 ring-1 ring-accent/20'
          : 'bg-white hover:bg-[#fafafa] ring-1 ring-border/10 hover:ring-border/20'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-5 p-5 framer:p-6 text-start focus:outline-none group cursor-pointer"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className={`w-8 h-8 framer:w-9 framer:h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
          isOpen ? 'bg-accent text-white' : 'bg-[#f0f0f0] text-foreground/50 group-hover:bg-accent/10 group-hover:text-accent'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
        <span className="flex-1 flex items-center justify-between gap-3">
          <span className={`text-[15px] framer:text-[17px] font-semibold leading-snug transition-colors ${
            isOpen ? 'text-accent' : 'text-foreground group-hover:text-foreground'
          }`}>
            {question}
          </span>
          <span className="text-[12px] font-medium text-muted/50 tabular-nums shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[14px] framer:text-[16px] text-foreground/70 leading-relaxed px-5 framer:px-6 pb-5 framer:pb-6 ps-17 framer:ps-19">
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
    <section className="bg-[#f8f8f8] py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[860px]">
        {/* Centered header */}
        <div className="text-center mb-10 framer:mb-14">
          <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.1] tracking-tight mb-3 framer:mb-4">
            {t('title')}
          </h2>
          <p className="text-[16px] framer:text-[18px] text-muted leading-relaxed max-w-[520px] mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="flex flex-col gap-3 framer:gap-3.5">
          {FAQ_KEYS.map((key, i) => (
            <FAQItem
              key={key}
              question={t(`items.${key}.q`)}
              answer={t(`items.${key}.a`)}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
