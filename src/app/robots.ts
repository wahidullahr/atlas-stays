import { getBaseUrl } from '@/lib/metadata';

export default function robots(): {
  rules: { userAgent: string; allow: string }[];
  sitemap: string;
} {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
