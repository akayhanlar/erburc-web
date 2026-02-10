import { MetadataRoute } from 'next';
import { getProjects } from '@/lib/sanity';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://erburcyapi.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/iletisim`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/projeler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/referanslar`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];

  let projectPages: MetadataRoute.Sitemap = [];
  try {
    const projects = await getProjects();
    projectPages = projects.map((p) => ({
      url: `${BASE_URL}/projeler/${p.slug?.current || p._id}`,
      lastModified: new Date(p._createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch {
    // Sanity unavailable at build time, skip project URLs
  }

  return [...staticPages, ...projectPages];
}
