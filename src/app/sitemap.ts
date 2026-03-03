import { getBaseUrl } from '@/lib/metadata';

const LOCALES = ['en', 'fr', 'ar'] as const;
const PATHS = [
  '',
  '/services',
  '/how-it-works',
  '/pricing',
  '/areas',
  '/areas/marrakech',
  '/areas/casablanca',
  '/areas/tangier',
  '/areas/agadir',
  '/faq',
  '/about',
  '/contact',
  '/legal/privacy',
  '/legal/terms',
];

export default function sitemap(): { url: string; lastModified?: Date }[] {
  const base = getBaseUrl();
  const entries: { url: string; lastModified?: Date }[] = [];
  const now = new Date();
  for (const locale of LOCALES) {
    for (const path of PATHS) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: now,
      });
    }
  }
  return entries;
}
