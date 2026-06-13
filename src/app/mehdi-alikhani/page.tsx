'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
	ArrowUpRight,
	BriefcaseBusiness,
	CalendarDays,
	Code2,
	Database,
	ExternalLink,
	GitBranch,
	GraduationCap,
	Layers3,
	Mail,
	MapPin,
	MessageSquare,
	Network,
	Phone,
	ServerCog,
	ShoppingCart,
	TerminalSquare,
} from 'lucide-react';

import DotPattern from '@/components/ui/dot-pattern';
import { Spotlight } from '@/components/ui/spot-light';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TeamDock } from '../_components/team-dock';

const profile = {
	name: 'Mehdi Alikhani',
	role: 'Backend Developer',
	location: 'Tehran, Iran',
	email: 'alikhani.mehdi@hotmail.com',
	phone: '+98-930-352-2525',
};

const stats = [
	{ label: 'Years backend experience', value: '5+' },
	{ label: 'Primary ecosystem', value: 'Magento' },
	{ label: 'Backend stack', value: 'PHP / Laravel' },
	{ label: 'Architecture focus', value: 'SOA / Microservices' },
];

const skills = [
	{
		title: 'Backend Core',
		icon: Code2,
		items: ['PHP', 'Laravel', 'Magento 2', 'GraphQL', 'REST API', 'Livewire'],
	},
	{
		title: 'Data & Search',
		icon: Database,
		items: ['MariaDB', 'MySQL', 'MongoDB', 'ElasticSearch'],
	},
	{
		title: 'Platform & DevOps',
		icon: ServerCog,
		items: ['Linux', 'CI/CD', 'NGINX', 'RabbitMQ', 'Kafka', 'PHPUnit'],
	},
	{
		title: 'Frontend & Delivery',
		icon: TerminalSquare,
		items: ['KnockoutJS', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Jira', 'Git'],
	},
];

const experiences = [
	{
		role: 'Laravel Developer',
		company: 'Zoot Co',
		date: '2023 - Present',
		location: 'Tehran, Iran',
		type: 'Full-Time',
		items: [
			'Developed microservices including Account, Marketing, API-Gateway, Inventory, and Marketing services.',
			'Built a message-broker package designed to work with both RabbitMQ and Kafka across microservices.',
			'Developed a payment gateway package for microservice environments and created a fake payment gateway for testing flows.',
			'Built a Delivery SaaS application and integrated it with the microservice ecosystem.',
			'Wrote unit tests and feature tests across microservices.',
		],
	},
	{
		role: 'Magento and Laravel Developer, DevOps',
		company: 'Sepehr Rayan',
		date: '2023 - Present',
		location: 'Tehran, Iran',
		type: 'Full-Time',
		items: [
			'Developed an agency service provider with Laravel for hotel and airline ticket workflows.',
			'Worked on gofrictionless, lacanadienne, serena, classicgardens, runningroom, manteaux, Golbazar, Kadolin, and Ordme Magento projects.',
			'Developed and maintained headless projects such as Ordme using GraphQL.',
			'Implemented automation tools on servers and managed Linux server environments.',
		],
	},
	{
		role: 'Laravel and Magento Developer',
		company: 'Alinland - Ecommerce platform (Mihan Holding)',
		date: '2021 - 2023',
		location: 'Iran',
		type: 'Full-Time',
		items: [
			'Developed and maintained Alinland, a Magento-based e-commerce platform.',
			'Worked on a multi-vendor marketplace project and developed Magento 2 modules.',
			'Reviewed code and integrated third-party services including Miare.',
			'Built a custom Headless PWA using Magento 2 and GraphQL.',
			'Developed and maintained a Laravel Hub service to work with Magento and handle inventories.',
		],
	},
	{
		role: 'Laravel Developer',
		company: 'Military service',
		date: '2020 - 2022',
		location: 'Iran',
		type: 'Service',
		items: ['Developed two projects from scratch to integrate with Instagram and process data.'],
	},
	{
		role: 'Backend Developer',
		company: 'Setareh',
		date: '2021',
		location: 'Iran',
		type: 'Full-Time',
		items: [
			'Developed an integration system to work with warehouse systems and WordPress.',
			'Developed a plugin for WordPress.',
		],
	},
];

const projects = [
	{
		name: 'Microservices Platform',
		date: 'Zoot Co',
		description:
			'Account, Marketing, API-Gateway, Inventory, payment gateway, message broker, and delivery SaaS services for a Laravel microservice ecosystem.',
	},
	{
		name: 'Headless Magento Commerce',
		date: 'Alinland / Ordme',
		description:
			'Magento 2 and GraphQL headless commerce work, including PWA flows, inventory handling, marketplace modules, and Laravel service integration.',
	},
	{
		name: 'Travel Service Provider',
		date: 'Sepehr Rayan',
		description:
			'Laravel-based agency service provider covering hotel and airline ticket workflows with backend automation and server operations.',
	},
];

const education = [
	{
		degree: "Bachelor's Degree in Software Engineering",
		school: 'University Science and Culture',
		date: '2016 - 2018',
	},
	{
		degree: 'Associate degree in Software Engineering',
		school: 'Amir Kabir Technical University',
		date: '2014 - 2016',
	},
];

const strengths = [
	'Microservices',
	'Service-Oriented Architecture (SOA)',
	'Headless Magento',
	'GraphQL APIs',
	'Payment Gateway Packages',
	'Message Brokers',
	'Linux Server Management',
	'Unit & Feature Testing',
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

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
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

export default function MehdiAlikhaniPage() {
	const reduceMotion = useReducedMotion();

	return (
		 <main id="main-content" role="main" className="min-h-dvh overflow-hidden bg-black text-white">
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
								<ServerCog className="size-4" />
								{profile.role}
							</div>
							<h1 className="text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
								{profile.name}
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
								Backend developer with 5 years of experience across Magento, Laravel,
								PHP, GraphQL headless commerce, microservices, DevOps, Linux server
								automation, message brokers, payment gateways, and e-commerce platform
								integrations.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
									<Link href={`mailto:${profile.email}`}>
										<Mail className="ms-2 size-4" />
										Contact
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
									<Link href={`tel:${profile.phone.replaceAll('-', '')}`}>
										<Phone className="ms-2 size-4" />
										Call
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
									<ContactLink icon={Phone} href={`tel:${profile.phone.replaceAll('-', '')}`} label={profile.phone} />
									<ContactLink icon={MapPin} href="#" label={profile.location} />
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

					<div className="grid gap-10 lg:grid-cols-[1fr_360px]">
						<AnimatedSection>
							<SectionTitle icon={BriefcaseBusiness} kicker="Experience" title="Backend delivery timeline" />
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
											<Layers3 className="size-5 text-fuchsia-300" />
											Projects
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-3">
										{projects.map((project) => (
											<div
												key={project.name}
												className="rounded-md border border-white/10 bg-white/[0.035] p-3">
												<div className="flex items-start justify-between gap-3">
													<p className="font-medium text-white">{project.name}</p>
													<span className="shrink-0 text-xs text-cyan-200">{project.date}</span>
												</div>
												<p className="mt-2 text-sm leading-6 text-zinc-400">{project.description}</p>
											</div>
										))}
									</CardContent>
								</Card>
							</AnimatedSection>

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
											<Network className="size-5 text-cyan-300" />
											Core strengths
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
										<p className="text-sm uppercase text-cyan-200">Backend focus</p>
										<div className="mt-4 grid gap-3 text-sm">
											<ProfileRow icon={ShoppingCart} label="Commerce" value="Magento 2 / PWA" />
											<ProfileRow icon={MessageSquare} label="Messaging" value="RabbitMQ / Kafka" />
											<ProfileRow icon={GitBranch} label="Delivery" value="CI/CD / Tests" />
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
	icon: typeof ShoppingCart;
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
