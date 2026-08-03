import type { CaseStudyMetadata } from "@/content/case-studies";
import { contactEmail, founderLinkedIn } from "@/content/moonlancer-content";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl, localizedPath } from "@/app/seo";

const serviceNames = [
	"Systems Diagnostic",
	"Stabilization Sprint",
	"Product Delivery Pod",
	"Operations Retainer",
];

export function createProfessionalServiceJsonLd(locale: Locale) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"@id": `${absoluteUrl(localizedPath("/", locale))}#organization`,
		name: "Moonlancer",
		alternateName: "Moonlancer Studio",
		url: absoluteUrl(localizedPath("/", locale)),
		email: contactEmail,
		description:
			locale === "fa"
				? "استودیوی تخصصی طراحی، پایدارسازی و اتصال سیستم‌های فروش، ERP، موجودی، POS، پرداخت و گزارش‌گیری."
				: "A specialist studio that designs, stabilizes, and connects retail, ERP, inventory, POS, payment, and reporting systems.",
		founder: {
			"@type": "Person",
			name: "Hamid Fattahi",
			jobTitle:
				locale === "fa"
					? "بنیان‌گذار و راهبر همکاری"
					: "Founder & Engagement Lead",
			sameAs: [founderLinkedIn],
		},
		areaServed: "Worldwide",
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: locale === "fa" ? "خدمات Moonlancer" : "Moonlancer engagements",
			itemListElement: serviceNames.map((name) => ({
				"@type": "Offer",
				itemOffered: { "@type": "Service", name },
			})),
		},
	};
}

export function createCaseStudyJsonLd(
	locale: Locale,
	study: CaseStudyMetadata,
) {
	const url = absoluteUrl(localizedPath(`/work/${study.slug}`, locale));
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `${url}#article`,
		headline: study.title,
		description: study.summary,
		url,
		inLanguage: locale,
		datePublished: study.publishedAt,
		dateModified: study.updatedAt ?? study.publishedAt,
		author: {
			"@type": "Organization",
			name: "Moonlancer",
			url: absoluteUrl(localizedPath("/", locale)),
		},
		about: [study.industry, study.problem],
	};
}
