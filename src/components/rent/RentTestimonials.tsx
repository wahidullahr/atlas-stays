'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Quote, Star } from 'lucide-react';
import { Container } from '../layout/Container';
import { RENT_TESTIMONIALS } from '@/data/rentTestimonials';

export const RentTestimonials = () => {
  const t = useTranslations('RentPage.testimonials');

  return (
    <section className="bg-white py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1200px]">
        <div className="text-center mb-12 framer:mb-16">
          <p className="text-[11px] framer:text-[14px] font-bold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.5rem] framer:text-[2.5rem] font-extrabold text-foreground leading-[1.12] tracking-tight">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 framer:gap-8">
          {RENT_TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-[#EEF0F3] border border-black/6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 810px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" aria-hidden />
                <div className="absolute bottom-3 left-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" strokeWidth={1.5} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col p-5 framer:p-6">
                <Quote className="w-8 h-8 text-accent/30 mb-3" strokeWidth={1} />
                <blockquote className="text-[14px] framer:text-[15px] text-foreground leading-relaxed mb-4">
                  &ldquo;{t(`items.${testimonial.quoteKey}`)}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-sm">
                      {t(`items.${testimonial.nameKey}`).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-foreground">
                      {t(`items.${testimonial.nameKey}`)}
                    </p>
                    <p className="text-[12px] text-muted">
                      {t(`items.${testimonial.locationKey}`)}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
