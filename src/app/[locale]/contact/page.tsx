import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectIntake } from "@/app/_components/project-intake";
import { StudioFooter, StudioHeader } from "@/app/_components/studio-chrome";
import { createRouteMetadata } from "@/app/seo";
import { getIntakeCopy } from "@/content/intake-content";
import { isLocale, type Locale } from "@/lib/i18n";

type ContactProps = {
	params: Promise<{ locale: string }>;
	searchParams: Promise<{ service?: string | string[] }>;
};

async function getLocale(params: ContactProps["params"]): Promise<Locale> {
	const { locale } = await params;
	if (!isLocale(locale)) notFound();
	return locale;
}

export async function generateMetadata({
	params,
}: ContactProps): Promise<Metadata> {
	const locale = await getLocale(params);
	const copy = getIntakeCopy(locale).page;
	return createRouteMetadata({
		title: copy.kicker,
		description: copy.intro,
		path: "/contact",
		locale,
	});
}

export default async function ContactPage({
	params,
	searchParams,
}: ContactProps) {
	const locale = await getLocale(params);
	const copy = getIntakeCopy(locale);
	const { service } = await searchParams;
	const requestedService =
		typeof service === "string" ? service.slice(0, 80) : "";

	return (
		<div
			className="studio-page contact-page"
			dir={locale === "fa" ? "rtl" : "ltr"}
		>
			<StudioHeader locale={locale} />
			<main id="main-content" className="site-shell contact-page__main">
				<header className="contact-page__header">
					<p className="section-kicker">{copy.page.kicker}</p>
					<h1>{copy.page.title}</h1>
					<p>{copy.page.intro}</p>
					<strong>{copy.page.response}</strong>
				</header>
				<ProjectIntake locale={locale} requestedService={requestedService} />
			</main>
			<StudioFooter locale={locale} />
		</div>
	);
}
