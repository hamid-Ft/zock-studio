import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';

export const metadata: Metadata = createRouteMetadata({
	title: 'Sepide Soltanpour Portfolio',
	description:
		'Frontend developer portfolio covering AI-powered consultation platforms, Next.js, React, TypeScript, admin panels, CI/CD, Docker, Mapbox, and Chart.js.',
	path: '/sepide-soltanpour',
	keywords: ['Sepide Soltanpour', 'frontend developer', 'Next.js', 'React', 'AI platform', 'admin panels'],
});

export default function SepideSoltanpourLayout({ children }: { children: ReactNode }) {
	return children;
}
