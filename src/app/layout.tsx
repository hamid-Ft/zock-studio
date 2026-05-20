import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { siteConfig } from './seo';

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

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	applicationName: siteConfig.name,
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [{ name: siteConfig.name, url: siteConfig.url }],
	creator: siteConfig.creator,
	publisher: siteConfig.name,
	alternates: {
		canonical: '/',
	},
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
	},
	manifest: '/site.webmanifest',
	openGraph: {
		type: 'website',
		locale: siteConfig.locale,
		url: '/',
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		images: [
			{
				url: '/icon-512.png',
				width: 512,
				height: 512,
				alt: `${siteConfig.name} icon`,
			},
		],
	},
	twitter: {
		card: 'summary',
		title: siteConfig.title,
		description: siteConfig.description,
		images: ['/icon-512.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${geistSans.variable} ${geistMono.variable}  antialiased`}>{children}</body>
		</html>
	);
}
