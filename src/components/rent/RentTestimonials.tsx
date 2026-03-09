'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Quote, Star } from 'lucide-react';
import { Container } from '../layout/Container';
import { RENT_TESTIMONIALS } from '@/data/rentTestimonials';

const items = [...RENT_TESTIMONIALS, ...RENT_TESTIMONIALS];

export const RentTestimonials = () => {
  const t = useTranslations('RentPage.testimonials');

  return (
    <section className="bg-white py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-10 framer:mb-14">
          <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.1] tracking-tight max-w-[700px] mx-auto">
            {t('title')}
          </h2>
        </div>
      </Container>

      {/* Marquee ticker — single row scrolling right to left */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 framer:w-24 bg-linear-to-r from-white to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 framer:w-24 bg-linear-to-l from-white to-transparent" aria-hidden />

        <div className="flex w-max animate-marquee gap-5 framer:gap-6 hover:[animation-play-state:paused]">
          {items.map((testimonial, idx) => (
            <article
              key={`${testimonial.id}-${idx}`}
              className="flex flex-col w-[340px] framer:w-[400px] shrink-0 rounded-2xl bg-white border border-border/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Image strip */}
              <div className="relative h-[120px] framer:h-[140px] overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="380px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" aria-hidden />
                <div className="absolute bottom-3 inset-s-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" strokeWidth={1.5} />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-5 framer:p-6 flex-1">
                <Quote className="w-7 h-7 text-accent/25 mb-3" strokeWidth={1} />
                <blockquote className="text-[13px] framer:text-[14px] text-foreground/80 leading-relaxed mb-4 flex-1">
                  &ldquo;{t(`items.${testimonial.quoteKey}`)}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-3 border-t border-border/15">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-[13px]">
                      {t(`items.${testimonial.nameKey}`).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">
                      {t(`items.${testimonial.nameKey}`)}
                    </p>
                    <p className="text-[11px] text-muted">
                      {t(`items.${testimonial.locationKey}`)}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
