import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import { getPublishedCaseSlugs } from "@/content/case-studies";
import {
	absoluteUrl,
	createAbsoluteLanguageAlternates,
	localizedPath,
	profileRoutes,
} from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();
	const routes = [
		"/",
		"/contact",
		"/privacy",
		"/terms",
		...profileRoutes,
		...getPublishedCaseSlugs().map((slug) => `/work/${slug}`),
	];

	return routes.flatMap((route) =>
		locales.map((locale) => ({
			url: absoluteUrl(localizedPath(route, locale)),
			lastModified: now,
			changeFrequency: route === "/" ? "weekly" : "monthly",
			priority: route === "/" ? 1 : route === "/contact" ? 0.9 : 0.7,
			alternates: {
				languages: createAbsoluteLanguageAlternates(route),
			},
		})),
	);
}
