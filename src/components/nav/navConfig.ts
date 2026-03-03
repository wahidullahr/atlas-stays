export const LOCALES = ["en", "fr", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export type NavItem = {
  key: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { key: "services", href: "/services" },
  { key: "howItWorks", href: "/how-it-works" },
  { key: "pricing", href: "/pricing" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];
