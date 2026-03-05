'use client';

import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useTranslations, useLocale } from 'next-intl';
import { submitContact } from '@/actions/contact';
import { Container } from '../layout/Container';
import { Loader2, Send } from 'lucide-react';

const initialState = {
  success: false,
  message: '',
  errors: {} as Record<string, string[]>,
};

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all text-[14px]';

function SubmitBtn() {
  const t = useTranslations('SellPage.valuationForm');
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-3 bg-accent text-white rounded-xl font-semibold text-[14px] hover:bg-accent/90 transition-all disabled:opacity-60 flex items-center gap-2"
    >
      {pending ? <Loader2 className="animate-spin" size={16} /> : <Send size={14} />}
      {t('submit')}
    </button>
  );
}

export const SellValuationForm = () => {
  const t = useTranslations('SellPage.valuationForm');
  const locale = useLocale() as 'en' | 'fr' | 'ar';
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <section id="valuation" className="bg-surface py-16 framer:py-24 overflow-hidden">
      <Container className="max-w-[900px]">
        <div className="text-center mb-10 framer:mb-12">
          <h2 className="text-[1.35rem] framer:text-[1.75rem] font-bold text-foreground leading-[1.2] tracking-tight mb-2">
            {t('title')}
          </h2>
          <p className="text-[14px] framer:text-[15px] text-muted">
            {t('subtitle')}
          </p>
        </div>

        {state.success ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-border/20 shadow-sm">
            <p className="text-[16px] font-medium text-foreground">{t('success')}</p>
          </div>
        ) : (
          <form
            action={formAction}
            className="bg-white rounded-2xl p-6 framer:p-8 border border-border/20 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            <input type="hidden" name="locale" value={locale} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 framer:gap-5 mb-4 framer:mb-5">
              <div>
                <label htmlFor="val-name" className="block text-[13px] font-medium text-foreground mb-1.5">
                  {t('name')}
                </label>
                <input type="text" id="val-name" name="name" required className={inputClass} />
                {state.errors?.name && <p className="text-red-500 text-[12px] mt-1">{state.errors.name[0]}</p>}
              </div>
              <div>
                <label htmlFor="val-email" className="block text-[13px] font-medium text-foreground mb-1.5">
                  {t('email')}
                </label>
                <input type="email" id="val-email" name="email" required className={inputClass} />
                {state.errors?.email && <p className="text-red-500 text-[12px] mt-1">{state.errors.email[0]}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 framer:gap-5 mb-4 framer:mb-5">
              <div>
                <label htmlFor="val-phone" className="block text-[13px] font-medium text-foreground mb-1.5">
                  {t('phone')}
                </label>
                <input type="tel" id="val-phone" name="phone" required className={inputClass} />
                {state.errors?.phone && <p className="text-red-500 text-[12px] mt-1">{state.errors.phone[0]}</p>}
              </div>
              <div>
                <label htmlFor="val-city" className="block text-[13px] font-medium text-foreground mb-1.5">
                  {t('city')}
                </label>
                <select id="val-city" name="city" required className={inputClass}>
                  <option value="">{t('city_placeholder')}</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Tangier">Tangier</option>
                  <option value="Agadir">Agadir</option>
                  <option value="Other">Other</option>
                </select>
                {state.errors?.city && <p className="text-red-500 text-[12px] mt-1">{state.errors.city[0]}</p>}
              </div>
            </div>
            <div className="mb-4 framer:mb-5">
              <label htmlFor="val-units" className="block text-[13px] font-medium text-foreground mb-1.5">
                {t('units')}
              </label>
              <input type="number" id="val-units" name="units" min={1} required className={inputClass} />
            </div>
            <div className="mb-5 framer:mb-6">
              <label htmlFor="val-message" className="block text-[13px] font-medium text-foreground mb-1.5">
                {t('message')}
              </label>
              <textarea id="val-message" name="message" rows={2} required className={`${inputClass} resize-none`} placeholder={t('message_placeholder')} />
              {state.errors?.message && <p className="text-red-500 text-[12px] mt-1">{state.errors.message[0]}</p>}
            </div>
            <div className="flex justify-end">
              <SubmitBtn />
            </div>
            {state.message && !state.success && <p className="text-red-500 text-[13px] mt-2">{state.message}</p>}
          </form>
        )}
      </Container>
    </section>
  );
};
