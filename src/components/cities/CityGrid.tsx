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
    <section id="offices" className="relative bg-surface overflow-hidden py-10 framer:py-24">
      <Container className="max-w-[1360px]">
        <div className="text-center mb-8 framer:mb-14">
          <p className="text-[11px] framer:text-[15px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.5rem] framer:text-[2.75rem] font-bold text-foreground leading-[1.15] framer:leading-[1.1] tracking-tight mb-3 framer:mb-5">
            {t('title')}
          </h2>
          <p className="text-[13px] framer:text-[17px] text-muted max-w-2xl mx-auto leading-relaxed">
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
