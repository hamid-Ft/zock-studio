'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
	ArrowUpRight,
	BriefcaseBusiness,
	ChartNoAxesCombined,
	Code2,
	ExternalLink,
	Layers3,
	Map,
	MonitorCog,
	Network,
	PanelTop,
	Rocket,
	ShoppingBag,
	Sparkles,
	UserRound,
	UsersRound,
	WalletCards,
} from 'lucide-react';

import DotPattern from '@/components/ui/dot-pattern';
import { Spotlight } from '@/components/ui/spot-light';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LocaleLink } from '@/components/i18n/locale-link';
import { getLocaleFromPathname } from '@/lib/i18n';
import { TeamDock } from './_components/team-dock';

const capabilities = [
	{
		title: 'Product Interfaces',
		icon: PanelTop,
		items: ['Dashboards', 'Admin panels', 'Seller tools', 'Operational apps'],
	},
	{
		title: 'Commerce Systems',
		icon: ShoppingBag,
		items: ['B2B ordering', 'Marketplaces', 'Catalogs', 'Delivery flows'],
	},
	{
		title: 'Backend Platforms',
		icon: Network,
		items: ['Microservices', 'Payments', 'Messaging', 'Integrations'],
	},
	{
		title: 'Mobile Experiences',
		icon: MonitorCog,
		items: ['Cross-platform apps', 'Maps', 'Realtime features', 'Field tools'],
	},
];

const teamMembers = [
	{
		name: 'Hamid Fattahi',
		role: 'Frontend / Product UI',
		href: '/hamid-ft',
		focus: 'Next.js interfaces for ERP, commerce, fintech, maps, and management panels.',
	},
	{
		name: 'Sepide Soltanpour',
		role: 'Frontend / AI UI',
		href: '/sepide-soltanpour',
		focus: 'Admin panels, AI consultation interfaces, data-heavy forms, charts, maps, and clean frontend delivery.',
	},
	{
		name: 'Mohammadreza Vasebi',
		role: 'React Native Mobile',
		href: '/mohammadreza-vasebi',
		focus: 'Cross-platform apps, shopping flows, delivery, loans, QR scanning, realtime features, and maps.',
	},
	{
		name: 'MohammadReza Parsaeian',
		role: 'Backend Lead',
		href: '/mohammadReza-Parsaeian',
		focus: 'Payment services, GPS platforms, backend leadership, monitoring, distributed services, and infrastructure.',
	},
	{
		name: 'Mehdi Alikhani',
		role: 'Laravel / Magento Backend',
		href: '/mehdi-alikhani',
		focus: 'Headless commerce, Magento, Laravel microservices, payment packages, message brokers, and DevOps.',
	},
	{
		name: 'Keyvan Moradkhani',
		role: 'Laravel Full-stack',
		href: '/keyvan-moradkhani',
		focus: 'Multi-vendor commerce, REST APIs, tax automation, promotion dashboards, and full-stack delivery.',
	},
	{
		name: 'Omid Nikroo',
		role: '.NET Backend',
		href: '/omid-nikroo',
		focus: 'ERP modules, warehouse, sales, distribution, HR, route planning, SignalR, and database optimization.',
	},
	{
		name: 'Iman Jafari',
		role: 'Frontend Developer',
		href: '/iman-jafari',
		focus: 'React, Next.js, TypeScript, Tailwind, interactive frontend, forms, state, and modern web UI.',
	},
];

const serviceGroups = [
	{
		title: 'Commerce & Marketplaces',
		icon: ShoppingBag,
		description:
			'Multi-vendor stores, seller panels, catalog and pricing workflows, checkout surfaces, delivery options, and backoffice operations.',
	},
	{
		title: 'ERP & Internal Tools',
		icon: BriefcaseBusiness,
		description:
			'Warehouse, sales, HR, finance, tax automation, reporting dashboards, role-based panels, and workflow-heavy operational software.',
	},
	{
		title: 'Mobile & Field Operations',
		icon: MonitorCog,
		description:
			'React Native apps, route planning, map interfaces, PDA workflows, QR scanning, realtime communication, and field-team tooling.',
	},
	{
		title: 'Backend Platforms',
		icon: Network,
		description:
			'APIs, microservices, payment gateways, messaging, caching, database design, monitoring, integrations, and deployment-ready services.',
	},
	{
		title: 'AI-Assisted Product UI',
		icon: Sparkles,
		description:
			'AI consultation surfaces, assistant workflows, structured prompts, personalized interactions, internal automation, and productized AI features.',
	},
	{
		title: 'Websites & Launch Systems',
		icon: PanelTop,
		description:
			'SEO-aware websites, WordPress builds, landing pages, industrial websites, content structures, brand implementation, and responsive launches.',
	},
];

const signals = [
	{ label: 'Delivery model', value: 'Focused squads' },
	{ label: 'Core surface', value: 'Web + Mobile' },
	{ label: 'Product domains', value: 'Commerce / ERP / Fintech' },
	{ label: 'Build style', value: 'Design-led engineering' },
];

const work = [
	{
		title: 'Commerce Platform',
		thumbnail: '/projects/aldy.png',
		description: 'Multi-vendor shopping, seller operations, admin workflows, and payment-facing product surfaces.',
	},
	{
		title: 'Food Operations',
		thumbnail: '/projects/ghajarifood.png',
		description: 'Catering, delivery management, zone pricing, sales operations, and internal management tools.',
	},
	{
		title: 'Route & Retail Tools',
		thumbnail: '/projects/desna.png',
		description: 'Map-heavy B2B workflows, field execution, retailer ordering, survey, and planning interfaces.',
	},
	{
		title: 'Industrial Websites',
		thumbnail: '/projects/nikpu.png',
		description: 'Brand-aligned public websites, technical content structures, responsive pages, and SEO-ready delivery.',
	},
	{
		title: 'Agency Systems',
		thumbnail: '/projects/niklinkagency.png',
		description: 'Client-facing web experiences, WordPress builds, launch-ready layouts, and conversion-focused pages.',
	},
	{
		title: 'Management Panels',
		thumbnail: '/projects/ghajari-manager.png',
		description: 'Dense operational interfaces for teams who repeat actions, compare records, and manage daily workflows.',
	},
];

const process = [
	{
		title: 'Map the operation',
		icon: Map,
		text: 'We clarify workflows, roles, data movement, constraints, and the decisions the interface needs to support.',
	},
	{
		title: 'Shape the product',
		icon: Sparkles,
		text: 'We turn requirements into usable surfaces: screens, states, edge cases, navigation, and responsive behavior.',
	},
	{
		title: 'Build production systems',
		icon: Code2,
		text: 'We implement with maintainable architecture, API integration, performance checks, and deployment awareness.',
	},
	{
		title: 'Operate and improve',
		icon: Rocket,
		text: 'We keep the product useful after launch through iteration, monitoring, bug fixing, and feature expansion.',
	},
];

const stack = [
	'Next.js',
	'React',
	'TypeScript',
	'Tailwind CSS',
	'Node.js',
	'Laravel',
	'Golang',
	'React Native',
	'PostgreSQL',
	'MongoDB',
	'Redis',
	'Docker',
	'RabbitMQ',
	'GraphQL',
	'Mapbox',
	'Chart.js',
];

const homeEn = {
	capabilities,
	teamMembers,
	serviceGroups,
	signals,
	work,
	process,
	stack,
	ui: {
		startProject: 'Start a project',
		badge: 'Managed digital product team',
		heroTitle: 'Operational software for teams that need to move faster.',
		heroText:
			'A compact product studio for commerce, ERP, logistics, fintech, maps, AI-assisted interfaces, mobile apps, and backend platforms. We design, build, integrate, and improve the systems that run daily work.',
		capabilitiesCta: 'Capabilities',
		viewWork: 'View Work',
		teamOs: 'Team Operating System',
		focus: {
			fintech: ['Fintech', 'Payments, BNPL, wallets'],
			fieldOps: ['Field ops', 'Routes, zones, mobile workflows'],
			management: ['Management', 'Dashboards, reports, panels'],
		},
		team: {
			kicker: 'Team',
			title: 'A compact squad covering product UI, mobile, backend, commerce, ERP, and platform work.',
			text: 'Moon Studio is structured around delivery roles clients normally have to hire separately. Each person has an individual portfolio, but the value is in how the skills combine into one project team.',
		},
		services: {
			kicker: 'Services',
			title: 'What clients can ask us to build.',
			text: 'The homepage should sell capabilities, not only CV technology. These are project types the team can realistically deliver from the skills already represented across the portfolios.',
		},
		work: {
			kicker: 'Selected Work',
			title: 'Built for commerce, operations, maps, and management.',
			text: 'A sample of product surfaces and systems delivered across marketplace, retail, food operations, agency, and industrial workflows.',
		},
		process: {
			kicker: 'Process',
			title: 'Organized delivery from unclear workflows to usable systems.',
			step: 'Step',
		},
		stackRange: 'Stack Range',
		bestFitTitle: 'Best fit',
		bestFit:
			'Teams that need serious product surfaces without the overhead of assembling separate design, frontend, backend, mobile, and ops tracks.',
	},
};

const homeFa: typeof homeEn = {
	capabilities: [
		{ title: 'Product Interfaces', icon: PanelTop, items: ['Dashboards', 'Admin panels', 'Seller tools', 'Operational apps'] },
		{ title: 'Commerce Systems', icon: ShoppingBag, items: ['B2B ordering', 'Marketplaces', 'Catalogs', 'Delivery flows'] },
		{ title: 'Backend Platforms', icon: Network, items: ['Microservices', 'Payments', 'Messaging', 'Integrations'] },
		{ title: 'Mobile Experiences', icon: MonitorCog, items: ['Cross-platform apps', 'Maps', 'Realtime features', 'Field tools'] },
	],
	teamMembers: [
		{
			name: 'Hamid Fattahi',
			role: 'Frontend / Product UI',
			href: '/hamid-ft',
			focus: 'ساخت interface های Next.js برای ERP، commerce، fintech، maps و management panels.',
		},
		{
			name: 'Sepide Soltanpour',
			role: 'Frontend / AI UI',
			href: '/sepide-soltanpour',
			focus: 'Admin panels، AI consultation interfaces، فرم های داده محور، charts، maps و تحویل تمیز frontend.',
		},
		{
			name: 'Mohammadreza Vasebi',
			role: 'React Native Mobile',
			href: '/mohammadreza-vasebi',
			focus: 'Cross-platform apps، shopping flows، delivery، loans، QR scanning، realtime features و maps.',
		},
		{
			name: 'MohammadReza Parsaeian',
			role: 'Backend Lead',
			href: '/mohammadReza-Parsaeian',
			focus: 'Payment services، GPS platforms، backend leadership، monitoring، distributed services و infrastructure.',
		},
		{
			name: 'Mehdi Alikhani',
			role: 'Laravel / Magento Backend',
			href: '/mehdi-alikhani',
			focus: 'Headless commerce، Magento، Laravel microservices، payment packages، message brokers و DevOps.',
		},
		{
			name: 'Keyvan Moradkhani',
			role: 'Laravel Full-stack',
			href: '/keyvan-moradkhani',
			focus: 'Multi-vendor commerce، REST APIs، tax automation، promotion dashboards و full-stack delivery.',
		},
		{
			name: 'Omid Nikroo',
			role: '.NET Backend',
			href: '/omid-nikroo',
			focus: 'ERP modules، warehouse، sales، distribution، HR، route planning، SignalR و database optimization.',
		},
		{
			name: 'Iman Jafari',
			role: 'Frontend Developer',
			href: '/iman-jafari',
			focus: 'React، Next.js، TypeScript، Tailwind، interactive frontend، forms، state و modern web UI.',
		},
	],
	serviceGroups: [
		{
			title: 'Commerce & Marketplaces',
			icon: ShoppingBag,
			description: 'Multi-vendor stores، seller panels، catalog و pricing workflows، checkout surfaces، delivery options و backoffice operations.',
		},
		{
			title: 'ERP & Internal Tools',
			icon: BriefcaseBusiness,
			description: 'Warehouse، sales، HR، finance، tax automation، reporting dashboards، role-based panels و software عملیاتی با workflow های سنگین.',
		},
		{
			title: 'Mobile & Field Operations',
			icon: MonitorCog,
			description: 'React Native apps، route planning، map interfaces، PDA workflows، QR scanning، realtime communication و ابزارهای field-team.',
		},
		{
			title: 'Backend Platforms',
			icon: Network,
			description: 'APIs، microservices، payment gateways، messaging، caching، database design، monitoring، integrations و services آماده deployment.',
		},
		{
			title: 'AI-Assisted Product UI',
			icon: Sparkles,
			description: 'AI consultation surfaces، assistant workflows، structured prompts، personalized interactions، internal automation و productized AI features.',
		},
		{
			title: 'Websites & Launch Systems',
			icon: PanelTop,
			description: 'SEO-aware websites، WordPress builds، landing pages، industrial websites، content structures، brand implementation و responsive launches.',
		},
	],
	signals: [
		{ label: 'مدل تحویل', value: 'Focused squads' },
		{ label: 'سطح اصلی', value: 'Web + Mobile' },
		{ label: 'حوزه محصول', value: 'Commerce / ERP / Fintech' },
		{ label: 'سبک ساخت', value: 'Design-led engineering' },
	],
	work: [
		{
			title: 'Commerce Platform',
			thumbnail: '/projects/aldy.png',
			description: 'Multi-vendor shopping، seller operations، admin workflows و product surfaces مرتبط با payment.',
		},
		{
			title: 'Food Operations',
			thumbnail: '/projects/ghajarifood.png',
			description: 'Catering، delivery management، zone pricing، sales operations و internal management tools.',
		},
		{
			title: 'Route & Retail Tools',
			thumbnail: '/projects/desna.png',
			description: 'Workflow های B2B مبتنی بر maps، field execution، retailer ordering، survey و planning interfaces.',
		},
		{
			title: 'Industrial Websites',
			thumbnail: '/projects/nikpu.png',
			description: 'Public websites هماهنگ با brand، technical content structures، responsive pages و SEO-ready delivery.',
		},
		{
			title: 'Agency Systems',
			thumbnail: '/projects/niklinkagency.png',
			description: 'Client-facing web experiences، WordPress builds، launch-ready layouts و conversion-focused pages.',
		},
		{
			title: 'Management Panels',
			thumbnail: '/projects/ghajari-manager.png',
			description: 'Operational interfaces فشرده برای تیم هایی که records را مقایسه و workflow روزانه را مدیریت می کنند.',
		},
	],
	process: [
		{
			title: 'نقشه برداری از عملیات',
			icon: Map,
			text: 'Workflow ها، نقش ها، data movement، محدودیت ها و تصمیم هایی را که interface باید پشتیبانی کند روشن می کنیم.',
		},
		{
			title: 'شکل دادن محصول',
			icon: Sparkles,
			text: 'نیازمندی ها را به surfaces قابل استفاده تبدیل می کنیم: screens، states، edge cases، navigation و responsive behavior.',
		},
		{
			title: 'ساخت production systems',
			icon: Code2,
			text: 'با architecture قابل نگهداری، API integration، performance checks و deployment awareness پیاده سازی می کنیم.',
		},
		{
			title: 'عملیات و بهبود',
			icon: Rocket,
			text: 'بعد از launch با iteration، monitoring، bug fixing و feature expansion محصول را مفید نگه می داریم.',
		},
	],
	stack,
	ui: {
		startProject: 'شروع پروژه',
		badge: 'تیم مدیریت شده digital product',
		heroTitle: 'Operational software برای تیم هایی که باید سریع تر حرکت کنند.',
		heroText:
			'Moon Studio یک product studio فشرده برای commerce، ERP، logistics، fintech، maps، AI-assisted interfaces، mobile apps و backend platforms است. ما سیستم های کار روزانه را design، build، integrate و improve می کنیم.',
		capabilitiesCta: 'توانمندی ها',
		viewWork: 'مشاهده کارها',
		teamOs: 'Team Operating System',
		focus: {
			fintech: ['Fintech', 'Payments، BNPL، wallets'],
			fieldOps: ['Field ops', 'Routes، zones، mobile workflows'],
			management: ['Management', 'Dashboards، reports، panels'],
		},
		team: {
			kicker: 'تیم',
			title: 'یک squad فشرده برای Product UI، mobile، backend، commerce، ERP و platform work.',
			text: 'Moon Studio حول نقش هایی شکل گرفته که client معمولا باید جداگانه استخدام کند. هر نفر portfolio خودش را دارد، اما ارزش اصلی در ترکیب این skill ها در یک project team است.',
		},
		services: {
			kicker: 'خدمات',
			title: 'چیزهایی که clients می توانند از ما بخواهند بسازیم.',
			text: 'Homepage باید قابلیت ها را بفروشد، نه فقط تکنولوژی CV را. این ها project type هایی هستند که تیم با skill های موجود می تواند واقع گرایانه تحویل دهد.',
		},
		work: {
			kicker: 'نمونه کارها',
			title: 'ساخته شده برای commerce، operations، maps و management.',
			text: 'نمونه ای از product surfaces و systems که در marketplace، retail، food operations، agency و industrial workflows تحویل داده شده اند.',
		},
		process: {
			kicker: 'فرایند',
			title: 'تحویل سازمان یافته از workflow مبهم تا system قابل استفاده.',
			step: 'مرحله',
		},
		stackRange: 'Stack Range',
		bestFitTitle: 'Best fit',
		bestFit:
			'تیم هایی که product surfaces جدی می خواهند، بدون overhead ساخت جداگانه design، frontend، backend، mobile و ops tracks.',
	},
};

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.06,
			delayChildren: 0.12,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 22 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 220, damping: 24 },
	},
};

function AnimatedSection({
	children,
	className,
	id,
}: {
	children: React.ReactNode;
	className?: string;
	id?: string;
}) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.section
			id={id}
			variants={reduceMotion ? undefined : itemVariants}
			initial={reduceMotion ? undefined : 'hidden'}
			whileInView={reduceMotion ? undefined : 'show'}
			viewport={{ once: true, margin: '-80px' }}
			className={className}>
			{children}
		</motion.section>
	);
}

function SectionTitle({
	icon: Icon,
	kicker,
	title,
	text,
}: {
	icon: typeof BriefcaseBusiness;
	kicker: string;
	title: string;
	text?: string;
}) {
	return (
		<div className="mb-6 max-w-3xl">
			<p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase text-cyan-300">
				<Icon className="size-4" />
				{kicker}
			</p>
			<h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
			{text ? <p className="mt-3 text-base leading-7 text-zinc-400">{text}</p> : null}
		</div>
	);
}

export default function Home() {
	const reduceMotion = useReducedMotion();
	const locale = getLocaleFromPathname(usePathname());
	const { capabilities, teamMembers, serviceGroups, signals, work, process, stack, ui } =
		locale === 'fa' ? homeFa : homeEn;

	return (
		<main className="min-h-dvh overflow-hidden bg-black text-white">
			<div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(244,114,182,0.12),transparent_24%),linear-gradient(180deg,#020617_0%,#050505_45%,#020617_100%)]" />
			<DotPattern width={24} height={24} cr={1} className="fixed inset-0 fill-white/[0.045]" />
			<Spotlight className="-top-40 left-0" fill="#67e8f9" />
			<TeamDock />

			<TracingBeam className="relative z-10 px-4 pb-28 sm:px-6 lg:px-10">
				<motion.div
					variants={reduceMotion ? undefined : containerVariants}
					initial={reduceMotion ? undefined : 'hidden'}
					animate={reduceMotion ? undefined : 'show'}
					className="mx-auto max-w-7xl pt-10 sm:pt-14 lg:pt-16">
					<motion.nav
						variants={reduceMotion ? undefined : itemVariants}
						className="mb-12 flex items-center justify-between gap-4">
						<LocaleLink
							href="/"
							className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-zinc-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
							<span className="size-2 rounded-full bg-cyan-300" />
							Moon Studio
						</LocaleLink>
						<Link
							href="mailto:hamidfattahi.a@gmail.com"
							className="hidden min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-zinc-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:inline-flex">
							{ui.startProject}
							<ArrowUpRight className="size-4" />
						</Link>
					</motion.nav>

					<section className="grid min-h-[78dvh] items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
						<motion.div variants={reduceMotion ? undefined : itemVariants} className="max-w-4xl">
							<div className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-200">
								<Sparkles className="size-4" />
								{ui.badge}
							</div>
							<h1 className="text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
								{ui.heroTitle}
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
								{ui.heroText}
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
									<Link href="#capabilities">
										<Layers3 className="mr-2 size-4" />
										{ui.capabilitiesCta}
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
									<Link href="#work">
										<ExternalLink className="mr-2 size-4" />
										{ui.viewWork}
									</Link>
								</Button>
							</div>
						</motion.div>

						<motion.aside variants={reduceMotion ? undefined : itemVariants} className="grid gap-4">
							<Card className="border-white/10 bg-white/[0.06] text-white shadow-2xl shadow-cyan-950/20 backdrop-blur">
								<CardHeader>
									<CardTitle className="text-xl">{ui.teamOs}</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-2 gap-3">
										{signals.map((signal) => (
											<div key={signal.label} className="rounded-lg border border-white/10 bg-black/20 p-4">
												<p className="text-xl font-semibold text-white">{signal.value}</p>
												<p className="mt-2 text-sm leading-5 text-zinc-400">{signal.label}</p>
											</div>
										))}
									</div>
									<Separator className="bg-white/10" />
									<div className="grid gap-3 text-sm">
										<FocusRow icon={WalletCards} label={ui.focus.fintech[0]} value={ui.focus.fintech[1]} />
										<FocusRow icon={Map} label={ui.focus.fieldOps[0]} value={ui.focus.fieldOps[1]} />
										<FocusRow icon={ChartNoAxesCombined} label={ui.focus.management[0]} value={ui.focus.management[1]} />
									</div>
								</CardContent>
							</Card>
						</motion.aside>
					</section>

					<AnimatedSection id="capabilities" className="grid gap-6 pb-16 lg:grid-cols-4">
						{capabilities.map((capability) => (
							<Card
								key={capability.title}
								className="border-white/10 bg-zinc-950/70 text-white shadow-xl shadow-black/20">
								<CardHeader>
									<div className="mb-2 flex size-11 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
										<capability.icon className="size-5" />
									</div>
									<CardTitle className="text-lg">{capability.title}</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-wrap gap-2">
									{capability.items.map((item) => (
										<span
											key={item}
											className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-200">
											{item}
										</span>
									))}
								</CardContent>
							</Card>
						))}
					</AnimatedSection>

					<AnimatedSection id="team" className="pb-16">
						<SectionTitle
							icon={UsersRound}
							kicker={ui.team.kicker}
							title={ui.team.title}
							text={ui.team.text}
						/>
						<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
							{teamMembers.map((member) => (
								<LocaleLink
									key={member.href}
									href={member.href}
									className="group rounded-lg border border-white/10 bg-white/[0.045] p-5 text-white transition hover:border-cyan-300/35 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
									<div className="mb-4 flex size-11 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
										<UserRound className="size-5" />
									</div>
									<div className="flex items-start justify-between gap-3">
										<div>
											<h3 className="text-lg font-semibold">{member.name}</h3>
											<p className="mt-1 text-sm text-cyan-200">{member.role}</p>
										</div>
										<ArrowUpRight className="mt-1 size-4 shrink-0 text-zinc-500 transition group-hover:text-cyan-200" />
									</div>
									<p className="mt-4 text-sm leading-6 text-zinc-400">{member.focus}</p>
								</LocaleLink>
							))}
						</div>
					</AnimatedSection>

					<AnimatedSection id="services" className="pb-16">
						<SectionTitle
							icon={Rocket}
							kicker={ui.services.kicker}
							title={ui.services.title}
							text={ui.services.text}
						/>
						<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
							{serviceGroups.map((service) => (
								<article
									key={service.title}
									className="rounded-lg border border-white/10 bg-zinc-950/70 p-5 text-white shadow-xl shadow-black/20 transition hover:border-cyan-300/35">
									<div className="mb-4 flex size-11 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
										<service.icon className="size-5" />
									</div>
									<h3 className="text-lg font-semibold">{service.title}</h3>
									<p className="mt-3 text-sm leading-6 text-zinc-400">{service.description}</p>
								</article>
							))}
						</div>
					</AnimatedSection>

					<AnimatedSection id="work" className="pb-16">
						<SectionTitle
							icon={Layers3}
							kicker={ui.work.kicker}
							title={ui.work.title}
							text={ui.work.text}
						/>
						<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
							{work.map((project, index) => (
								<motion.article
									key={project.title}
									initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
									whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
									viewport={{ once: true, margin: '-80px' }}
									transition={{ delay: index * 0.04, type: 'spring', stiffness: 180, damping: 22 }}
									whileHover={reduceMotion ? undefined : { y: -5 }}
									className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] backdrop-blur transition hover:border-cyan-300/35">
									<div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
										<Image
											src={project.thumbnail}
											alt={`${project.title} preview`}
											fill
											sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
											className="object-cover transition duration-300 group-hover:scale-105"
										/>
									</div>
									<div className="p-5">
										<h3 className="text-lg font-semibold text-white">{project.title}</h3>
										<p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
									</div>
								</motion.article>
							))}
						</div>
					</AnimatedSection>

					<div className="grid gap-10 lg:grid-cols-[1fr_360px]">
						<AnimatedSection id="process">
							<SectionTitle
								icon={BriefcaseBusiness}
								kicker={ui.process.kicker}
								title={ui.process.title}
							/>
							<div className="space-y-5">
								{process.map((step, index) => (
									<motion.article
										key={step.title}
										initial={reduceMotion ? undefined : { opacity: 0, x: -18 }}
										whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
										viewport={{ once: true, margin: '-80px' }}
										transition={{ delay: index * 0.04, type: 'spring', stiffness: 180, damping: 22 }}
										className="relative rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition hover:border-cyan-300/35 hover:bg-white/[0.07]">
										<div className="flex gap-4">
											<div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
												<step.icon className="size-5" />
											</div>
											<div>
												<p className="text-sm text-cyan-200">{ui.process.step} {index + 1}</p>
												<h3 className="mt-1 text-xl font-semibold text-white">{step.title}</h3>
												<p className="mt-3 text-sm leading-6 text-zinc-400">{step.text}</p>
											</div>
										</div>
									</motion.article>
								))}
							</div>
						</AnimatedSection>

						<aside className="space-y-6">
							<AnimatedSection>
								<Card className="border-white/10 bg-zinc-950/80 text-white">
									<CardHeader>
										<CardTitle className="flex items-center gap-2 text-xl">
											<Code2 className="size-5 text-cyan-300" />
											{ui.stackRange}
										</CardTitle>
									</CardHeader>
									<CardContent className="flex flex-wrap gap-2">
										{stack.map((item) => (
											<span
												key={item}
												className="rounded-md bg-white/[0.06] px-3 py-1.5 text-sm text-zinc-300">
												{item}
											</span>
										))}
									</CardContent>
								</Card>
							</AnimatedSection>

							<AnimatedSection>
								<Card className="border-cyan-300/25 bg-cyan-300/10 text-white">
									<CardContent className="p-5">
										<p className="text-sm uppercase text-cyan-200">{ui.bestFitTitle}</p>
										<p className="mt-4 text-sm leading-6 text-zinc-200">
											{ui.bestFit}
										</p>
									</CardContent>
								</Card>
							</AnimatedSection>
						</aside>
					</div>
				</motion.div>
			</TracingBeam>
		</main>
	);
}

function FocusRow({
	icon: Icon,
	label,
	value,
}: {
	icon: typeof WalletCards;
	label: string;
	value: string;
}) {
	return (
		<div className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2">
			<span className="flex items-center gap-2 text-zinc-300">
				<Icon className="size-4 text-cyan-200" />
				{label}
			</span>
			<strong className="text-right text-white">{value}</strong>
		</div>
	);
}
