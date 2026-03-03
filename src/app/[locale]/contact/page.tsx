import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  const t = useTranslations('Nav');

  return (
    <>
      <Section className="pt-16 framer:pt-24 pb-12 framer:pb-16 bg-surface/30">
        <Container className="text-center max-w-[800px] mx-auto">
          <h1 className="h1 mb-6">{t('contact')}</h1>
          <p className="body-muted mb-8 max-w-[600px] mx-auto">
            Ready to get started? Send us a message or chat on WhatsApp.
          </p>
        </Container>
      </Section>
      <ContactForm />
    </>
  );
}
