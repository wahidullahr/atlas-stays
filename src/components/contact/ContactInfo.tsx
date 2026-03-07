'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../layout/Container';
import { Mail, Clock } from 'lucide-react';

const CONTACT_ITEMS = [
  { key: 'email', icon: Mail, href: 'mailto:hello@atlasstays.com', value: 'hello@atlasstays.com' },
  { key: 'hours', icon: Clock },
] as const;

export const ContactInfo = () => {
  const t = useTranslations('ContactPage.info');

  return (
    <section className="bg-surface/50 border-b border-border py-12 framer:py-16">
      <Container className="max-w-[1200px]">
        <div className="text-center mb-8 framer:mb-12">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-2.5 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.5rem] framer:text-[2.25rem] font-bold text-foreground leading-[1.15] tracking-tight mb-3 framer:mb-5">
            {t('title')}
          </h2>
          <p className="text-[13px] framer:text-[16px] text-muted max-w-[560px] mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 framer:gap-8 max-w-[560px] mx-auto">
          {CONTACT_ITEMS.map((item) => {
            const { key, icon: Icon } = item;
            const href = 'href' in item ? item.href : undefined;
            const value = key === 'email' ? 'hello@atlasstays.com' : undefined;

            const content = (
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-[14px] font-semibold text-foreground mb-1.5">
                  {t(`${key}.label`)}
                </h3>
                {key === 'hours' ? (
                  <p className="text-[13px] text-muted leading-relaxed">
                    {t('hours.value')}
                  </p>
                ) : (
                  <p className="text-[13px] text-muted tabular-nums">
                    {value ?? t(`${key}.value`)}
                  </p>
                )}
              </div>
            );

            if (href) {
              return (
                <a key={key} href={href} className="block">
                  {content}
                </a>
              );
            }

            return <div key={key}>{content}</div>;
          })}
        </div>
      </Container>
    </section>
  );
};
