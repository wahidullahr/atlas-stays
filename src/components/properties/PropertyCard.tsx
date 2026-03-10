'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { BedDouble, Bath, Square, MessageCircle, Eye } from 'lucide-react';
import { useWhatsAppHref } from '@/hooks/useWhatsAppHref';

export type PropertyCardVariant = 'rent' | 'sale';

export type PropertyCardListing = {
  id: string;
  image: string;
  images?: string[];
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
  /** When false, card does not link to property detail (e.g. on Sell/Rent page previews) */
  linkToDetail?: boolean;
};

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800';

export function PropertyCard({ listing, variant, t, tCard, className, linkToDetail = true }: Props) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = listing.images?.[0] ?? listing.image;
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

  const isSoldOrRented = statusKey === 'status_sold' || statusKey === 'status_rented';
  const location = `${t(`cities.${listing.cityKey}`)} · ${t(`types.${listing.typeKey}`)}`;
  const detailHref = `/property/${listing.id}` as const;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl framer:rounded-3xl border border-border/40 shadow-card transition-all duration-300 hover:shadow-(--shadow-card-hover) hover:-translate-y-1 ${className ?? 'bg-white'}`}
    >
      {/* Image — clickable only when linkToDetail */}
      {linkToDetail ? (
        <Link href={detailHref} className="relative aspect-4/3 w-full bg-surface overflow-hidden block">
          <Image
            src={imgError ? PLACEHOLDER_IMAGE : imageSrc}
            alt={propertyName}
            fill
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(min-width: 810px) 33vw, 100vw"
            unoptimized
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" aria-hidden />

          {/* Status badge */}
          <span
            className={`absolute top-3 inset-s-3 framer:top-4 framer:inset-s-4 inline-flex px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm ${
              isSoldOrRented
                ? 'bg-foreground/70 text-white'
                : 'bg-accent/90 text-white'
            }`}
          >
            {tCard(statusKey)}
          </span>
        </Link>
      ) : (
        <div className="relative aspect-4/3 w-full bg-surface overflow-hidden block">
          <Image
            src={imgError ? PLACEHOLDER_IMAGE : imageSrc}
            alt={propertyName}
            fill
            className="object-cover object-center"
            sizes="(min-width: 810px) 33vw, 100vw"
            unoptimized
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" aria-hidden />

          {/* Status badge */}
          <span
            className={`absolute top-3 inset-s-3 framer:top-4 framer:inset-s-4 inline-flex px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm ${
              isSoldOrRented
                ? 'bg-foreground/70 text-white'
                : 'bg-accent/90 text-white'
            }`}
          >
            {tCard(statusKey)}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 framer:p-6">
        {/* Price */}
        {linkToDetail ? (
          <Link href={detailHref} className="block">
            <p className="text-[18px] framer:text-[20px] font-bold text-accent mb-1.5 tracking-tight">
              {t(listing.priceKey)}
            </p>
          </Link>
        ) : (
          <p className="text-[18px] framer:text-[20px] font-bold text-accent mb-1.5 tracking-tight">
            {t(listing.priceKey)}
          </p>
        )}

        {/* Name */}
        {linkToDetail ? (
          <Link href={detailHref} className="block">
            <h3 className="text-[16px] framer:text-[18px] font-bold text-foreground leading-tight tracking-tight mb-1.5 hover:text-accent transition-colors">
              {propertyName}
            </h3>
          </Link>
        ) : (
          <h3 className="text-[16px] framer:text-[18px] font-bold text-foreground leading-tight tracking-tight mb-1.5">
            {propertyName}
          </h3>
        )}

        {/* Location */}
        <p className="text-[13px] framer:text-[14px] text-muted mb-4">
          {location}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-4 framer:gap-5 text-[13px] framer:text-[14px] text-muted mb-5 pb-5 border-b border-border/40">
          <span className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4" strokeWidth={1.75} />
            {listing.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" strokeWidth={1.75} />
            {listing.bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Square className="w-4 h-4" strokeWidth={1.75} />
            {listing.area} m²
          </span>
        </div>

        {/* CTAs */}
        <div className={`flex gap-2 mt-auto ${linkToDetail ? '' : 'flex-col'}`}>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 framer:py-3 rounded-xl bg-accent text-white text-[13px] framer:text-[14px] font-semibold hover:bg-accent/90 transition-all duration-200 ${linkToDetail ? 'flex-1' : 'w-full'}`}
          >
            <MessageCircle className="w-4 h-4" />
            {tCard('whatsapp')}
          </a>
          {linkToDetail && (
            <Link
              href={detailHref}
              className="inline-flex items-center justify-center px-3.5 py-2.5 framer:py-3 rounded-xl border border-border/60 text-foreground/70 hover:text-foreground hover:bg-surface transition-all duration-200"
              aria-label={tCard('view_details')}
            >
              <Eye className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
