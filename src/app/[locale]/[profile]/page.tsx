import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import HamidFtPage from '@/app/hamid-ft/page';
import ImanJafariPage from '@/app/iman-jafari/page';
import KeyvanMoradkhaniPage from '@/app/keyvan-moradkhani/page';
import MehdiAlikhaniPage from '@/app/mehdi-alikhani/page';
import MohammadRezaParsaeianPage from '@/app/mohammadReza-Parsaeian/page';
import MohammadrezaVasebiPage from '@/app/mohammadreza-vasebi/page';
import OmidNikrooPage from '@/app/omid-nikroo/page';
import SepideSoltanpourPage from '@/app/sepide-soltanpour/page';
import { createProfileMetadata, isProfileRoute, profileRoutes, type ProfileRoute } from '@/app/seo';
import { isLocale, locales } from '@/lib/i18n';

type LocalizedProfileProps = {
	params: Promise<{ locale: string; profile: string }>;
};

const profilePages: Record<ProfileRoute, ComponentType> = {
	'/hamid-ft': HamidFtPage,
	'/mohammadReza-Parsaeian': MohammadRezaParsaeianPage,
	'/mohammadreza-vasebi': MohammadrezaVasebiPage,
	'/mehdi-alikhani': MehdiAlikhaniPage,
	'/omid-nikroo': OmidNikrooPage,
	'/keyvan-moradkhani': KeyvanMoradkhaniPage,
	'/sepide-soltanpour': SepideSoltanpourPage,
	'/iman-jafari': ImanJafariPage,
};

async function resolveParams(params: LocalizedProfileProps['params']) {
	const { locale, profile } = await params;
	const path = `/${profile}`;

	if (!isLocale(locale) || !isProfileRoute(path)) {
		notFound();
	}

	return { locale, path };
}

export function generateStaticParams() {
	return locales.flatMap((locale) => profileRoutes.map((path) => ({ locale, profile: path.slice(1) })));
}

export async function generateMetadata({ params }: LocalizedProfileProps): Promise<Metadata> {
	const { locale, path } = await resolveParams(params);

	return createProfileMetadata(path, locale);
}

export default async function LocalizedProfilePage({ params }: LocalizedProfileProps) {
	const { path } = await resolveParams(params);
	const ProfilePage = profilePages[path];

	return <ProfilePage />;
}
