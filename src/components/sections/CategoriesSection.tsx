import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    key: 'turnover',
    label: 'Turnover & Cleaning',
    description: 'Professional post-checkout cleaning with photo documentation.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    slug: 'services',
  },
  {
    key: 'care',
    label: 'Care Package',
    description: 'Cleaning plus linen coordination and restocking between guests.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    slug: 'pricing',
  },
  {
    key: 'full',
    label: 'Full Management',
    description: 'Revenue-based partnership with guest messaging and priority support.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    slug: 'how-it-works',
  },
] as const;

export const CategoriesSection = () => {
  const t = useTranslations('Home');

  return (
    <Section>
      <Container>
        <SectionHeader eyebrow={t('categoriesEyebrow')} title={t('categoriesTitle')} centered />
        <div className="grid grid-cols-1 framer:grid-cols-3 gap-5">
          {CATEGORIES.map(({ key, label, description, image, slug }) => (
            <Link
              key={key}
              href={`/${slug}`}
              className="group relative block rounded-2xl overflow-hidden card-interactive focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 810px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-6">
                <h3 className="text-white text-lg font-bold tracking-tight mb-1">{label}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-3">{description}</p>
                <span className="inline-flex items-center gap-1.5 text-white/90 text-sm font-semibold group-hover:text-white transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};
