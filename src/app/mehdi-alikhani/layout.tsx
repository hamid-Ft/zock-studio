import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';
import { getRequestLocale } from '../seo-server';

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getRequestLocale();

	return createRouteMetadata({
		title: {
			en: 'Mehdi Alikhani Portfolio',
			fa: 'پورتفولیوی مهدی علیخانی',
		},
		description: {
			en: 'Backend developer portfolio focused on Laravel, Magento 2, GraphQL, microservices, payment gateways, message brokers, and Linux operations.',
			fa: 'پورتفولیوی بک‌اند با تمرکز بر Laravel، Magento 2، GraphQL، میکروسرویس، درگاه پرداخت، message broker و عملیات لینوکس.',
		},
		path: '/mehdi-alikhani',
		keywords: ['Mehdi Alikhani', 'backend developer', 'Laravel', 'Magento 2', 'GraphQL', 'microservices'],
		locale,
	});
}

export default function MehdiAlikhaniLayout({ children }: { children: ReactNode }) {
	return children;
}
