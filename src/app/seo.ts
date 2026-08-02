import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moon-studio.ir";

type LocalizedText = string | Record<Locale, string>;

const ogLocales: Record<Locale, string> = {
	en: "en_US",
	fa: "fa_IR",
};

const siteCopy: Record<Locale, { title: string; description: string }> = {
	en: {
		title: "Moonlancer | Connected Product Systems Studio",
		description:
			"Moonlancer designs and builds connected commerce, ERP, fintech, field-operation, and decision systems for operations that cannot break.",
	},
	fa: {
		title: "Moonlancer | طراحی و توسعه نرم‌افزارهای عملیاتی",
		description:
			"Moonlancer نرم‌افزارهای فروش آنلاین، ERP، فین‌تک و عملیات میدانی را از تجربه‌ی کاربر تا سرویس‌های پشت محصول، یکپارچه طراحی و توسعه می‌دهد.",
	},
};

export const siteConfig = {
	name: "Moon Studio",
	alternateName: "Moonlancer",
	url: siteUrl,
	title: siteCopy.en.title,
	description: siteCopy.en.description,
	locale: ogLocales.en,
	creator: "Moon Studio",
	keywords: [
		"Moon Studio",
		"Moonlancer",
		"digital product studio",
		"ecommerce software team",
		"Next.js development",
		"React development",
		"backend development",
		"mobile app development",
		"ERP software",
		"e-commerce platform",
		"fintech software",
		"admin dashboard",
		"B2B software",
		"Iran software team",
	],
};

export const profileRoutes = [
	"/hamid-ft",
	"/mohammadReza-Parsaeian",
	"/mohammadreza-vasebi",
	"/mehdi-alikhani",
	"/omid-nikroo",
	"/keyvan-moradkhani",
	"/sepide-soltanpour",
	"/iman-jafari",
] as const;

export type ProfileRoute = (typeof profileRoutes)[number];

type RouteMetadataDefinition = {
	title: LocalizedText;
	description: LocalizedText;
	path: ProfileRoute;
	keywords?: string[];
};

export const profileMetadata: Record<ProfileRoute, RouteMetadataDefinition> = {
	"/hamid-ft": {
		title: {
			en: "Hamid Fattahi — Product Interface Engineer",
			fa: "حمید فتاحی — مهندس رابط‌های محصول",
		},
		description: {
			en: "Moonlancer system profile for frontend architecture across commerce, ERP, fintech, logistics, maps, and operational control surfaces.",
			fa: "نقش حمید فتاحی در تیم Moonlancer: معماری فرانت‌اند برای فروش آنلاین، ERP، فین‌تک، لجستیک، نقشه و ابزارهای مدیریت عملیات.",
		},
		path: "/hamid-ft",
		keywords: [
			"Hamid FT",
			"frontend developer",
			"Next.js portfolio",
			"TypeScript",
			"admin panels",
		],
	},
	"/mohammadReza-Parsaeian": {
		title: {
			en: "MohammadReza Parsaeian — Backend Systems Lead",
			fa: "محمدرضا پارسائیان — رهبر سامانه‌های بک‌اند",
		},
		description: {
			en: "Moonlancer system profile for distributed backend services, payments, GPS platforms, monitoring, delivery systems, and technical leadership.",
			fa: "نقش محمدرضا پارسائیان در تیم Moonlancer: معماری سرویس‌های توزیع‌شده، پرداخت، GPS، مانیتورینگ و راهبری فنی بک‌اند.",
		},
		path: "/mohammadReza-Parsaeian",
		keywords: [
			"MohammadReza Parsaeian",
			"backend developer",
			"Golang",
			"Laravel",
			"Node.js",
			"payments",
		],
	},
	"/mohammadreza-vasebi": {
		title: {
			en: "Mohammadreza Vasebi — Mobile Operations Engineer",
			fa: "محمدرضا واسبی — مهندس عملیات موبایل",
		},
		description: {
			en: "Moonlancer system profile for cross-platform commerce, delivery, credit, QR, realtime, and map-based field applications.",
			fa: "نقش محمدرضا واسبی در تیم Moonlancer: ساخت اپ‌های چندسکویی برای فروش، تحویل، اعتبار، QR و عملیات میدانی نقشه‌محور.",
		},
		path: "/mohammadreza-vasebi",
		keywords: [
			"Mohammadreza Vasebi",
			"React Native",
			"mobile engineer",
			"Expo",
			"TypeScript",
		],
	},
	"/mehdi-alikhani": {
		title: {
			en: "Mehdi Alikhani — Commerce Platform Engineer",
			fa: "مهدی علیخانی — مهندس پلتفرم‌های تجاری",
		},
		description: {
			en: "Moonlancer system profile for headless commerce, Laravel microservices, Magento, payments, messaging, testing, and Linux operations.",
			fa: "نقش مهدی علیخانی در تیم Moonlancer: توسعه پلتفرم‌های Headless، سرویس‌های Laravel و Magento، پرداخت، پیام‌رسانی و عملیات Linux.",
		},
		path: "/mehdi-alikhani",
		keywords: [
			"Mehdi Alikhani",
			"backend developer",
			"Laravel",
			"Magento 2",
			"GraphQL",
			"microservices",
		],
	},
	"/omid-nikroo": {
		title: {
			en: "Omid Nikroo — ERP Backend Engineer",
			fa: "امید نیکرو — مهندس بک‌اند ERP",
		},
		description: {
			en: "Moonlancer system profile for .NET ERP services across warehouse, sales, distribution, HR, routing, realtime data, and databases.",
			fa: "نقش امید نیکرو در تیم Moonlancer: توسعه سرویس‌های .NET برای ERP، انبار، فروش، پخش، منابع انسانی و برنامه‌ریزی مسیر.",
		},
		path: "/omid-nikroo",
		keywords: [
			"Omid Nikroo",
			".NET backend developer",
			"C#",
			"ASP.NET Core",
			"ERP",
			"DDD",
			"CQRS",
		],
	},
	"/keyvan-moradkhani": {
		title: {
			en: "Keyvan Moradkhani — Commerce Backend Engineer",
			fa: "کیوان مرادخانی — مهندس بک‌اند تجارت",
		},
		description: {
			en: "Moonlancer system profile for multi-vendor commerce, REST APIs, catalog rules, tax automation, promotions, and operational tools.",
			fa: "نقش کیوان مرادخانی در تیم Moonlancer: توسعه بک‌اند فروشگاه‌های چندفروشنده، REST API، کاتالوگ، قیمت‌گذاری و ابزارهای مدیریت فروش.",
		},
		path: "/keyvan-moradkhani",
		keywords: [
			"Keyvan Moradkhani",
			"backend developer",
			"full-stack developer",
			"Laravel",
			"PHP",
			"multi-vendor e-commerce",
			"React",
		],
	},
	"/sepide-soltanpour": {
		title: {
			en: "Sepide Soltanpour — Data & AI Interface Engineer",
			fa: "سپیده سلطان‌پور — مهندس رابط‌های داده و AI",
		},
		description: {
			en: "Moonlancer system profile for data-heavy admin products, AI consultation flows, forms, charts, maps, and frontend delivery.",
			fa: "نقش سپیده سلطان‌پور در تیم Moonlancer: ساخت پنل‌های داده‌محور، تجربه‌های هوش مصنوعی، فرم‌های پیچیده، نمودار و نقشه.",
		},
		path: "/sepide-soltanpour",
		keywords: [
			"Sepide Soltanpour",
			"frontend developer",
			"Next.js",
			"React",
			"AI platform",
			"admin panels",
		],
	},
	"/iman-jafari": {
		title: {
			en: "Iman Jafari — Frontend Delivery Engineer",
			fa: "ایمان جعفری — مهندس تحویل فرانت‌اند",
		},
		description: {
			en: "Moonlancer system profile for React and Next.js interfaces, component systems, product forms, state, and responsive experiences.",
			fa: "نقش ایمان جعفری در تیم Moonlancer: پیاده‌سازی رابط‌های React و Next.js، کامپوننت‌های مشترک، فرم‌های محصول و تجربه‌های واکنش‌گرا.",
		},
		path: "/iman-jafari",
		keywords: [
			"frontend developer",
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
		],
	},
};

export function isProfileRoute(path: string): path is ProfileRoute {
	return (profileRoutes as readonly string[]).includes(path);
}

export function createProfileMetadata(
	path: ProfileRoute,
	locale: Locale = defaultLocale,
): Metadata {
	return createRouteMetadata({
		...profileMetadata[path],
		locale,
	});
}

export function absoluteUrl(path = "/") {
	return new URL(path, siteConfig.url).toString();
}

export function localizedPath(path: string, locale: Locale) {
	if (path === "/") {
		return locale === "en" ? "/" : "/fa";
	}

	const normalizedPath =
		path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

	return `/${locale}${normalizedPath}`;
}

export function createLanguageAlternates(path: string) {
	return {
		en: localizedPath(path, "en"),
		fa: localizedPath(path, "fa"),
		"x-default": path,
	};
}

export function createAbsoluteLanguageAlternates(path: string) {
	return Object.fromEntries(
		Object.entries(createLanguageAlternates(path)).map(([locale, href]) => [
			locale,
			absoluteUrl(href),
		]),
	);
}

function resolveLocalizedText(value: LocalizedText, locale: Locale) {
	if (typeof value === "string") {
		return value;
	}

	return value[locale] ?? value[defaultLocale];
}

function alternateLocales(locale: Locale) {
	return locales
		.filter((item) => item !== locale)
		.map((item) => ogLocales[item]);
}

export function createSiteMetadata(locale: Locale = defaultLocale): Metadata {
	const copy = siteCopy[locale];
	const canonical = localizedPath("/", locale);

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
			languages: createLanguageAlternates("/"),
		},
		icons: {
			icon: [
				{ url: "/favicon.ico", sizes: "any" },
				{ url: "/icon-512.png", type: "image/png", sizes: "512x512" },
			],
			apple: [
				{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
			],
		},
		manifest: "/site.webmanifest",
		openGraph: {
			type: "website",
			locale: ogLocales[locale],
			alternateLocale: alternateLocales(locale),
			url: canonical,
			siteName: siteConfig.name,
			title: copy.title,
			description: copy.description,
			images: [
				{
					url: "/icon-512.png",
					width: 512,
					height: 512,
					alt: `${siteConfig.name} icon`,
				},
			],
		},
		twitter: {
			card: "summary",
			title: copy.title,
			description: copy.description,
			images: ["/icon-512.png"],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
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
			type: "profile",
			locale: ogLocales[locale],
			alternateLocale: alternateLocales(locale),
			images: [
				{
					url: "/icon-512.png",
					width: 512,
					height: 512,
					alt: `${siteConfig.name} icon`,
				},
			],
		},
		twitter: {
			card: "summary",
			title: localizedTitle,
			description: localizedDescription,
			images: ["/icon-512.png"],
		},
	};
}
