import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { createSiteMetadata } from './seo';
import { getRequestLocale } from './seo-server';
import { LanguageSwitcher } from '@/components/i18n/language-switcher';
import { LocaleHtmlSync } from '@/components/i18n/locale-html-sync';
import { isLocale } from '@/lib/i18n';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

// const IRANSans = localFont({
// 	src: '../fonts/iran-sans.ttf',
// 	display: 'swap',
// 	variable: '--font-iran-sans',
// });

const tanhaFD = localFont({
	src: './fonts/TanhaFD.woff2',
	display: 'swap',
	variable: '--font-tanha-fd',
});

const iranYekan = localFont({
	src: [
		{
			path: './fonts/iranyekanwebregular.woff2',
			weight: '400',
		},
		{
			path: './fonts/iranyekanwebmedium.woff',
			weight: '500',
		},
		{
			path: './fonts/iranyekanwebbold.woff2',
			weight: '700',
		},
	],
	variable: '--font-iran-yekan',
	display: 'swap',
	fallback: ['Tahoma', 'Arial', 'sans-serif'],
});

export async function generateMetadata({
	params,
}: {
	params?: Promise<{ locale?: string }>;
} = {}): Promise<Metadata> {
	const { locale: routeLocale } = params ? await params : {};
	const locale = isLocale(routeLocale) ? routeLocale : await getRequestLocale();

	return createSiteMetadata(locale);
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params?: Promise<{ locale?: string }>;
}>) {
	const { locale: routeLocale } = params ? await params : {};
	const locale = isLocale(routeLocale) ? routeLocale : await getRequestLocale();

	return (
		<html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'} className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${iranYekan.variable} ${tanhaFD.variable} antialiased`}>
				<a href="#main-content" className="skip-link">
					Skip to main content
				</a>
				<LocaleHtmlSync />
				{children}
				<LanguageSwitcher />
			</body>
		</html>
	);
}
