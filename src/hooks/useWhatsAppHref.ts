'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

export function useWhatsAppHref(customMessage?: string): string {
  const t = useTranslations('common');
  return useMemo(() => {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '4741351547';
    const prefill = customMessage ?? t('whatsapp_prefill');
    return `https://wa.me/${number}?text=${encodeURIComponent(prefill)}`;
  }, [t, customMessage]);
}
