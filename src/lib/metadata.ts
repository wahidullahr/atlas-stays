const BASE_TITLE = 'AtlasStays';
const BASE_DESC =
  'Stress-free short-term rental operations in Morocco. Cleaning, inspections, photo reports, keys, and guest support for your Airbnb or Booking apartment.';

export function getBaseUrl(): string {
  return process.env.SITE_URL ?? 'https://atlasstays.com';
}

export function buildMetadata({
  locale,
  path = '',
  title,
  description,
}: {
  locale: string;
  path?: string;
  title?: string;
  description?: string;
}) {
  const baseUrl = getBaseUrl();
  const canonical = `${baseUrl}/${locale}${path}`;
  const fullTitle = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
  const desc = description ?? BASE_DESC;

  const languages: Record<string, string> = {
    en: `${baseUrl}/en${path}`,
    fr: `${baseUrl}/fr${path}`,
    ar: `${baseUrl}/ar${path}`,
  };

  return {
    title: fullTitle,
    description: desc,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: canonical,
      siteName: BASE_TITLE,
      locale: locale === 'ar' ? 'ar_MA' : locale === 'fr' ? 'fr_FR' : 'en_US',
    },
  };
}
