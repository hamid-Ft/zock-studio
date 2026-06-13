import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';
import { getRequestLocale } from '../seo-server';

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getRequestLocale();

	return createRouteMetadata({
		title: {
			en: 'Omid Nikroo Portfolio',
			fa: 'پورتفولیوی امید نیکرو',
		},
		description: {
			en: '.NET backend developer portfolio covering C#, ASP.NET Core, ERP systems, DDD, CQRS, SQL Server, MongoDB, Redis, SignalR, Docker, and database optimization.',
			fa: 'پورتفولیوی بک‌اند .NET با تمرکز بر C#، ASP.NET Core، سیستم‌های ERP، DDD، CQRS، SQL Server، MongoDB، Redis، SignalR، Docker و بهینه‌سازی دیتابیس.',
		},
		path: '/omid-nikroo',
		keywords: ['Omid Nikroo', '.NET backend developer', 'C#', 'ASP.NET Core', 'ERP', 'DDD', 'CQRS'],
		locale,
	});
}

export default function OmidNikrooLayout({ children }: { children: ReactNode }) {
	return children;
}
