'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';

const SVG_FONT = 'Inter, system-ui, sans-serif';

function AirbnbLogo() {
  return (
    <svg viewBox="0 0 120 38" className="h-8 framer:h-10 w-auto" aria-label="Airbnb" direction="ltr">
      <path
        d="M12 3c-2.5 0-4.5 2-5.8 4.2C4.5 10 3.5 13 3.5 16c0 2.7.7 5 2.2 6.5 1 1 2.4 1.5 3.8 1.5 1.8 0 3.5-1 4.8-3l.7-1.2.7 1.2c1.3 2 3 3 4.8 3 1.4 0 2.8-.5 3.8-1.5 1.5-1.5 2.2-3.8 2.2-6.5 0-3-1-6-2.7-8.8C22.5 5 20.5 3 18 3c-1.8 0-3.3 1-4.5 2.8L12 3z"
        fill="#FF5A5F"
      />
      <text x="32" y="25" fill="#FF5A5F" fontSize="17" fontWeight="700" fontFamily={SVG_FONT}>airbnb</text>
    </svg>
  );
}

function BookingLogo() {
  return (
    <svg viewBox="0 0 170 38" className="h-8 framer:h-10 w-auto" aria-label="Booking.com" direction="ltr">
      <text x="0" y="26" fill="#003580" fontSize="21" fontWeight="800" fontFamily={SVG_FONT}>Booking</text>
      <text x="95" y="26" fill="#003580" fontSize="21" fontWeight="400" fontFamily={SVG_FONT}>.com</text>
    </svg>
  );
}

function HotelsLogo() {
  return (
    <svg viewBox="0 0 140 38" className="h-8 framer:h-10 w-auto" aria-label="Hotels.com" direction="ltr">
      <text x="0" y="26" fill="#D32F2F" fontSize="20" fontWeight="700" fontFamily={SVG_FONT}>Hotels</text>
      <text x="72" y="26" fill="#D32F2F" fontSize="20" fontWeight="400" fontFamily={SVG_FONT}>.com</text>
    </svg>
  );
}

function VrboLogo() {
  return (
    <svg viewBox="0 0 80 38" className="h-8 framer:h-10 w-auto" aria-label="Vrbo" direction="ltr">
      <text x="0" y="28" fill="#3D5AFE" fontSize="24" fontWeight="800" fontFamily={SVG_FONT} letterSpacing="1">vrbo</text>
    </svg>
  );
}

function ExpediaLogo() {
  return (
    <svg viewBox="0 0 130 38" className="h-8 framer:h-10 w-auto" aria-label="Expedia" direction="ltr">
      <text x="0" y="26" fill="#FBCC33" fontSize="21" fontWeight="700" fontFamily={SVG_FONT}>expedia</text>
    </svg>
  );
}

function TripAdvisorLogo() {
  return (
    <svg viewBox="0 0 170 38" className="h-8 framer:h-10 w-auto" aria-label="TripAdvisor" direction="ltr">
      <circle cx="13" cy="19" r="9" fill="none" stroke="#00AF87" strokeWidth="2.5" />
      <circle cx="13" cy="19" r="3.5" fill="#00AF87" />
      <text x="28" y="26" fill="#00AF87" fontSize="18" fontWeight="700" fontFamily={SVG_FONT}>tripadvisor</text>
    </svg>
  );
}

const PARTNER_LOGOS = [
  { key: 'airbnb', Component: AirbnbLogo },
  { key: 'booking', Component: BookingLogo },
  { key: 'hotels', Component: HotelsLogo },
  { key: 'vrbo', Component: VrboLogo },
  { key: 'expedia', Component: ExpediaLogo },
  { key: 'tripadvisor', Component: TripAdvisorLogo },
];

export const StatsSection = () => {
  const t = useTranslations('Partners');

  return (
    <section className="bg-surface py-16 framer:py-24 overflow-hidden border-y border-border/10">
      <Container className="max-w-[1360px]">
        <div className="flex items-center justify-center gap-3 mb-8 framer:mb-12">
          <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
          <p className="text-[11px] framer:text-[13px] font-semibold tracking-[0.25em] uppercase text-accent">
            {t('eyebrow')}
          </p>
          <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 framer:gap-16">
          {PARTNER_LOGOS.map(({ key, Component }) => (
            <div
              key={key}
              className="opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              <Component />
            </div>
          ))}
        </div>

        <p className="text-[14px] framer:text-[16px] text-muted text-center mt-8 framer:mt-12 max-w-lg mx-auto leading-relaxed">
          {t('description')}
        </p>
      </Container>
    </section>
  );
};
