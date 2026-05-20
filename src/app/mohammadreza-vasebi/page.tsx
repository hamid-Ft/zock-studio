'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
	ArrowUpRight,
	BriefcaseBusiness,
	CalendarDays,
	Code2,
	ExternalLink,
	Gauge,
	Github,
	GraduationCap,
	Layers3,
	Linkedin,
	Mail,
	Map,
	MapPin,
	Phone,
	ServerCog,
	Smartphone,
} from 'lucide-react';

import DotPattern from '@/components/ui/dot-pattern';
import { Spotlight } from '@/components/ui/spot-light';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TeamDock } from '../_components/team-dock';

const profile = {
	name: 'Mohammadreza Vasebi',
	role: 'React Native Mobile Engineer',
	location: 'Tehran, Iran',
	email: 'reza.vaseb@yahoo.com',
	phone: '09332738864',
	github: 'https://github.com/MrezaVasebi',
	linkedin: 'https://linkedin.com/in/mreza-vasebi',
	birthYear: '1992',
	status: 'Single',
	military: 'Served',
};

const stats = [
	{ label: 'Years building mobile apps', value: '4+' },
	{ label: 'Primary focus', value: 'Mobile' },
	{ label: 'Current role', value: 'Aldy' },
	{ label: 'Core stack', value: 'RN / TS / Expo' },
];

const skills = [
	{
		title: 'Mobile',
		icon: Smartphone,
		items: ['React Native', 'JavaScript (ES6+)', 'TypeScript', 'Expo'],
	},
	{
		title: 'State Management',
		icon: Gauge,
		items: ['React Query', 'Zustand', 'Redux Toolkit'],
	},
	{
		title: 'Backend & APIs',
		icon: ServerCog,
		items: ['REST APIs', 'Firebase', 'Supabase', 'Socket.io'],
	},
	{
		title: 'Maps & Tools',
		icon: Map,
		items: ['Google Maps', 'Mapbox', 'Git', 'Axios'],
	},
];

const experiences = [
	{
		role: 'Mobile Developer',
		company: 'Aldy',
		date: 'August 2024 - Present',
		location: 'Tehran, Iran',
		type: 'Full-Time',
		items: [
			'Contributed to the development of a scalable Super App with multiple integrated applications.',
			'Built core shopping and delivery flows for the E-commerce application with map integration and improved UI responsiveness through rendering and list optimizations.',
			'Implemented reliable loan request and management flows for the Loan Wallet application, reducing user-reported inconsistencies and edge-case errors.',
			'Developed internal organization features for a mobile application with a focus on usability and maintainability.',
			'Built QR scanning and real-time communication features using Socket.io.',
			'Contributed to grocery and taxi application modules, supporting end-to-end mobile product development.',
			'Integrated Firebase and Supabase services for authentication, storage, and backend-connected workflows.',
			'Implemented map-based features using Google Maps and Mapbox.',
		],
	},
	{
		role: 'Mobile Developer',
		company: 'Remote Collaboration',
		date: 'January 2025 - May 2025',
		location: 'Turkey',
		type: 'Part-Time',
		items: [
			'Contributed to a new mobile application and participated in bug fixing for an existing product.',
			'Supported ongoing feature development in a remote, part-time collaboration.',
		],
	},
	{
		role: 'Mobile Developer',
		company: 'MelkeTabriz',
		date: 'December 2021 - December 2023',
		location: 'Tabriz, Iran',
		type: 'Full-Time',
		items: [
			'Developed a real-estate mobile application using Expo.',
			'Built an admin-panel-oriented mobile experience tailored for real-estate workflows.',
			'Focused on structured mobile delivery with an emphasis on maintainability and product stability.',
		],
	},
	{
		role: 'Mobile Developer',
		company: 'Sharestoon',
		date: 'May 2022 - December 2022',
		location: 'Tehran, Iran',
		type: 'Part-Time Remote',
		items: [
			'Developed a mobile application using the Bare CLI.',
			'Supported mobile feature implementation in a part-time remote setting.',
		],
	},
];

const projects = [
	{
		name: 'React Native Components',
		date: 'December 2024 - Present',
		description:
			'Common React Native components such as radio buttons, checkbox buttons, simple inputs, safe inputs, and icon inputs, developed with TypeScript.',
	},
	{
		name: 'React Native State Management',
		date: 'October 2023 - March 2024',
		description:
			'State management examples for React Native demonstrating four common tools with synchronous and asynchronous implementation methods.',
	},
	{
		name: 'Monkey Food',
		date: 'October 2023',
		description:
			'Food delivery app developed with Expo and TypeScript from a prepared Figma UI, without backend integration.',
	},
];

const strengths = [
	'Performance Optimization',
	'Scalable Mobile Architecture',
	'Clean & Maintainable Code',
	'Cross-Platform Development',
	'API Integration',
	'Modern State Management',
	'Debugging & Problem Solving',
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

export default function MohammadrezaVasebiPage() {
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
								<Smartphone className="size-4" />
								{profile.role}
							</div>
							<h1 className="text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
								{profile.name}
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
								React Native engineer with approximately 4 years of experience building robust
								cross-platform mobile products, scalable app architecture, high-performance interfaces,
								REST API integrations, real-time features, maps, Firebase, Supabase, and modern state
								management.
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
									<ContactLink icon={Phone} href={`tel:${profile.phone}`} label={profile.phone} />
									<ContactLink
										icon={Github}
										href={profile.github}
										label="github.com/MrezaVasebi"
										external
									/>
									<ContactLink
										icon={Linkedin}
										href={profile.linkedin}
										label="linkedin.com/in/mreza-vasebi"
										external
									/>
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
							<SectionTitle icon={BriefcaseBusiness} kicker="Experience" title="Mobile career timeline" />
							<div className="space-y-5">
								{experiences.map((job, index) => (
									<motion.article
										key={`${job.company}-${job.role}-${job.date}`}
										initial={reduceMotion ? undefined : { opacity: 0, x: -18 }}
										whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
										viewport={{ once: true, margin: '-80px' }}
										transition={{
											delay: index * 0.04,
											type: 'spring',
											stiffness: 180,
											damping: 22,
										}}
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
										<div>
											<p className="font-medium text-white">Master of Computer Engineering</p>
											<p>Shabestar Azad University (IAU)</p>
											<p className="text-sm text-zinc-400">
												2014 - 2017 | Shabestar, Tabriz, Iran
											</p>
										</div>
										<Separator className="bg-white/10" />
										<div>
											<p className="font-medium text-white">Bachelor of Computer Engineering</p>
											<p>Khaneh Karagar Tabriz</p>
											<p className="text-sm text-zinc-400">2011 - 2014 | Tabriz, Iran</p>
										</div>
									</CardContent>
								</Card>
							</AnimatedSection>

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
													<span className="shrink-0 text-xs text-cyan-200">
														{project.date}
													</span>
												</div>
												<p className="mt-2 text-sm leading-6 text-zinc-400">
													{project.description}
												</p>
											</div>
										))}
									</CardContent>
								</Card>
							</AnimatedSection>

							<AnimatedSection>
								<Card className="border-white/10 bg-zinc-950/80 text-white">
									<CardHeader>
										<CardTitle className="flex items-center gap-2 text-xl">
											<Code2 className="size-5 text-cyan-300" />
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
										<p className="text-sm uppercase text-cyan-200">Profile details</p>
										<div className="mt-4 grid gap-3 text-sm">
											<ProfileRow label="Birth year" value={profile.birthYear} />
											<ProfileRow label="Status" value={profile.status} />
											<ProfileRow label="Military" value={profile.military} />
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

function ProfileRow({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex items-center justify-between gap-4">
			<span className="text-zinc-300">{label}</span>
			<strong>{value}</strong>
		</div>
	);
}
