import { ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getMember, members, type MemberSlug } from "@/content/studio-content";
import { getSiteCopy } from "@/content/moonlancer-content";
import { localizeDigits, type Locale } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { StudioFooter, StudioHeader } from "./studio-chrome";

export function MemberSystemProfile({
	locale,
	slug,
}: {
	locale: Locale;
	slug: MemberSlug;
}) {
	const member = getMember(slug);
	const copy = getSiteCopy(locale);
	const currentIndex = members.findIndex((item) => item.slug === slug);
	const previous =
		members[(currentIndex - 1 + members.length) % members.length];
	const next = members[(currentIndex + 1) % members.length];
	const home = `/${locale}`;
	const BackIcon = locale === "fa" ? ArrowRight : ArrowLeft;
	const NextIcon = locale === "fa" ? ArrowLeft : ArrowRight;
	const DiagonalArrow = locale === "fa" ? ArrowUpLeft : ArrowUpRight;

	return (
		<div
			className="studio-page profile-page"
			dir={locale === "fa" ? "rtl" : "ltr"}
		>
			<StudioHeader locale={locale} />
			<main id="main-content">
				<section className="profile-hero" aria-labelledby="profile-title">
					<div className="site-shell">
						<Link href={`${home}#team`} className="text-link">
							<BackIcon aria-hidden="true" />
							{copy.profile.team}
						</Link>
						<div className="profile-hero__grid">
							<div className="profile-hero__identity">
								<p className="section-kicker">
									{copy.profile.kicker} / {localizeDigits(member.index, locale)}
								</p>
								<h1
									id="profile-title"
									className="latin-name"
									lang="en"
									dir="ltr"
								>
									{member.name}
								</h1>
								<p className="profile-hero__role">{member.role[locale]}</p>
								<p className="profile-hero__summary">
									{member.summary[locale]}
								</p>
							</div>
							<div className="profile-orbit" aria-hidden="true">
								<span />
								<span />
								<span />
								<i />
							</div>
							<aside className="profile-hero__responsibility">
								<span>{copy.profile.responsibility}</span>
								<p>{member.responsibility[locale]}</p>
							</aside>
						</div>
					</div>
				</section>

				<section className="profile-system" aria-labelledby="position-title">
					<div className="site-shell">
						<Reveal className="profile-system__heading">
							<p className="section-kicker">{copy.profile.position}</p>
							<h2 id="position-title">
								{locale === "fa"
									? "هر تخصص، یک مسئولیت روشن."
									: "Clear ownership across delivery."}
							</h2>
						</Reveal>
						<div className="profile-detail-grid">
							<Reveal>
								<article className="profile-detail profile-detail--systems">
									<span>{localizeDigits("01", locale)}</span>
									<h3>{copy.profile.systems}</h3>
									<ul>
										{member.systemTypes[locale].map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</article>
							</Reveal>
							<Reveal>
								<article className="profile-detail">
									<span>{localizeDigits("02", locale)}</span>
									<h3>{copy.profile.technical}</h3>
									<ul className="tag-list">
										{member.technicalRange.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</article>
							</Reveal>
							<Reveal>
								<article className="profile-detail">
									<span>{localizeDigits("03", locale)}</span>
									<h3>{copy.profile.remit}</h3>
									<ul>
										{member.deliveryRemit[locale].map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</article>
							</Reveal>
						</div>
					</div>
				</section>

				<section className="profile-cta" aria-labelledby="profile-cta-title">
					<div className="site-shell profile-cta__inner">
						<div>
							<p className="section-kicker">
								Moonlancer / {localizeDigits(member.index, locale)}
							</p>
							<h2 id="profile-cta-title">
								{locale === "fa"
									? "این تخصص را به مسئله‌ی واقعی محصول وصل کنیم."
									: "Connect this discipline to one accountable system."}
							</h2>
						</div>
						<Button asChild size="lg">
							<Link href={`${home}#intake`}>
								{copy.profile.cta}
								<DiagonalArrow data-icon="inline-end" aria-hidden="true" />
							</Link>
						</Button>
					</div>
				</section>

				<nav
					className="profile-pagination site-shell"
					aria-label={locale === "fa" ? "پروفایل اعضا" : "Member profiles"}
				>
					<Link href={`/${locale}/${previous.slug}`}>
						<BackIcon aria-hidden="true" />
						<span>
							<small>{locale === "fa" ? "عضو قبلی" : "Previous profile"}</small>
							<b className="latin-name" lang="en" dir="ltr">
								{previous.name}
							</b>
						</span>
					</Link>
					<Link href={`/${locale}/${next.slug}`}>
						<span>
							<small>{locale === "fa" ? "عضو بعدی" : "Next profile"}</small>
							<b className="latin-name" lang="en" dir="ltr">
								{next.name}
							</b>
						</span>
						<NextIcon aria-hidden="true" />
					</Link>
				</nav>
			</main>
			<StudioFooter locale={locale} />
		</div>
	);
}
