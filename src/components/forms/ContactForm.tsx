'use client';

import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { submitContact } from '@/actions/contact';
import { Container } from '../layout/Container';
import { Loader2, Send, Phone, Shield, Clock, CheckCircle } from 'lucide-react';

const initialState = {
  success: false,
  message: '',
  errors: {} as Record<string, string[]>,
};

const inputClass =
  'w-full px-4 py-3.5 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all duration-200 text-[14px] framer:text-[15px]';

function SubmitButton() {
  const t = useTranslations('Contact.form');
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 bg-accent text-white rounded-xl font-semibold text-[15px] hover:bg-accent/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      {pending ? <Loader2 className="animate-spin" size={18} /> : <Send size={16} />}
      {t('submit')}
    </button>
  );
}

const TRUST_ICONS = [
  { key: 'free', icon: CheckCircle },
  { key: 'fast', icon: Clock },
  { key: 'secure', icon: Shield },
] as const;

export const ContactForm = () => {
  const t = useTranslations('Contact.form');
  const tContact = useTranslations('Contact');

  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <section id="contact" className="relative bg-[#1a1a1a] overflow-hidden py-16 framer:py-28">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <Container className="max-w-[1360px]">
        <div className="grid grid-cols-1 framer:grid-cols-[2fr_3fr] gap-10 framer:gap-16 items-center">

          {/* Left: Motivational content */}
          <div>
            <p className="text-[11px] framer:text-[14px] font-semibold tracking-[0.18em] uppercase text-accent mb-3 framer:mb-4">
              {tContact('eyebrow')}
            </p>
            <h2 className="text-[1.6rem] framer:text-[2.75rem] font-bold text-white leading-[1.1] tracking-tight mb-4 framer:mb-6">
              {tContact('title')}
            </h2>
            <p className="text-[14px] framer:text-[17px] text-white/60 leading-relaxed mb-8 framer:mb-12 max-w-md">
              {tContact('subtitle')}
            </p>

            {/* Trust points */}
            <div className="flex flex-col gap-4 framer:gap-5 mb-8 framer:mb-12">
              {TRUST_ICONS.map(({ key, icon: Icon }) => (
                <div key={key} className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-[13px] framer:text-[15px] text-white/80 font-medium">
                    {tContact(`trust.${key}`)}
                  </span>
                </div>
              ))}
            </div>

            {/* WhatsApp alternative */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="text-[13px] framer:text-[14px] text-white/90 font-semibold">
                  {tContact('whatsapp_label')}
                </p>
                <p className="text-[12px] framer:text-[13px] text-white/50">
                  {tContact('whatsapp_sub')}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-6 framer:p-10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            {state.success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-accent" />
                </div>
                <h3 className="text-[20px] framer:text-[24px] font-bold text-foreground mb-2">{t('success')}</h3>
                <p className="text-muted text-[14px] framer:text-[15px]">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="space-y-4 framer:space-y-5">
                <div className="text-center mb-2 framer:mb-4">
                  <h3 className="text-[17px] framer:text-[20px] font-bold text-foreground mb-1">
                    {tContact('form_title')}
                  </h3>
                  <p className="text-[12px] framer:text-[13px] text-muted">
                    {tContact('form_sub')}
                  </p>
                </div>

                <div className="grid grid-cols-1 framer:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-medium text-foreground mb-1.5">
                      {t('name')}
                    </label>
                    <input type="text" id="name" name="name" required className={inputClass} />
                    {state.errors?.name && (
                      <p className="text-red-500 text-[12px] mt-1">{state.errors.name[0]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-medium text-foreground mb-1.5">
                      {t('email')}
                    </label>
                    <input type="email" id="email" name="email" required className={inputClass} />
                    {state.errors?.email && (
                      <p className="text-red-500 text-[12px] mt-1">{state.errors.email[0]}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 framer:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-medium text-foreground mb-1.5">
                      {t('phone')}
                    </label>
                    <input type="tel" id="phone" name="phone" required className={inputClass} />
                    {state.errors?.phone && (
                      <p className="text-red-500 text-[12px] mt-1">{state.errors.phone[0]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-[13px] font-medium text-foreground mb-1.5">
                      {t('city')}
                    </label>
                    <select id="city" name="city" required className={inputClass}>
                      <option value="">{t('city_placeholder')}</option>
                      <option value="Oslo">{t('city_oslo')}</option>
                      <option value="London">{t('city_london')}</option>
                      <option value="Marrakech">{t('city_marrakech')}</option>
                      <option value="Casablanca">{t('city_casablanca')}</option>
                      <option value="Tangier">{t('city_tangier')}</option>
                      <option value="Agadir">{t('city_agadir')}</option>
                      <option value="Other">{t('city_other')}</option>
                    </select>
                    {state.errors?.city && (
                      <p className="text-red-500 text-[12px] mt-1">{state.errors.city[0]}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="units" className="block text-[13px] font-medium text-foreground mb-1.5">
                    {t('units')}
                  </label>
                  <input type="number" id="units" name="units" min={1} required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-foreground mb-1.5">
                    {t('message')}
                  </label>
                  <textarea id="message" name="message" rows={3} required className={`${inputClass} resize-none`} />
                  {state.errors?.message && (
                    <p className="text-red-500 text-[12px] mt-1">{state.errors.message[0]}</p>
                  )}
                </div>

                <SubmitButton />

                {state.message && !state.success && (
                  <div className="text-center text-red-500 text-[13px] mt-2">{state.message}</div>
                )}
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
