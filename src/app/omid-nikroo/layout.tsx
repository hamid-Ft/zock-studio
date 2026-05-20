import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';

export const metadata: Metadata = createRouteMetadata({
	title: 'Omid Nikroo Portfolio',
	description:
		'.NET backend developer portfolio covering C#, ASP.NET Core, ERP systems, DDD, CQRS, SQL Server, MongoDB, Redis, SignalR, Docker, and database optimization.',
	path: '/omid-nikroo',
	keywords: ['Omid Nikroo', '.NET backend developer', 'C#', 'ASP.NET Core', 'ERP', 'DDD', 'CQRS'],
});

export default function OmidNikrooLayout({ children }: { children: ReactNode }) {
	return children;
}
