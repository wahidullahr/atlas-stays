'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { useWhatsAppHref } from '@/hooks/useWhatsAppHref';

export const OwnerCTA = () => {
  const t = useTranslations('Properties.ownerCta');
  const whatsappHref = useWhatsAppHref();

  return (
    <section className="relative bg-[#1a1a1a] overflow-hidden py-12 framer:py-16">
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      <Container className="max-w-[800px]">
        <div className="text-center">
          <h2 className="text-[1.5rem] framer:text-[2rem] font-bold text-white leading-[1.15] tracking-tight mb-6 framer:mb-8">
            {t('headline')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 framer:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 framer:px-8 framer:py-4 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[15px] hover:bg-accent/90 transition-colors"
            >
              {t('valuation')}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 framer:px-8 framer:py-4 bg-white/10 border border-white/30 text-white rounded-xl font-semibold text-[14px] framer:text-[15px] hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {t('whatsapp')}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
