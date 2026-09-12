import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

import { MemberSystemProfile } from "@/app/_components/member-profile";
import { FreelanceProfile } from "@/app/_components/freelance-profile";
import { createProfileMetadata, isProfileRoute } from "@/app/seo";
import { isMemberSlug, memberSlugs } from "@/content/studio-content";
import { isLocale, locales, type Locale } from "@/lib/i18n";

// Slugs that have dedicated routes instead of the generic profile page.
const dedicatedProfileSlugs = new Set<string>(["iman-jafari"]);

type LocalizedProfileProps = {
	params: Promise<{ locale: string; profile: string }>;
};

async function resolveParams(
	params: LocalizedProfileProps["params"],
): Promise<{ locale: Locale; profile: (typeof memberSlugs)[number] }> {
	const { locale, profile } = await params;

	if (dedicatedProfileSlugs.has(profile)) {
		permanentRedirect(`/${profile}`);
	}

	if (
		!isLocale(locale) ||
		!isMemberSlug(profile) ||
		!isProfileRoute(`/${profile}`)
	) {
		notFound();
	}

	return { locale, profile };
}

export function generateStaticParams() {
	return locales.flatMap((locale) =>
		memberSlugs.map((profile) => ({ locale, profile })),
	);
}

export async function generateMetadata({
	params,
}: LocalizedProfileProps): Promise<Metadata> {
	const { locale, profile } = await resolveParams(params);
	return createProfileMetadata(`/${profile}`, locale);
}

export default async function LocalizedProfilePage({
	params,
}: LocalizedProfileProps) {
	const { locale, profile } = await resolveParams(params);
	return profile === "iman-jafari" ? (
		<MemberSystemProfile locale={locale} slug={profile} />
	) : (
		<FreelanceProfile locale={locale} slug={profile} />
	);
}
