'use client';

import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Container } from '../layout/Container';
import { PropertiesPagination } from '@/components/properties/PropertiesPagination';
import {
  ALL_RENT_LISTINGS,
  type RentPropertyListing,
  type RecentlyManagedListing,
} from '@/data/rentListings';
import type { PropertyFilters } from '@/components/properties/PropertiesFilterBar';
import { PropertyCard } from '@/components/properties/PropertyCard';

const CARDS_PER_PAGE = 6; // 2 rows × 3 cards

function getPriceFromKey(priceKey: string): number {
  const m = priceKey.match(/price_(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

function isRecentlyManaged(
  listing: RentPropertyListing | RecentlyManagedListing
): listing is RecentlyManagedListing {
  return 'dateKey' in listing && !!listing.dateKey;
}

function toCardListing(
  listing: RentPropertyListing | RecentlyManagedListing
): import('@/components/properties/PropertyCard').PropertyCardListing {
  return {
    ...listing,
    status: isRecentlyManaged(listing) ? 'rented' : undefined,
  };
}

type RentPropertiesSectionProps = {
  hideHeader?: boolean;
  filters?: PropertyFilters;
};

function filterRentListings(
  listings: (RentPropertyListing | RecentlyManagedListing)[],
  filters: PropertyFilters,
  t: (key: string) => string
): (RentPropertyListing | RecentlyManagedListing)[] {
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
    if (filters.priceMin || filters.priceMax) {
      const price = getPriceFromKey(listing.priceKey);
      if (filters.priceMin && price < parseInt(filters.priceMin, 10)) return false;
      if (filters.priceMax && price > parseInt(filters.priceMax, 10)) return false;
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const name = t(`names.${listing.nameKey}`).toLowerCase();
      const city = t(`cities.${listing.cityKey}`).toLowerCase();
      const type = t(`types.${listing.typeKey}`).toLowerCase();
      if (!name.includes(q) && !city.includes(q) && !type.includes(q)) return false;
    }
    return true;
  });
}

export const RentPropertiesSection = ({ hideHeader, filters }: RentPropertiesSectionProps) => {
  const t = useTranslations('RentPage.properties');
  const tCard = useTranslations('Properties.card');
  const filtered = useMemo(
    () => (filters ? filterRentListings(ALL_RENT_LISTINGS, filters, t) : ALL_RENT_LISTINGS),
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
    <section id="properties" className="bg-white py-20 framer:py-28 overflow-hidden">
      <Container className="max-w-[1200px]">
        {!hideHeader && (
        <header className="text-center mb-14 framer:mb-20">
          <p className="text-[11px] framer:text-[14px] font-bold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.6rem] framer:text-[2.5rem] font-extrabold text-foreground leading-[1.12] tracking-tight mb-4 framer:mb-5">
            {t('title')}
          </h2>
          <p className="text-[15px] framer:text-[17px] text-foreground/75 leading-relaxed max-w-xl mx-auto font-medium">
            {t('subtitle')}
          </p>
        </header>
        )}

        {filtered.length === 0 ? (
          <p className="text-center text-foreground/70 py-16 text-[15px] framer:text-[16px] font-medium">
            {t('no_results')}
          </p>
        ) : (
          <>
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-6 framer:gap-8 mb-10 framer:mb-12">
          {visibleListings.map((listing) => (
            <PropertyCard
              key={listing.id}
              listing={toCardListing(listing)}
              variant="rent"
              t={t}
              tCard={tCard}
              className="bg-[#EEF0F3]"
            />
          ))}
        </div>

        <PropertiesPagination
          currentPage={page}
          totalPages={totalPages}
          tab="rent"
        />
          </>
        )}
      </Container>
    </section>
  );
};
