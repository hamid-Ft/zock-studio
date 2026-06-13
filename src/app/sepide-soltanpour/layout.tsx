import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';
import { getRequestLocale } from '../seo-server';

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getRequestLocale();

	return createRouteMetadata({
		title: {
			en: 'Sepide Soltanpour Portfolio',
			fa: 'پورتفولیوی سپیده سلطان‌پور',
		},
		description: {
			en: 'Frontend developer portfolio covering AI-powered consultation platforms, Next.js, React, TypeScript, admin panels, CI/CD, Docker, Mapbox, and Chart.js.',
			fa: 'پورتفولیوی فرانت‌اند با تمرکز بر پلتفرم‌های مشاوره مبتنی بر AI، Next.js، React، TypeScript، پنل ادمین، CI/CD، Docker، Mapbox و Chart.js.',
		},
		path: '/sepide-soltanpour',
		keywords: ['Sepide Soltanpour', 'frontend developer', 'Next.js', 'React', 'AI platform', 'admin panels'],
		locale,
	});
}

export default function SepideSoltanpourLayout({ children }: { children: ReactNode }) {
	return children;
}
