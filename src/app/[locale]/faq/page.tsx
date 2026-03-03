import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CTA } from '@/components/layout/CTA';

export default function FAQPage() {
  const t = useTranslations('Nav');

  const faqs = [
    {
      q: 'How do you handle keys?',
      a: 'We use secure key boxes or smart locks. We can also coordinate in-person check-ins if needed.',
    },
    {
      q: 'What if there is damage?',
      a: 'We inspect the property after every stay and document everything with photos. We help you file claims with Airbnb/Booking.',
    },
    {
      q: 'Do you handle late check-ins?',
      a: 'Yes, our team or key solutions are available 24/7.',
    },
    {
      q: 'How fast do you respond?',
      a: 'We aim to respond to all owner messages within 1 hour during business hours.',
    },
    {
      q: 'Do I get photos?',
      a: 'Yes, you receive a detailed photo report after every turnover.',
    },
    {
      q: 'Can you manage multiple units?',
      a: 'Absolutely. We have special pricing for multi-unit owners.',
    },
  ];

  return (
    <>
      <Section className="pt-16 framer:pt-24 pb-12 framer:pb-16 bg-surface/30">
        <Container className="text-center max-w-[800px] mx-auto">
          <h1 className="h1 mb-6">{t('faq')}</h1>
          <p className="body-muted mb-8 max-w-[600px] mx-auto">
            Common questions from owners.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-[800px]">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  {faq.q}
                </h2>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
