export type RentTestimonial = {
  id: string;
  quoteKey: string;
  nameKey: string;
  locationKey: string;
  image: string; // Property or owner photo
};

/** Genuine owner testimonials. Replace with real reviews when available. */
export const RENT_TESTIMONIALS: RentTestimonial[] = [
  {
    id: 't1',
    quoteKey: 'quote_1',
    nameKey: 'name_1',
    locationKey: 'location_1',
    image: '/images/villa-pool.png',
  },
  {
    id: 't2',
    quoteKey: 'quote_2',
    nameKey: 'name_2',
    locationKey: 'location_2',
    image: '/images/apartment-morocco.png',
  },
  {
    id: 't3',
    quoteKey: 'quote_3',
    nameKey: 'name_3',
    locationKey: 'location_3',
    image: '/images/riad-courtyard.png',
  },
  {
    id: 't4',
    quoteKey: 'quote_4',
    nameKey: 'name_4',
    locationKey: 'location_4',
    image: '/images/moroccan-villa-philosophy.png',
  },
];
