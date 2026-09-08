import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { equipmentCategories } from '@/lib/equipment';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: '/', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/equipments', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/gallery', priority: 0.6 },
    { path: '/contact', priority: 0.8 },
  ];

  const equipmentRoutes = equipmentCategories.map((category) => ({
    path: category.href,
    priority: 0.8,
  }));

  return [...staticRoutes, ...equipmentRoutes].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }));
}