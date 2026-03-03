import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';

export const StatsSection = () => {
  const t = useTranslations('Home');

  const stats = [
    { value: '500+', label: 'Turnovers completed' },
    { value: '4', label: 'Cities we cover' },
    { value: '24/7', label: 'Escalation support' },
  ];

  return (
    <section className="bg-foreground text-background py-16 framer:py-20">
      <Container>
        <p className="eyebrow text-center mb-10">{t('statsEyebrow')}</p>
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-8 framer:gap-0 framer:divide-x framer:divide-on-dark text-center">
          {stats.map((stat, i) => (
            <div key={i} className="px-8">
              <p className="text-4xl framer:text-5xl font-extrabold text-background tracking-tight mb-2">
                {stat.value}
              </p>
              <p className="text-background/60 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
