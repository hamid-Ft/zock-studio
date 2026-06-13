import { notFound } from 'next/navigation';

import HomePage from '../page';
import { isLocale, locales, type Locale } from '@/lib/i18n';

type LocalizedPageProps = {
	params: Promise<{ locale: string }>;
};

async function resolveLocale(params: LocalizedPageProps['params']): Promise<Locale> {
	const { locale } = await params;

	if (!isLocale(locale)) {
		notFound();
	}

	return locale;
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({ params }: LocalizedPageProps) {
	await resolveLocale(params);

	return <HomePage />;
}
