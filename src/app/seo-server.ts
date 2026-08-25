import { headers } from 'next/headers';

import { defaultLocale, isLocale, type Locale } from '@/lib/i18n';

export async function getRequestLocale(): Promise<Locale> {
	const headersList = await headers();
	const locale = headersList.get('x-moon-locale') ?? undefined;

	return isLocale(locale) ? locale : defaultLocale;
}
