import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';

export const metadata: Metadata = createRouteMetadata({
	title: 'Mohammadreza Vasebi Portfolio',
	description:
		'React Native mobile engineer portfolio covering cross-platform apps, Expo, TypeScript, maps, Firebase, Supabase, Socket.io, and mobile product delivery.',
	path: '/mohammadreza-vasebi',
	keywords: ['Mohammadreza Vasebi', 'React Native', 'mobile engineer', 'Expo', 'TypeScript'],
});

export default function MohammadrezaVasebiLayout({ children }: { children: ReactNode }) {
	return children;
}
