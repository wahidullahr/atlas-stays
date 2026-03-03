import React from 'react';
import { useTranslations } from 'next-intl';
import { Sparkles, ClipboardCheck, Key, Shirt, ShoppingBag } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { IconCard } from '../cards/IconCard';

export const ServiceGrid = () => {
  const t = useTranslations('Services');

  const services = [
    { key: 'cleaning', icon: <Sparkles size={24} strokeWidth={1.8} /> },
    { key: 'inspection', icon: <ClipboardCheck size={24} strokeWidth={1.8} /> },
    { key: 'keys', icon: <Key size={24} strokeWidth={1.8} /> },
    { key: 'linen', icon: <Shirt size={24} strokeWidth={1.8} /> },
    { key: 'restocking', icon: <ShoppingBag size={24} strokeWidth={1.8} /> },
  ];

  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
          centered
        />
        <div className="grid grid-cols-2 framer:grid-cols-3 lg:grid-cols-5 gap-4 framer:gap-5">
          {services.map(({ key, icon }) => (
            <IconCard key={key} icon={icon} label={t(`items.${key}`)} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
