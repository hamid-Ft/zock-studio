import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://moon-studio.ir';

export const siteConfig = {
	name: 'Moon Studio',
	url: siteUrl,
	title: 'Moon Studio | Digital Product Team',
	description:
		'Moon Studio designs and builds production web, mobile, backend, commerce, ERP, fintech, map, and AI-assisted interfaces for operational teams.',
	locale: 'en_US',
	creator: 'Moon Studio',
	keywords: [
		'Moon Studio',
		'digital product studio',
		'Next.js development',
		'React development',
		'backend development',
		'mobile app development',
		'ERP software',
		'e-commerce platform',
		'fintech software',
		'admin dashboard',
		'B2B software',
		'Iran software team',
	],
};

export const profileRoutes = [
	'/hamid-ft',
	'/mohammadReza-Parsaeian',
	'/mohammadreza-vasebi',
	'/mehdi-alikhani',
	'/omid-nikroo',
	'/sepide-soltanpour',
	'/iman-jafari',
];

export function absoluteUrl(path = '/') {
	return new URL(path, siteConfig.url).toString();
}

export function createRouteMetadata({
	title,
	description,
	path,
	keywords = [],
}: {
	title: string;
	description: string;
	path: string;
	keywords?: string[];
}): Metadata {
	return {
		title,
		description,
		keywords: [...siteConfig.keywords, ...keywords],
		alternates: {
			canonical: path,
		},
		openGraph: {
			title,
			description,
			url: path,
			siteName: siteConfig.name,
			type: 'profile',
			locale: siteConfig.locale,
			images: [
				{
					url: '/icon-512.png',
					width: 512,
					height: 512,
					alt: `${siteConfig.name} icon`,
				},
			],
		},
		twitter: {
			card: 'summary',
			title,
			description,
			images: ['/icon-512.png'],
		},
	};
}
