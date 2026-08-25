'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { getLocaleFromPathname, withLocalePath } from '@/lib/i18n';

type LocaleLinkProps = LinkProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
		children: ReactNode;
	};

export function LocaleLink({ href, children, ...props }: LocaleLinkProps) {
	const pathname = usePathname();
	const locale = getLocaleFromPathname(pathname);
	const localizedHref = typeof href === 'string' ? withLocalePath(href, locale) : href;

	return (
		<Link href={localizedHref} {...props}>
			{children}
		</Link>
	);
}
