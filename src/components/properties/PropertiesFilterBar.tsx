'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, SlidersHorizontal, X, RotateCcw } from 'lucide-react';
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
  onTabChange: (tab: PropertiesTab) => void;
  resultCount: number;
};

type DropdownOption = { value: string; label: string };

function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handler();
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
}

function FilterSelect({
  placeholder,
  value,
  options,
  onChange,
}: {
  placeholder: string;
  value: string;
  options: DropdownOption[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useClickOutside(ref, close);

  const selected = options.find((o) => o.value === value);
  const hasValue = !!value;

  return (
    <div ref={ref} className="relative flex-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full inline-flex items-center justify-between gap-3 h-[52px] px-5 rounded-xl border-2 text-[15px] transition-all duration-150 cursor-pointer ${
          hasValue
            ? 'border-foreground/25 bg-foreground/3 text-foreground font-medium'
            : 'border-border-strong bg-white text-muted hover:border-foreground/20 hover:text-foreground'
        } ${open ? 'border-foreground/35 shadow-sm' : ''}`}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-muted/60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full inset-s-0 mt-2 min-w-full w-max bg-white rounded-xl border border-border-strong shadow-[0_12px_40px_rgba(0,0,0,0.1)] z-50 py-2 overflow-hidden">
          <button
            type="button"
            onClick={() => {
              onChange('');
              close();
            }}
            className={`w-full text-start px-5 py-3 text-[15px] transition-colors cursor-pointer ${
              !value
                ? 'text-accent font-medium bg-accent/5'
                : 'text-foreground/60 hover:bg-surface/80 hover:text-foreground'
            }`}
          >
            {placeholder}
          </button>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                close();
              }}
              className={`w-full text-start px-5 py-3 text-[15px] transition-colors cursor-pointer ${
                value === opt.value
                  ? 'text-accent font-medium bg-accent/5'
                  : 'text-foreground/60 hover:bg-surface/80 hover:text-foreground'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PriceDropdown({
  placeholder,
  priceMin,
  priceMax,
  minLabel,
  maxLabel,
  onMinChange,
  onMaxChange,
}: {
  placeholder: string;
  priceMin: string;
  priceMax: string;
  minLabel: string;
  maxLabel: string;
  onMinChange: (v: string) => void;
  onMaxChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useClickOutside(ref, close);

  const hasValue = !!priceMin || !!priceMax;
  const displayText = hasValue
    ? `${priceMin || '0'} – ${priceMax || '∞'}`
    : placeholder;

  return (
    <div ref={ref} className="relative flex-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full inline-flex items-center justify-between gap-3 h-[52px] px-5 rounded-xl border-2 text-[15px] transition-all duration-150 cursor-pointer ${
          hasValue
            ? 'border-foreground/25 bg-foreground/3 text-foreground font-medium'
            : 'border-border-strong bg-white text-muted hover:border-foreground/20 hover:text-foreground'
        } ${open ? 'border-foreground/35 shadow-sm' : ''}`}
      >
        <span className="truncate">{displayText}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-muted/60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full inset-s-0 mt-2 w-[300px] bg-white rounded-xl border border-border-strong shadow-[0_12px_40px_rgba(0,0,0,0.1)] z-50 p-5">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="block text-[12px] font-medium text-muted uppercase tracking-wider mb-2">
                {minLabel}
              </label>
              <input
                type="number"
                placeholder="0"
                value={priceMin}
                onChange={(e) => onMinChange(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-border-strong bg-white text-foreground text-[15px] placeholder:text-muted/50 focus:border-foreground/30 focus:ring-2 focus:ring-foreground/5 focus:outline-none transition-all"
              />
            </div>
            <span className="text-muted mt-6">–</span>
            <div className="flex-1">
              <label className="block text-[12px] font-medium text-muted uppercase tracking-wider mb-2">
                {maxLabel}
              </label>
              <input
                type="number"
                placeholder="∞"
                value={priceMax}
                onChange={(e) => onMaxChange(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-border-strong bg-white text-foreground text-[15px] placeholder:text-muted/50 focus:border-foreground/30 focus:ring-2 focus:ring-foreground/5 focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 px-4 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
        active
          ? 'bg-foreground text-white shadow-sm'
          : 'bg-white text-foreground/70 border border-border/60 hover:border-border hover:text-foreground'
      }`}
    >
      {children}
    </button>
  );
}

export const PropertiesFilterBar = ({
  filters,
  onChange,
  tab,
  onTabChange,
  resultCount,
}: Props) => {
  const t = useTranslations('Properties.filters');
  const tMain = useTranslations('Properties');
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

  const update = (key: keyof PropertyFilters, value: string | boolean) =>
    onChange({ ...filters, [key]: value });

  const toggle = (key: keyof PropertyFilters, value: string) =>
    onChange({ ...filters, [key]: filters[key] === value ? '' : value });

  const reset = () => onChange({ ...DEFAULT_FILTERS });

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

  const cityOptions: DropdownOption[] = CITIES.map((c) => ({
    value: c,
    label: t(`cities.${c}`),
  }));
  const typeOptions: DropdownOption[] = TYPES.map((ty) => ({
    value: ty,
    label: t(`types.${ty}`),
  }));
  const bedroomOptions: DropdownOption[] = BEDROOMS.map((b) => ({
    value: b,
    label: `${b} ${t('beds')}`,
  }));

  return (
    <div className="sticky top-0 z-30 bg-white border-b-2 border-border-strong">
      <Container className="max-w-[1200px]">
        {/* ═══ Desktop ═══ */}
        <div className="hidden framer:block py-5">
          {/* Row 1: Tab toggle */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center p-1.5 bg-surface rounded-2xl border-2 border-border-strong">
              <button
                type="button"
                onClick={() => onTabChange('sale')}
                className={`px-10 py-3.5 rounded-xl text-[16px] font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                  tab === 'sale'
                    ? 'bg-white text-foreground shadow-md'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {tMain('tab_sale')}
              </button>
              <button
                type="button"
                onClick={() => onTabChange('rent')}
                className={`px-10 py-3.5 rounded-xl text-[16px] font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                  tab === 'rent'
                    ? 'bg-white text-foreground shadow-md'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {tMain('tab_rent')}
              </button>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[14px] font-medium text-muted hover:text-foreground hover:bg-surface transition-all cursor-pointer"
                aria-label={t('reset')}
              >
                <RotateCcw className="w-4 h-4" />
                {t('reset')}
              </button>
            )}
          </div>

          {/* Row 2: Filter dropdowns — evenly distributed */}
          <div className="flex items-center gap-3">
            <FilterSelect
              placeholder={t('city')}
              value={filters.city}
              options={cityOptions}
              onChange={(v) => update('city', v)}
            />
            <FilterSelect
              placeholder={t('type')}
              value={filters.type}
              options={typeOptions}
              onChange={(v) => update('type', v)}
            />
            <FilterSelect
              placeholder={t('bedrooms')}
              value={filters.bedrooms}
              options={bedroomOptions}
              onChange={(v) => update('bedrooms', v)}
            />
            <PriceDropdown
              placeholder={t('price_range')}
              priceMin={filters.priceMin}
              priceMax={filters.priceMax}
              minLabel={t('price_min')}
              maxLabel={t('price_max')}
              onMinChange={(v) => update('priceMin', v)}
              onMaxChange={(v) => update('priceMax', v)}
            />

            {tab === 'rent' && (
              <button
                type="button"
                onClick={() => update('furnished', !filters.furnished)}
                className={`h-[52px] px-6 rounded-xl border-2 text-[15px] transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  filters.furnished
                    ? 'border-foreground/25 bg-foreground/3 text-foreground font-medium'
                    : 'border-border-strong bg-white text-muted hover:border-foreground/20 hover:text-foreground'
                }`}
              >
                {t('furnished')}
              </button>
            )}
            {tab === 'sale' && (
              <button
                type="button"
                onClick={() => update('underOffer', !filters.underOffer)}
                className={`h-[52px] px-6 rounded-xl border-2 text-[15px] transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  filters.underOffer
                    ? 'border-foreground/25 bg-foreground/3 text-foreground font-medium'
                    : 'border-border-strong bg-white text-muted hover:border-foreground/20 hover:text-foreground'
                }`}
              >
                {t('under_offer')}
              </button>
            )}
          </div>
        </div>

        {/* ═══ Mobile ═══ */}
        <div className="framer:hidden py-3 flex items-center justify-between gap-3">
          <div className="flex items-center p-[3px] bg-surface rounded-[10px] flex-1">
            <button
              type="button"
              onClick={() => onTabChange('sale')}
              className={`flex-1 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                tab === 'sale'
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted'
              }`}
            >
              {tMain('tab_sale')}
            </button>
            <button
              type="button"
              onClick={() => onTabChange('rent')}
              className={`flex-1 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                tab === 'rent'
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted'
              }`}
            >
              {tMain('tab_rent')}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex items-center gap-2 h-[42px] px-4 rounded-[10px] border border-border-strong bg-white text-foreground text-[13px] font-medium hover:bg-surface transition-colors shrink-0 cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {t('filters_button')}
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
            )}
          </button>
        </div>
      </Container>

      {/* ═══ Mobile drawer ═══ */}
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
            <div className="sticky top-0 flex items-center justify-between px-5 py-4 border-b border-border bg-white z-10">
              <h2 className="text-[17px] font-bold text-foreground">
                {t('filters_panel')}
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-muted hover:text-foreground transition-colors cursor-pointer"
                aria-label={t('close')}
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            <div className="p-5 space-y-6">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wider text-muted mb-3">
                  {t('city')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {CITIES.map((c) => (
                    <Pill
                      key={c}
                      active={filters.city === c}
                      onClick={() => toggle('city', c)}
                    >
                      {t(`cities.${c}`)}
                    </Pill>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wider text-muted mb-3">
                  {t('type')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map((ty) => (
                    <Pill
                      key={ty}
                      active={filters.type === ty}
                      onClick={() => toggle('type', ty)}
                    >
                      {t(`types.${ty}`)}
                    </Pill>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wider text-muted mb-3">
                  {t('bedrooms')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {BEDROOMS.map((b) => (
                    <Pill
                      key={b}
                      active={filters.bedrooms === b}
                      onClick={() => toggle('bedrooms', b)}
                    >
                      {b} {t('beds')}
                    </Pill>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wider text-muted mb-3">
                  {t('price_range')}
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder={t('price_min')}
                    value={filters.priceMin}
                    onChange={(e) => update('priceMin', e.target.value)}
                    className="h-10 flex-1 px-3 rounded-xl border border-border bg-white text-foreground text-[14px] placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
                    aria-label={t('price_min')}
                  />
                  <span className="text-muted text-sm">–</span>
                  <input
                    type="number"
                    placeholder={t('price_max')}
                    value={filters.priceMax}
                    onChange={(e) => update('priceMax', e.target.value)}
                    className="h-10 flex-1 px-3 rounded-xl border border-border bg-white text-foreground text-[14px] placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
                    aria-label={t('price_max')}
                  />
                </div>
              </div>

              {tab === 'rent' && (
                <Pill
                  active={filters.furnished}
                  onClick={() => update('furnished', !filters.furnished)}
                >
                  {t('furnished')}
                </Pill>
              )}
              {tab === 'sale' && (
                <Pill
                  active={filters.underOffer}
                  onClick={() => update('underOffer', !filters.underOffer)}
                >
                  {t('under_offer')}
                </Pill>
              )}
            </div>

            <div className="p-5 border-t border-border space-y-3">
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={reset}
                  className="w-full py-3 rounded-xl border border-border text-foreground font-medium text-[14px] hover:bg-surface transition-colors cursor-pointer"
                >
                  {t('reset')}
                </button>
              )}
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-xl bg-accent text-white font-semibold text-[15px] hover:bg-accent/90 transition-colors cursor-pointer"
              >
                {t('show_results', { count: String(resultCount) })}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
