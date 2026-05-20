import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';

export const metadata: Metadata = createRouteMetadata({
	title: 'MohammadReza Parsaeian Portfolio',
	description:
		'Senior backend developer portfolio covering Golang, PHP, Laravel, Node.js, GPS tracking systems, payments, Redis, MongoDB, monitoring, and team leadership.',
	path: '/mohammadReza-Parsaeian',
	keywords: ['MohammadReza Parsaeian', 'backend developer', 'Golang', 'Laravel', 'Node.js', 'payments'],
});

export default function MohammadRezaParsaeianLayout({ children }: { children: ReactNode }) {
	return children;
}
