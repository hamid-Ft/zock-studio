import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

import { StudioFooter, StudioHeader } from "@/app/_components/studio-chrome";
import { createRouteMetadata } from "@/app/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { loadPublishedCaseStudy } from "@/content/case-studies";
import { createCaseStudyJsonLd } from "@/lib/structured-data";
import { isLocale, type Locale } from "@/lib/i18n";

type CasePageProps = { params: Promise<{ locale: string; slug: string }> };
const loadCase = cache(loadPublishedCaseStudy);
export const dynamic = "force-dynamic";

async function getParams(
	params: CasePageProps["params"],
): Promise<{ locale: Locale; slug: string }> {
	const { locale, slug } = await params;
	if (!isLocale(locale)) notFound();
	return { locale, slug };
}

export async function generateMetadata({
	params,
}: CasePageProps): Promise<Metadata> {
	const { locale, slug } = await getParams(params);
	const study = await loadCase(locale, slug);
	if (!study) notFound();
	return createRouteMetadata({
		title: study.metadata.title,
		description: study.metadata.summary,
		path: `/work/${slug}`,
		locale,
		type: "article",
	});
}

export default async function CaseStudyPage({ params }: CasePageProps) {
	const { locale, slug } = await getParams(params);
	const study = await loadCase(locale, slug);
	if (!study) notFound();
	const { Content, metadata } = study;
	return (
		<div
			className="studio-page case-page"
			dir={locale === "fa" ? "rtl" : "ltr"}
		>
			<JsonLd data={createCaseStudyJsonLd(locale, metadata)} />
			<StudioHeader locale={locale} />
			<main id="main-content" className="site-shell case-page__main">
				<header className="case-page__header">
					<p className="section-kicker">
						{metadata.industry} / {metadata.operatingScale}
					</p>
					<h1>{metadata.title}</h1>
					<p>{metadata.summary}</p>
				</header>
				<dl className="case-page__facts">
					<div>
						<dt>{locale === "fa" ? "مسئله" : "Problem"}</dt>
						<dd>{metadata.problem}</dd>
					</div>
					<div>
						<dt>{locale === "fa" ? "مسئولیت" : "Responsibility"}</dt>
						<dd>{metadata.responsibility}</dd>
					</div>
					<div>
						<dt>{locale === "fa" ? "نتیجه" : "Result"}</dt>
						<dd>{metadata.result}</dd>
					</div>
				</dl>
				<article className="case-page__body">
					<Content />
				</article>
			</main>
			<StudioFooter locale={locale} />
		</div>
	);
}
