import { StudioFooter, StudioHeader } from "./studio-chrome";
import { legalCopy } from "@/content/legal-content";
import type { Locale } from "@/lib/i18n";

export function LegalPage({
	locale,
	document,
}: {
	locale: Locale;
	document: "privacy" | "terms";
}) {
	const copy = legalCopy[locale][document];
	return (
		<div
			className="studio-page legal-page"
			dir={locale === "fa" ? "rtl" : "ltr"}
		>
			<StudioHeader locale={locale} />
			<main id="main-content" className="site-shell legal-page__main">
				<header className="legal-page__header">
					<p className="section-kicker">Moonlancer / {document}</p>
					<h1>{copy.title}</h1>
					<p>{copy.intro}</p>
					<time dateTime="2026-08-03">{copy.updated}</time>
				</header>
				<div className="legal-page__sections">
					{copy.sections.map((section) => (
						<section key={section.title}>
							<h2>{section.title}</h2>
							{section.paragraphs.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</section>
					))}
				</div>
			</main>
			<StudioFooter locale={locale} />
		</div>
	);
}
