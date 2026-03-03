'use client';

import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { submitContact } from '@/actions/contact';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Loader2, Send } from 'lucide-react';

const initialState = {
  success: false,
  message: '',
  errors: {} as Record<string, string[]>,
};

const inputClass =
  'w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/60 focus:border-foreground focus:ring-2 focus:ring-foreground/10 focus:outline-none transition-all duration-200 text-[15px]';

function SubmitButton() {
  const t = useTranslations('Contact.form');
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 bg-foreground text-background rounded-xl font-semibold text-[15px] hover:bg-foreground/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
    >
      {pending ? <Loader2 className="animate-spin" size={18} /> : <Send size={16} />}
      {t('submit')}
    </button>
  );
}

export const ContactForm = () => {
  const t = useTranslations('Contact.form');
  const tContact = useTranslations('Contact');
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <Section id="contact">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="bg-background p-8 framer:p-12 rounded-2xl border border-border [box-shadow:var(--shadow-elevated)]">
            <div className="text-center mb-10">
              <p className="eyebrow mb-3">Get in touch</p>
              <h2 className="h2 mb-3">{tContact('title')}</h2>
              <p className="body-muted">{tContact('subtitle')}</p>
            </div>

            {state.success ? (
              <div className="text-center p-10 bg-accent/5 rounded-2xl border border-accent/20">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-accent" />
                </div>
                <h3 className="h3 mb-2">{t('success')}</h3>
                <p className="text-muted text-[15px]">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="space-y-5">
                <div className="grid grid-cols-1 framer:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('name')}
                    </label>
                    <input type="text" id="name" name="name" required className={inputClass} />
                    {state.errors?.name && (
                      <p className="text-foreground text-sm mt-1.5">{state.errors.name[0]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('email')}
                    </label>
                    <input type="email" id="email" name="email" required className={inputClass} />
                    {state.errors?.email && (
                      <p className="text-foreground text-sm mt-1.5">{state.errors.email[0]}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 framer:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t('phone')}
                    </label>
                    <input type="tel" id="phone" name="phone" required className={inputClass} />
                    {state.errors?.phone && (
                      <p className="text-foreground text-sm mt-1.5">{state.errors.phone[0]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                      {t('city')}
                    </label>
                    <select id="city" name="city" required className={inputClass}>
                      <option value="">Select a city</option>
                      <option value="Marrakech">Marrakech</option>
                      <option value="Casablanca">Casablanca</option>
                      <option value="Tangier">Tangier</option>
                      <option value="Agadir">Agadir</option>
                      <option value="Other">Other</option>
                    </select>
                    {state.errors?.city && (
                      <p className="text-foreground text-sm mt-1.5">{state.errors.city[0]}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="units" className="block text-sm font-medium text-foreground mb-2">
                    {t('units')}
                  </label>
                  <input type="number" id="units" name="units" min={1} required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('message')}
                  </label>
                  <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-none`} />
                  {state.errors?.message && (
                    <p className="text-foreground text-sm mt-1.5">{state.errors.message[0]}</p>
                  )}
                </div>

                <SubmitButton />

                {state.message && !state.success && (
                  <div className="text-center text-foreground text-sm mt-3">{state.message}</div>
                )}
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
