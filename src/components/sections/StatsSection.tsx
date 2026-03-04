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
    <section className="bg-surface py-14 framer:py-20 overflow-hidden border-y border-border/20">
      <Container>
        <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-foreground/60 text-center mb-8 framer:mb-12">
          {t('eyebrow')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 framer:gap-14">
          {PARTNER_LOGOS.map(({ key, Component }) => (
            <div
              key={key}
              className="opacity-100 transition-transform duration-300 hover:scale-105"
            >
              <Component />
            </div>
          ))}
        </div>

        <p className="text-[13px] framer:text-[15px] text-foreground/50 text-center mt-8 framer:mt-12 max-w-lg mx-auto leading-relaxed">
          {t('description')}
        </p>
      </Container>
    </section>
  );
};
