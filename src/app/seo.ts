import type { Metadata } from 'next';

import { defaultLocale, locales, type Locale } from '@/lib/i18n';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://moon-studio.ir';

type LocalizedText = string | Record<Locale, string>;

const ogLocales: Record<Locale, string> = {
	en: 'en_US',
	fa: 'fa_IR',
};

const siteCopy: Record<Locale, { title: string; description: string }> = {
	en: {
		title: 'Moon Studio | Moonlancer Digital Product Team',
		description:
			'Moon Studio is a Moonlancer software team building ecommerce, ERP, mobile, backend, fintech, map, dashboard, AI-assisted, and operational platforms for growing companies.',
	},
	fa: {
		title: 'Moon Studio | تیم محصول دیجیتال Moonlancer',
		description:
			'Moon Studio تیم نرم‌افزاری Moonlancer برای ساخت فروش آنلاین، ERP، اپ موبایل، بک‌اند، فین‌تک، نقشه، داشبورد، رابط‌های AI و پلتفرم‌های عملیاتی شرکت‌های در حال رشد است.',
	},
};

export const siteConfig = {
	name: 'Moon Studio',
	alternateName: 'Moonlancer',
	url: siteUrl,
	title: siteCopy.en.title,
	description: siteCopy.en.description,
	locale: ogLocales.en,
	creator: 'Moon Studio',
	keywords: [
		'Moon Studio',
		'Moonlancer',
		'digital product studio',
		'ecommerce software team',
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
	'/keyvan-moradkhani',
	'/sepide-soltanpour',
	'/iman-jafari',
] as const;

export type ProfileRoute = (typeof profileRoutes)[number];

type RouteMetadataDefinition = {
	title: LocalizedText;
	description: LocalizedText;
	path: ProfileRoute;
	keywords?: string[];
};

export const profileMetadata: Record<ProfileRoute, RouteMetadataDefinition> = {
	'/hamid-ft': {
		title: {
			en: 'Hamid FT Portfolio',
			fa: 'پورتفولیوی حمید فتاحی',
		},
		description: {
			en: 'Frontend and Next.js portfolio covering commerce, ERP, fintech, logistics, maps, admin panels, and operational product interfaces.',
			fa: 'پورتفولیوی فرانت‌اند و Next.js با تمرکز بر فروش آنلاین، ERP، فین‌تک، لجستیک، نقشه، پنل ادمین و رابط‌های محصول عملیاتی.',
		},
		path: '/hamid-ft',
		keywords: ['Hamid FT', 'frontend developer', 'Next.js portfolio', 'TypeScript', 'admin panels'],
	},
	'/mohammadReza-Parsaeian': {
		title: {
			en: 'MohammadReza Parsaeian Portfolio',
			fa: 'پورتفولیوی محمدرضا پارسائیان',
		},
		description: {
			en: 'Senior backend developer portfolio covering Golang, PHP, Laravel, Node.js, GPS tracking systems, payments, Redis, MongoDB, monitoring, and team leadership.',
			fa: 'پورتفولیوی بک‌اند ارشد با تمرکز بر Golang، PHP، Laravel، Node.js، سیستم‌های GPS، پرداخت، Redis، MongoDB، مانیتورینگ و رهبری تیم.',
		},
		path: '/mohammadReza-Parsaeian',
		keywords: ['MohammadReza Parsaeian', 'backend developer', 'Golang', 'Laravel', 'Node.js', 'payments'],
	},
	'/mohammadreza-vasebi': {
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
	},
	'/mehdi-alikhani': {
		title: {
			en: 'Mehdi Alikhani Portfolio',
			fa: 'پورتفولیوی مهدی علیخانی',
		},
		description: {
			en: 'Backend developer portfolio focused on Laravel, Magento 2, GraphQL, microservices, payment gateways, message brokers, and Linux operations.',
			fa: 'پورتفولیوی بک‌اند با تمرکز بر Laravel، Magento 2، GraphQL، میکروسرویس، درگاه پرداخت، message broker و عملیات لینوکس.',
		},
		path: '/mehdi-alikhani',
		keywords: ['Mehdi Alikhani', 'backend developer', 'Laravel', 'Magento 2', 'GraphQL', 'microservices'],
	},
	'/omid-nikroo': {
		title: {
			en: 'Omid Nikroo Portfolio',
			fa: 'پورتفولیوی امید نیکرو',
		},
		description: {
			en: '.NET backend developer portfolio covering C#, ASP.NET Core, ERP systems, DDD, CQRS, SQL Server, MongoDB, Redis, SignalR, Docker, and database optimization.',
			fa: 'پورتفولیوی بک‌اند .NET با تمرکز بر C#، ASP.NET Core، سیستم‌های ERP، DDD، CQRS، SQL Server، MongoDB، Redis، SignalR، Docker و بهینه‌سازی دیتابیس.',
		},
		path: '/omid-nikroo',
		keywords: ['Omid Nikroo', '.NET backend developer', 'C#', 'ASP.NET Core', 'ERP', 'DDD', 'CQRS'],
	},
	'/keyvan-moradkhani': {
		title: {
			en: 'Keyvan Moradkhani Portfolio',
			fa: 'پورتفولیوی کیوان مرادخانی',
		},
		description: {
			en: 'Backend and full-stack developer portfolio covering Laravel, PHP, multi-vendor e-commerce, REST APIs, PostgreSQL, MySQL, Redis, Docker, React, and Tailwind CSS.',
			fa: 'پورتفولیوی بک‌اند و فول‌استک با تمرکز بر Laravel، PHP، فروشگاه چندفروشنده، REST API، PostgreSQL، MySQL، Redis، Docker، React و Tailwind CSS.',
		},
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
	},
	'/sepide-soltanpour': {
		title: {
			en: 'Sepide Soltanpour Portfolio',
			fa: 'پورتفولیوی سپیده سلطان‌پور',
		},
		description: {
			en: 'Frontend developer portfolio covering AI-powered consultation platforms, Next.js, React, TypeScript, admin panels, CI/CD, Docker, Mapbox, and Chart.js.',
			fa: 'پورتفولیوی فرانت‌اند با تمرکز بر پلتفرم‌های مشاوره مبتنی بر AI، Next.js، React، TypeScript، پنل ادمین، CI/CD، Docker، Mapbox و Chart.js.',
		},
		path: '/sepide-soltanpour',
		keywords: ['Sepide Soltanpour', 'frontend developer', 'Next.js', 'React', 'AI platform', 'admin panels'],
	},
	'/iman-jafari': {
		title: {
			en: 'Iman Jafari Frontend Portfolio',
			fa: 'پورتفولیوی فرانت‌اند ایمان جعفری',
		},
		description: {
			en: 'Frontend developer portfolio covering React, Next.js, TypeScript, Tailwind, Shadcn UI, Docker, Drizzle, and interactive web experiences.',
			fa: 'پورتفولیوی توسعه‌دهنده فرانت‌اند با تمرکز بر React، Next.js، TypeScript، Tailwind، Shadcn UI، Docker، Drizzle و تجربه‌های تعاملی وب.',
		},
		path: '/iman-jafari',
		keywords: ['frontend developer', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
	},
};

export function isProfileRoute(path: string): path is ProfileRoute {
	return (profileRoutes as readonly string[]).includes(path);
}

export function createProfileMetadata(path: ProfileRoute, locale: Locale = defaultLocale): Metadata {
	return createRouteMetadata({
		...profileMetadata[path],
		locale,
	});
}

export function absoluteUrl(path = '/') {
	return new URL(path, siteConfig.url).toString();
}

export function localizedPath(path: string, locale: Locale) {
	const normalizedPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;

	return `/${locale}${normalizedPath}`;
}

export function createLanguageAlternates(path: string) {
	return {
		en: localizedPath(path, 'en'),
		fa: localizedPath(path, 'fa'),
		'x-default': path,
	};
}

export function createAbsoluteLanguageAlternates(path: string) {
	return Object.fromEntries(
		Object.entries(createLanguageAlternates(path)).map(([locale, href]) => [locale, absoluteUrl(href)])
	);
}

function resolveLocalizedText(value: LocalizedText, locale: Locale) {
	if (typeof value === 'string') {
		return value;
	}

	return value[locale] ?? value[defaultLocale];
}

function alternateLocales(locale: Locale) {
	return locales.filter((item) => item !== locale).map((item) => ogLocales[item]);
}

export function createSiteMetadata(locale: Locale = defaultLocale): Metadata {
	const copy = siteCopy[locale];
	const canonical = localizedPath('/', locale);

	return {
		metadataBase: new URL(siteConfig.url),
		applicationName: siteConfig.name,
		title: {
			default: copy.title,
			template: `%s | ${siteConfig.name}`,
		},
		description: copy.description,
		keywords: siteConfig.keywords,
		authors: [{ name: siteConfig.name, url: siteConfig.url }],
		creator: siteConfig.creator,
		publisher: siteConfig.name,
		alternates: {
			canonical,
			languages: createLanguageAlternates('/'),
		},
		icons: {
			icon: [
				{ url: '/favicon.ico', sizes: 'any' },
				{ url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
			],
			apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
		},
		manifest: '/site.webmanifest',
		openGraph: {
			type: 'website',
			locale: ogLocales[locale],
			alternateLocale: alternateLocales(locale),
			url: canonical,
			siteName: siteConfig.name,
			title: copy.title,
			description: copy.description,
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
			title: copy.title,
			description: copy.description,
			images: ['/icon-512.png'],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
	};
}

export function createRouteMetadata({
	title,
	description,
	path,
	keywords = [],
	locale = defaultLocale,
}: {
	title: LocalizedText;
	description: LocalizedText;
	path: string;
	keywords?: string[];
	locale?: Locale;
}): Metadata {
	const localizedTitle = resolveLocalizedText(title, locale);
	const localizedDescription = resolveLocalizedText(description, locale);
	const canonical = localizedPath(path, locale);

	return {
		title: localizedTitle,
		description: localizedDescription,
		keywords: [...siteConfig.keywords, ...keywords],
		alternates: {
			canonical,
			languages: createLanguageAlternates(path),
		},
		openGraph: {
			title: localizedTitle,
			description: localizedDescription,
			url: canonical,
			siteName: siteConfig.name,
			type: 'profile',
			locale: ogLocales[locale],
			alternateLocale: alternateLocales(locale),
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
			title: localizedTitle,
			description: localizedDescription,
			images: ['/icon-512.png'],
		},
	};
}
