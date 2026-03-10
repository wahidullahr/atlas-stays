'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Cpu, Shield, Zap, ExternalLink } from 'lucide-react';
import { Container } from '../layout/Container';

export const AboutDigitalPartner = () => {
  const t = useTranslations('About.digitalPartner');

  return (
    <section className="py-16 framer:py-28 bg-accent/5">
      <Container className="max-w-[1200px]">
        <div className="grid grid-cols-1 framer:grid-cols-[1fr_1.1fr] gap-10 framer:gap-14 framer:items-center">
          {/* Text content */}
          <div>
            <div className="flex items-center gap-3 mb-5 framer:mb-7">
              <span className="w-8 framer:w-10 h-px bg-accent" aria-hidden />
              <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.25em] uppercase text-accent">
                {t('eyebrow')}
              </p>
            </div>

            <h2 className="text-[1.75rem] framer:text-[clamp(2rem,3.5vw,2.75rem)] font-bold text-foreground leading-[1.15] tracking-tight mb-6 framer:mb-8">
              {t('title')}
            </h2>

            <div className="space-y-5 framer:space-y-6">
              <p className="text-[15px] framer:text-[18px] text-foreground/90 leading-relaxed font-medium">
                {t('body1')}
              </p>
              <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed">
                {t('body2')}
              </p>
              <p className="text-[14px] framer:text-[17px] text-muted leading-relaxed">
                {t('body3')}
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-8 framer:mt-10 flex flex-wrap gap-3 framer:gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent text-[12px] framer:text-[13px] font-semibold">
                <Shield className="w-4 h-4" strokeWidth={2} />
                {t('badge_iso')}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent text-[12px] framer:text-[13px] font-semibold">
                {t('badge_gdpr')}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent text-[12px] framer:text-[13px] font-semibold">
                {t('badge_partners')}
              </span>
            </div>

            {/* CTA link */}
            <a
              href="https://xala.no"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 framer:mt-10 inline-flex items-center gap-2.5 text-accent font-semibold text-[14px] framer:text-[16px] hover:text-accent/80 transition-colors"
            >
              {t('cta')}
              <ExternalLink className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>

          {/* Right side - visual with icons */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 framer:gap-6">
              <div className="rounded-2xl framer:rounded-3xl bg-accent/10 border border-accent/25 p-6 framer:p-8">
                <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-accent/25 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 framer:w-7 framer:h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground mb-2">
                  {t('card_ai')}
                </h3>
                <p className="text-[13px] framer:text-[14px] text-foreground/70 leading-relaxed">
                  {t('card_ai_desc')}
                </p>
              </div>
              <div className="rounded-2xl framer:rounded-3xl bg-accent/10 border border-accent/25 p-6 framer:p-8">
                <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-accent/25 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 framer:w-7 framer:h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground mb-2">
                  {t('card_cloud')}
                </h3>
                <p className="text-[13px] framer:text-[14px] text-foreground/70 leading-relaxed">
                  {t('card_cloud_desc')}
                </p>
              </div>
              <div className="rounded-2xl framer:rounded-3xl bg-accent/10 border border-accent/25 p-6 framer:p-8 framer:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-accent/25 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 framer:w-7 framer:h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[15px] framer:text-[17px] font-bold text-foreground mb-2">
                      {t('card_trust')}
                    </h3>
                    <p className="text-[13px] framer:text-[14px] text-foreground/70 leading-relaxed">
                      {t('card_trust_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
