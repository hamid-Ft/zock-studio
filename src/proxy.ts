import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const alternateHosts = new Set([
		"moon-studio.ir",
		"www.moon-studio.ir",
		"www.moonlancer.ir",
	]);
	if (alternateHosts.has(request.nextUrl.hostname)) {
		const url = request.nextUrl.clone();
		url.protocol = "https";
		url.host = "moonlancer.ir";
		url.pathname = pathname === "/" ? "/en" : pathname;
		return NextResponse.redirect(url, 308);
	}
	const legacyProfile = "/mohammadReza-Parsaeian";
	if (pathname.includes(legacyProfile)) {
		const url = request.nextUrl.clone();
		url.pathname = pathname.replace(legacyProfile, "/mohammadreza-parsaeian");
		return NextResponse.redirect(url, 308);
	}
	const segment = pathname.split("/")[1];
	const locale = isLocale(segment) ? segment : defaultLocale;
	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("x-moon-locale", locale);
	requestHeaders.set("x-moon-pathname", pathname);

	if (!isLocale(segment)) {
		return NextResponse.next({
			request: {
				headers: requestHeaders,
			},
		});
	}

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
	response.cookies.set("moon-locale", locale, {
		path: "/",
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		maxAge: 60 * 60 * 24 * 365,
	});

	return response;
}

export const config = {
	matcher: [
		"/((?!api|_next|favicon.ico|icon-512.png|apple-touch-icon.png|site.webmanifest|robots.txt|sitemap.xml|.*\\..*).*)",
	],
};
