'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Building2, Camera, PenTool, Monitor, Megaphone } from 'lucide-react';
import { Container } from '../layout/Container';

const BRANCHES = [
  { key: 'agents', icon: Building2 },
  { key: 'photographers', icon: Camera },
  { key: 'designers', icon: PenTool },
  { key: 'technical', icon: Monitor },
  { key: 'marketing', icon: Megaphone },
] as const;

export const AboutTeam = () => {
  const t = useTranslations('About.team');

  return (
    <section className="py-16 framer:py-28 overflow-hidden">
      <Container className="max-w-[1360px]">
        {/* Root banner */}
        <div className="bg-foreground rounded-2xl framer:rounded-3xl p-8 framer:p-14 text-center mb-6 framer:mb-8 max-w-[1200px] mx-auto">
          <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-3 framer:mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[1.75rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight max-w-[600px] mx-auto mb-4 framer:mb-5">
            {t('title')}
          </h2>
          <p className="text-[14px] framer:text-[17px] text-white/55 leading-relaxed max-w-[580px] mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Department cards — top row (2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 framer:gap-6 mb-4 framer:mb-6 max-w-[1200px] mx-auto">
          {BRANCHES.slice(0, 2).map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group bg-white rounded-2xl framer:rounded-3xl p-6 framer:p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5 framer:gap-6"
            >
              <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-foreground flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Icon className="w-6 h-6 framer:w-7 framer:h-7 text-white" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[17px] framer:text-[20px] font-bold text-foreground mb-1.5 framer:mb-2 tracking-tight">
                  {t(`roles.${key}.title`)}
                </h3>
                <p className="text-[13px] framer:text-[15px] text-muted leading-relaxed">
                  {t(`roles.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Department cards — bottom row (3) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 framer:gap-6 max-w-[1200px] mx-auto">
          {BRANCHES.slice(2).map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group bg-white rounded-2xl framer:rounded-3xl p-6 framer:p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5 framer:gap-6"
            >
              <div className="w-12 h-12 framer:w-14 framer:h-14 rounded-xl bg-foreground flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Icon className="w-6 h-6 framer:w-7 framer:h-7 text-white" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[17px] framer:text-[20px] font-bold text-foreground mb-1.5 framer:mb-2 tracking-tight">
                  {t(`roles.${key}.title`)}
                </h3>
                <p className="text-[13px] framer:text-[15px] text-muted leading-relaxed">
                  {t(`roles.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
