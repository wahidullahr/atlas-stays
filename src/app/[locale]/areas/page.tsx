import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Navbar } from '@/components/nav/Navbar';
import { PropertiesHero } from '@/components/properties/PropertiesHero';
import { OwnerCTA } from '@/components/properties/OwnerCTA';
import { PropertiesContent } from '@/components/properties/PropertiesContent';
import { buildMetadata, getBaseUrl } from '@/lib/metadata';

type Props = {
  searchParams: Promise<{ page?: string; tab?: string }>;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ searchParams, params }: Props): Promise<Metadata> {
  const { page, tab } = await searchParams;
  const { locale } = await params;
  const baseUrl = getBaseUrl();
  const path = `/areas`;
  const pageNum = Math.max(1, parseInt(page || '1', 10) || 1);
  const tabParam = tab || 'rent';

  const meta = buildMetadata({
    locale,
    path,
    title: pageNum > 1 ? `Properties - Page ${pageNum}` : 'Properties',
  });

  const baseCanonical = `${baseUrl}/${locale}${path}`;
  const canonical = pageNum > 1 ? `${baseCanonical}?tab=${tabParam}&page=${pageNum}` : baseCanonical;
  const prev = pageNum > 1 ? `${baseCanonical}?tab=${tabParam}&page=${pageNum - 1}` : undefined;
  const next = `${baseCanonical}?tab=${tabParam}&page=${pageNum + 1}`;

  return {
    ...meta,
    alternates: {
      ...meta.alternates,
      canonical,
      ...(prev ? { prev } : {}),
      ...(next ? { next } : {}),
    },
  };
}

export default async function AreasPage() {
  return (
    <>
      <Navbar />
      <main className="-mt-[88px]">
        <PropertiesHero />
        <Suspense fallback={null}>
          <PropertiesContent />
        </Suspense>
        <OwnerCTA />
      </main>
    </>
  );
}
