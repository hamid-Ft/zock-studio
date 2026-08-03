import {
	ArrowDown,
	ArrowUpLeft,
	ArrowUpRight,
	Check,
	Clock3,
	ExternalLink,
	ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getPublishedCaseStudies } from "@/content/case-studies";
import { members } from "@/content/studio-content";
import {
	contactEmail,
	founderLinkedIn,
	getSiteCopy,
} from "@/content/moonlancer-content";
import { localizeDigits, type Locale } from "@/lib/i18n";
import { createProfessionalServiceJsonLd } from "@/lib/structured-data";
import { OrbitalField } from "./orbital-field";
import { Reveal } from "./reveal";
import { StudioFooter, StudioHeader } from "./studio-chrome";

export async function StudioLanding({ locale }: { locale: Locale }) {
	const copy = getSiteCopy(locale);
	const publishedCases = getPublishedCaseStudies(locale);
	const DiagonalArrow = locale === "fa" ? ArrowUpLeft : ArrowUpRight;

	return (
		<div className="studio-page" dir={locale === "fa" ? "rtl" : "ltr"}>
			<JsonLd data={createProfessionalServiceJsonLd(locale)} />
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
									<Link
										href={`/${locale}/contact`}
										data-umami-event="cta_click"
										data-umami-event-location="hero"
									>
										{copy.hero.primary}
										<DiagonalArrow data-icon="inline-end" aria-hidden="true" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<Link href="#work">
										{copy.hero.secondary}
										<ArrowDown data-icon="inline-end" aria-hidden="true" />
									</Link>
								</Button>
							</div>
							<p className="hero__availability">
								<ShieldCheck aria-hidden="true" />
								{copy.hero.note}
							</p>
						</div>
						<OrbitalField />
					</div>
				</section>

				<section
					className="studio-section problem-section"
					aria-labelledby="problem-title"
				>
					<div className="site-shell">
						<Reveal className="section-heading">
							<p className="section-kicker">{copy.problems.kicker}</p>
							<div>
								<h2 id="problem-title">{copy.problems.title}</h2>
								<p>{copy.problems.intro}</p>
							</div>
						</Reveal>
						<div className="problem-grid">
							{copy.problems.items.map((item, index) => (
								<Reveal key={item}>
									<article className="problem-card">
										<span>
											{localizeDigits(
												String(index + 1).padStart(2, "0"),
												locale,
											)}
										</span>
										<p>{item}</p>
									</article>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section
					className="studio-section outcome-section"
					aria-labelledby="outcome-title"
				>
					<div className="site-shell outcome-section__inner">
						<Reveal className="section-heading section-heading--compact">
							<p className="section-kicker">{copy.outcomes.kicker}</p>
							<div>
								<h2 id="outcome-title">{copy.outcomes.title}</h2>
							</div>
						</Reveal>
						<ul className="outcome-list">
							{copy.outcomes.items.map((item) => (
								<li key={item}>
									<Check aria-hidden="true" />
									{item}
								</li>
							))}
						</ul>
					</div>
				</section>

				<section
					className="studio-section offers-section"
					id="offers"
					aria-labelledby="offers-title"
				>
					<div className="site-shell">
						<Reveal className="section-heading">
							<p className="section-kicker">{copy.offers.kicker}</p>
							<div>
								<h2 id="offers-title">{copy.offers.title}</h2>
								<p>{copy.offers.intro}</p>
							</div>
						</Reveal>
						<div className="offer-grid">
							{copy.offers.items.map((offer) => (
								<Reveal key={offer.id}>
									<Card className="offer-card">
										<CardHeader>
											<span className="offer-card__number">{offer.number}</span>
											<CardTitle>
												<h3>{offer.title}</h3>
											</CardTitle>
											<CardDescription>{offer.when}</CardDescription>
										</CardHeader>
										<CardContent>
											<p className="offer-card__duration">
												<Clock3 aria-hidden="true" />
												{offer.duration}
											</p>
											<p>{offer.deliverable}</p>
										</CardContent>
										<CardFooter>
											<Button asChild variant="outline">
												<Link
													href={`/${locale}/contact?service=${offer.id}`}
													data-umami-event="cta_click"
													data-umami-event-location="offer"
													data-umami-event-service={offer.id}
												>
													{offer.cta}
													<DiagonalArrow
														data-icon="inline-end"
														aria-hidden="true"
													/>
												</Link>
											</Button>
										</CardFooter>
									</Card>
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
						<div className="evidence-grid">
							{publishedCases.length > 0
								? publishedCases.map((study) => (
										<Card key={study.id} className="evidence-card">
											<CardHeader>
												<CardTitle>
													<h3>{study.title}</h3>
												</CardTitle>
												<CardDescription>{study.summary}</CardDescription>
											</CardHeader>
											<CardContent>
												<p>
													<strong>{copy.work.labels.result}</strong>
													{study.result}
												</p>
											</CardContent>
											<CardFooter>
												<Button asChild variant="outline">
													<Link
														href={`/${locale}/work/${study.slug}`}
														data-umami-event="case_open"
														data-umami-event-case={study.slug}
													>
														{copy.work.labels.read}
														<DiagonalArrow
															data-icon="inline-end"
															aria-hidden="true"
														/>
													</Link>
												</Button>
											</CardFooter>
										</Card>
									))
								: copy.work.pendingThemes.map((theme) => (
										<Card
											key={theme.title}
											className="evidence-card evidence-card--pending"
										>
											<CardHeader>
												<span className="evidence-card__status">
													<ShieldCheck aria-hidden="true" />
													{copy.work.pendingLabel}
												</span>
												<CardTitle>
													<h3>{theme.title}</h3>
												</CardTitle>
												<CardDescription>{theme.description}</CardDescription>
											</CardHeader>
										</Card>
									))}
						</div>
					</div>
				</section>

				<section
					className="studio-section domains-section"
					aria-labelledby="domains-title"
				>
					<div className="site-shell domains-section__inner">
						<Reveal className="section-heading section-heading--compact">
							<p className="section-kicker">{copy.domains.kicker}</p>
							<div>
								<h2 id="domains-title">{copy.domains.title}</h2>
							</div>
						</Reveal>
						<ul className="domain-list">
							{copy.domains.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
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
						<ol className="process-grid">
							{copy.process.items.map((item) => (
								<li key={item.number}>
									<span>{item.number}</span>
									<h3>{item.title}</h3>
									<p>{item.text}</p>
								</li>
							))}
						</ol>
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
							</div>
						</Reveal>
						<Reveal>
							<article className="founder-card">
								<div className="founder-card__monogram" aria-hidden="true">
									HF
								</div>
								<div>
									<p className="section-kicker">{copy.team.founderRole}</p>
									<h3>Hamid Fattahi</h3>
									<p>{copy.team.founderSummary}</p>
									<p className="founder-card__response">
										<Clock3 aria-hidden="true" />
										{copy.team.response}
									</p>
								</div>
								<div className="founder-card__links">
									<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
									<a href={founderLinkedIn} target="_blank" rel="noreferrer">
										LinkedIn
										<ExternalLink aria-hidden="true" />
									</a>
								</div>
							</article>
						</Reveal>
						<div className="network-heading">
							<h3>{copy.team.networkTitle}</h3>
							<p>{copy.team.networkIntro}</p>
						</div>
						<div className="team-grid team-grid--compact">
							{members.map((member) => (
								<Link
									key={member.slug}
									className="team-member"
									href={`/${locale}/${member.slug}`}
								>
									<span className="team-member__index">
										{localizeDigits(member.index, locale)}
									</span>
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
							))}
						</div>
					</div>
				</section>

				<section className="final-cta" aria-labelledby="final-cta-title">
					<div className="site-shell final-cta__inner">
						<div>
							<p className="section-kicker">Moonlancer</p>
							<h2 id="final-cta-title">{copy.finalCta.title}</h2>
							<p>{copy.finalCta.body}</p>
						</div>
						<Button asChild size="lg">
							<Link
								href={`/${locale}/contact`}
								data-umami-event="cta_click"
								data-umami-event-location="final"
							>
								{copy.finalCta.cta}
								<DiagonalArrow data-icon="inline-end" aria-hidden="true" />
							</Link>
						</Button>
					</div>
				</section>
			</main>
			<StudioFooter locale={locale} />
		</div>
	);
}
