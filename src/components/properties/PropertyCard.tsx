'use client';

import React from 'react';
import { BedDouble, Bath, Square, MessageCircle } from 'lucide-react';
import { useWhatsAppHref } from '@/hooks/useWhatsAppHref';

export type PropertyCardVariant = 'rent' | 'sale';

export type PropertyCardListing = {
  id: string;
  image: string;
  nameKey: string;
  cityKey: string;
  typeKey: string;
  priceKey: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status?: 'available' | 'sold' | 'under_negotiation' | 'recently_closed' | 'rented';
};

type Props = {
  listing: PropertyCardListing;
  variant: PropertyCardVariant;
  t: (key: string) => string;
  tCard: (key: string, values?: Record<string, string>) => string;
  className?: string;
};

export function PropertyCard({ listing, variant, t, tCard, className }: Props) {
  const propertyName = t(`names.${listing.nameKey}`);
  const prefill = tCard('whatsapp_prefill', { name: propertyName });
  const whatsappHref = useWhatsAppHref(prefill);

  const statusKey =
    variant === 'rent'
      ? listing.status === 'rented'
        ? 'status_rented'
        : 'status_rent'
      : listing.status === 'sold' || listing.status === 'recently_closed'
        ? 'status_sold'
        : listing.status === 'under_negotiation'
          ? 'status_under_offer'
          : 'status_sale';

  const location = `${t(`cities.${listing.cityKey}`)} · ${t(`types.${listing.typeKey}`)}`;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-black/6 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 ${className ?? 'bg-white'}`}
    >
      <div className="relative aspect-[4/3] w-full bg-surface overflow-hidden rounded-t-2xl">
        <img
          src={listing.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span
          className={`absolute top-3 start-3 inline-flex px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
            statusKey === 'status_rent' || statusKey === 'status_sale'
              ? 'bg-accent/90 text-white'
              : 'bg-foreground/80 text-white'
          }`}
        >
          {tCard(statusKey)}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 framer:p-7">
        <h3 className="text-[17px] framer:text-[20px] font-bold text-foreground leading-tight tracking-tight mb-2">
          {t(`names.${listing.nameKey}`)}
        </h3>
        <p className="text-[14px] framer:text-[15px] text-foreground/70 mb-3">
          {location}
        </p>
        <p className="text-[16px] framer:text-[18px] font-bold text-foreground mb-4">
          {t(listing.priceKey)}
        </p>

        <div className="flex items-center gap-4 framer:gap-5 text-[14px] framer:text-[15px] text-foreground/70 mb-5">
          <span className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4" strokeWidth={1.8} />
            {listing.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" strokeWidth={1.8} />
            {listing.bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Square className="w-4 h-4" strokeWidth={1.8} />
            {listing.area} m²
          </span>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-accent text-accent text-[14px] framer:text-[15px] font-bold hover:bg-accent hover:text-white transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            {tCard('whatsapp')}
          </a>
        </div>
      </div>
    </article>
  );
}
