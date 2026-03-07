export type ListingStatus = 'available' | 'sold' | 'under_negotiation' | 'recently_closed';

export type PropertyListing = {
  id: string;
  image: string;
  nameKey: string;
  cityKey: string;
  typeKey: string;
  status: ListingStatus;
  priceKey: string; // e.g. "price_sale_250" for 250k
  bedrooms: number;
  bathrooms: number;
  area: number; // m²
};

/** Currently available properties. Replace with real listings when ready. */
export const AVAILABLE_LISTINGS: PropertyListing[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    nameKey: 'riad_palm',
    cityKey: 'marrakech',
    typeKey: 'apartment',
    status: 'available',
    priceKey: 'price_sale_280',
    bedrooms: 4,
    bathrooms: 3,
    area: 120,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
    nameKey: 'villa_atlas',
    cityKey: 'casablanca',
    typeKey: 'villa',
    status: 'available',
    priceKey: 'price_sale_450',
    bedrooms: 5,
    bathrooms: 4,
    area: 180,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800',
    nameKey: 'medina_view',
    cityKey: 'tangier',
    typeKey: 'apartment',
    status: 'available',
    priceKey: 'price_sale_195',
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
  },
];

/** Recently sold properties. Replace with real listings when ready. */
export const SOLD_LISTINGS: PropertyListing[] = [
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800',
    nameKey: 'kasbah_house',
    cityKey: 'marrakech',
    typeKey: 'apartment',
    status: 'sold',
    priceKey: 'price_sale_320',
    bedrooms: 4,
    bathrooms: 3,
    area: 130,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
    nameKey: 'ocean_retreat',
    cityKey: 'agadir',
    typeKey: 'villa',
    status: 'sold',
    priceKey: 'price_sale_520',
    bedrooms: 5,
    bathrooms: 4,
    area: 200,
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800',
    nameKey: 'city_residence',
    cityKey: 'casablanca',
    typeKey: 'apartment',
    status: 'sold',
    priceKey: 'price_sale_245',
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
  },
];

/** All listings mixed (available + sold) for the grid with pagination. */
export const ALL_LISTINGS: PropertyListing[] = [
  ...AVAILABLE_LISTINGS,
  ...SOLD_LISTINGS,
  // Extra listings for page 2 (optional; add real data later)
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    nameKey: 'riad_palm',
    cityKey: 'marrakech',
    typeKey: 'villa',
    status: 'available',
    priceKey: 'price_sale_380',
    bedrooms: 4,
    bathrooms: 3,
    area: 140,
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
    nameKey: 'villa_atlas',
    cityKey: 'agadir',
    typeKey: 'villa',
    status: 'sold',
    priceKey: 'price_sale_480',
    bedrooms: 5,
    bathrooms: 4,
    area: 190,
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800',
    nameKey: 'medina_view',
    cityKey: 'tangier',
    typeKey: 'apartment',
    status: 'available',
    priceKey: 'price_sale_165',
    bedrooms: 3,
    bathrooms: 2,
    area: 88,
  },
  {
    id: '10',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800',
    nameKey: 'kasbah_house',
    cityKey: 'casablanca',
    typeKey: 'apartment',
    status: 'sold',
    priceKey: 'price_sale_295',
    bedrooms: 4,
    bathrooms: 3,
    area: 125,
  },
  {
    id: '11',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
    nameKey: 'ocean_retreat',
    cityKey: 'marrakech',
    typeKey: 'villa',
    status: 'available',
    priceKey: 'price_sale_620',
    bedrooms: 6,
    bathrooms: 5,
    area: 220,
  },
  {
    id: '12',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800',
    nameKey: 'city_residence',
    cityKey: 'tangier',
    typeKey: 'apartment',
    status: 'sold',
    priceKey: 'price_sale_135',
    bedrooms: 2,
    bathrooms: 2,
    area: 75,
  },
];
