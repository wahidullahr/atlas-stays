import type { PropertyFilters } from '@/components/properties/PropertiesFilterBar';
import { DEFAULT_FILTERS } from '@/components/properties/PropertiesFilterBar';

const PARAM_KEYS = {
  city: 'city',
  type: 'type',
  bedrooms: 'beds',
  priceMin: 'pmin',
  priceMax: 'pmax',
  search: 'q',
  furnished: 'furnished',
  availableFrom: 'avail',
  underOffer: 'under',
} as const;

export function filtersToSearchParams(filters: PropertyFilters): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.city) params.set(PARAM_KEYS.city, filters.city);
  if (filters.type) params.set(PARAM_KEYS.type, filters.type);
  if (filters.bedrooms) params.set(PARAM_KEYS.bedrooms, filters.bedrooms);
  if (filters.priceMin) params.set(PARAM_KEYS.priceMin, filters.priceMin);
  if (filters.priceMax) params.set(PARAM_KEYS.priceMax, filters.priceMax);
  if (filters.search) params.set(PARAM_KEYS.search, filters.search);
  if (filters.furnished) params.set(PARAM_KEYS.furnished, '1');
  if (filters.availableFrom) params.set(PARAM_KEYS.availableFrom, filters.availableFrom);
  if (filters.underOffer) params.set(PARAM_KEYS.underOffer, '1');
  return params;
}

export function searchParamsToFilters(searchParams: URLSearchParams): PropertyFilters {
  return {
    city: searchParams.get(PARAM_KEYS.city) ?? DEFAULT_FILTERS.city,
    type: searchParams.get(PARAM_KEYS.type) ?? DEFAULT_FILTERS.type,
    bedrooms: searchParams.get(PARAM_KEYS.bedrooms) ?? DEFAULT_FILTERS.bedrooms,
    priceMin: searchParams.get(PARAM_KEYS.priceMin) ?? DEFAULT_FILTERS.priceMin,
    priceMax: searchParams.get(PARAM_KEYS.priceMax) ?? DEFAULT_FILTERS.priceMax,
    search: searchParams.get(PARAM_KEYS.search) ?? DEFAULT_FILTERS.search,
    furnished: searchParams.get(PARAM_KEYS.furnished) === '1',
    availableFrom: searchParams.get(PARAM_KEYS.availableFrom) ?? DEFAULT_FILTERS.availableFrom,
    underOffer: searchParams.get(PARAM_KEYS.underOffer) === '1',
  };
}
