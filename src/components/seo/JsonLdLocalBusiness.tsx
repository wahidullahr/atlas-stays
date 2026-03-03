import React from 'react';
import { getBaseUrl } from '@/lib/metadata';

export function JsonLdLocalBusiness() {
  const baseUrl = getBaseUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AtlasStays',
    description:
      'Stress-free short-term rental operations in Morocco. Cleaning, inspections, photo reports, keys, and guest support for Airbnb and Booking apartments.',
    url: baseUrl,
    areaServed: {
      '@type': 'Country',
      name: 'Morocco',
    },
    serviceType: [
      'Short-term rental management',
      'Cleaning',
      'Property inspection',
      'Key handling',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
