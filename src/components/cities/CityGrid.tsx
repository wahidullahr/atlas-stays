'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { OfficeMap } from './OfficeMap';

export const CityGrid = () => {
  const t = useTranslations('Areas');

  const cities = [
    { key: 'oslo', name: t('cities.oslo.name'), metric: t('cities.oslo.metric') },
    { key: 'london', name: t('cities.london.name'), metric: t('cities.london.metric') },
    { key: 'tangier', name: t('cities.tangier.name'), metric: t('cities.tangier.metric') },
    { key: 'casablanca', name: t('cities.casablanca.name'), metric: t('cities.casablanca.metric') },
    { key: 'marrakech', name: t('cities.marrakech.name'), metric: t('cities.marrakech.metric') },
    { key: 'agadir', name: t('cities.agadir.name'), metric: t('cities.agadir.metric') },
  ];

  return (
    <section id="offices" className="relative bg-surface overflow-hidden py-16 framer:py-28">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-10 framer:mb-16">
          <div className="flex items-center justify-center gap-3 mb-5 framer:mb-7">
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
            <p className="text-[11px] framer:text-[13px] font-semibold tracking-[0.25em] uppercase text-accent">
              {t('eyebrow')}
            </p>
            <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
          </div>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.08] tracking-tight mb-4 framer:mb-6">
            {t('title')}
          </h2>
          <p className="text-[15px] framer:text-[18px] text-muted max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
        <OfficeMap
          cities={cities}
          regionLabels={{
            europe: t('region_europe'),
            europeCities: t('region_europe_cities'),
            morocco: t('region_morocco'),
            moroccoCities: t('region_morocco_cities'),
          }}
        />
      </Container>
    </section>
  );
};
