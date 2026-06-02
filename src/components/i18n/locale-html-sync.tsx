'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { getLocaleFromPathname } from '@/lib/i18n';
import { faTextMap } from '@/lib/i18n-text-map';

const originals = new WeakMap<Text, string>();

function translateTextNodes(locale: string) {
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			const parent = node.parentElement;

			if (!parent || ['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT'].includes(parent.tagName)) {
				return NodeFilter.FILTER_REJECT;
			}

			return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
		},
	});

	let node = walker.nextNode() as Text | null;

	while (node) {
		const original = originals.get(node) ?? node.textContent ?? '';
		originals.set(node, original);
		const trimmed = original.trim();

		if (locale === 'fa' && faTextMap[trimmed]) {
			const translated = original.replace(trimmed, faTextMap[trimmed]);
			if (node.textContent !== translated) {
				node.textContent = translated;
			}
		}

		if (locale !== 'fa' && node.textContent !== original) {
			node.textContent = original;
		}

		node = walker.nextNode() as Text | null;
	}
}

export function LocaleHtmlSync() {
	const pathname = usePathname();

	useEffect(() => {
		const locale = getLocaleFromPathname(pathname);
		document.documentElement.lang = locale;
		document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';

		const translate = () => translateTextNodes(locale);
		const frame = requestAnimationFrame(translate);
		const observer = new MutationObserver(translate);
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
		};
	}, [pathname]);

	return null;
}
