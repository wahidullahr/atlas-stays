'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { Tabs } from './Tabs';
import { Check } from 'lucide-react';

export const PricingTabs = () => {
  const t = useTranslations('Pricing');
  const [activeTab, setActiveTab] = useState('starter');

  const tabs = [
    { key: 'starter', label: t('tabs.starter') },
    { key: 'care', label: t('tabs.care') },
    { key: 'full', label: t('tabs.full') },
    { key: 'custom', label: t('tabs.custom') },
  ];

  const tabNames: Record<string, string> = {
    starter: t('tabs.starter'),
    care: t('tabs.care'),
    full: t('tabs.full'),
    custom: t('tabs.custom'),
  };

  const packages: Record<string, string[]> = {
    starter: [
      t('packages.starter.includes.0'),
      t('packages.starter.includes.1'),
      t('packages.starter.includes.2'),
    ],
    care: [
      t('packages.care.includes.0'),
      t('packages.care.includes.1'),
      t('packages.care.includes.2'),
    ],
    full: [
      t('packages.full.includes.0'),
      t('packages.full.includes.1'),
      t('packages.full.includes.2'),
    ],
    custom: [
      t('packages.custom.includes.0'),
      t('packages.custom.includes.1'),
      t('packages.custom.includes.2'),
    ],
  };

  const currentItems = packages[activeTab] ?? [];

  return (
    <Section>
      <Container>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} centered />
        <div className="flex justify-center mb-10">
          <Tabs
            tabs={tabs}
            activeKey={activeTab}
            onChange={setActiveTab}
            label={t('title')}
          >
            <div className="max-w-[640px] mx-auto">
              <div className="bg-background border border-border rounded-2xl p-8 framer:p-10 card-interactive">
                <h3 className="h3 text-center mb-2">{tabNames[activeTab]}</h3>
                <p className="text-center text-muted text-sm mb-8">
                  {t('cta')}
                </p>
                <ul className="space-y-4 mb-8">
                  {currentItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-accent" strokeWidth={3} />
                      </div>
                      <span className="text-foreground text-[15px] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full py-3.5 bg-foreground text-background rounded-xl font-semibold text-center text-[15px] hover:bg-foreground/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                >
                  {t('cta')}
                </a>
              </div>
            </div>
          </Tabs>
        </div>
      </Container>
    </Section>
  );
};
