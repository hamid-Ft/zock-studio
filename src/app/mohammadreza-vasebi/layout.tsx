import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { createRouteMetadata } from '../seo';
import { getRequestLocale } from '../seo-server';

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getRequestLocale();

	return createRouteMetadata({
		title: {
			en: 'Mohammadreza Vasebi Portfolio',
			fa: 'پورتفولیوی محمدرضا واسبی',
		},
		description: {
			en: 'React Native mobile engineer portfolio covering cross-platform apps, Expo, TypeScript, maps, Firebase, Supabase, Socket.io, and mobile product delivery.',
			fa: 'پورتفولیوی مهندس موبایل React Native با تمرکز بر اپ چندسکویی، Expo، TypeScript، نقشه، Firebase، Supabase، Socket.io و تحویل محصول موبایل.',
		},
		path: '/mohammadreza-vasebi',
		keywords: ['Mohammadreza Vasebi', 'React Native', 'mobile engineer', 'Expo', 'TypeScript'],
		locale,
	});
}

export default function MohammadrezaVasebiLayout({ children }: { children: ReactNode }) {
	return children;
}
