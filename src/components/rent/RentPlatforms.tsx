'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';

const PLATFORMS: { name: string; bg: string; text: string }[] = [
  { name: 'Airbnb', bg: '#FF5A5F', text: '#FFFFFF' },
  { name: 'Booking.com', bg: '#003580', text: '#FFFFFF' },
  { name: 'VRBO', bg: '#3D5AFE', text: '#FFFFFF' },
  { name: 'Expedia', bg: '#FBCC33', text: '#1A1A1A' },
  { name: 'Hotels.com', bg: '#D32F2F', text: '#FFFFFF' },
];

export const RentPlatforms = () => {
  const t = useTranslations('RentPage.platforms');

  return (
    <section className="bg-surface py-14 framer:py-20 overflow-hidden">
      <Container className="max-w-[900px]">
        <p className="text-center text-[13px] framer:text-[14px] font-medium text-foreground mb-6 framer:mb-8">
          {t('label')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 framer:gap-4">
          {PLATFORMS.map(({ name, bg, text }) => (
            <span
              key={name}
              dir="ltr"
              className="inline-flex items-center px-4 py-2 framer:px-5 framer:py-2.5 rounded-full text-[12px] framer:text-[14px] font-semibold shadow-sm"
              style={{ backgroundColor: bg, color: text }}
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};
