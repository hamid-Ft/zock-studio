import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';
import { getRequestLocale } from '../seo-server';

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getRequestLocale();

	return createRouteMetadata({
		title: {
			en: 'Keyvan Moradkhani Portfolio',
			fa: 'پورتفولیوی کیوان مرادخانی',
		},
		description: {
			en: 'Backend and full-stack developer portfolio covering Laravel, PHP, multi-vendor e-commerce, REST APIs, PostgreSQL, MySQL, Redis, Docker, React, and Tailwind CSS.',
			fa: 'پورتفولیوی بک‌اند و فول‌استک با تمرکز بر Laravel، PHP، فروشگاه چندفروشنده، REST API، PostgreSQL، MySQL، Redis، Docker، React و Tailwind CSS.',
		},
		path: '/keyvan-moradkhani',
		keywords: [
			'Keyvan Moradkhani',
			'backend developer',
			'full-stack developer',
			'Laravel',
			'PHP',
			'multi-vendor e-commerce',
			'React',
		],
		locale,
	});
}

export default function KeyvanMoradkhaniLayout({ children }: { children: ReactNode }) {
	return children;
}
