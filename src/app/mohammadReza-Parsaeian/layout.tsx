import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';
import { getRequestLocale } from '../seo-server';

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getRequestLocale();

	return createRouteMetadata({
		title: {
			en: 'MohammadReza Parsaeian Portfolio',
			fa: 'پورتفولیوی محمدرضا پارسائیان',
		},
		description: {
			en: 'Senior backend developer portfolio covering Golang, PHP, Laravel, Node.js, GPS tracking systems, payments, Redis, MongoDB, monitoring, and team leadership.',
			fa: 'پورتفولیوی بک‌اند ارشد با تمرکز بر Golang، PHP، Laravel، Node.js، سیستم‌های GPS، پرداخت، Redis، MongoDB، مانیتورینگ و رهبری تیم.',
		},
		path: '/mohammadReza-Parsaeian',
		keywords: ['MohammadReza Parsaeian', 'backend developer', 'Golang', 'Laravel', 'Node.js', 'payments'],
		locale,
	});
}

export default function MohammadRezaParsaeianLayout({ children }: { children: ReactNode }) {
	return children;
}
