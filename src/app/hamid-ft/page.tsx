'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
	ArrowUpRight,
	BriefcaseBusiness,
	CalendarDays,
	Code2,
	ExternalLink,
	Figma,
	Github,
	GraduationCap,
	Layers3,
	Linkedin,
	Mail,
	Map,
	MapPin,
	MonitorCog,
	Palette,
	ShoppingBag,
	TerminalSquare,
	WalletCards,
} from 'lucide-react';

import DotPattern from '@/components/ui/dot-pattern';
import { Spotlight } from '@/components/ui/spot-light';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TeamDock } from '../_components/team-dock';

const profile = {
	name: 'Hamid Fattahi',
	role: 'Front-end Developer NextJs',
	location: 'Tehran, Tehran Province, Iran',
	email: 'hamidfattahi.a@gmail.com',
	linkedin: 'https://www.linkedin.com/in/hamidft',
	github: 'https://github.com/hamid-Ft',
};

const stats = [
	{ label: 'Years in production teams', value: '9+' },
	{ label: 'Current focus', value: 'Next.js' },
	{ label: 'Product domains', value: 'ERP / Fintech' },
	{ label: 'Studio model', value: 'MoonLancers' },
];

const skills = [
	{
		title: 'Frontend Core',
		icon: Code2,
		items: ['TypeScript', 'React', 'Next.js', 'JavaScript', 'HTML5', 'CSS'],
	},
	{
		title: 'Design Systems',
		icon: Palette,
		items: ['Tailwind CSS', 'Shadcn UI', 'Figma', 'Front-End Design', 'Responsive UI'],
	},
	{
		title: 'Product Surfaces',
		icon: MonitorCog,
		items: ['ERP Panels', 'Admin Panels', 'Seller Panels', 'PDA Apps', 'Backoffice Tools'],
	},
	{
		title: 'Delivery Stack',
		icon: TerminalSquare,
		items: ['Git', 'WordPress', 'React Query', 'Redux', 'Maps', 'E-Commerce'],
	},
];

const experiences = [
	{
		role: 'Frontend Developer',
		company: 'Aldy',
		date: 'January 2025 - Present',
		location: 'Tehran Province, Iran',
		type: 'Full-Time',
		items: [
			'Build and scale complex interfaces across marketplace, ERP, logistics, and payment domains.',
			'Delivered ERP and backoffice panels for DailyMarket and WallMarket, covering operational workflows and management tooling.',
			'Built logistics PDA applications for store fulfillment, supporting online and offline sales scenarios and in-store execution.',
			'Migrated and expanded from aldy.ir to aldyshop.ir as a complete multi-vendor e-commerce platform with Admin and Seller panels.',
			'Contributed to WPG payment systems and fintech products including Gholackvam loans, BNPL, and multi-purpose wallets.',
		],
	},
	{
		role: 'Frontend Developer',
		company: 'DESNA CO',
		date: 'December 2023 - Present',
		location: 'Tehran, Iran',
		type: 'Full-Time',
		items: [
			'Ship map-centric B2B apps and custom e-commerce platforms for enterprise retail and FMCG workflows.',
			'Built the BAT Route Plan Visitor app with clustered stores, scheduled sales-team visits, and map-based route planning.',
			'Developed BAT Survey and Gamification workflows with incentive mechanics and product-education modules.',
			'Built Unilever B2B drugstore ordering flows optimized for repeat purchases and operational reliability.',
			'Delivered RoyalJeans custom website and admin panel with B2B and B2C commerce flows.',
			'Built GhajariFood catering features including delivery management, polygon delivery zone pricing, and sales operations tooling.',
		],
	},
	{
		role: 'WordPress Developer',
		company: 'Niklink Agency',
		date: 'November 2019 - December 2020',
		location: 'Iran',
		type: 'Agency',
		items: [
			'Designed and built responsive websites for enterprise industrial clients and agency customers.',
			'Built WordPress websites for Nik Yazd Holding and subsidiaries including PPNY, Nikpu, and Nikbaspar.',
			'Implemented pixel-accurate UI from Figma designs in close collaboration with the design team.',
			'Worked with the SEO team on metadata, heading hierarchy, internal linking, content structure, and performance basics.',
		],
	},
	{
		role: 'Full-stack Developer',
		company: 'Kiasoren',
		date: 'August 2016 - December 2019',
		location: 'Tehran, Iran',
		type: 'Internship',
		items: [
			'Worked in a hands-on software team under mentorship, building foundations in production software delivery.',
			'Practiced algorithms, flowcharts, structured problem solving, WordPress development, and front-end fundamentals.',
			'Learned PHP fundamentals, SQL, database concepts, deployment concepts, and system design awareness.',
		],
	},
];

const projects = [
	{
		title: 'Aldy Marketplace',
		link: 'https://www.aldy.ir',
		thumbnail: '/projects/aldy.png',
		description: 'Marketplace and commerce interface work spanning platform migration, admin tooling, and seller workflows.',
	},
	{
		title: 'GhajariFood',
		link: 'https://ghajarifood.com',
		thumbnail: '/projects/ghajarifood.png',
		description: 'Catering platform with internal delivery management, zone pricing logic, and sales operation tools.',
	},
	{
		title: 'Ghajari Manager',
		link: 'https://ghajarifood.com:2064',
		thumbnail: '/projects/ghajari-manager.png',
		description: 'Operational management surface for catering, fulfillment, and sales-team workflows.',
	},
	{
		title: 'Niklink Agency',
		link: 'https://niklinkagency.com',
		thumbnail: '/projects/niklinkagency.png',
		description: 'Agency website and client delivery experience tied to WordPress and SEO-focused implementation.',
	},
	{
		title: 'Nik PU',
		link: 'https://nikpu.com',
		thumbnail: '/projects/nikpu.png',
		description: 'Industrial client website for polyurethane production with responsive, brand-aligned pages.',
	},
	{
		title: 'Shabakedooni',
		link: 'https://shabakedooni.ir',
		thumbnail: '/projects/shabakedooni.png',
		description: 'Public-facing web experience from the Moon Studio portfolio showcase.',
	},
];

const education = [
	{
		degree: 'Master of Science - MS, Plasma and High-Temperature Physics',
		school: 'K. N. Toosi University of Technology',
		date: 'September 2022',
	},
	{
		degree: 'Bachelor of Science - BS, Plasma and High-Temperature Physics',
		school: 'Islamic Azad University, Science And Research Branch',
		date: '2019 - 2021',
	},
	{
		degree: "Bachelor's degree, Engineering Physics",
		school: 'Islamic Azad University, Science And Research Branch',
		date: '2011 - 2015',
	},
	{
		degree: 'High School Diploma, Mathematics',
		school: 'Dr. Moein Highschool',
		date: '2009 - 2010',
	},
];

const strengths = [
	'E-Commerce',
	'Front-End Design',
	'TypeScript',
	'Map-Centric Interfaces',
	'Operational Dashboards',
	'Fintech Product UI',
	'SEO-Aware WordPress',
	'Pixel-Accurate Implementation',
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
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.section
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
}: {
	icon: typeof BriefcaseBusiness;
	kicker: string;
	title: string;
}) {
	return (
		<div className="mb-6 flex items-end justify-between gap-4">
			<div>
				<p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase text-cyan-300">
					<Icon className="size-4" />
					{kicker}
				</p>
				<h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
			</div>
		</div>
	);
}

export default function HamidFtPage() {
	const reduceMotion = useReducedMotion();

	return (
		<main className="min-h-dvh overflow-hidden bg-black text-white">
			<div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(244,114,182,0.12),transparent_24%),linear-gradient(180deg,#020617_0%,#050505_45%,#020617_100%)]" />
			<DotPattern width={24} height={24} cr={1} className="fixed inset-0 fill-white/[0.045]" />
			<Spotlight className="-top-40 left-0" fill="#67e8f9" />
			<TeamDock />

			<TracingBeam className="relative z-10 px-4 pb-24 sm:px-6 lg:px-10">
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
						<div className="hidden items-center gap-2 text-sm text-zinc-400 sm:flex">
							<MapPin className="size-4 text-emerald-300" />
							{profile.location}
						</div>
					</motion.nav>

					<section className="grid min-h-[78dvh] items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
						<motion.div variants={reduceMotion ? undefined : itemVariants} className="max-w-3xl">
							<div className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-200">
								<ShoppingBag className="size-4" />
								{profile.role}
							</div>
							<h1 className="text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
								{profile.name}
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
								Frontend developer and Moon Studio collaborator building production
								interfaces for e-commerce, ERP, logistics, maps, fintech payments, seller
								workflows, and enterprise retail tools with Next.js, TypeScript, React, and
								design-system focused UI.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
									<Link href={`mailto:${profile.email}`}>
										<Mail className="mr-2 size-4" />
										Contact
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
									<Link href={profile.linkedin} target="_blank">
										<Linkedin className="mr-2 size-4" />
										LinkedIn
									</Link>
								</Button>
							</div>
						</motion.div>

						<motion.aside
							variants={reduceMotion ? undefined : itemVariants}
							className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
							<Card className="border-white/10 bg-white/[0.06] text-white shadow-2xl shadow-cyan-950/20 backdrop-blur">
								<CardHeader>
									<CardTitle className="text-xl">Contact</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4 text-sm text-zinc-300">
									<ContactLink icon={Mail} href={`mailto:${profile.email}`} label={profile.email} />
									<ContactLink icon={Linkedin} href={profile.linkedin} label="linkedin.com/in/hamidft" external />
									<ContactLink icon={Github} href={profile.github} label="github.com/hamid-Ft" external />
								</CardContent>
							</Card>

							<div className="grid grid-cols-2 gap-4">
								{stats.map((stat) => (
									<motion.div
										key={stat.label}
										whileHover={reduceMotion ? undefined : { y: -4 }}
										className="rounded-lg border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
										<p className="text-2xl font-semibold text-white">{stat.value}</p>
										<p className="mt-2 text-sm leading-5 text-zinc-400">{stat.label}</p>
									</motion.div>
								))}
							</div>
						</motion.aside>
					</section>

					<AnimatedSection className="grid gap-6 pb-16 lg:grid-cols-4">
						{skills.map((group) => (
							<Card
								key={group.title}
								className="border-white/10 bg-zinc-950/70 text-white shadow-xl shadow-black/20">
								<CardHeader>
									<div className="mb-2 flex size-11 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
										<group.icon className="size-5" />
									</div>
									<CardTitle className="text-lg">{group.title}</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-wrap gap-2">
									{group.items.map((skill) => (
										<span
											key={skill}
											className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-200">
											{skill}
										</span>
									))}
								</CardContent>
							</Card>
						))}
					</AnimatedSection>

					<AnimatedSection className="pb-16">
						<SectionTitle icon={Layers3} kicker="Selected Work" title="Portfolio highlights" />
						<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
							{projects.map((project, index) => (
								<motion.article
									key={project.title}
									initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
									whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
									viewport={{ once: true, margin: '-80px' }}
									transition={{ delay: index * 0.04, type: 'spring', stiffness: 180, damping: 22 }}
									whileHover={reduceMotion ? undefined : { y: -5 }}
									className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] backdrop-blur transition hover:border-cyan-300/35">
									<Link href={project.link} target="_blank" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
										<div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
											<Image
												src={project.thumbnail}
												alt={`${project.title} project preview`}
												fill
												sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
												className="object-cover transition duration-300 group-hover:scale-105"
											/>
										</div>
										<div className="p-5">
											<div className="flex items-center justify-between gap-4">
												<h3 className="text-lg font-semibold text-white">{project.title}</h3>
												<ExternalLink className="size-4 shrink-0 text-zinc-500 transition group-hover:text-cyan-200" />
											</div>
											<p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
										</div>
									</Link>
								</motion.article>
							))}
						</div>
					</AnimatedSection>

					<div className="grid gap-10 lg:grid-cols-[1fr_360px]">
						<AnimatedSection>
							<SectionTitle icon={BriefcaseBusiness} kicker="Experience" title="Product delivery timeline" />
							<div className="space-y-5">
								{experiences.map((job, index) => (
									<motion.article
										key={`${job.company}-${job.role}-${job.date}`}
										initial={reduceMotion ? undefined : { opacity: 0, x: -18 }}
										whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
										viewport={{ once: true, margin: '-80px' }}
										transition={{ delay: index * 0.04, type: 'spring', stiffness: 180, damping: 22 }}
										className="relative rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition hover:border-cyan-300/35 hover:bg-white/[0.07]">
										<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
											<div>
												<h3 className="text-xl font-semibold text-white">{job.role}</h3>
												<p className="mt-1 text-cyan-200">{job.company}</p>
											</div>
											<div className="flex shrink-0 flex-wrap gap-2 text-xs text-zinc-300">
												<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/20 px-2 py-1">
													<CalendarDays className="size-3.5" />
													{job.date}
												</span>
												<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/20 px-2 py-1">
													<MapPin className="size-3.5" />
													{job.location}
												</span>
												<span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-2 py-1 text-emerald-200">
													{job.type}
												</span>
											</div>
										</div>
										<Separator className="my-4 bg-white/10" />
										<ul className="grid gap-2 text-sm leading-6 text-zinc-300">
											{job.items.map((item) => (
												<li key={item} className="flex gap-3">
													<span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</motion.article>
								))}
							</div>
						</AnimatedSection>

						<aside className="space-y-6">
							<AnimatedSection>
								<Card className="border-white/10 bg-zinc-950/80 text-white">
									<CardHeader>
										<CardTitle className="flex items-center gap-2 text-xl">
											<GraduationCap className="size-5 text-emerald-300" />
											Education
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4 text-zinc-300">
										{education.map((item, index) => (
											<div key={`${item.school}-${item.date}`}>
												<p className="font-medium text-white">{item.degree}</p>
												<p>{item.school}</p>
												<p className="text-sm text-zinc-400">{item.date}</p>
												{index < education.length - 1 ? <Separator className="mt-4 bg-white/10" /> : null}
											</div>
										))}
									</CardContent>
								</Card>
							</AnimatedSection>

							<AnimatedSection>
								<Card className="border-white/10 bg-zinc-950/80 text-white">
									<CardHeader>
										<CardTitle className="flex items-center gap-2 text-xl">
											<Figma className="size-5 text-fuchsia-300" />
											Top strengths
										</CardTitle>
									</CardHeader>
									<CardContent className="flex flex-wrap gap-2">
										{strengths.map((strength) => (
											<span
												key={strength}
												className="rounded-md bg-white/[0.06] px-3 py-1.5 text-sm text-zinc-300">
												{strength}
											</span>
										))}
									</CardContent>
								</Card>
							</AnimatedSection>

							<AnimatedSection>
								<Card className="border-cyan-300/25 bg-cyan-300/10 text-white">
									<CardContent className="p-5">
										<p className="text-sm uppercase text-cyan-200">Moon Studio fit</p>
										<p className="mt-4 text-sm leading-6 text-zinc-200">
											Part of the MoonLancers collaboration model: a compact team of
											specialists delivering managed digital creation for business needs.
										</p>
										<div className="mt-4 grid gap-3 text-sm">
											<ProfileRow icon={ShoppingBag} label="Commerce" value="B2B / B2C / Seller" />
											<ProfileRow icon={WalletCards} label="Fintech" value="WPG / BNPL / Wallets" />
											<ProfileRow icon={Map} label="Maps" value="Routing / Zones / Field Ops" />
										</div>
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

function ContactLink({
	icon: Icon,
	href,
	label,
	external,
}: {
	icon: typeof Mail;
	href: string;
	label: string;
	external?: boolean;
}) {
	return (
		<Link
			href={href}
			target={external ? '_blank' : undefined}
			className="group flex min-h-11 items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
			<span className="flex min-w-0 items-center gap-3">
				<Icon className="size-4 shrink-0 text-cyan-200" />
				<span className="truncate">{label}</span>
			</span>
			{external ? (
				<ExternalLink className="size-4 shrink-0 text-zinc-500 transition group-hover:text-cyan-200" />
			) : (
				<ArrowUpRight className="size-4 shrink-0 text-zinc-500 transition group-hover:text-cyan-200" />
			)}
		</Link>
	);
}

function ProfileRow({
	icon: Icon,
	label,
	value,
}: {
	icon: typeof ShoppingBag;
	label: string;
	value: string;
}) {
	return (
		<div className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-black/20 px-3 py-2">
			<span className="flex items-center gap-2 text-zinc-300">
				<Icon className="size-4 text-cyan-200" />
				{label}
			</span>
			<strong>{value}</strong>
		</div>
	);
}
