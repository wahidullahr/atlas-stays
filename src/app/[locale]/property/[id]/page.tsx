import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/nav/Navbar';
import { PropertyDetail } from '@/components/properties/PropertyDetail';
import { getListingById, getAllListingIds } from '@/data/listings';
import { buildMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateStaticParams() {
  return getAllListingIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const result = getListingById(id);
  if (!result) return {};

  const { listing, variant } = result;
  const title = `${listing.nameKey.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} — ${variant === 'rent' ? 'Rent' : 'For Sale'}`;

  return buildMetadata({
    locale,
    path: `/property/${id}`,
    title,
  });
}

export default async function PropertyPage({ params }: Props) {
  const { id } = await params;
  const result = getListingById(id);

  if (!result) notFound();

  return (
    <>
      <Navbar />
      <PropertyDetail result={result} />
    </>
  );
}
