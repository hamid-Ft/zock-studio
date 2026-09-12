import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const productionSiteUrl = "https://moonlancer.ir";

// Search engines must always receive the public production origin. Allowing a
// stale server environment variable to override this in production can move
// every canonical, hreflang entry, and sitemap URL to the wrong domain.
const siteUrl =
	process.env.NODE_ENV === "production"
		? productionSiteUrl
		: process.env.NEXT_PUBLIC_SITE_URL || productionSiteUrl;

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
	name: "Moonlancer",
	alternateName: "Moonlancer Studio",
	url: siteUrl,
	title: siteCopy.en.title,
	description: siteCopy.en.description,
	locale: ogLocales.en,
	creator: "Moonlancer",
	keywords: [
		"Moonlancer",
		"retail software studio",
		"connected commerce systems",
		"POS integration",
		"ERP integration",
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
	"/mohammadreza-parsaeian",
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
			en: "Hamid Fattahi — Freelance Frontend Developer",
			fa: "حمید فتاحی — توسعه‌دهنده فریلنس فرانت‌اند",
		},
		description: {
			en: "I build React and Next.js websites, dashboards, and web applications. My work spans marketplace interfaces, payment journeys, map-based tools, and WordPress sites, with close attention to responsive design and the details people use every day.",
			fa: "وب‌سایت، داشبورد و اپلیکیشن وب را با React و Next.js می‌سازم. تجربه‌ام از رابط‌های مارکت‌پلیس و پرداخت تا ابزارهای نقشه‌محور و سایت‌های وردپرسی را در بر می‌گیرد؛ با توجه ویژه به طراحی واکنش‌گرا و جزئیاتی که کاربر هر روز با آن‌ها کار می‌کند.",
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
	"/mohammadreza-parsaeian": {
		title: {
			en: "MohammadReza Parsaeian — Freelance Senior Backend Developer",
			fa: "محمدرضا پارسائیان — توسعه‌دهنده ارشد فریلنس بک‌اند",
		},
		description: {
			en: "I design and develop backend services with Go, PHP, Laravel, and Node.js. My background covers payment integrations, GPS tracking, delivery services, and server monitoring, alongside experience leading developers.",
			fa: "با Go، PHP، Laravel و Node.js سرویس‌های بک‌اند را طراحی و توسعه می‌دهم. سابقه‌ام شامل اتصال درگاه پرداخت، ردیابی GPS، سرویس‌های تحویل و پایش سرور است و تجربه هدایت توسعه‌دهندگان را هم دارم.",
		},
		path: "/mohammadreza-parsaeian",
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
			en: "Mohammadreza Vasebi — Freelance React Native Developer",
			fa: "محمدرضا واسبی — توسعه‌دهنده فریلنس React Native",
		},
		description: {
			en: "I build mobile apps with React Native, Expo, and TypeScript. My experience includes shopping, delivery, wallet, and real-estate apps, with maps, realtime features, and careful attention to performance on the device.",
			fa: "با React Native، Expo و TypeScript اپلیکیشن موبایل می‌سازم. تجربه‌ام شامل اپ‌های خرید، تحویل، کیف پول و املاک است؛ همراه با نقشه، قابلیت‌های لحظه‌ای و توجه به عملکرد روی دستگاه.",
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
			en: "Mehdi Alikhani — Freelance Laravel & Magento Developer",
			fa: "مهدی علیخانی — توسعه‌دهنده فریلنس Laravel و Magento",
		},
		description: {
			en: "I develop PHP backends, Laravel services, and Magento stores. I work on headless commerce, third-party integrations, payment gateways, and messaging, with hands-on experience in testing and Linux server operations.",
			fa: "بک‌اند PHP، سرویس‌های Laravel و فروشگاه‌های Magento را توسعه می‌دهم. روی فروشگاه‌های هدلس، اتصال سرویس‌های بیرونی، درگاه پرداخت و پیام‌رسانی کار می‌کنم و در تست نرم‌افزار و مدیریت سرور لینوکس تجربه عملی دارم.",
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
			en: "Omid Nikroo — Freelance .NET Backend Developer",
			fa: "امید نیکرو — توسعه‌دهنده فریلنس بک‌اند .NET",
		},
		description: {
			en: "I develop C# and ASP.NET Core backends for business applications, ecommerce, and ERP. My work includes warehouse and sales modules, location-based routing, B2B ordering, realtime communication, and database optimization.",
			fa: "بک‌اند C# و ASP.NET Core را برای نرم‌افزارهای کسب‌وکار، فروش آنلاین و ERP توسعه می‌دهم. تجربه‌ام شامل ماژول‌های انبار و فروش، مسیریابی مکانی، سفارش‌گیری B2B، ارتباط لحظه‌ای و بهینه‌سازی پایگاه داده است.",
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
			en: "Keyvan Moradkhani — Freelance Backend & Full-stack Developer",
			fa: "کیوان مرادخانی — توسعه‌دهنده فریلنس بک‌اند و فول‌استک",
		},
		description: {
			en: "I build Laravel backends and full-stack web applications, from online stores and marketplaces to booking platforms and internal tools. I work across APIs, databases, and React interfaces to turn a project brief into usable software.",
			fa: "بک‌اند Laravel و اپلیکیشن وب فول‌استک می‌سازم؛ از فروشگاه و مارکت‌پلیس تا پلتفرم رزرو و ابزارهای داخلی. با API، پایگاه داده و رابط React کار می‌کنم تا شرح یک پروژه را به نرم‌افزاری قابل استفاده تبدیل کنم.",
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
			en: "Sepide Soltanpour — Freelance Frontend Developer",
			fa: "سپیده سلطان‌پور — توسعه‌دهنده فریلنس فرانت‌اند",
		},
		description: {
			en: "I create responsive React and Next.js interfaces for web products, admin dashboards, and AI-assisted experiences. I enjoy making complex forms, charts, and data flows feel clear and approachable.",
			fa: "با React و Next.js رابط‌های واکنش‌گرا برای محصولات وب، داشبوردهای مدیریتی و تجربه‌های مبتنی بر هوش مصنوعی می‌سازم. دوست دارم فرم‌ها، نمودارها و جریان‌های پیچیده داده را به تجربه‌ای روشن و قابل فهم تبدیل کنم.",
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
		type: "profile",
	});
}

export function absoluteUrl(path = "/") {
	return new URL(path, siteConfig.url).toString();
}

export function localizedPath(path: string, locale: Locale) {
	if (path === "/") {
		return `/${locale}`;
	}

	const normalizedPath =
		path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

	return `/${locale}${normalizedPath}`;
}

export function createLanguageAlternates(path: string) {
	return {
		en: localizedPath(path, "en"),
		fa: localizedPath(path, "fa"),
		"x-default": localizedPath(path, defaultLocale),
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
			canonical: absoluteUrl(canonical),
			languages: createAbsoluteLanguageAlternates("/"),
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
			url: absoluteUrl(canonical),
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
	type = "website",
}: {
	title: LocalizedText;
	description: LocalizedText;
	path: string;
	keywords?: string[];
	locale?: Locale;
	type?: "website" | "profile" | "article";
}): Metadata {
	const localizedTitle = resolveLocalizedText(title, locale);
	const localizedDescription = resolveLocalizedText(description, locale);
	const canonical = localizedPath(path, locale);

	return {
		title: localizedTitle,
		description: localizedDescription,
		keywords: [...siteConfig.keywords, ...keywords],
		alternates: {
			canonical: absoluteUrl(canonical),
			languages: createAbsoluteLanguageAlternates(path),
		},
		openGraph: {
			title: localizedTitle,
			description: localizedDescription,
			url: absoluteUrl(canonical),
			siteName: siteConfig.name,
			type,
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
