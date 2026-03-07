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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400',
  },
  {
    id: 't2',
    quoteKey: 'quote_2',
    nameKey: 'name_2',
    locationKey: 'location_2',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400',
  },
  {
    id: 't3',
    quoteKey: 'quote_3',
    nameKey: 'name_3',
    locationKey: 'location_3',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400',
  },
  {
    id: 't4',
    quoteKey: 'quote_4',
    nameKey: 'name_4',
    locationKey: 'location_4',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400',
  },
];
