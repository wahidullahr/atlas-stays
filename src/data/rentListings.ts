export type RentPropertyListing = {
  id: string;
  image: string;
  images: string[];
  nameKey: string;
  cityKey: string;
  typeKey: string;
  priceKey: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
};

export type RecentlyManagedListing = RentPropertyListing & {
  dateKey: string;
};

const GALLERY = {
  riad_palm: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1200',
  ],
  villa_atlas: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1200',
  ],
  medina_view: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200',
  ],
  ocean_retreat: [
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1200',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200',
  ],
  kasbah_house: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200',
  ],
  city_residence: [
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
  ],
} as const;

function imgs(key: keyof typeof GALLERY): string[] {
  return [...GALLERY[key]];
}

export const AVAILABLE_RENT_LISTINGS: RentPropertyListing[] = [
  {
    id: 'r1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    images: imgs('riad_palm'),
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
    images: imgs('villa_atlas'),
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
    images: imgs('medina_view'),
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
    images: imgs('ocean_retreat'),
    nameKey: 'ocean_retreat',
    cityKey: 'agadir',
    typeKey: 'villa',
    priceKey: 'price_220',
    bedrooms: 5,
    bathrooms: 4,
    area: 200,
  },
];

export const RECENTLY_MANAGED_LISTINGS: RecentlyManagedListing[] = [
  {
    id: 'rm1',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800',
    images: imgs('kasbah_house'),
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
    images: imgs('city_residence'),
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
    images: imgs('riad_palm'),
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

export const ALL_RENT_LISTINGS: (RentPropertyListing | RecentlyManagedListing)[] = [
  ...AVAILABLE_RENT_LISTINGS,
  ...RECENTLY_MANAGED_LISTINGS,
];
