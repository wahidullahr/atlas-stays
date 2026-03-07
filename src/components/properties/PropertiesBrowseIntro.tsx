'use client';

import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { Container } from '../layout/Container';
import { filtersToSearchParams, searchParamsToFilters } from '@/lib/propertyFilters';

export type PropertiesTab = 'rent' | 'sale';

export const PropertiesBrowseIntro = () => {
  const t = useTranslations('Properties.browseIntro');
  const searchParams = useSearchParams();
  const tab = (searchParams.get('tab') === 'sale' ? 'sale' : 'rent') as PropertiesTab;

  const rentHref = useMemo(() => {
    const filters = searchParamsToFilters(searchParams);
    const fp = filtersToSearchParams(filters);
    const params = new URLSearchParams();
    params.set('tab', 'rent');
    fp.forEach((v, k) => params.set(k, v));
    return `/areas?${params.toString()}`;
  }, [searchParams]);

  const saleHref = useMemo(() => {
    const filters = searchParamsToFilters(searchParams);
    const fp = filtersToSearchParams(filters);
    const params = new URLSearchParams();
    params.set('tab', 'sale');
    fp.forEach((v, k) => params.set(k, v));
    return `/areas?${params.toString()}`;
  }, [searchParams]);

  return (
    <section className="bg-white border-b border-border py-14 framer:py-20">
      <Container className="max-w-[1200px]">
        <h2 className="text-[2rem] sm:text-[2.5rem] framer:text-[3rem] font-bold text-foreground leading-[1.15] tracking-tight text-center mb-10 framer:mb-14 max-w-[800px] mx-auto">
          {t('headline')}
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 framer:gap-12">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex rounded-2xl bg-surface p-1.5 shadow-sm">
              <Link
                href={rentHref}
                className={`
                  px-8 py-4 rounded-xl text-[16px] sm:text-[17px] framer:text-[18px] font-semibold transition-all
                  ${tab === 'rent' ? 'bg-white text-foreground shadow-md' : 'text-muted hover:text-foreground'}
                `}
              >
                {t('tab_rent')}
              </Link>
              <Link
                href={saleHref}
                className={`
                  px-8 py-4 rounded-xl text-[16px] sm:text-[17px] framer:text-[18px] font-semibold transition-all
                  ${tab === 'sale' ? 'bg-white text-foreground shadow-md' : 'text-muted hover:text-foreground'}
                `}
              >
                {t('tab_sale')}
              </Link>
            </div>
            <div className="flex items-center gap-6 sm:gap-8 text-[15px] sm:text-[16px] framer:text-[17px] text-muted">
              <span className="font-medium">{t('count_rent')}: <span className="font-bold text-foreground tabular-nums text-lg">24</span></span>
              <span className="font-medium">{t('count_sale')}: <span className="font-bold text-foreground tabular-nums text-lg">12</span></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
