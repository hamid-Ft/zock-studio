export const locales = ['en', 'fa'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string | undefined): value is Locale {
	return value === 'en' || value === 'fa';
}

export function getLocaleFromPathname(pathname: string): Locale {
	const segment = pathname.split('/')[1];

	return isLocale(segment) ? segment : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string) {
	const parts = pathname.split('/');
	const segment = parts[1];

	if (!isLocale(segment)) {
		return pathname || '/';
	}

	const stripped = `/${parts.slice(2).join('/')}`;
	return stripped === '/' ? '/' : stripped.replace(/\/$/, '');
}

export function withLocalePath(href: string, locale: Locale) {
	if (!href.startsWith('/') || href.startsWith('//')) {
		return href;
	}

	const [path = '/', hash = ''] = href.split('#');
	const normalizedPath = stripLocaleFromPathname(path);
	const localizedPath = `/${locale}${normalizedPath === '/' ? '' : normalizedPath}`;

	return hash ? `${localizedPath}#${hash}` : localizedPath;
}

export const localeLabels: Record<Locale, string> = {
	en: 'EN',
	fa: 'FA',
};
