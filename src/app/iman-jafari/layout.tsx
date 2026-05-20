import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';

export const metadata: Metadata = createRouteMetadata({
	title: 'Frontend Developer Portfolio',
	description:
		'Frontend developer portfolio covering React, Next.js, TypeScript, Tailwind, Shadcn UI, Docker, Drizzle, and interactive web experiences.',
	path: '/iman-jafari',
	keywords: ['frontend developer', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
});

export default function ImanJafariLayout({ children }: { children: ReactNode }) {
	return <main>{children}</main>;
}
