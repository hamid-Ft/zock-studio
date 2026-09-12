"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import type { Route } from "next";
import { usePathname } from "next/navigation";

import {
	getLocaleFromPathname,
	localeLabels,
	locales,
	stripLocaleFromPathname,
	withLocalePath,
} from "@/lib/i18n";

export function LanguageSwitcher() {
	const pathname = usePathname();
	const locale = getLocaleFromPathname(pathname);
	const cleanPath = stripLocaleFromPathname(pathname);

	return (
		<div className="language-switcher">
			<span className="sr-only">Language selection</span>
			<Languages className="size-4 text-cyan-200" aria-hidden="true" />
			{locales.map((item) => (
				<Link
					key={item}
					href={withLocalePath(cleanPath, item) as Route}
					aria-current={item === locale ? "page" : undefined}
					className="language-switcher__link"
				>
					{localeLabels[item]}
				</Link>
			))}
		</div>
	);
}
