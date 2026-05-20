import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';

export const metadata: Metadata = createRouteMetadata({
	title: 'Hamid FT Portfolio',
	description:
		'Frontend and Next.js portfolio covering commerce, ERP, fintech, logistics, maps, admin panels, and operational product interfaces.',
	path: '/hamid-ft',
	keywords: ['Hamid FT', 'frontend developer', 'Next.js portfolio', 'TypeScript', 'admin panels'],
});

export default function HamidFtLayout({ children }: { children: ReactNode }) {
	return children;
}
