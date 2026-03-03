import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export default function PrivacyPage() {
  return (
    <Section className="py-16 framer:py-24">
      <Container className="max-w-[800px]">
        <h1 className="h1 mb-8">Privacy Policy</h1>
        <p className="body-muted leading-relaxed">
          Your privacy is important to us. This policy outlines how we collect,
          use, and protect your information.
        </p>
      </Container>
    </Section>
  );
}
