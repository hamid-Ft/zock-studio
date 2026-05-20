'use client';

import Image from 'next/image';
import Link from 'next/link';
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
	WalletCards,
} from 'lucide-react';

import DotPattern from '@/components/ui/dot-pattern';
import { Spotlight } from '@/components/ui/spot-light';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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
						<Link
							href="/"
							className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-zinc-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
							<span className="size-2 rounded-full bg-cyan-300" />
							Moon Studio
						</Link>
						<Link
							href="mailto:hamidfattahi.a@gmail.com"
							className="hidden min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-zinc-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:inline-flex">
							Start a project
							<ArrowUpRight className="size-4" />
						</Link>
					</motion.nav>

					<section className="grid min-h-[78dvh] items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
						<motion.div variants={reduceMotion ? undefined : itemVariants} className="max-w-4xl">
							<div className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-200">
								<Sparkles className="size-4" />
								Managed digital product team
							</div>
							<h1 className="text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
								Operational software for teams that need to move faster.
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
								A compact product studio for commerce, ERP, logistics, fintech, maps,
								AI-assisted interfaces, mobile apps, and backend platforms. We design,
								build, integrate, and improve the systems that run daily work.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
									<Link href="#capabilities">
										<Layers3 className="mr-2 size-4" />
										Capabilities
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
									<Link href="#work">
										<ExternalLink className="mr-2 size-4" />
										View Work
									</Link>
								</Button>
							</div>
						</motion.div>

						<motion.aside variants={reduceMotion ? undefined : itemVariants} className="grid gap-4">
							<Card className="border-white/10 bg-white/[0.06] text-white shadow-2xl shadow-cyan-950/20 backdrop-blur">
								<CardHeader>
									<CardTitle className="text-xl">Team Operating System</CardTitle>
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
										<FocusRow icon={WalletCards} label="Fintech" value="Payments, BNPL, wallets" />
										<FocusRow icon={Map} label="Field ops" value="Routes, zones, mobile workflows" />
										<FocusRow icon={ChartNoAxesCombined} label="Management" value="Dashboards, reports, panels" />
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

					<AnimatedSection id="work" className="pb-16">
						<SectionTitle
							icon={Layers3}
							kicker="Selected Work"
							title="Built for commerce, operations, maps, and management."
							text="A sample of product surfaces and systems delivered across marketplace, retail, food operations, agency, and industrial workflows."
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
								kicker="Process"
								title="Organized delivery from unclear workflows to usable systems."
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
												<p className="text-sm text-cyan-200">Step {index + 1}</p>
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
											Stack Range
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
										<p className="text-sm uppercase text-cyan-200">Best fit</p>
										<p className="mt-4 text-sm leading-6 text-zinc-200">
											Teams that need serious product surfaces without the overhead of
											assembling separate design, frontend, backend, mobile, and ops tracks.
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
