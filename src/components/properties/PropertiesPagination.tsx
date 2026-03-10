'use client';

import React from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

type Props = {
  currentPage: number;
  totalPages: number;
  tab: 'rent' | 'sale';
};

export function PropertiesPagination({ currentPage, totalPages, tab }: Props) {
  const t = useTranslations('Properties.pagination');
  const searchParams = useSearchParams();
  const pathname = usePathname();

  if (tab === 'sale') {
    return (
      <div className="flex justify-center">
        <Link
          href="/areas?tab=sale"
          className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white text-[14px] font-semibold hover:bg-accent/90 transition-all duration-200 shadow-[0_4px_16px_rgba(5,150,105,0.25)] framer:px-10 framer:py-4 framer:text-[15px]"
        >
          {t('browseAllForSale')}
          <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
        </Link>
      </div>
    );
  }

  if (totalPages <= 1) return null;

  const buildHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', 'rent');
    if (page <= 0) params.delete('page');
    else params.set('page', String(page + 1));
    const q = params.toString();
    return `${pathname}${q ? `?${q}` : ''}`;
  };

  const prevPage = Math.max(0, currentPage - 1);
  const nextPage = Math.min(totalPages - 1, currentPage + 1);

  return (
    <nav
      className="flex items-center justify-center gap-2 framer:gap-3"
      aria-label={t('ariaLabel')}
    >
      <Link
        href={buildHref(prevPage)}
        className={`inline-flex items-center justify-center w-10 h-10 framer:w-11 framer:h-11 rounded-xl border border-border/60 bg-white text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
          currentPage <= 0 ? 'pointer-events-none opacity-40' : 'hover:bg-surface hover:border-border'
        }`}
        aria-label={t('prev')}
        aria-disabled={currentPage <= 0}
      >
        <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
      </Link>
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i}
            href={buildHref(i)}
            className={`min-w-10 h-10 framer:h-11 px-3 rounded-xl flex items-center justify-center text-[14px] font-semibold transition-all ${
              i === currentPage
                ? 'bg-accent text-white shadow-sm'
                : 'text-muted hover:text-foreground hover:bg-surface'
            }`}
            aria-current={i === currentPage ? 'page' : undefined}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Link
        href={buildHref(nextPage)}
        className={`inline-flex items-center justify-center w-10 h-10 framer:w-11 framer:h-11 rounded-xl border border-border/60 bg-white text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
          currentPage >= totalPages - 1 ? 'pointer-events-none opacity-40' : 'hover:bg-surface hover:border-border'
        }`}
        aria-label={t('next')}
        aria-disabled={currentPage >= totalPages - 1}
      >
        <ChevronRight className="w-5 h-5 rtl:rotate-180" />
      </Link>
    </nav>
  );
}
