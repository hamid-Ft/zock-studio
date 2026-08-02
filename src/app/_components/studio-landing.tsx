import {
	ArrowDown,
	ArrowUpLeft,
	ArrowUpRight,
	CheckCircle2,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { members, studioCopy } from "@/content/studio-content";
import { localizeDigits, type Locale } from "@/lib/i18n";
import { OrbitalField } from "./orbital-field";
import { ProjectIntake } from "./project-intake";
import { Reveal } from "./reveal";
import { StudioFooter, StudioHeader } from "./studio-chrome";

export function StudioLanding({ locale }: { locale: Locale }) {
	const copy = studioCopy[locale];
	const DiagonalArrow = locale === "fa" ? ArrowUpLeft : ArrowUpRight;

	return (
		<div className="studio-page" dir={locale === "fa" ? "rtl" : "ltr"}>
			<StudioHeader locale={locale} onHomepage />
			<main id="main-content">
				<section className="hero" aria-labelledby="hero-title">
					<div className="site-shell hero__layout">
						<div className="hero__copy">
							<p className="hero__eyebrow">
								<span aria-hidden="true" />
								{copy.hero.eyebrow}
							</p>
							<h1 id="hero-title">{copy.hero.headline}</h1>
							<p className="hero__body">{copy.hero.body}</p>
							<div className="hero__actions">
								<Button asChild size="lg">
									<Link href="#intake">
										{copy.hero.primary}
										<DiagonalArrow data-icon="inline-end" aria-hidden="true" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<Link href="#capabilities">
										{copy.hero.secondary}
										<ArrowDown data-icon="inline-end" aria-hidden="true" />
									</Link>
								</Button>
							</div>
							<p className="hero__availability">
								<span aria-hidden="true" />
								{copy.hero.availability}
							</p>
						</div>
						<OrbitalField />
					</div>
				</section>

				<section
					className="signal-strip"
					aria-label={
						locale === "fa" ? "دامنه‌های عملیاتی" : "Operational domains"
					}
				>
					<div className="site-shell signal-strip__inner">
						{copy.signals.map((signal, index) => (
							<div className="signal" key={signal.label}>
								<span className="signal__index">
									{localizeDigits(String(index + 1).padStart(2, "0"), locale)}
								</span>
								<span className="signal__pulse" aria-hidden="true" />
								<div>
									<strong>{signal.label}</strong>
									<span>{signal.value}</span>
								</div>
							</div>
						))}
					</div>
				</section>

				<section
					className="studio-section capabilities-section"
					id="capabilities"
					aria-labelledby="capabilities-title"
				>
					<div className="site-shell">
						<Reveal className="section-heading">
							<p className="section-kicker">{copy.capabilities.kicker}</p>
							<div>
								<h2 id="capabilities-title">{copy.capabilities.title}</h2>
								<p>{copy.capabilities.intro}</p>
							</div>
						</Reveal>
						<div className="capability-list">
							{copy.capabilities.items.map((item) => (
								<Reveal key={item.number}>
									<article className="capability-row">
										<span className="capability-row__number">
											{item.number}
										</span>
										<h3>{item.title}</h3>
										<p>{item.scope}</p>
										<ul
											aria-label={
												locale === "fa" ? "برچسب‌های دامنه" : "Domain tags"
											}
										>
											{item.tags.map((tag) => (
												<li key={tag}>{tag}</li>
											))}
										</ul>
									</article>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section
					className="studio-section work-section"
					id="work"
					aria-labelledby="work-title"
				>
					<div className="site-shell">
						<Reveal className="section-heading">
							<p className="section-kicker">{copy.work.kicker}</p>
							<div>
								<h2 id="work-title">{copy.work.title}</h2>
								<p>{copy.work.intro}</p>
							</div>
						</Reveal>
						<div className="pattern-list">
							{copy.work.items.map((pattern) => (
								<Reveal key={pattern.number}>
									<article className="system-pattern">
										<header>
											<span>{pattern.number}</span>
											<h3>{pattern.title}</h3>
											<span className="system-pattern__status">
												<i aria-hidden="true" />
												{copy.work.kicker}
											</span>
										</header>
										<div className="system-pattern__constraint">
											<span>{copy.work.labels.constraint}</span>
											<p>{pattern.constraint}</p>
										</div>
										<div className="system-pattern__grid">
											<div>
												<span>{copy.work.labels.surfaces}</span>
												<ul>
													{pattern.surfaces.map((surface) => (
														<li key={surface}>{surface}</li>
													))}
												</ul>
											</div>
											<div>
												<span>{copy.work.labels.boundary}</span>
												<p>{pattern.boundary}</p>
											</div>
											<div>
												<span>{copy.work.labels.effect}</span>
												<p>{pattern.effect}</p>
											</div>
											<div>
												<span>{copy.work.labels.evidence}</span>
												<p>{pattern.evidence}</p>
											</div>
										</div>
									</article>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section
					className="studio-section team-section"
					id="team"
					aria-labelledby="team-title"
				>
					<div className="site-shell">
						<Reveal className="section-heading">
							<p className="section-kicker">{copy.team.kicker}</p>
							<div>
								<h2 id="team-title">{copy.team.title}</h2>
								<p>{copy.team.intro}</p>
							</div>
						</Reveal>
						<div className="team-grid">
							{members.map((member) => (
								<Reveal key={member.slug}>
									<Link
										className="team-member"
										href={`/${locale}/${member.slug}`}
									>
										<span className="team-member__index">
											{localizeDigits(member.index, locale)}
										</span>
										<div className="team-member__signal" aria-hidden="true">
											<i />
											<i />
											<i />
										</div>
										<div className="team-member__body">
											<h3 className="latin-name" lang="en" dir="ltr">
												{member.name}
											</h3>
											<p className="team-member__role">{member.role[locale]}</p>
											<p>{member.responsibility[locale]}</p>
										</div>
										<span className="team-member__link">
											{copy.team.profileCta}
											<DiagonalArrow aria-hidden="true" />
										</span>
									</Link>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section
					className="studio-section process-section"
					id="process"
					aria-labelledby="process-title"
				>
					<div className="site-shell">
						<Reveal className="section-heading">
							<p className="section-kicker">{copy.process.kicker}</p>
							<div>
								<h2 id="process-title">{copy.process.title}</h2>
							</div>
						</Reveal>
						<div className="process-grid">
							{copy.process.items.map((item) => (
								<Reveal key={item.number}>
									<article className="process-step">
										<span>{item.number}</span>
										<div className="process-step__axis" aria-hidden="true">
											<i />
										</div>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</article>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section className="fit-section" aria-labelledby="fit-title">
					<div className="site-shell">
						<Reveal className="fit-section__inner">
							<div>
								<p className="section-kicker">{copy.fit.kicker}</p>
								<h2 id="fit-title">{copy.fit.title}</h2>
							</div>
							<div>
								<p>{copy.fit.body}</p>
								<Button asChild size="lg">
									<Link href="#intake">
										{copy.fit.cta}
										<DiagonalArrow data-icon="inline-end" aria-hidden="true" />
									</Link>
								</Button>
							</div>
						</Reveal>
					</div>
				</section>

				<section
					className="studio-section intake-section"
					id="intake"
					aria-labelledby="intake-title"
				>
					<div className="site-shell">
						<Reveal className="section-heading">
							<p className="section-kicker">{copy.intake.kicker}</p>
							<div>
								<h2 id="intake-title">{copy.intake.title}</h2>
								<p>{copy.intake.intro}</p>
							</div>
						</Reveal>
						<Reveal>
							<ProjectIntake locale={locale} />
						</Reveal>
						<div className="intake-section__assurance">
							<CheckCircle2 aria-hidden="true" />
							<p>
								{locale === "fa"
									? "اگر ارسال با خطا روبه‌رو شود، پاسخ‌ها حفظ می‌شوند؛ هیچ نام، تصویر یا نتیجه‌ای هم بدون تأیید مشتری منتشر نخواهد شد."
									: "Your answers survive transient errors, and no project claim is published without approval."}
							</p>
						</div>
					</div>
				</section>
			</main>
			<StudioFooter locale={locale} />
		</div>
	);
}
