'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { BedDouble, Bath, Square, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { ALL_LISTINGS, type PropertyListing } from '@/data/sellListings';

const CARDS_PER_PAGE = 6; // 2 rows × 3 cards

function ListingCard({
  listing,
  t,
}: {
  listing: PropertyListing;
  t: (key: string) => string;
}) {
  const statusKey = `status_${listing.status}`;
  const isAvailable =
    listing.status === 'available' || listing.status === 'under_negotiation';

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-border/20 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-border/30 transition-all duration-300">
      <div className="relative aspect-[4/3] w-full bg-surface overflow-hidden rounded-t-2xl">
        <img
          src={listing.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 framer:p-6">
        <div className="flex items-center justify-between gap-4 mb-1.5">
          <h3 className="text-[17px] framer:text-[19px] font-bold text-foreground leading-tight tracking-tight min-w-0">
            {t(`names.${listing.nameKey}`)}
          </h3>
          <span
            className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
              isAvailable
                ? 'bg-accent/15 text-accent'
                : 'bg-foreground/10 text-foreground'
            }`}
          >
            {t(statusKey)}
          </span>
        </div>
        <p className="text-[13px] framer:text-[14px] text-muted mb-4">
          {t(`cities.${listing.cityKey}`)} · {t(`types.${listing.typeKey}`)}
        </p>
        <div className="mt-auto flex items-center gap-5 framer:gap-6 text-[13px] framer:text-[14px] text-muted">
          <span className="flex items-center gap-2">
            <BedDouble className="w-4 h-4 text-muted" strokeWidth={1.8} />
            <span>{listing.bedrooms} {t('bedrooms')}</span>
          </span>
          <span className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-muted" strokeWidth={1.8} />
            <span>{listing.bathrooms} {t('bathrooms')}</span>
          </span>
          <span className="flex items-center gap-2">
            <Square className="w-4 h-4 text-muted" strokeWidth={1.8} />
            <span>{listing.area} m²</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export const PropertiesWeRepresent = () => {
  const t = useTranslations('SellPage.properties');
  const totalPages = Math.ceil(ALL_LISTINGS.length / CARDS_PER_PAGE) || 1;
  const [page, setPage] = useState(0);

  const start = page * CARDS_PER_PAGE;
  const visibleListings = ALL_LISTINGS.slice(start, start + CARDS_PER_PAGE);

  const goPrev = () => setPage((p) => (p <= 0 ? totalPages - 1 : p - 1));
  const goNext = () => setPage((p) => (p >= totalPages - 1 ? 0 : p + 1));

  return (
    <section id="properties" className="bg-surface py-20 framer:py-28 overflow-hidden">
      <Container className="max-w-[1200px]">
        <header className="text-center mb-16 framer:mb-20">
          <p className="text-[11px] framer:text-[12px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.75rem] framer:text-[2.25rem] font-bold text-foreground leading-[1.2] tracking-tight mb-3 framer:mb-4">
            {t('title')}
          </h2>
          <p className="text-[15px] framer:text-[16px] text-muted leading-relaxed max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 framer:gap-8 mb-8 framer:mb-10">
          {visibleListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} t={t} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-white text-foreground hover:bg-surface hover:border-border/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label={t('prev')}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-[14px] font-medium text-foreground tabular-nums min-w-[4rem] text-center">
            {page + 1} / {totalPages}
          </span>
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-white text-foreground hover:bg-surface hover:border-border/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label={t('next')}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </section>
  );
};
