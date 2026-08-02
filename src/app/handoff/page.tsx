import type { Metadata } from "next";

import { StudioFooter, StudioHeader } from "../_components/studio-chrome";

export const metadata: Metadata = {
	title: "Implementation Handoff",
	description:
		"Moonlancer public-experience implementation contract for routes, content, motion, accessibility, and release QA.",
	robots: { index: false, follow: false },
};

const contracts = [
	{
		number: "01",
		title: "Route continuity",
		items: [
			"English studio at /",
			"Persian studio at /fa",
			"Eight member slugs under /en and /fa",
			"Legacy unprefixed member URLs redirect to English profiles",
		],
	},
	{
		number: "02",
		title: "Content boundary",
		items: [
			"Operational problem before capability copy",
			"Profiles contain delivery evidence only",
			"Representative patterns carry no invented metrics",
			"English and Persian share equivalent depth",
		],
	},
	{
		number: "03",
		title: "Motion runtime",
		items: [
			"Static SVG is always complete",
			"Orbit pauses offscreen and in hidden tabs",
			"Pointer movement is capped at 8px",
			"Reduced motion keeps the full composition visible",
		],
	},
	{
		number: "04",
		title: "Lead ownership",
		items: [
			"/api/leads is the single delivery path",
			"Draft answers survive transient errors",
			"Production requires MOONLANCER_LEADS_WEBHOOK_URL",
			"Contact data appears only after qualification",
		],
	},
	{
		number: "05",
		title: "Accessibility",
		items: [
			"Semantic landmarks and headings",
			"Fieldsets and legends in project intake",
			"Visible 2px focus with 3px offset",
			"44px minimum action targets and live status feedback",
		],
	},
	{
		number: "06",
		title: "Release matrix",
		items: [
			"Widths: 390, 768, 1024, 1440, 1920",
			"Chrome, Safari, and Firefox",
			"Keyboard, zoom, and reduced-motion passes",
			"Canonical, hreflang, route, and private-data checks",
		],
	},
];

export default function HandoffPage() {
	return (
		<div className="studio-page">
			<StudioHeader locale="en" />
			<main id="main-content" className="handoff-page site-shell">
				<section className="handoff-page__hero">
					<div>
						<p className="section-kicker">Internal reference / v1.0</p>
						<h1>Implementation contract.</h1>
						<p>
							The public experience is governed by one route, content, motion,
							accessibility, and lead-ownership contract. This page is
							intentionally concise and excluded from indexing.
						</p>
					</div>
				</section>
				<section className="handoff-grid" aria-label="Implementation gates">
					{contracts.map((contract) => (
						<article key={contract.number}>
							<span>{contract.number}</span>
							<h2>{contract.title}</h2>
							<ul>
								{contract.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					))}
				</section>
			</main>
			<StudioFooter locale="en" />
		</div>
	);
}
