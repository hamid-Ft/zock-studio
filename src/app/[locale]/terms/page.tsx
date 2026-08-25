import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/app/_components/legal-page";
import { createRouteMetadata } from "@/app/seo";
import { legalCopy } from "@/content/legal-content";
import { isLocale, type Locale } from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

async function getLocale(params: PageProps["params"]): Promise<Locale> {
	const { locale } = await params;
	if (!isLocale(locale)) notFound();
	return locale;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const locale = await getLocale(params);
	const copy = legalCopy[locale].terms;
	return createRouteMetadata({
		title: copy.title,
		description: copy.intro,
		path: "/terms",
		locale,
	});
}

export default async function TermsPage({ params }: PageProps) {
	return <LegalPage locale={await getLocale(params)} document="terms" />;
}
