import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { CityCard } from './CityCard';

const CITIES = [
  {
    key: 'marrakech',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=1000&auto=format&fit=crop',
  },
  {
    key: 'casablanca',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    key: 'tangier',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
  },
  {
    key: 'agadir',
    image: 'https://images.unsplash.com/photo-1590426915233-66233d59e370?q=80&w=1000&auto=format&fit=crop',
  },
];

export const CityGrid = () => {
  const t = useTranslations('Areas');

  return (
    <section className="relative bg-background overflow-hidden py-16 framer:py-24">
      <Container className="max-w-[1360px]">
        <div className="flex flex-col framer:flex-row framer:items-end framer:justify-between gap-4 mb-10 framer:mb-14">
          <div>
            <p className="text-[13px] framer:text-[15px] font-semibold tracking-[0.18em] uppercase text-accent mb-4">
              {t('eyebrow')}
            </p>
            <h2 className="text-[2rem] framer:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight">
              {t('title')}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 framer:gap-6">
          {CITIES.map(({ key, image }) => (
            <CityCard
              key={key}
              city={key}
              name={t(`cities.${key}.name`)}
              metric={t(`cities.${key}.metric`)}
              imageSrc={image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
