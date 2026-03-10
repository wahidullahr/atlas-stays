import { ALL_LISTINGS, type PropertyListing } from './sellListings';
import { ALL_RENT_LISTINGS, type RentPropertyListing, type RecentlyManagedListing } from './rentListings';

export type ListingResult = {
  listing: PropertyListing | RentPropertyListing | RecentlyManagedListing;
  variant: 'rent' | 'sale';
};

export function getListingById(id: string): ListingResult | null {
  const saleListing = ALL_LISTINGS.find((l) => l.id === id);
  if (saleListing) return { listing: saleListing, variant: 'sale' };

  const rentListing = ALL_RENT_LISTINGS.find((l) => l.id === id);
  if (rentListing) return { listing: rentListing, variant: 'rent' };

  return null;
}

export function getAllListingIds(): string[] {
  return [
    ...ALL_LISTINGS.map((l) => l.id),
    ...ALL_RENT_LISTINGS.map((l) => l.id),
  ];
}
