import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { CityCard } from './CityCard';

export const CityGrid = () => {
  const t = useTranslations('Areas');

  const cities = [
    {
      key: 'marrakech',
      image: 'https://images.unsplash.com/photo-1597211684627-d87802830845?q=80&w=1000&auto=format&fit=crop',
    },
    {
      key: 'casablanca',
      image: 'https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=1000&auto=format&fit=crop',
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

  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 framer:grid-cols-4 gap-5">
          {cities.map(({ key, image }) => (
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
    </Section>
  );
};
