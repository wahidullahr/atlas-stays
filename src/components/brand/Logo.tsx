'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

type LogoProps = {
  variant?: 'light' | 'dark';
  showWordmark?: boolean;
  className?: string;
  href?: string | null;
};

export function Logo({
  variant = 'dark',
  showWordmark = true,
  className = '',
  href,
}: LogoProps) {
  const locale = useLocale();
  const isLight = variant === 'light';

  const content = (
    <span
      className={`inline-flex items-center gap-2.5 shrink-0 ${className}`}
      aria-label="AtlasStays"
    >
      {/* Icon mark: house + palm tree — Morocco, home, stays */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${isLight ? 'text-white' : 'text-accent'}`}
        aria-hidden
      >
        <path
          d="M16 2.5L2 12v17.5h7V17h14v12.5h7V12L16 2.5z"
          fill="currentColor"
          fillOpacity="0.95"
        />
        <circle
          cx="16"
          cy="11.5"
          r="2.75"
          fill="currentColor"
          fillOpacity="1"
        />
        {/* Palm tree — above the house, clear frond shapes */}
        <g fill="currentColor" fillOpacity="0.95">
          {/* Trunk */}
          <rect x="15.2" y="5" width="1.6" height="7" rx="0.3" />
          {/* 6 palm fronds — longer curved leaves radiating from crown */}
          <path d="M16 4.5Q8 0 5 5Q10 4 16 4.5z" />
          <path d="M16 4.5Q24 0 27 5Q22 4 16 4.5z" />
          <path d="M16 4.5Q10 -0.5 9 5Q12 3 16 4.5z" />
          <path d="M16 4.5Q22 -0.5 23 5Q20 3 16 4.5z" />
          <path d="M16 4.5Q6 2 6 7Q11 5 16 4.5z" />
          <path d="M16 4.5Q26 2 26 7Q21 5 16 4.5z" />
        </g>
      </svg>
      {showWordmark && (
        <span
          className={`text-[18px] font-semibold tracking-[-0.02em] transition-colors ${
            isLight ? 'text-white' : 'text-fg'
          }`}
        >
          AtlasStays
        </span>
      )}
    </span>
  );

  if (href === null) {
    return content;
  }

  const linkHref = href ?? `/${locale}`;
  return (
    <Link href={linkHref} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg">
      {content}
    </Link>
  );
}
