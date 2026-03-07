'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Globe, MessageSquare, Shield, BarChart3, Sparkles, TrendingUp } from 'lucide-react';
import { Container } from '../layout/Container';

const FEATURES = [
  { key: 'listing', icon: Globe, color: '#059669', accent: 'bg-emerald-600' },
  { key: 'guest_management', icon: MessageSquare, color: '#0ea5e9', accent: 'bg-sky-500' },
  { key: 'support', icon: Shield, color: '#8b5cf6', accent: 'bg-violet-500' },
  { key: 'transparency', icon: BarChart3, color: '#f59e0b', accent: 'bg-amber-500' },
  { key: 'cleaning_maintenance', icon: Sparkles, color: '#ec4899', accent: 'bg-pink-500' },
  { key: 'pricing_revenue', icon: TrendingUp, color: '#059669', accent: 'bg-emerald-600' },
] as const;

function PlatformDiagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
      {/* Central hub */}
      <circle cx="100" cy="60" r="18" fill={color} fillOpacity={0.15} stroke={color} strokeWidth="2" />
      <circle cx="100" cy="60" r="6" fill={color} />
      {/* Orbiting nodes */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const r = 45;
        const x = 100 + r * Math.cos((angle * Math.PI) / 180);
        const y = 60 + r * Math.sin((angle * Math.PI) / 180);
        return (
          <g key={i}>
            <line x1="100" y1="60" x2={x} y2={y} stroke={color} strokeWidth="1" strokeOpacity={0.2} />
            <circle cx={x} cy={y} r="8" fill={color} fillOpacity={0.1} stroke={color} strokeWidth="1.5" />
            <circle cx={x} cy={y} r="3" fill={color} fillOpacity={0.6} />
          </g>
        );
      })}
    </svg>
  );
}

function GuestFlowDiagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
      {/* Flow nodes */}
      {[30, 75, 120, 165].map((x, i) => (
        <g key={i}>
          <rect x={x - 16} y="44" width="32" height="32" rx="8" fill={color} fillOpacity={i === 1 ? 0.25 : 0.1} stroke={color} strokeWidth="1.5" />
          {i < 3 && (
            <path d={`M${x + 18} 60 L${x + 28} 60`} stroke={color} strokeWidth="1.5" markerEnd="url(#arrow)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={color} fillOpacity={0.5} />
        </marker>
      </defs>
      {/* Labels */}
      <text x="30" y="92" textAnchor="middle" fontSize="7" fill={color} fontWeight="600" opacity={0.7}>Book</text>
      <text x="75" y="92" textAnchor="middle" fontSize="7" fill={color} fontWeight="600" opacity={0.7}>Check-in</text>
      <text x="120" y="92" textAnchor="middle" fontSize="7" fill={color} fontWeight="600" opacity={0.7}>Stay</text>
      <text x="165" y="92" textAnchor="middle" fontSize="7" fill={color} fontWeight="600" opacity={0.7}>Check-out</text>
    </svg>
  );
}

function ShieldDiagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
      <path d="M100 15 L145 35 L145 70 Q145 95 100 110 Q55 95 55 70 L55 35 Z" fill={color} fillOpacity={0.08} stroke={color} strokeWidth="2" />
      <path d="M100 30 L130 43 L130 67 Q130 85 100 95 Q70 85 70 67 L70 43 Z" fill={color} fillOpacity={0.12} stroke={color} strokeWidth="1.5" />
      <text x="100" y="68" textAnchor="middle" fontSize="16" fontWeight="bold" fill={color}>24/7</text>
    </svg>
  );
}

function ChartDiagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
      {/* Bars */}
      {[
        { x: 30, h: 45 },
        { x: 60, h: 60 },
        { x: 90, h: 35 },
        { x: 120, h: 75 },
        { x: 150, h: 55 },
        { x: 170, h: 65 },
      ].map(({ x, h }, i) => (
        <rect key={i} x={x - 8} y={100 - h} width="16" height={h} rx="4" fill={color} fillOpacity={i === 3 ? 0.3 : 0.12} />
      ))}
      {/* Trend line */}
      <path d="M22 80 Q60 65 90 70 Q120 25 150 40 Q170 30 178 35" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="178" cy="35" r="4" fill={color} />
    </svg>
  );
}

function CleaningDiagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
      {/* Circular progress */}
      <circle cx="100" cy="60" r="42" stroke={color} strokeOpacity={0.1} strokeWidth="8" />
      <circle
        cx="100" cy="60" r="42"
        stroke={color} strokeWidth="8" strokeLinecap="round"
        strokeDasharray={`${2 * Math.PI * 42 * 0.92} ${2 * Math.PI * 42 * 0.08}`}
        transform="rotate(-90 100 60)"
      />
      <text x="100" y="55" textAnchor="middle" fontSize="22" fontWeight="bold" fill={color}>98%</text>
      <text x="100" y="72" textAnchor="middle" fontSize="8" fill={color} opacity={0.6} fontWeight="500">READY</text>
    </svg>
  );
}

function RevenueDiagram({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
      {/* Area chart */}
      <path d="M20 95 Q45 80 65 75 Q85 70 100 55 Q120 35 145 30 Q165 25 180 20" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M20 95 Q45 80 65 75 Q85 70 100 55 Q120 35 145 30 Q165 25 180 20 L180 100 L20 100 Z" fill={color} fillOpacity={0.08} />
      {/* Data points */}
      {[
        { x: 20, y: 95 }, { x: 65, y: 75 }, { x: 100, y: 55 }, { x: 145, y: 30 }, { x: 180, y: 20 },
      ].map(({ x, y }, i) => (
        <circle key={i} cx={x} cy={y} r={i === 4 ? 5 : 3} fill={color} fillOpacity={i === 4 ? 1 : 0.4} />
      ))}
      <text x="180" y="14" textAnchor="middle" fontSize="9" fontWeight="bold" fill={color}>↑ MAX</text>
    </svg>
  );
}

const DIAGRAMS = [PlatformDiagram, GuestFlowDiagram, ShieldDiagram, ChartDiagram, CleaningDiagram, RevenueDiagram];

export const RentWhySection = () => {
  const t = useTranslations('RentPage.whyUs');

  return (
    <section id="why-rent" className="bg-white py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="text-center mb-10 framer:mb-14">
          <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground leading-[1.1] tracking-tight max-w-[700px] mx-auto">
            {t('title')}
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 framer:grid-cols-3 gap-5 framer:gap-6">
          {FEATURES.map(({ key, icon: Icon, color, accent }, i) => {
            const Diagram = DIAGRAMS[i];
            return (
              <article
                key={key}
                className="group flex flex-col rounded-2xl bg-[#fafafa] border border-border/15 hover:border-border/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
              >
                {/* Diagram area */}
                <div className="relative h-[140px] framer:h-[160px] px-6 pt-4 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(circle at 50% 80%, ${color}, transparent 70%)` }} aria-hidden />
                  <Diagram color={color} />
                </div>

                {/* Content */}
                <div className="flex flex-col p-5 framer:p-6 pt-2 framer:pt-3 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${accent} flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-[16px] framer:text-[18px] font-bold text-foreground tracking-tight leading-tight">
                      {t(`cards.${key}.title`)}
                    </h3>
                  </div>
                  <p className="text-[13px] framer:text-[15px] text-foreground/65 leading-relaxed">
                    {t(`cards.${key}.description`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
