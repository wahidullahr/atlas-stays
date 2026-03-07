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
    <section className="bg-[#F8FAFC] py-14 framer:py-20 overflow-hidden">
      <Container className="max-w-[900px]">
        <p className="text-center text-[15px] framer:text-[17px] font-bold text-foreground mb-6 framer:mb-10">
          {t('label')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 framer:gap-5">
          {PLATFORMS.map(({ name, bg, text }) => (
            <span
              key={name}
              dir="ltr"
              className="inline-flex items-center px-5 py-3 framer:px-6 framer:py-3.5 rounded-xl text-[14px] framer:text-[16px] font-bold shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-200"
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
