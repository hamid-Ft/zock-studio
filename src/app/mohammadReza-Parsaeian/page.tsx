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
	GraduationCap,
	Layers3,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	ServerCog,
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
	name: 'MohammadReza Parsaeian',
	role: 'Senior Back-End Developer',
	location: 'Tehran, Iran',
	email: 'm.parsa@workmail.com',
	phone: '+98 912 765 73 34',
	github: 'https://github.com/parsidev',
	linkedin: 'https://www.linkedin.com/in/m-parsa',
	skype: 'https://join.skype.com/invite/Nm3knkyse7cd',
};

const stats = [
	{ label: 'Years building backend systems', value: '10+' },
	{ label: 'Primary focus', value: 'Backend' },
	{ label: 'Current role', value: 'Team Lead' },
	{ label: 'Core stack', value: 'Go / PHP / Node' },
];

const skills = [
	{
		title: 'Languages & Frameworks',
		icon: Code2,
		items: ['PHP', 'Laravel', 'Golang', 'NodeJs', 'C#', 'ASP.NET'],
	},
	{
		title: 'Databases',
		icon: Database,
		items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL Server'],
	},
	{
		title: 'Platform & Messaging',
		icon: ServerCog,
		items: ['gRPC', 'Redis', 'ELK', 'Prometheus', 'Zabbix', 'Docker', 'RabbitMQ'],
	},
	{
		title: 'Operating Systems',
		icon: TerminalSquare,
		items: ['Windows', 'Linux', 'Mac OS'],
	},
];

const experiences = [
	{
		role: 'Developer Team Lead',
		company: 'Aldy',
		date: 'November 2023 - Now',
		type: 'Full-Time',
		items: [
			'Develop Rocket Service for get courier for delivery',
			'Develop Aldy Pay service for digital debit and credit for the company',
		],
	},
	{
		role: 'Senior Back-End Developer',
		company: 'Sika Group',
		date: 'April 2023 - October 2023',
		type: 'Full-Time',
		items: [
			'Develop Zarinpal payment service',
			'Develop Sibank Payment service',
			'Develop Firebase notification service',
			'Develop Sepidar service',
		],
	},
	{
		role: 'Senior Full-Stack Engineer',
		company: 'Basir Andishan',
		date: 'February 2019 - March 2023',
		type: 'Full-Time',
		items: [
			"Redesign GPS tracker's Back-End service with Golang",
			"Change GPS tracker's DB to MongoDB",
			'Implement Redis for caching server',
			'Zabbix Monitoring',
			'Services monitoring with prometheus',
		],
	},
	{
		role: 'DevOps',
		company: 'Basir Andishan',
		date: 'August 2017 - August 2019',
		type: 'Full-Time',
		items: ['Managing virtual servers with VMware ESXi'],
	},
	{
		role: 'Senior Back-End Engineer',
		company: 'Basir Andishan',
		date: 'July 2015 - August 2017',
		type: 'Full-Time',
		items: [
			'Develop service for controlling car GPS device with Node-JS',
			'Develop admin panel website for managing devices and users',
			"Develop user panel website for managing user's devices",
		],
	},
	{
		role: 'Web Developer',
		company: 'Basir Andishan',
		date: 'October 2014 - February 2015',
		type: 'Part-Time',
		items: ['Develop a website for controlling home security alarm device with admin panel'],
	},
];

const projects = [
	{ name: 'HR Telegram Bot in Golang', company: 'Basir Andishan' },
	{ name: 'Xenotic Tracker', company: 'Basir Andishan' },
	{ name: 'Zarinpal Payment Gateway', company: 'Sika Group' },
	{ name: 'Sibank Payment Gateway', company: 'Sika Group' },
	{ name: 'Firebase Notification Service', company: 'Sika Group' },
];

const coursework = [
	'Database Systems',
	'Operating Systems',
	'Computer Networks',
	'Software Engineering',
	'Design and Analysis of Algorithms',
	'Web Development',
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

export default function MohammadRezaParsaeianPage() {
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
								<BriefcaseBusiness className="size-4" />
								{profile.role}
							</div>
							<h1 className="text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
								{profile.name}
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
								Backend leader focused on payment services, GPS tracking platforms,
								monitoring, distributed services, and production infrastructure across Go,
								PHP, Node.js, Redis, MongoDB, Docker, and Prometheus.
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
									<Link href={profile.linkedin} target="_blank" rel="noopener noreferrer">
										<ExternalLink className="ms-2 size-4" />
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
									<ContactLink icon={Phone} href={`tel:${profile.phone.replaceAll(' ', '')}`} label={profile.phone} />
									<ContactLink icon={Code2} href={profile.github} label="github.com/parsidev" external />
									<ContactLink icon={MessageCircle} href={profile.skype} label="Skype: M.Parsa" external />
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
							<SectionTitle icon={BriefcaseBusiness} kicker="Experience" title="Career timeline" />
							<div className="space-y-5">
								{experiences.map((job, index) => (
									<motion.article
										key={`${job.company}-${job.role}`}
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
									<CardContent className="space-y-2 text-zinc-300">
										<p className="font-medium text-white">Islamic Azad University</p>
										<p>Associate&apos;s in Computer Science</p>
										<p className="text-sm text-zinc-400">Expected May 2015 | Tehran</p>
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
												<p className="font-medium text-white">{project.name}</p>
												<p className="mt-1 text-sm text-zinc-400">{project.company}</p>
											</div>
										))}
									</CardContent>
								</Card>
							</AnimatedSection>

							<AnimatedSection>
								<Card className="border-white/10 bg-zinc-950/80 text-white">
									<CardHeader>
										<CardTitle className="text-xl">Coursework</CardTitle>
									</CardHeader>
									<CardContent className="flex flex-wrap gap-2">
										{coursework.map((course) => (
											<span
												key={course}
												className="rounded-md bg-white/[0.06] px-3 py-1.5 text-sm text-zinc-300">
												{course}
											</span>
										))}
									</CardContent>
								</Card>
							</AnimatedSection>

							<AnimatedSection>
								<Card className="border-cyan-300/25 bg-cyan-300/10 text-white">
									<CardContent className="p-5">
										<p className="text-sm uppercase text-cyan-200">Salary</p>
										<div className="mt-4 grid gap-3 text-sm">
											<div className="flex items-center justify-between gap-4">
												<span className="text-zinc-300">Full-Time</span>
												<strong>100.000.000 T</strong>
											</div>
											<div className="flex items-center justify-between gap-4">
												<span className="text-zinc-300">Hourly</span>
												<strong>700.000 T</strong>
											</div>
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
			rel={external ? 'noopener noreferrer' : undefined}
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
