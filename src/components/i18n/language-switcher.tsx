'use client';

import Link from 'next/link';
import { Languages } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { getLocaleFromPathname, localeLabels, locales, stripLocaleFromPathname, withLocalePath } from '@/lib/i18n';

export function LanguageSwitcher() {
	const pathname = usePathname();
	const locale = getLocaleFromPathname(pathname);
	const cleanPath = stripLocaleFromPathname(pathname);

	return (
		<nav aria-label="Language" className="language-switcher">
			<Languages className="size-4 text-cyan-200" aria-hidden="true" />
			{locales.map((item) => (
				<Link
					key={item}
					href={withLocalePath(cleanPath, item)}
					aria-current={item === locale ? 'true' : undefined}
					className="language-switcher__link">
					{localeLabels[item]}
				</Link>
			))}
		</nav>
	);
}
