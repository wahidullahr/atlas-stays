'use client';

import React, { useCallback, useMemo } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { RentPropertiesSection } from '@/components/rent/RentPropertiesSection';
import { PropertiesWeRepresent } from '@/components/sell/PropertiesWeRepresent';
import {
  PropertiesFilterBar,
  type PropertyFilters,
  type PropertiesTab,
} from '@/components/properties/PropertiesFilterBar';
import { searchParamsToFilters, filtersToSearchParams } from '@/lib/propertyFilters';
import { ALL_RENT_LISTINGS } from '@/data/rentListings';
import { ALL_LISTINGS } from '@/data/sellListings';

export const PropertiesContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tab: PropertiesTab = searchParams.get('tab') === 'rent' ? 'rent' : 'sale';

  const filters = useMemo(
    () => searchParamsToFilters(searchParams),
    [searchParams]
  );

  const resultCount = useMemo(() => {
    if (tab === 'rent') {
      return ALL_RENT_LISTINGS.filter((l) => {
        if (filters.city && l.cityKey !== filters.city) return false;
        if (filters.type && l.typeKey !== filters.type) return false;
        if (filters.bedrooms) {
          const want = filters.bedrooms === '4+' ? 4 : parseInt(filters.bedrooms, 10);
          if (filters.bedrooms === '4+' ? l.bedrooms < 4 : l.bedrooms !== want) return false;
        }
        return true;
      }).length;
    }
    return ALL_LISTINGS.filter((l) => {
      if (filters.city && l.cityKey !== filters.city) return false;
      if (filters.type && l.typeKey !== filters.type) return false;
      if (filters.bedrooms) {
        const want = filters.bedrooms === '4+' ? 4 : parseInt(filters.bedrooms, 10);
        if (filters.bedrooms === '4+' ? l.bedrooms < 4 : l.bedrooms !== want) return false;
      }
      return true;
    }).length;
  }, [tab, filters]);

  const updateURL = useCallback(
    (newFilters: PropertyFilters, newTab?: PropertiesTab) => {
      const filterParams = filtersToSearchParams(newFilters);
      const params = new URLSearchParams();
      params.set('tab', newTab ?? tab);
      filterParams.forEach((v, k) => params.set(k, v));
      const q = params.toString();
      router.replace(`${pathname}${q ? `?${q}` : ''}`, { scroll: false });
    },
    [pathname, router, tab]
  );

  const handleFiltersChange = useCallback(
    (newFilters: PropertyFilters) => updateURL(newFilters),
    [updateURL]
  );

  const handleTabChange = useCallback(
    (newTab: PropertiesTab) => updateURL({ ...filters }, newTab),
    [updateURL, filters]
  );

  return (
    <>
      <PropertiesFilterBar
        filters={filters}
        onChange={handleFiltersChange}
        tab={tab}
        onTabChange={handleTabChange}
        resultCount={resultCount}
      />
      {tab === 'rent' ? (
        <RentPropertiesSection hideHeader filters={filters} />
      ) : (
        <PropertiesWeRepresent hideHeader filters={filters} />
      )}
    </>
  );
};
