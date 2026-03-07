'use client';

import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Container } from '../layout/Container';
import { PropertiesPagination } from '@/components/properties/PropertiesPagination';
import { ALL_LISTINGS, type PropertyListing } from '@/data/sellListings';
import type { PropertyFilters } from '@/components/properties/PropertiesFilterBar';
import { PropertyCard } from '@/components/properties/PropertyCard';

const CARDS_PER_PAGE = 3; // 1 row × 3 cards

function filterSaleListings(
  listings: PropertyListing[],
  filters: PropertyFilters,
  t: (key: string) => string
): PropertyListing[] {
  return listings.filter((listing) => {
    if (filters.city && listing.cityKey !== filters.city) return false;
    if (filters.type && listing.typeKey !== filters.type) return false;
    if (filters.bedrooms) {
      const b = listing.bedrooms;
      const want = filters.bedrooms === '4+' ? 4 : parseInt(filters.bedrooms, 10);
      if (filters.bedrooms === '4+') {
        if (b < 4) return false;
      } else if (b !== want) return false;
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const name = t(`names.${listing.nameKey}`).toLowerCase();
      const city = t(`cities.${listing.cityKey}`).toLowerCase();
      const type = t(`types.${listing.typeKey}`).toLowerCase();
      if (!name.includes(q) && !city.includes(q) && !type.includes(q)) return false;
    }
    if (filters.underOffer && listing.status !== 'under_negotiation') return false;
    return true;
  });
}

function toCardListing(listing: PropertyListing): import('@/components/properties/PropertyCard').PropertyCardListing {
  return {
    ...listing,
    status: listing.status,
  };
}

type PropertiesWeRepresentProps = {
  hideHeader?: boolean;
  filters?: PropertyFilters;
};

export const PropertiesWeRepresent = ({ hideHeader, filters }: PropertiesWeRepresentProps) => {
  const t = useTranslations('SellPage.properties');
  const tCard = useTranslations('Properties.card');
  const filtered = useMemo(
    () => (filters ? filterSaleListings(ALL_LISTINGS, filters, t) : ALL_LISTINGS),
    [filters, t]
  );
  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE) || 1;
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const page = Math.min(
    Math.max(0, parseInt(pageParam || '1', 10) - 1),
    totalPages - 1
  );

  const start = page * CARDS_PER_PAGE;
  const visibleListings = filtered.slice(start, start + CARDS_PER_PAGE);

  return (
    <section id="properties" className="bg-surface py-10 framer:py-14 overflow-hidden">
      <Container className="max-w-[1200px]">
        {!hideHeader && (
        <header className="text-center mb-16 framer:mb-20">
          <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-4 framer:mb-6">
            {t('eyebrow')}
          </p>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.1] tracking-tight mb-4 framer:mb-6">
            {t('title')}
          </h2>
          <p className="text-[16px] framer:text-[20px] text-muted leading-relaxed max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </header>
        )}

        {filtered.length === 0 ? (
          <p className="text-center text-muted py-16 text-[15px]">
            {t('no_results')}
          </p>
        ) : (
          <>
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-6 framer:gap-8 mb-8 framer:mb-10">
          {visibleListings.map((listing) => (
            <PropertyCard
              key={listing.id}
              listing={toCardListing(listing)}
              variant="sale"
              t={t}
              tCard={tCard}
              className="bg-[#EEF0F3]"
            />
          ))}
        </div>

        <PropertiesPagination
          currentPage={page}
          totalPages={totalPages}
          tab="sale"
        />
          </>
        )}
      </Container>
    </section>
  );
};
