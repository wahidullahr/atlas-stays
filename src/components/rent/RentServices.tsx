'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Sparkles, ClipboardCheck, Key, Shirt, ShoppingBag, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';

const SERVICES = [
  { key: 'cleaning', icon: Sparkles, color: '#059669', ring: 'ring-emerald-500/20', iconBg: 'bg-emerald-500' },
  { key: 'inspection', icon: ClipboardCheck, color: '#0ea5e9', ring: 'ring-sky-500/20', iconBg: 'bg-sky-500' },
  { key: 'keys', icon: Key, color: '#8b5cf6', ring: 'ring-violet-500/20', iconBg: 'bg-violet-500' },
  { key: 'linen', icon: Shirt, color: '#f59e0b', ring: 'ring-amber-500/20', iconBg: 'bg-amber-500' },
  { key: 'restocking', icon: ShoppingBag, color: '#ec4899', ring: 'ring-pink-500/20', iconBg: 'bg-pink-500' },
] as const;

export const RentServices = () => {
  const t = useTranslations('RentPage.services');
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = SERVICES[active];
  const CurrentIcon = current.icon;

  const goNext = useCallback(() => {
    setActive((i) => (i === SERVICES.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, 3000);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  const select = (i: number) => {
    setActive(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <section className="bg-[#0a0d12] py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[1360px]">
        {/* Header */}
        <div className="text-center mb-12 framer:mb-16">
          <p className="text-[12px] framer:text-[14px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 framer:mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="text-[2rem] framer:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight mb-4 framer:mb-5 max-w-[700px] mx-auto">
            {t('title')}
          </h2>
          <p className="text-[15px] framer:text-[17px] text-white/50 leading-relaxed max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 framer:grid-cols-[1fr_1.1fr] gap-10 framer:gap-16 framer:items-center">
          {/* Left: Interactive ring visualization */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] framer:w-[360px] framer:h-[360px]">
              {/* Outer ring segments */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 360" aria-hidden>
                {SERVICES.map((s, i) => {
                  const r = 155;
                  const circumference = 2 * Math.PI * r;
                  const segmentLen = (circumference - 5 * 12) / 5;
                  const offset = i * (segmentLen + 12);
                  return (
                    <circle
                      key={i}
                      cx="180" cy="180" r={r}
                      fill="none"
                      stroke={i === active ? s.color : 'rgba(255,255,255,0.08)'}
                      strokeWidth={i === active ? 6 : 3}
                      strokeLinecap="round"
                      strokeDasharray={`${segmentLen} ${circumference - segmentLen}`}
                      strokeDashoffset={-offset}
                      className="transition-all duration-500"
                      style={{ transform: 'rotate(-90deg)', transformOrigin: '180px 180px' }}
                    />
                  );
                })}
              </svg>

              {/* Service nodes on the ring */}
              {SERVICES.map(({ icon: Icon, color }, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const r = 155;
                const x = 180 + r * Math.cos(angle);
                const y = 180 + r * Math.sin(angle);
                const pctX = (x / 360) * 100;
                const pctY = (y / 360) * 100;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => select(i)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 framer:w-14 framer:h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      i === active
                        ? 'scale-110 shadow-lg ring-2'
                        : 'bg-white/5 hover:bg-white/10 ring-1 ring-white/10'
                    } ${i === active ? SERVICES[i].ring : ''}`}
                    style={{
                      left: `${pctX}%`,
                      top: `${pctY}%`,
                      ...(i === active ? { backgroundColor: color } : {}),
                    }}
                    aria-label={`Service ${i + 1}`}
                  >
                    <Icon className={`w-4 h-4 framer:w-5 framer:h-5 ${i === active ? 'text-white' : 'text-white/40'}`} strokeWidth={1.75} />
                  </button>
                );
              })}

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-16 h-16 framer:w-20 framer:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-colors duration-500"
                    style={{ backgroundColor: `${current.color}20` }}
                  >
                    <CurrentIcon className="w-7 h-7 framer:w-9 framer:h-9 transition-colors duration-500" style={{ color: current.color }} strokeWidth={1.5} />
                  </div>
                  <p className="text-[13px] framer:text-[15px] font-bold text-white max-w-[120px] framer:max-w-[150px] leading-tight">
                    {t(`items.${current.key}.title`)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Service cards list */}
          <div className="flex flex-col gap-3 framer:gap-3.5">
            {SERVICES.map(({ key, icon: Icon, color, iconBg }, i) => (
              <button
                key={key}
                type="button"
                onClick={() => select(i)}
                className={`group w-full text-start rounded-2xl p-4 framer:p-5 transition-all duration-300 cursor-pointer ${
                  i === active
                    ? 'bg-white/10 ring-1 ring-white/15'
                    : 'bg-white/3 hover:bg-white/6'
                }`}
              >
                <div className="flex items-center gap-4 framer:gap-5">
                  <div className={`shrink-0 w-11 h-11 framer:w-12 framer:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    i === active ? iconBg : 'bg-white/8'
                  }`}>
                    <Icon className={`w-5 h-5 framer:w-6 framer:h-6 transition-colors duration-300 ${
                      i === active ? 'text-white' : 'text-white/40'
                    }`} strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-[15px] framer:text-[17px] font-bold leading-tight mb-1 transition-colors duration-300 ${
                      i === active ? 'text-white' : 'text-white/60'
                    }`}>
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className={`text-[13px] framer:text-[14px] leading-relaxed transition-all duration-300 ${
                      i === active ? 'text-white/60 max-h-20 opacity-100' : 'text-white/30 max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-all duration-300 rtl:rotate-180 ${
                    i === active ? 'text-white/60 translate-x-0' : 'text-white/15 -translate-x-1'
                  }`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
