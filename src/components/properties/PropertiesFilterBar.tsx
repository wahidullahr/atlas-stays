'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { SlidersHorizontal, X } from 'lucide-react';
import { Container } from '../layout/Container';

export type PropertiesTab = 'rent' | 'sale';

export type PropertyFilters = {
  city: string;
  type: string;
  bedrooms: string;
  priceMin: string;
  priceMax: string;
  search: string;
  furnished: boolean;
  availableFrom: string;
  underOffer: boolean;
};

export const DEFAULT_FILTERS: PropertyFilters = {
  city: '',
  type: '',
  bedrooms: '',
  priceMin: '',
  priceMax: '',
  search: '',
  furnished: false,
  availableFrom: '',
  underOffer: false,
};

const CITIES = ['marrakech', 'casablanca', 'tangier', 'agadir'] as const;
const TYPES = ['apartment', 'villa', 'studio'] as const;
const BEDROOMS = ['1', '2', '3', '4+'] as const;

type Props = {
  filters: PropertyFilters;
  onChange: (filters: PropertyFilters) => void;
  tab: PropertiesTab;
};

export const PropertiesFilterBar = ({ filters, onChange, tab }: Props) => {
  const t = useTranslations('Properties.filters');
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
      if (e.key === 'Tab') {
        const root = drawerRef.current;
        if (!root) return;
        const focusables = Array.from(
          root.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const update = (key: keyof PropertyFilters, value: string | boolean) => {
    onChange({ ...filters, [key]: value });
  };

  const reset = () => {
    onChange({ ...DEFAULT_FILTERS });
  };

  const hasActiveFilters =
    filters.city ||
    filters.type ||
    filters.bedrooms ||
    filters.priceMin ||
    filters.priceMax ||
    filters.search ||
    filters.furnished ||
    (tab === 'rent' && filters.availableFrom) ||
    (tab === 'sale' && filters.underOffer);

  const FilterFields = () => (
    <>
      {/* City */}
      <select
        value={filters.city}
        onChange={(e) => update('city', e.target.value)}
        className="h-10 px-3 rounded-lg border border-border bg-white text-foreground text-[14px] focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none min-w-[120px]"
        aria-label={t('city')}
      >
        <option value="">{t('city_all')}</option>
        {CITIES.map((c) => (
          <option key={c} value={c}>
            {t(`cities.${c}`)}
          </option>
        ))}
      </select>

      {/* Type */}
      <select
        value={filters.type}
        onChange={(e) => update('type', e.target.value)}
        className="h-10 px-3 rounded-lg border border-border bg-white text-foreground text-[14px] focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none min-w-[120px]"
        aria-label={t('type')}
      >
        <option value="">{t('type_all')}</option>
        {TYPES.map((ty) => (
          <option key={ty} value={ty}>
            {t(`types.${ty}`)}
          </option>
        ))}
      </select>

      {/* Bedrooms */}
      <select
        value={filters.bedrooms}
        onChange={(e) => update('bedrooms', e.target.value)}
        className="h-10 px-3 rounded-lg border border-border bg-white text-foreground text-[14px] focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none min-w-[100px]"
        aria-label={t('bedrooms')}
      >
        <option value="">{t('bedrooms_all')}</option>
        {BEDROOMS.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      {/* Price range */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder={t('price_min')}
          value={filters.priceMin}
          onChange={(e) => update('priceMin', e.target.value)}
          className="h-10 w-20 px-3 rounded-lg border border-border bg-white text-foreground text-[14px] placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
          aria-label={t('price_min')}
        />
        <span className="text-muted text-sm">–</span>
        <input
          type="number"
          placeholder={t('price_max')}
          value={filters.priceMax}
          onChange={(e) => update('priceMax', e.target.value)}
          className="h-10 w-20 px-3 rounded-lg border border-border bg-white text-foreground text-[14px] placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
          aria-label={t('price_max')}
        />
      </div>

      {/* Search */}
      <input
        type="search"
        placeholder={t('search_placeholder')}
        value={filters.search}
        onChange={(e) => update('search', e.target.value)}
        className="h-10 flex-1 min-w-[140px] px-3 rounded-lg border border-border bg-white text-foreground text-[14px] placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
        aria-label={t('search')}
      />

      {/* Rent-only */}
      {tab === 'rent' && (
        <>
          <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
            <input
              type="checkbox"
              checked={filters.furnished}
              onChange={(e) => update('furnished', e.target.checked)}
              className="rounded border-border text-accent focus:ring-accent"
            />
            <span className="text-[14px] text-foreground">{t('furnished')}</span>
          </label>
          <input
            type="date"
            placeholder={t('available_from')}
            value={filters.availableFrom}
            onChange={(e) => update('availableFrom', e.target.value)}
            className="h-10 px-3 rounded-lg border border-border bg-white text-foreground text-[14px] focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none min-w-[140px]"
            aria-label={t('available_from')}
          />
        </>
      )}

      {/* Sale-only */}
      {tab === 'sale' && (
        <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
          <input
            type="checkbox"
            checked={filters.underOffer}
            onChange={(e) => update('underOffer', e.target.checked)}
            className="rounded border-border text-accent focus:ring-accent"
          />
          <span className="text-[14px] text-foreground">{t('under_offer')}</span>
        </label>
      )}

      {/* Reset */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={reset}
          className="h-10 px-4 rounded-lg text-[14px] font-medium text-muted hover:text-foreground hover:bg-surface transition-colors"
        >
          {t('reset')}
        </button>
      )}
    </>
  );

  return (
    <div className="relative z-10 bg-surface/50 border-b border-border">
      <Container className="max-w-[1200px]">
        {/* Desktop: filters only */}
        <div className="hidden framer:flex flex-wrap items-center gap-3 py-4">
          <FilterFields />
        </div>

        {/* Mobile: Filters button */}
        <div className="framer:hidden py-4">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-white text-foreground text-[14px] font-medium hover:bg-surface transition-colors w-full justify-center"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {t('filters_button')}
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile slide panel */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 framer:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div
            ref={drawerRef}
            className="fixed top-0 right-0 h-full w-[86%] max-w-[360px] bg-white shadow-xl z-50 framer:hidden overflow-y-auto"
            role="dialog"
            aria-modal
            aria-label={t('filters_panel')}
          >
            <div className="sticky top-0 flex items-center justify-between px-4 py-4 border-b border-border bg-white">
              <h2 className="text-[17px] font-semibold text-foreground">
                {t('filters_panel')}
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface"
                aria-label={t('close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-4">
              <FilterFields />
            </div>
            <div className="p-4 border-t border-border">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-xl bg-accent text-white font-semibold text-[15px] hover:bg-accent/90"
              >
                {t('apply')}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
