import { ArrowUpLeft, ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { studioCopy, type MemberSlug } from "@/content/studio-content";
import { localizeDigits, type Locale } from "@/lib/i18n";

function homepage(locale: Locale) {
	return locale === "en" ? "/" : "/fa";
}

export function StudioHeader({
	locale,
	onHomepage = false,
}: {
	locale: Locale;
	onHomepage?: boolean;
}) {
	const copy = studioCopy[locale];
	const home = homepage(locale);
	const DiagonalArrow = locale === "fa" ? ArrowUpLeft : ArrowUpRight;
	const sectionLink = (section: string) =>
		onHomepage ? `#${section}` : `${home}#${section}`;

	return (
		<header className="site-header">
			<div className="site-shell site-header__inner">
				<Link
					href={home}
					className="brand"
					aria-label={
						locale === "fa" ? "صفحه اصلی Moon Studio" : "Moon Studio home"
					}
				>
					<span className="brand__mark" aria-hidden="true">
						<span />
					</span>
					<span className="brand__wordmark" lang="en" dir="ltr">
						Moonlancer
					</span>
					<span className="brand__divider" aria-hidden="true" />
					<span className="brand__descriptor">{copy.headerDescriptor}</span>
				</Link>

				<nav
					className="site-header__nav"
					aria-label={locale === "fa" ? "ناوبری اصلی" : "Primary navigation"}
				>
					<Link href={sectionLink("capabilities")}>
						{copy.nav.capabilities}
					</Link>
					<Link href={sectionLink("work")}>{copy.nav.work}</Link>
					<Link href={sectionLink("team")}>{copy.nav.team}</Link>
					<Link href={sectionLink("process")}>{copy.nav.process}</Link>
				</nav>

				<div className="site-header__cta">
					<Button asChild size="lg">
						<Link href={sectionLink("intake")}>
							{copy.nav.cta}
							<DiagonalArrow data-icon="inline-end" aria-hidden="true" />
						</Link>
					</Button>
				</div>

				<details className="mobile-menu">
					<summary aria-label={locale === "fa" ? "بازکردن منو" : "Open menu"}>
						<span>{locale === "fa" ? "منو" : "Menu"}</span>
						<Menu aria-hidden="true" />
					</summary>
					<nav
						aria-label={locale === "fa" ? "ناوبری موبایل" : "Mobile navigation"}
					>
						<Link href={sectionLink("capabilities")}>
							{copy.nav.capabilities}
						</Link>
						<Link href={sectionLink("work")}>{copy.nav.work}</Link>
						<Link href={sectionLink("team")}>{copy.nav.team}</Link>
						<Link href={sectionLink("process")}>{copy.nav.process}</Link>
						<Link href={sectionLink("intake")}>{copy.nav.cta}</Link>
					</nav>
				</details>
			</div>
		</header>
	);
}

export function StudioFooter({
	locale,
	profile,
}: {
	locale: Locale;
	profile?: MemberSlug;
}) {
	const copy = studioCopy[locale].footer;
	const englishHref = profile ? `/en/${profile}` : "/";
	const persianHref = profile ? `/fa/${profile}` : "/fa";
	const DiagonalArrow = locale === "fa" ? ArrowUpLeft : ArrowUpRight;

	return (
		<footer className="site-footer">
			<div className="site-shell">
				<div className="site-footer__lead">
					<p className="section-kicker">
						Moon Studio / {localizeDigits("2026", locale)}
					</p>
					<h2>{copy.statement}</h2>
					<p>{copy.description}</p>
				</div>
				<div className="site-footer__rail">
					<nav className="site-footer__language" aria-label={copy.language}>
						<span>{copy.language}</span>
						<Link
							href={englishHref}
							hrefLang="en"
							lang="en"
							aria-current={locale === "en" ? "page" : undefined}
						>
							English
						</Link>
						<Link
							href={persianHref}
							hrefLang="fa"
							lang="fa"
							dir="rtl"
							aria-current={locale === "fa" ? "page" : undefined}
						>
							فارسی
						</Link>
					</nav>
					<Link href="/handoff" className="site-footer__handoff">
						{copy.handoff}
						<DiagonalArrow aria-hidden="true" />
					</Link>
				</div>
				<div className="site-footer__base">
					<span>{copy.copyright}</span>
					<span className="technical-ltr" lang="en" dir="ltr">
						35.6892° N / 51.3890° E
					</span>
				</div>
			</div>
		</footer>
	);
}
