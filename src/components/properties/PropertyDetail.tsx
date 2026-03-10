'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Bath,
  Square,
  MapPin,
  MessageCircle,
  Check,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ImageGallery } from './ImageGallery';
import { useWhatsAppHref } from '@/hooks/useWhatsAppHref';
import type { ListingResult } from '@/data/listings';

type Props = {
  result: ListingResult;
};

export function PropertyDetail({ result }: Props) {
  const { listing, variant } = result;
  const t = useTranslations('PropertyDetail');
  const tSale = useTranslations('SellPage.properties');
  const tRent = useTranslations('RentPage.properties');
  const tCard = useTranslations('Properties.card');

  const tProp = variant === 'sale' ? tSale : tRent;
  const propertyName = tProp(`names.${listing.nameKey}`);
  const cityName = tProp(`cities.${listing.cityKey}`);
  const typeName = tProp(`types.${listing.typeKey}`);
  const price = tProp(listing.priceKey);

  const prefill = tCard('whatsapp_prefill', { name: propertyName });
  const whatsappHref = useWhatsAppHref(prefill);

  const status = 'status' in listing ? listing.status : undefined;
  const isSold = status === 'sold' || status === 'recently_closed';
  const isRented = 'dateKey' in listing;

  const features: string[] = [];
  try {
    for (let i = 0; i < 6; i++) {
      const f = t(`features.${listing.nameKey}.${i}`);
      if (f && !f.startsWith('PropertyDetail.features')) features.push(f);
    }
  } catch {
    // features not found — skip
  }

  return (
    <main className="pt-2 pb-16 framer:pb-28">
      <Container className="max-w-[1200px]">
        {/* Back link */}
        <div className="pt-0 pb-4 framer:pt-1 framer:pb-5">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-base framer:text-lg font-semibold text-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5 rtl:rotate-180 shrink-0" />
            {t('back')}
          </Link>
        </div>

        {/* Gallery */}
        <ImageGallery
          images={listing.images?.length ? listing.images : [listing.image]}
          alt={propertyName}
        />

        {/* Content grid */}
        <div className="grid grid-cols-1 framer:grid-cols-[1fr_380px] gap-8 framer:gap-12 mt-8 framer:mt-10">
          {/* Left: property info */}
          <div>
            {/* Header */}
            <div className="mb-6 framer:mb-8">
              {(isSold || isRented) && (
                <span className="inline-flex px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider bg-foreground/10 text-foreground/60 mb-3">
                  {isSold ? tCard('status_sold') : tCard('status_rented')}
                </span>
              )}
              <h1 className="text-[1.75rem] framer:text-[2.5rem] font-bold text-foreground leading-[1.1] tracking-tight mb-2 framer:mb-3">
                {propertyName}
              </h1>
              <div className="flex items-center gap-2 text-[15px] framer:text-[17px] text-muted">
                <MapPin className="w-4.5 h-4.5 text-accent shrink-0" />
                {cityName} · {typeName}
              </div>
            </div>

            {/* Price */}
            <p className="text-[22px] framer:text-[28px] font-bold text-accent tracking-tight mb-6 framer:mb-8">
              {price}
            </p>

            {/* Specs */}
            <div className="flex items-center gap-6 framer:gap-8 py-5 framer:py-6 border-y border-border mb-8 framer:mb-10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 framer:w-11 framer:h-11 rounded-xl bg-surface flex items-center justify-center">
                  <BedDouble className="w-5 h-5 text-foreground/70" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[16px] framer:text-[18px] font-bold text-foreground leading-none">{listing.bedrooms}</p>
                  <p className="text-[12px] text-muted mt-0.5">{t('bedrooms')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 framer:w-11 framer:h-11 rounded-xl bg-surface flex items-center justify-center">
                  <Bath className="w-5 h-5 text-foreground/70" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[16px] framer:text-[18px] font-bold text-foreground leading-none">{listing.bathrooms}</p>
                  <p className="text-[12px] text-muted mt-0.5">{t('bathrooms')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 framer:w-11 framer:h-11 rounded-xl bg-surface flex items-center justify-center">
                  <Square className="w-5 h-5 text-foreground/70" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[16px] framer:text-[18px] font-bold text-foreground leading-none">{listing.area} m²</p>
                  <p className="text-[12px] text-muted mt-0.5">{t('area')}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 framer:mb-10">
              <h2 className="text-[18px] framer:text-[22px] font-bold text-foreground mb-4 framer:mb-5 tracking-tight">
                {t('about_property')}
              </h2>
              <p className="text-[15px] framer:text-[16px] text-muted leading-relaxed mb-4">
                {t(`descriptions.${listing.nameKey}`)}
              </p>
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div className="mb-8 framer:mb-10">
                <h2 className="text-[18px] framer:text-[22px] font-bold text-foreground mb-4 framer:mb-5 tracking-tight">
                  {t('features_title')}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-foreground/80">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={2} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Location */}
            <div>
              <h2 className="text-[18px] framer:text-[22px] font-bold text-foreground mb-4 framer:mb-5 tracking-tight">
                {t('location')}
              </h2>
              <p className="text-[15px] framer:text-[16px] text-muted leading-relaxed">
                {t(`locations.${listing.cityKey}`)}
              </p>
            </div>
          </div>

          {/* Right: CTA sidebar */}
          <div className="framer:sticky framer:top-[100px] self-start">
            <div className="rounded-2xl framer:rounded-3xl border-2 border-border p-6 framer:p-8">
              <p className="text-[22px] framer:text-[26px] font-bold text-accent tracking-tight mb-1">
                {price}
              </p>
              <p className="text-[14px] text-muted mb-6 framer:mb-8">
                {variant === 'rent' ? t('per_month') : t('asking_price')}
              </p>

              <div className="space-y-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 framer:py-4 rounded-xl bg-accent text-white text-[15px] font-semibold hover:bg-accent/90 transition-all duration-200 shadow-[0_4px_16px_rgba(5,150,105,0.25)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('contact_whatsapp')}
                </a>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 framer:py-4 rounded-xl border-2 border-border text-foreground text-[15px] font-semibold hover:bg-surface transition-all duration-200"
                >
                  {t('schedule_viewing')}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>

              <p className="text-[13px] text-muted text-center mt-5 leading-relaxed">
                {t('response_time')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
