import { ArrowUpLeft, ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { Button } from "@/components/ui/button";
import {
	contactEmail,
	founderLinkedIn,
	getSiteCopy,
} from "@/content/moonlancer-content";
import type { Locale } from "@/lib/i18n";

function localizedHome(locale: Locale) {
	return `/${locale}`;
}

export function StudioHeader({
	locale,
	onHomepage = false,
}: {
	locale: Locale;
	onHomepage?: boolean;
}) {
	const copy = getSiteCopy(locale);
	const home = localizedHome(locale);
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
						locale === "fa" ? "صفحه اصلی Moonlancer" : "Moonlancer home"
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
					<Link href={sectionLink("offers")}>{copy.nav.offers}</Link>
					<Link href={sectionLink("work")}>{copy.nav.work}</Link>
					<Link href={sectionLink("process")}>{copy.nav.process}</Link>
					<Link href={sectionLink("team")}>{copy.nav.team}</Link>
				</nav>

				<div className="site-header__tools">
					<LanguageSwitcher />
					<Button asChild size="lg">
						<Link
							href={`/${locale}/contact`}
							data-umami-event="cta_click"
							data-umami-event-location="header"
						>
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
						<Link href={sectionLink("offers")}>{copy.nav.offers}</Link>
						<Link href={sectionLink("work")}>{copy.nav.work}</Link>
						<Link href={sectionLink("process")}>{copy.nav.process}</Link>
						<Link href={sectionLink("team")}>{copy.nav.team}</Link>
						<Link href={`/${locale}/contact`}>{copy.nav.cta}</Link>
						<LanguageSwitcher />
					</nav>
				</details>
			</div>
		</header>
	);
}

export function StudioFooter({ locale }: { locale: Locale }) {
	const copy = getSiteCopy(locale).footer;
	const year = new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US", {
		useGrouping: false,
	}).format(2026);

	return (
		<footer className="site-footer">
			<div className="site-shell">
				<div className="site-footer__lead">
					<p className="section-kicker">Moonlancer / {year}</p>
					<h2>{copy.statement}</h2>
					<p>{copy.description}</p>
				</div>
				<div className="site-footer__rail">
					<nav aria-label={locale === "fa" ? "پیوندهای حقوقی" : "Legal links"}>
						<Link href={`/${locale}/contact`}>{copy.contact}</Link>
						<Link href={`/${locale}/privacy`}>{copy.privacy}</Link>
						<Link href={`/${locale}/terms`}>{copy.terms}</Link>
					</nav>
					<LanguageSwitcher />
				</div>
				<div className="site-footer__base">
					<span>
						© {year} {copy.copyright}
					</span>
					<div>
						<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
						<a href={founderLinkedIn} target="_blank" rel="noreferrer">
							{copy.linkedin}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
