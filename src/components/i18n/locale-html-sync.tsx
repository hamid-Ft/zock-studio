"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { getLocaleFromPathname } from "@/lib/i18n";

export function LocaleHtmlSync() {
	const pathname = usePathname();

	useEffect(() => {
		const locale = getLocaleFromPathname(pathname);
		document.documentElement.lang = locale;
		document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
	}, [pathname]);

	return null;
}
