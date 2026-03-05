'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';
import {
  ALL_RENT_LISTINGS,
  type RentPropertyListing,
  type RecentlyManagedListing,
} from '@/data/rentListings';

const CARDS_PER_PAGE = 6; // 2 rows × 3 cards

function isRecentlyManaged(
  listing: RentPropertyListing | RecentlyManagedListing
): listing is RecentlyManagedListing {
  return 'dateKey' in listing && !!listing.dateKey;
}

function PropertyCard({
  listing,
  t,
}: {
  listing: RentPropertyListing | RecentlyManagedListing;
  t: (key: string) => string;
}) {
  const isRented = isRecentlyManaged(listing);

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
        <span
          className={`inline-flex self-start px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3 ${
            isRented ? 'bg-foreground/10 text-foreground' : 'bg-accent/15 text-accent'
          }`}
        >
          {isRented ? t('status_rented') : t('status_available')}
        </span>
        <h3 className="text-[17px] framer:text-[19px] font-bold text-foreground leading-tight tracking-tight mb-1.5">
          {t(`names.${listing.nameKey}`)}
        </h3>
        <p className="flex items-center gap-2 text-[13px] framer:text-[14px] text-muted mb-2">
          <MapPin className="w-4 h-4 shrink-0" strokeWidth={1.8} />
          {t(`cities.${listing.cityKey}`)} · {t(`types.${listing.typeKey}`)}
        </p>
        <p className="text-[15px] framer:text-[17px] font-semibold text-foreground">
          {t(listing.priceKey)}
        </p>
        {isRented && (
          <p className="text-[12px] framer:text-[13px] text-muted mt-1">
            {t(listing.dateKey)}
          </p>
        )}
      </div>
    </article>
  );
}

export const RentPropertiesSection = () => {
  const t = useTranslations('RentPage.properties');
  const totalPages = Math.ceil(ALL_RENT_LISTINGS.length / CARDS_PER_PAGE) || 1;
  const [page, setPage] = useState(0);

  const start = page * CARDS_PER_PAGE;
  const visibleListings = ALL_RENT_LISTINGS.slice(start, start + CARDS_PER_PAGE);

  const goPrev = () => setPage((p) => (p <= 0 ? totalPages - 1 : p - 1));
  const goNext = () => setPage((p) => (p >= totalPages - 1 ? 0 : p + 1));

  return (
    <section id="properties" className="bg-background py-20 framer:py-28 overflow-hidden">
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
            <PropertyCard key={listing.id} listing={listing} t={t} />
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
