export type ListingStatus = 'available' | 'sold' | 'under_negotiation' | 'recently_closed';

export type PropertyListing = {
  id: string;
  image: string;
  images: string[];
  nameKey: string;
  cityKey: string;
  typeKey: string;
  status: ListingStatus;
  priceKey: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
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
  kasbah_house: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200',
  ],
  ocean_retreat: [
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200',
    'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1200',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200',
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

export const AVAILABLE_LISTINGS: PropertyListing[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    images: imgs('riad_palm'),
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
    images: imgs('villa_atlas'),
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
    images: imgs('medina_view'),
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

export const SOLD_LISTINGS: PropertyListing[] = [
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800',
    images: imgs('kasbah_house'),
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
    images: imgs('ocean_retreat'),
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
    images: imgs('city_residence'),
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

export const ALL_LISTINGS: PropertyListing[] = [
  ...AVAILABLE_LISTINGS,
  ...SOLD_LISTINGS,
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    images: imgs('riad_palm'),
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
    images: imgs('villa_atlas'),
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
    images: imgs('medina_view'),
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
    images: imgs('kasbah_house'),
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
    images: imgs('ocean_retreat'),
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
    images: imgs('city_residence'),
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
