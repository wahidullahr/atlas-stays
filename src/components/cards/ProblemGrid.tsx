import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ShieldAlert, AlertCircle, PhoneOff, KeyRound, EyeOff, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { InfoCard } from './InfoCard';

export const ProblemGrid = () => {
  const t = useTranslations('Problems');

  // Using "negative" icons to represent the problems visually
  const problems = [
    { key: 'reliability', icon: <ShieldAlert size={22} strokeWidth={2} /> },
    { key: 'damage', icon: <AlertCircle size={22} strokeWidth={2} /> },
    { key: 'support', icon: <PhoneOff size={22} strokeWidth={2} /> },
    { key: 'keys', icon: <KeyRound size={22} strokeWidth={2} /> },
    { key: 'visibility', icon: <EyeOff size={22} strokeWidth={2} /> },
  ];

  return (
    <Section className="bg-surface/50 border-y border-border-subtle py-24 framer:py-32">
      <Container>
        <div className="flex flex-col framer:flex-row framer:items-end framer:justify-between gap-6 mb-16 framer:mb-20">
          <div className="max-w-[600px]">
            <SectionHeader eyebrow={t('eyebrow')} title={t('title')} className="mb-4 framer:mb-4" />
            <p className="body-muted text-lg">
              Managing a property remotely is full of risks. We turn those risks into a reliable, consistent system.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background rounded-xl font-semibold text-[15px] hover:bg-foreground/90 transition-all duration-200 group shrink-0 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 [box-shadow:var(--shadow-elevated)]"
          >
            {t('viewAll')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ key, icon }) => (
            <InfoCard
              key={key}
              title={t(`cards.${key}.title`)}
              description={t(`cards.${key}.description`)}
              icon={icon}
            />
          ))}
          
          {/* Last card is a CTA/Summary card */}
          <div className="bg-gradient-to-br from-foreground to-neutral-800 rounded-2xl p-8 flex flex-col justify-between text-background relative overflow-hidden group cursor-pointer [box-shadow:var(--shadow-elevated)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">Ready to stop worrying?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Join 500+ owners who sleep soundly knowing their Morocco property is in expert hands.
              </p>
            </div>
            
            <div className="relative z-10 mt-auto">
              <Link
                href="/contact" 
                className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors"
              >
                Get a free quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
