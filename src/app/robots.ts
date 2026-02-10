import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://erburcyapi.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/studio' },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
