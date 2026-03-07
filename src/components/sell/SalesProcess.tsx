'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BarChart2, Camera, Handshake, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

const STEPS = [
  { key: 'valuation', number: '01', icon: BarChart2 },
  { key: 'marketing', number: '02', icon: Camera },
  { key: 'negotiation', number: '03', icon: Handshake },
  { key: 'notary', number: '04', icon: FileCheck },
] as const;

const IMAGE_LEFT =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop';
const IMAGE_RIGHT =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop';

export const SalesProcess = () => {
  const t = useTranslations('SellPage.salesProcess');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const [activeStep, setActiveStep] = useState(0);
  const step = STEPS[activeStep];
  const Icon = step.icon;

  const goPrev = () => setActiveStep((i) => (i === 0 ? STEPS.length - 1 : i - 1));
  const goNext = () => setActiveStep((i) => (i === STEPS.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const interval = setInterval(() => setActiveStep((i) => (i === STEPS.length - 1 ? 0 : i + 1)), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#1a1614] py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        <div className="grid grid-cols-1 framer:grid-cols-2 gap-8 framer:gap-10 framer:items-start">
          {/* Left column: eyebrow, title, subtitle, image + overlay card */}
          <div className="space-y-5 framer:space-y-6 framer:pt-8">
            <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent">
              {t('eyebrow')}
            </p>
            <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight">
              {t('title')}
            </h2>
            <p className="text-[16px] framer:text-[20px] text-white/70 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="relative aspect-4/3 framer:aspect-square rounded-2xl overflow-hidden bg-surface">
              <Image
                src={IMAGE_LEFT}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(min-width: 810px) 50vw, 100vw"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: isRtl ? -80 : 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ x: isRtl ? 80 : -80 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-s-3 inset-e-3 bottom-3 framer:inset-s-4 framer:inset-e-4 framer:bottom-4 rounded-2xl bg-white p-5 framer:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-black/6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4 framer:mb-5">
                    <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 framer:w-7 framer:h-7 text-accent" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={goPrev}
                        className="w-9 h-9 framer:w-10 framer:h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors rtl:rotate-180"
                        aria-label="Previous step"
                      >
                        <ChevronLeft className="w-4 h-4 framer:w-5 framer:h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        className="w-9 h-9 framer:w-10 framer:h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors rtl:rotate-180"
                        aria-label="Next step"
                      >
                        <ChevronRight className="w-4 h-4 framer:w-5 framer:h-5" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-[17px] framer:text-[20px] font-bold text-foreground mb-2 framer:mb-2.5">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="text-[14px] framer:text-[16px] text-muted leading-relaxed">
                    {t(`steps.${step.key}.description`)}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[12px] text-muted">
                    {STEPS.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveStep(i)}
                        aria-label={`Step ${i + 1}`}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === activeStep ? 'bg-accent w-4' : 'bg-black/20 hover:bg-black/30'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right column: image, intro text, CTA */}
          <div className="space-y-5 framer:space-y-6 framer:-mt-4">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-surface">
              <Image
                src={IMAGE_RIGHT}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(min-width: 810px) 50vw, 100vw"
              />
            </div>
            <p className="text-[16px] framer:text-[20px] text-white/70 leading-relaxed">
              {t('intro')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 framer:px-10 framer:py-4 bg-accent text-white rounded-xl font-semibold text-[14px] framer:text-[16px] hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto shadow-[0_6px_20px_rgba(5,150,105,0.3)]"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
