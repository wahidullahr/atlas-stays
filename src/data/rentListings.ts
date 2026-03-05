export type RentPropertyListing = {
  id: string;
  image: string;
  nameKey: string;
  cityKey: string;
  typeKey: string;
  priceKey: string; // e.g. "price_120" for 120/night
  bedrooms: number;
  bathrooms: number;
  area: number;
};

export type RecentlyManagedListing = RentPropertyListing & {
  dateKey: string; // e.g. "date_jan_2025"
};

/** Currently available rental properties. Replace with real listings when ready. */
export const AVAILABLE_RENT_LISTINGS: RentPropertyListing[] = [
  {
    id: 'r1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    nameKey: 'riad_palm',
    cityKey: 'marrakech',
    typeKey: 'apartment',
    priceKey: 'price_120',
    bedrooms: 4,
    bathrooms: 3,
    area: 120,
  },
  {
    id: 'r2',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
    nameKey: 'villa_atlas',
    cityKey: 'casablanca',
    typeKey: 'villa',
    priceKey: 'price_180',
    bedrooms: 5,
    bathrooms: 4,
    area: 180,
  },
  {
    id: 'r3',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800',
    nameKey: 'medina_view',
    cityKey: 'tangier',
    typeKey: 'apartment',
    priceKey: 'price_95',
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
  },
  {
    id: 'r4',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800',
    nameKey: 'ocean_retreat',
    cityKey: 'agadir',
    typeKey: 'villa',
    priceKey: 'price_220',
    bedrooms: 5,
    bathrooms: 4,
    area: 200,
  },
];

/** Recently managed (rented) properties. Replace with real data when ready. */
export const RECENTLY_MANAGED_LISTINGS: RecentlyManagedListing[] = [
  {
    id: 'rm1',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800',
    nameKey: 'kasbah_house',
    cityKey: 'marrakech',
    typeKey: 'apartment',
    priceKey: 'price_130',
    bedrooms: 4,
    bathrooms: 3,
    area: 130,
    dateKey: 'date_dec_2024',
  },
  {
    id: 'rm2',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
    nameKey: 'city_residence',
    cityKey: 'casablanca',
    typeKey: 'apartment',
    priceKey: 'price_110',
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    dateKey: 'date_nov_2024',
  },
  {
    id: 'rm3',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    nameKey: 'riad_palm',
    cityKey: 'marrakech',
    typeKey: 'apartment',
    priceKey: 'price_120',
    bedrooms: 4,
    bathrooms: 3,
    area: 120,
    dateKey: 'date_oct_2024',
  },
];

/** All rent listings mixed (available + recently managed) for the grid with pagination. */
export const ALL_RENT_LISTINGS: (RentPropertyListing | RecentlyManagedListing)[] = [
  ...AVAILABLE_RENT_LISTINGS,
  ...RECENTLY_MANAGED_LISTINGS,
];
