"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { Menu as MenuIcon, MessageCircle, Phone, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { LOCALES, NAV_ITEMS, type Locale } from "./navConfig";
import { useWhatsAppHref } from "@/hooks/useWhatsAppHref";
import { Logo } from "@/components/brand/Logo";

const SCROLL_THRESHOLD = 20;
const NAV_MENU_DIALOG_ID = "nav-menu-dialog";

function buildLocalizedHref(locale: Locale, pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${locale}`;
  parts[0] = locale;
  return "/" + parts.join("/");
}

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const drawerRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  const localeLinks = useMemo(() => {
    return LOCALES.map((l) => ({
      locale: l,
      href: buildLocalizedHref(l, pathname),
      label: l === "en" ? "EN" : l === "fr" ? "FR" : "العربية",
      active: l === locale,
    }));
  }, [locale, pathname]);

  const waHref = useWhatsAppHref();

  useEffect(() => {
    if (!open) return;

    lastActiveRef.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);

      if (e.key === "Tab") {
        const root = drawerRef.current;
        if (!root) return;

        const focusables = Array.from(
          root.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      lastActiveRef.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isPropertyDetail = pathname.includes("/property/");
  const isLight = isPropertyDetail ? false : !scrolled;

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 transition-all duration-300 pt-2 pb-2 px-4 framer:px-6",
        isPropertyDetail
          ? "bg-white border-b border-sky-200"
          : !scrolled && "bg-transparent border-b border-transparent"
      )}
    >
      <div
        className={clsx(
          "mx-auto h-[72px] flex items-center justify-between relative px-6 framer:px-10 transition-all duration-300",
          isPropertyDetail ? "max-w-[1200px]" : isLight ? "max-w-[1360px]" : "max-w-[1200px]",
          !isPropertyDetail && scrolled && "rounded-full bg-white/95 backdrop-blur shadow-md"
        )}
      >
        <div className="flex items-center shrink-0">
          <Logo variant={isLight ? "light" : "dark"} />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+4741351547"
            className={clsx(
              "hidden framer:inline-flex items-center gap-2 text-[14px] framer:text-[15px] font-semibold tabular-nums focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md",
              isLight ? "text-white focus-visible:ring-white" : "text-fg focus-visible:ring-foreground"
            )}
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden />
            +47 413 51 547
          </a>
          <span
            className={clsx(
              "hidden framer:block text-[14px] font-normal select-none",
              isLight ? "text-white/60" : "text-fg/50"
            )}
            aria-hidden
          >
            |
          </span>
          <button
            type="button"
            className={clsx(
              "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              isLight
                ? "bg-white/15 border-2 border-white text-white focus-visible:ring-white backdrop-blur-sm"
                : "bg-fg border-2 border-transparent text-white focus-visible:ring-foreground"
            )}
            aria-haspopup="dialog"
            aria-controls={NAV_MENU_DIALOG_ID}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="w-4 h-4" aria-hidden />
            {t("menu")}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label={t("mobileMenu")}
          id={NAV_MENU_DIALOG_ID}
        >
          <button
            type="button"
            className="absolute inset-0 bg-overlay"
            aria-label={t("close")}
            onClick={() => setOpen(false)}
          />

          <div
            ref={drawerRef}
            className={clsx(
              "absolute top-0 h-full w-[86%] max-w-[400px] bg-foreground shadow-[0_0_60px_rgba(0,0,0,0.5)]",
              locale === "ar" ? "left-0" : "right-0"
            )}
          >
            {/* Header */}
            <div className="h-[80px] px-6 flex items-center justify-between border-b border-white/10">
              <Link href={`/${locale}`} onClick={() => setOpen(false)}>
                <Logo variant="light" href={null} />
              </Link>
              <button
                ref={closeBtnRef}
                type="button"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition-colors"
                aria-label={t("close")}
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="px-5 py-6 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const fullHref = `/${locale}${item.href === '/' ? '' : item.href}`;
                const isActive =
                  item.href === '/'
                    ? pathname === `/${locale}` || pathname === `/${locale}/`
                    : pathname.startsWith(`/${locale}${item.href}`);

                return item.anchor ? (
                  <a
                    key={item.key}
                    href={item.href}
                    className={clsx(
                      "rounded-xl px-4 py-3.5 text-[16px] font-medium transition-all duration-200",
                      isActive
                        ? "text-white bg-accent/20"
                        : "text-white/70 hover:text-white hover:bg-white/8"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                ) : (
                  <Link
                    key={item.key}
                    href={fullHref}
                    className={clsx(
                      "rounded-xl px-4 py-3.5 text-[16px] font-medium transition-all duration-200",
                      isActive
                        ? "text-white bg-accent/20"
                        : "text-white/70 hover:text-white hover:bg-white/8"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="mx-5 border-t border-white/10" />

            {/* Language switcher */}
            <div className="px-5 py-5">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-3 px-1">
                Language
              </p>
              <div className="flex items-center gap-2 rounded-xl bg-white/5 p-1.5">
                {localeLinks.map((l) => (
                  <Link
                    key={l.locale}
                    href={l.href}
                    className={clsx(
                      "flex-1 text-center px-3 py-2.5 text-[13px] font-medium rounded-lg transition-all duration-200",
                      l.active
                        ? "bg-accent text-white shadow-lg"
                        : "text-white/50 hover:text-white hover:bg-white/10"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact CTAs */}
            <div className="px-5 mt-2 flex flex-col gap-3">
              <a
                href="tel:+4741351547"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl px-5 py-3.5 text-[14px] font-semibold bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-all duration-200 tabular-nums"
              >
                <Phone className="w-4 h-4" />
                +47 413 51 547
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl px-5 py-3.5 text-[14px] font-semibold bg-accent text-white hover:bg-accent/90 transition-all duration-200 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                {t("whatsapp")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
