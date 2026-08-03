import type { ComponentType } from "react";

import type { Locale } from "@/lib/i18n";

type CaseBody = ComponentType<Record<string, never>>;

export type CaseStudyMetadata = {
	id: string;
	slug: string;
	published: boolean;
	industry: string;
	operatingScale: string;
	title: string;
	summary: string;
	problem: string;
	responsibility: string;
	result: string;
	referenceStatus: string;
	evidenceAsset?: { src: string; alt: string };
	publishedAt?: string;
	updatedAt?: string;
};

type CaseDefinition = {
	id: string;
	slug: string;
	published: boolean;
	locales: Record<Locale, Omit<CaseStudyMetadata, "id" | "slug" | "published">>;
	loaders: Record<Locale, () => Promise<{ default: CaseBody }>>;
};

const caseDefinitions: CaseDefinition[] = [
	{
		id: "payment-state-reliability",
		slug: "payment-state-reliability",
		published: false,
		locales: {
			en: {
				industry: "Awaiting approved brief",
				operatingScale: "Awaiting approved brief",
				title: "Payment and invoice state reliability",
				summary:
					"Editorial shell for a permissioned case about transaction, invoice, refund, settlement, or reconciliation states.",
				problem: "Not published until approved.",
				responsibility: "Not published until approved.",
				result: "Not published until approved.",
				referenceStatus: "Publication approval required",
			},
			fa: {
				industry: "در انتظار اطلاعات تأییدشده",
				operatingScale: "در انتظار اطلاعات تأییدشده",
				title: "پایداری وضعیت پرداخت و فاکتور",
				summary:
					"قالب تحریریه برای مطالعه موردی مجاز درباره وضعیت تراکنش، فاکتور، برگشت، تسویه یا مغایرت‌گیری.",
				problem: "تا پیش از تأیید منتشر نمی‌شود.",
				responsibility: "تا پیش از تأیید منتشر نمی‌شود.",
				result: "تا پیش از تأیید منتشر نمی‌شود.",
				referenceStatus: "نیازمند اجازه انتشار",
			},
		},
		loaders: {
			en: () => import("./cases/en/payment-state-reliability.mdx"),
			fa: () => import("./cases/fa/payment-state-reliability.mdx"),
		},
	},
	{
		id: "store-health-monitoring",
		slug: "store-health-monitoring",
		published: false,
		locales: {
			en: {
				industry: "Awaiting approved brief",
				operatingScale: "Awaiting approved brief",
				title: "Store health and anomaly monitoring",
				summary:
					"Editorial shell for a permissioned case about store, POS, synchronization, zero-sales, or reporting signals.",
				problem: "Not published until approved.",
				responsibility: "Not published until approved.",
				result: "Not published until approved.",
				referenceStatus: "Publication approval required",
			},
			fa: {
				industry: "در انتظار اطلاعات تأییدشده",
				operatingScale: "در انتظار اطلاعات تأییدشده",
				title: "پایش سلامت فروشگاه و ناهنجاری",
				summary:
					"قالب تحریریه برای مطالعه موردی مجاز درباره سیگنال فروشگاه، POS، همگام‌سازی، فروش صفر یا گزارش‌گیری.",
				problem: "تا پیش از تأیید منتشر نمی‌شود.",
				responsibility: "تا پیش از تأیید منتشر نمی‌شود.",
				result: "تا پیش از تأیید منتشر نمی‌شود.",
				referenceStatus: "نیازمند اجازه انتشار",
			},
		},
		loaders: {
			en: () => import("./cases/en/store-health-monitoring.mdx"),
			fa: () => import("./cases/fa/store-health-monitoring.mdx"),
		},
	},
	{
		id: "offline-pos-operations",
		slug: "offline-pos-operations",
		published: false,
		locales: {
			en: {
				industry: "Awaiting approved brief",
				operatingScale: "Awaiting approved brief",
				title: "Offline POS operations",
				summary:
					"Editorial shell for a permissioned case about devices, synchronization, deployment, updates, backup, or incidents.",
				problem: "Not published until approved.",
				responsibility: "Not published until approved.",
				result: "Not published until approved.",
				referenceStatus: "Publication approval required",
			},
			fa: {
				industry: "در انتظار اطلاعات تأییدشده",
				operatingScale: "در انتظار اطلاعات تأییدشده",
				title: "عملیات آفلاین POS",
				summary:
					"قالب تحریریه برای مطالعه موردی مجاز درباره دستگاه، همگام‌سازی، استقرار، به‌روزرسانی، پشتیبان یا رخداد.",
				problem: "تا پیش از تأیید منتشر نمی‌شود.",
				responsibility: "تا پیش از تأیید منتشر نمی‌شود.",
				result: "تا پیش از تأیید منتشر نمی‌شود.",
				referenceStatus: "نیازمند اجازه انتشار",
			},
		},
		loaders: {
			en: () => import("./cases/en/offline-pos-operations.mdx"),
			fa: () => import("./cases/fa/offline-pos-operations.mdx"),
		},
	},
];

export function getPublishedCaseStudies(locale: Locale): CaseStudyMetadata[] {
	return caseDefinitions
		.filter((study) => study.published)
		.map((study) => ({
			id: study.id,
			slug: study.slug,
			published: true,
			...study.locales[locale],
		}));
}

export function getPublishedCaseSlugs() {
	return caseDefinitions
		.filter((study) => study.published)
		.map((study) => study.slug);
}

export async function loadPublishedCaseStudy(locale: Locale, slug: string) {
	const study = caseDefinitions.find(
		(item) => item.slug === slug && item.published,
	);
	if (!study) return null;

	const module = await study.loaders[locale]();
	return {
		metadata: {
			id: study.id,
			slug: study.slug,
			published: true,
			...study.locales[locale],
		} satisfies CaseStudyMetadata,
		Content: module.default,
	};
}
