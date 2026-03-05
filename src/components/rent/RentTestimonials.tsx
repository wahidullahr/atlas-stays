'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';
import { Container } from '../layout/Container';
import { RENT_TESTIMONIALS } from '@/data/rentTestimonials';

export const RentTestimonials = () => {
  const t = useTranslations('RentPage.testimonials');

  return (
    <section className="bg-surface py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1200px]">
        <div className="text-center mb-12 framer:mb-16">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.4rem] framer:text-[2.25rem] font-bold text-foreground leading-[1.15] tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 framer:gap-8">
          {RENT_TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white border border-border/20 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <div className="relative aspect-[4/3] w-full bg-surface overflow-hidden">
                <img
                  src={testimonial.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 framer:p-6">
                <Quote className="w-8 h-8 text-accent/30 mb-3" strokeWidth={1.5} />
                <p className="text-[14px] framer:text-[15px] text-foreground leading-relaxed mb-4 flex-1">
                  {t(`items.${testimonial.quoteKey}`)}
                </p>
                <div>
                  <p className="text-[14px] font-semibold text-foreground">
                    {t(`items.${testimonial.nameKey}`)}
                  </p>
                  <p className="text-[12px] framer:text-[13px] text-muted">
                    {t(`items.${testimonial.locationKey}`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
