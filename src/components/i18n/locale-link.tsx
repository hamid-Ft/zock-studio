'use client';

import Link, { type LinkProps } from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { getLocaleFromPathname, withLocalePath } from '@/lib/i18n';

type LocaleLinkProps<T extends string> = LinkProps<T> &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps<T>> & {
		children: ReactNode;
	};

export function LocaleLink<T extends string>({ href, children, ...props }: LocaleLinkProps<T>) {
	const pathname = usePathname();
	const locale = getLocaleFromPathname(pathname);
	const localizedHref = typeof href === 'string' ? (withLocalePath(href, locale) as Route) : href;

	return (
		<Link href={localizedHref} {...props}>
			{children}
		</Link>
	);
}
