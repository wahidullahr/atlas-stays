import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export default function TermsPage() {
  return (
    <Section className="py-16 framer:py-24">
      <Container className="max-w-[800px]">
        <h1 className="h1 mb-8">Terms of Service</h1>
        <p className="body-muted leading-relaxed">
          By using our services, you agree to these terms.
        </p>
      </Container>
    </Section>
  );
}
