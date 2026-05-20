import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';

export const metadata: Metadata = createRouteMetadata({
	title: 'Mehdi Alikhani Portfolio',
	description:
		'Backend developer portfolio focused on Laravel, Magento 2, GraphQL, microservices, payment gateways, message brokers, and Linux operations.',
	path: '/mehdi-alikhani',
	keywords: ['Mehdi Alikhani', 'backend developer', 'Laravel', 'Magento 2', 'GraphQL', 'microservices'],
});

export default function MehdiAlikhaniLayout({ children }: { children: ReactNode }) {
	return children;
}
