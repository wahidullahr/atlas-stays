export const LOCALES = ["en", "fr", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export type NavItem = {
  key: string;
  href: string;
  anchor?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { key: "nav_home", href: "/", anchor: false },
  { key: "nav_sell", href: "/sell", anchor: false },
  { key: "nav_rent", href: "/rent", anchor: false },
  { key: "nav_about", href: "/about", anchor: false },
  { key: "nav_proof", href: "#proof", anchor: true },
  { key: "nav_contact", href: "#contact", anchor: true },
];
