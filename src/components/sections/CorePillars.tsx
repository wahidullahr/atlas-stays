'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Scale, Home, CalendarDays, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { cn } from '@/lib/utils';

const PILLARS = [
  { key: 'sell', icon: Scale },
  { key: 'longTerm', icon: Home },
  { key: 'shortTerm', icon: CalendarDays },
] as const;

export const CorePillars = () => {
  const t = useTranslations('CorePillars');

  return (
    <Section className="bg-surface border-y border-border-subtle">
      <Container>
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
          centered
        />
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-6 framer:gap-8">
          {PILLARS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className={cn(
                'group flex flex-col p-6 framer:p-8 bg-background border border-border rounded-2xl card-interactive'
              )}
            >
              <div className="mb-5 p-3 w-fit rounded-xl bg-surface text-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-200">
                <Icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-normal text-foreground mb-3">{t(`pillars.${key}.title`)}</h3>
              <p className="body-muted text-[15px] flex-1 mb-6">{t(`pillars.${key}.description`)}</p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 rounded-md"
              >
                {t('learnMore')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
