import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';
import { getRequestLocale } from '../seo-server';

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getRequestLocale();

	return createRouteMetadata({
		title: {
			en: 'Hamid FT Portfolio',
			fa: 'پورتفولیوی حمید فتاحی',
		},
		description: {
			en: 'Frontend and Next.js portfolio covering commerce, ERP, fintech, logistics, maps, admin panels, and operational product interfaces.',
			fa: 'پورتفولیوی فرانت‌اند و Next.js با تمرکز بر فروش آنلاین، ERP، فین‌تک، لجستیک، نقشه، پنل ادمین و رابط‌های محصول عملیاتی.',
		},
		path: '/hamid-ft',
		keywords: ['Hamid FT', 'frontend developer', 'Next.js portfolio', 'TypeScript', 'admin panels'],
		locale,
	});
}

export default function HamidFtLayout({ children }: { children: ReactNode }) {
	return children;
}
