import type { MetadataRoute } from 'next';

import { absoluteUrl, profileRoutes } from './seo';

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();
	const routes = ['/', ...profileRoutes];

	return routes.map((route) => ({
		url: absoluteUrl(route),
		lastModified: now,
		changeFrequency: route === '/' ? 'weekly' : 'monthly',
		priority: route === '/' ? 1 : 0.7,
	}));
}
