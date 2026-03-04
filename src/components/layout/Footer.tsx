import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from './Container';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const SOCIAL = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
];

export const Footer = () => {
  const t = useTranslations('nav');
  const tFooter = useTranslations('Footer');

  const footerLinkClass =
    'text-background/60 hover:text-background text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-foreground rounded-sm';

  return (
    <footer className="bg-foreground text-background">
      <Container>
        <div className="grid grid-cols-1 framer:grid-cols-2 lg:grid-cols-4 gap-12 framer:gap-8 py-16 framer:py-20">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight mb-5 block hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-foreground rounded-sm"
            >
              AtlasStays
            </Link>
            <p className="text-background/60 text-sm leading-relaxed max-w-[280px] mb-8">
              {tFooter('description')}
            </p>
            <div className="flex gap-3" role="group" aria-label="Social links">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-background text-sm mb-1">{tFooter('quickLinks')}</h4>
            <Link href="/" className={footerLinkClass}>Home</Link>
            <Link href="/services" className={footerLinkClass}>{t('services')}</Link>
            <Link href="/pricing" className={footerLinkClass}>{t('pricing')}</Link>
            <Link href="/areas" className={footerLinkClass}>{t('areas')}</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-background text-sm mb-1">{tFooter('support')}</h4>
            <Link href="/faq" className={footerLinkClass}>{t('faq')}</Link>
            <Link href="/contact" className={footerLinkClass}>{t('contact')}</Link>
            <Link href="/legal/terms" className={footerLinkClass}>Terms</Link>
            <Link href="/legal/privacy" className={footerLinkClass}>Privacy</Link>
          </div>

        </div>

        <div className="flex flex-col framer:flex-row justify-between items-center py-6 border-t border-on-dark gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} AtlasStays. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="text-background/50 hover:text-background text-sm transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="text-background/50 hover:text-background text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
