'use client';

import React, { useCallback, useMemo } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { RentPropertiesSection } from '@/components/rent/RentPropertiesSection';
import { PropertiesWeRepresent } from '@/components/sell/PropertiesWeRepresent';
import {
  PropertiesFilterBar,
  type PropertyFilters,
} from '@/components/properties/PropertiesFilterBar';
import { PropertiesBrowseIntro } from '@/components/properties/PropertiesBrowseIntro';
import { PropertiesHowWeHelp } from '@/components/properties/PropertiesHowWeHelp';
import { searchParamsToFilters, filtersToSearchParams } from '@/lib/propertyFilters';

export const PropertiesContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tab = searchParams.get('tab') === 'sale' ? 'sale' : 'rent';

  const filters = useMemo(
    () => searchParamsToFilters(searchParams),
    [searchParams]
  );

  const handleFiltersChange = useCallback(
    (newFilters: PropertyFilters) => {
      const filterParams = filtersToSearchParams(newFilters);
      const tabParam = searchParams.get('tab');
      const params = new URLSearchParams();
      if (tabParam) params.set('tab', tabParam);
      filterParams.forEach((v, k) => params.set(k, v));
      const q = params.toString();
      router.replace(`${pathname}${q ? `?${q}` : ''}`);
    },
    [pathname, router, searchParams]
  );

  return (
    <>
      <PropertiesBrowseIntro />
      <PropertiesFilterBar filters={filters} onChange={handleFiltersChange} tab={tab} />
      {tab === 'rent' ? (
        <RentPropertiesSection hideHeader filters={filters} />
      ) : (
        <PropertiesWeRepresent hideHeader filters={filters} />
      )}
      <PropertiesHowWeHelp />
    </>
  );
};
