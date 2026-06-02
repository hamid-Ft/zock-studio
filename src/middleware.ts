import { NextResponse, type NextRequest } from 'next/server';

import { isLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const locale = pathname.split('/')[1];

	if (!isLocale(locale)) {
		return NextResponse.next();
	}

	const url = request.nextUrl.clone();
	url.pathname = pathname.replace(`/${locale}`, '') || '/';

	const response = NextResponse.rewrite(url);
	response.cookies.set('moon-locale', locale, { path: '/', sameSite: 'lax' });

	return response;
}

export const config = {
	matcher: ['/((?!api|_next|favicon.ico|icon-512.png|apple-touch-icon.png|site.webmanifest|robots.txt|sitemap.xml|.*\\..*).*)'],
};
