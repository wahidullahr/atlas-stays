import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { ProcessSteps } from './ProcessSteps';
import { ArrowRight } from 'lucide-react';

const COLLAGE_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
];

export const HowItWorks = () => {
  const t = useTranslations('HowItWorks');

  const steps = [
    { key: 'onboarding', badge: '01' },
    { key: 'stay', badge: '02' },
    { key: 'reporting', badge: '03' },
  ].map(({ key, badge }) => ({
    badge,
    title: t(`steps.${key}.title`),
    description: t(`steps.${key}.description`),
  }));

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 framer:grid-cols-2 gap-12 framer:gap-20 items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 framer:gap-4">
            {COLLAGE_IMAGES.map(({ src, span }, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden border border-border ${span} ${i === 1 ? 'min-h-full' : 'min-h-[180px]'}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 810px) 50vw, 350px"
                />
              </div>
            ))}
          </div>

          <div>
            <SectionHeader
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
            <ProcessSteps steps={steps} layout="stack" />
            <Link
              href="/how-it-works"
              className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 bg-foreground text-background rounded-xl font-semibold text-[15px] hover:bg-foreground/90 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
            >
              {t('cta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
