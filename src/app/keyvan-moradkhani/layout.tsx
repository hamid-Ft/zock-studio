import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';

export const metadata: Metadata = createRouteMetadata({
	title: 'Keyvan Moradkhani Portfolio',
	description:
		'Backend and full-stack developer portfolio covering Laravel, PHP, multi-vendor e-commerce, REST APIs, PostgreSQL, MySQL, Redis, Docker, React, and Tailwind CSS.',
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
});

export default function KeyvanMoradkhaniLayout({ children }: { children: ReactNode }) {
	return children;
}
