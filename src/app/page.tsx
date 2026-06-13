'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
	ArrowUpRight,
	BriefcaseBusiness,
	Building2,
	ChartNoAxesCombined,
	Code2,
	CreditCard,
	DatabaseZap,
	ExternalLink,
	Layers3,
	Map,
	MonitorCog,
	Network,
	PanelTop,
	Route,
	Rocket,
	ShoppingBag,
	Sparkles,
	UserRound,
	UsersRound,
	WalletCards,
	Workflow,
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
		title: 'Product-grade interfaces',
		icon: PanelTop,
		items: ['Dashboards', 'Admin panels', 'Seller tools', 'Workflow apps'],
	},
	{
		title: 'Commerce systems',
		icon: ShoppingBag,
		items: ['B2B ordering', 'Marketplaces', 'Catalog ops', 'Checkout flows'],
	},
	{
		title: 'Backend platforms',
		icon: Network,
		items: ['Microservices', 'Payments', 'Messaging', 'Integrations'],
	},
	{
		title: 'Mobile operations',
		icon: MonitorCog,
		items: ['Cross-platform apps', 'Maps', 'Realtime', 'Field tools'],
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
			'Multi-vendor stores, seller panels, catalog governance, pricing workflows, checkout surfaces, delivery options, and backoffice operations.',
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

const softwareNeeds = [
	{
		title: 'Marketplace & seller operations',
		icon: ShoppingBag,
		description:
			'Vendor onboarding, seller dashboards, product approval, catalog quality, commissions, promotions, and daily marketplace control.',
		items: ['Seller panel', 'Catalog rules', 'Promotions', 'Backoffice'],
		outcome: 'Keeps commercial teams, vendors, and admins working from one clear operating layer.',
	},
	{
		title: 'ERP, warehouse & finance workflows',
		icon: Building2,
		description:
			'Inventory, purchasing, sales, HR, tax, warehouse movement, reporting, approvals, and role-based internal software.',
		items: ['Inventory', 'Finance', 'HR', 'Reports'],
		outcome: 'Connects front-office growth to the internal systems that keep a large operation reliable.',
	},
	{
		title: 'Payments, credit & fintech layers',
		icon: CreditCard,
		description:
			'Payment gateways, wallets, BNPL-style flows, transaction states, reconciliation surfaces, and secure service integration.',
		items: ['Gateways', 'Wallets', 'Credit flows', 'Reconciliation'],
		outcome: 'Turns payment complexity into traceable, supportable product flows for customers and operators.',
	},
	{
		title: 'Delivery, routing & field apps',
		icon: Route,
		description:
			'React Native apps, driver and field-team tools, maps, GPS, zones, route planning, QR scanning, and realtime status.',
		items: ['Routes', 'Maps', 'QR/PDA', 'Realtime'],
		outcome: 'Bridges ecommerce orders with people and devices moving in the real world.',
	},
	{
		title: 'Customer apps & web surfaces',
		icon: MonitorCog,
		description:
			'Responsive storefronts, mobile shopping flows, profile areas, support journeys, content pages, landing systems, and SEO-aware launches.',
		items: ['Storefront', 'Mobile app', 'Support', 'SEO pages'],
		outcome: 'Gives the public side of the holding the same care as the operational side.',
	},
	{
		title: 'Data, search & decision dashboards',
		icon: DatabaseZap,
		description:
			'Data-heavy tables, analytics dashboards, charts, filters, map views, operational KPIs, and fast review workflows.',
		items: ['KPI panels', 'Search', 'Charts', 'Map views'],
		outcome: 'Helps managers compare records, find exceptions, and make decisions without fighting the interface.',
	},
	{
		title: 'Integrations & platform services',
		icon: Workflow,
		description:
			'APIs, message brokers, queues, caching, service boundaries, third-party systems, monitoring, and deployment-aware architecture.',
		items: ['APIs', 'Queues', 'Caching', 'Monitoring'],
		outcome: 'Creates a platform that can grow without every new product request becoming a rewrite.',
	},
	{
		title: 'AI-assisted product workflows',
		icon: Sparkles,
		description:
			'Assistant screens, consultation flows, structured prompts, internal automation, review tools, and careful human-in-the-loop states.',
		items: ['Assistants', 'Automation', 'Review UX', 'Prompts'],
		outcome: 'Adds useful AI where it reduces operational load instead of adding noise.',
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
	softwareNeeds,
	process,
	stack,
	ui: {
		startProject: 'Start a project',
		badge: 'Moonlancer software team',
		heroTitle: 'Moonlancer builds the software layer behind serious commerce operations.',
		heroText:
			'We are a compact product team for ecommerce holdings and operational companies that need web apps, mobile apps, ERP workflows, seller tools, payment services, maps, dashboards, AI-assisted interfaces, and backend platforms to work as one system.',
		capabilitiesCta: 'Explore capabilities',
		viewSoftware: 'See holding coverage',
		teamOs: 'Squad coverage',
		focus: {
			fintech: ['Fintech', 'Payments, BNPL, wallets'],
			fieldOps: ['Field ops', 'Routes, zones, mobile workflows'],
			management: ['Management', 'Dashboards, reports, panels'],
		},
		team: {
			kicker: 'Team',
			title: 'One practical squad for product UI, mobile, backend, commerce, ERP, and platform delivery.',
			text: 'Moon Studio brings together frontend, mobile, backend, Laravel, Magento, .NET, product UI, and AI interface skills in one delivery team. Clients can review each member portfolio, but the stronger story is how those skills combine around real business software.',
		},
		services: {
			kicker: 'Services',
			title: 'A managed team for the software a growing holding keeps needing.',
			text: 'We cover the recurring product surfaces inside commerce-heavy companies: seller tools, ERP screens, customer apps, payment flows, map-based operations, admin panels, integrations, and launch-ready websites.',
		},
		software: {
			kicker: 'Holding coverage',
			title: 'Capabilities instead of a showcase gallery.',
			text: 'This section replaces visual showcases with the software areas a large ecommerce or retail holding usually needs. It explains where the team can plug in, what we can build, and why those pieces matter together.',
		},
		process: {
			kicker: 'Process',
			title: 'Organized delivery from unclear workflows to usable production systems.',
			step: 'Step',
		},
		stackRange: 'Stack range',
		bestFitTitle: 'Best fit',
		bestFit:
			'Companies that need serious product surfaces without the overhead of hiring separate design, frontend, backend, mobile, commerce, and operations tracks.',
	},
};

const homeFa: typeof homeEn = {
	capabilities: [
		{ title: 'رابط‌های محصول', icon: PanelTop, items: ['داشبورد', 'پنل ادمین', 'ابزار فروشنده', 'اپ عملیاتی'] },
		{ title: 'سیستم‌های فروش و مارکت‌پلیس', icon: ShoppingBag, items: ['سفارش B2B', 'مارکت‌پلیس', 'مدیریت کاتالوگ', 'فرایند خرید'] },
		{ title: 'پلتفرم‌های بک‌اند', icon: Network, items: ['میکروسرویس', 'پرداخت', 'پیام‌رسانی', 'یکپارچه‌سازی'] },
		{ title: 'عملیات موبایل', icon: MonitorCog, items: ['اپ چندسکویی', 'نقشه', 'زمان واقعی', 'ابزار میدانی'] },
	],
	teamMembers: [
		{
			name: 'Hamid Fattahi',
			role: 'Frontend / Product UI',
			href: '/hamid-ft',
			focus: 'ساخت رابط‌های Next.js برای ERP، فروش آنلاین، فین‌تک، نقشه و پنل‌های مدیریتی.',
		},
		{
			name: 'Sepide Soltanpour',
			role: 'Frontend / AI UI',
			href: '/sepide-soltanpour',
			focus: 'پنل‌های ادمین، رابط‌های مشاوره هوشمند، فرم‌های داده‌محور، نمودار، نقشه و فرانت‌اند تمیز.',
		},
		{
			name: 'Mohammadreza Vasebi',
			role: 'React Native Mobile',
			href: '/mohammadreza-vasebi',
			focus: 'اپ‌های چندسکویی، جریان خرید، تحویل، وام، اسکن QR، قابلیت‌های زمان واقعی و نقشه.',
		},
		{
			name: 'MohammadReza Parsaeian',
			role: 'Backend Lead',
			href: '/mohammadReza-Parsaeian',
			focus: 'سرویس‌های پرداخت، پلتفرم‌های GPS، رهبری بک‌اند، مانیتورینگ، سرویس‌های توزیع‌شده و زیرساخت.',
		},
		{
			name: 'Mehdi Alikhani',
			role: 'Laravel / Magento Backend',
			href: '/mehdi-alikhani',
			focus: 'کامرس headless، Magento، میکروسرویس‌های Laravel، پکیج‌های پرداخت، message broker و DevOps.',
		},
		{
			name: 'Keyvan Moradkhani',
			role: 'Laravel Full-stack',
			href: '/keyvan-moradkhani',
			focus: 'مارکت‌پلیس چندفروشنده، REST API، اتوماسیون مالیات، داشبورد پروموشن و تحویل فول‌استک.',
		},
		{
			name: 'Omid Nikroo',
			role: '.NET Backend',
			href: '/omid-nikroo',
			focus: 'ماژول‌های ERP، انبار، فروش، پخش، منابع انسانی، مسیر‌یابی، SignalR و بهینه‌سازی دیتابیس.',
		},
		{
			name: 'Iman Jafari',
			role: 'Frontend Developer',
			href: '/iman-jafari',
			focus: 'React، Next.js، TypeScript، Tailwind، رابط‌های تعاملی، فرم‌ها، مدیریت state و UI مدرن وب.',
		},
	],
	serviceGroups: [
		{
			title: 'فروش آنلاین و مارکت‌پلیس',
			icon: ShoppingBag,
			description: 'فروشگاه چندفروشنده، پنل فروشنده، مدیریت کاتالوگ، قیمت‌گذاری، پرداخت، گزینه‌های تحویل و عملیات پشت‌صحنه.',
		},
		{
			title: 'ERP و ابزارهای داخلی',
			icon: BriefcaseBusiness,
			description: 'انبار، فروش، منابع انسانی، مالی، مالیات، گزارش‌گیری، پنل‌های نقش‌محور و نرم‌افزارهای عملیاتی با گردش‌کار جدی.',
		},
		{
			title: 'موبایل و عملیات میدانی',
			icon: MonitorCog,
			description: 'اپ React Native، مسیر‌یابی، رابط نقشه، گردش‌کار PDA، اسکن QR، ارتباط زمان واقعی و ابزارهای تیم میدانی.',
		},
		{
			title: 'پلتفرم‌های بک‌اند',
			icon: Network,
			description: 'API، میکروسرویس، درگاه پرداخت، صف و پیام‌رسانی، کش، طراحی دیتابیس، مانیتورینگ، یکپارچه‌سازی و سرویس آماده استقرار.',
		},
		{
			title: 'رابط‌های محصول با کمک AI',
			icon: Sparkles,
			description: 'رابط مشاوره هوشمند، فرایند دستیار، prompt ساختاریافته، تعامل شخصی‌سازی‌شده، اتوماسیون داخلی و قابلیت‌های AI محصولی.',
		},
		{
			title: 'وب‌سایت و سیستم‌های لانچ',
			icon: PanelTop,
			description: 'وب‌سایت‌های آماده SEO، وردپرس، لندینگ، سایت صنعتی، ساختار محتوا، اجرای برند و لانچ واکنش‌گرا.',
		},
	],
	signals: [
		{ label: 'مدل تحویل', value: 'اسکواد متمرکز' },
		{ label: 'سطح اصلی', value: 'وب + موبایل' },
		{ label: 'حوزه محصول', value: 'فروش / ERP / فین‌تک' },
		{ label: 'سبک ساخت', value: 'مهندسی محصول‌محور' },
	],
	softwareNeeds: [
		{
			title: 'مارکت‌پلیس و عملیات فروشنده',
			icon: ShoppingBag,
			description: 'ثبت و مدیریت فروشنده، داشبورد فروشنده، تایید محصول، کیفیت کاتالوگ، کمیسیون، پروموشن و کنترل روزانه مارکت‌پلیس.',
			items: ['پنل فروشنده', 'قوانین کاتالوگ', 'پروموشن', 'بک‌آفیس'],
			outcome: 'تیم تجاری، فروشنده و ادمین را در یک لایه عملیاتی شفاف کنار هم نگه می‌دارد.',
		},
		{
			title: 'ERP، انبار و مالی',
			icon: Building2,
			description: 'موجودی، خرید، فروش، منابع انسانی، مالیات، جابه‌جایی انبار، گزارش، تاییدیه‌ها و نرم‌افزار داخلی نقش‌محور.',
			items: ['موجودی', 'مالی', 'منابع انسانی', 'گزارش'],
			outcome: 'رشد فروش را به سیستم‌های داخلی قابل اتکا وصل می‌کند.',
		},
		{
			title: 'پرداخت، اعتبار و فین‌تک',
			icon: CreditCard,
			description: 'درگاه پرداخت، کیف پول، جریان‌های اعتبار و خرید اقساطی، وضعیت تراکنش، مغایرت‌گیری و اتصال امن سرویس‌ها.',
			items: ['درگاه', 'کیف پول', 'اعتبار', 'مغایرت‌گیری'],
			outcome: 'پیچیدگی پرداخت را به فرایند قابل پیگیری برای مشتری و اپراتور تبدیل می‌کند.',
		},
		{
			title: 'تحویل، مسیر و اپ میدانی',
			icon: Route,
			description: 'اپ React Native، ابزار راننده و تیم میدانی، نقشه، GPS، زون‌بندی، مسیر‌یابی، اسکن QR و وضعیت زمان واقعی.',
			items: ['مسیر', 'نقشه', 'QR/PDA', 'زمان واقعی'],
			outcome: 'سفارش آنلاین را به آدم‌ها، مسیرها و دستگاه‌های دنیای واقعی وصل می‌کند.',
		},
		{
			title: 'اپ مشتری و سطح عمومی وب',
			icon: MonitorCog,
			description: 'استورفرانت واکنش‌گرا، جریان خرید موبایل، پروفایل مشتری، پشتیبانی، صفحات محتوا، لندینگ و لانچ SEO-aware.',
			items: ['استورفرانت', 'اپ موبایل', 'پشتیبانی', 'صفحات SEO'],
			outcome: 'سمت عمومی کسب‌وکار را به اندازه بخش عملیاتی حرفه‌ای و قابل اعتماد نشان می‌دهد.',
		},
		{
			title: 'داده، جست‌وجو و داشبورد تصمیم',
			icon: DatabaseZap,
			description: 'جدول‌های داده‌محور، داشبورد تحلیلی، نمودار، فیلتر، نمای نقشه، KPI عملیاتی و فرایند سریع بررسی رکوردها.',
			items: ['KPI', 'جست‌وجو', 'نمودار', 'نمای نقشه'],
			outcome: 'مدیرها را از گشتن بین فایل‌ها و پنل‌های پراکنده نجات می‌دهد.',
		},
		{
			title: 'یکپارچه‌سازی و سرویس‌های پلتفرم',
			icon: Workflow,
			description: 'API، message broker، صف، کش، مرزبندی سرویس‌ها، سیستم‌های بیرونی، مانیتورینگ و معماری آماده استقرار.',
			items: ['API', 'Queue', 'Cache', 'Monitoring'],
			outcome: 'کمک می‌کند هر نیاز جدید محصولی به بازنویسی کل سیستم تبدیل نشود.',
		},
		{
			title: 'فرایندهای محصولی با کمک AI',
			icon: Sparkles,
			description: 'صفحه دستیار، جریان مشاوره، prompt ساختاریافته، اتوماسیون داخلی، ابزار review و حالت‌های human-in-the-loop.',
			items: ['دستیار', 'اتوماسیون', 'Review UX', 'Prompt'],
			outcome: 'AI را جایی وارد محصول می‌کند که بار عملیاتی را کم کند، نه اینکه نویز تازه بسازد.',
		},
	],
	process: [
		{
			title: 'نقشه‌برداری از عملیات',
			icon: Map,
			text: 'گردش‌کارها، نقش‌ها، حرکت داده، محدودیت‌ها و تصمیم‌هایی را که رابط باید پشتیبانی کند روشن می‌کنیم.',
		},
		{
			title: 'شکل دادن محصول',
			icon: Sparkles,
			text: 'نیازمندی‌ها را به صفحه، وضعیت، edge case، مسیر کاربر و رفتار واکنش‌گرا تبدیل می‌کنیم.',
		},
		{
			title: 'ساخت سیستم آماده تولید',
			icon: Code2,
			text: 'با معماری قابل نگهداری، اتصال API، بررسی عملکرد و توجه به استقرار پیاده‌سازی می‌کنیم.',
		},
		{
			title: 'عملیات و بهبود',
			icon: Rocket,
			text: 'بعد از لانچ با iteration، مانیتورینگ، رفع باگ و توسعه قابلیت‌ها محصول را زنده و مفید نگه می‌داریم.',
		},
	],
	stack,
	ui: {
		startProject: 'شروع پروژه',
		badge: 'تیم نرم‌افزاری Moonlancer',
		heroTitle: 'Moonlancer لایه نرم‌افزاری عملیات جدی فروش و تجارت را می‌سازد.',
		heroText:
			'ما یک تیم محصول جمع‌وجور برای هلدینگ‌های فروش آنلاین و شرکت‌های عملیاتی هستیم؛ از وب‌اپ و موبایل‌اپ تا ERP، ابزار فروشنده، پرداخت، نقشه، داشبورد، رابط‌های AI و پلتفرم بک‌اند را طوری می‌سازیم که با هم کار کنند.',
		capabilitiesCta: 'بررسی توانمندی‌ها',
		viewSoftware: 'پوشش نیازهای هلدینگ',
		teamOs: 'پوشش اسکواد',
		focus: {
			fintech: ['فین‌تک', 'پرداخت، BNPL، کیف پول'],
			fieldOps: ['عملیات میدانی', 'مسیر، زون، موبایل'],
			management: ['مدیریت', 'داشبورد، گزارش، پنل'],
		},
		team: {
			kicker: 'تیم',
			title: 'یک اسکواد کاربردی برای رابط محصول، موبایل، بک‌اند، فروش آنلاین، ERP و پلتفرم.',
			text: 'Moon Studio مهارت‌های فرانت‌اند، موبایل، بک‌اند، Laravel، Magento، .NET، رابط محصول و AI UI را در یک تیم تحویل کنار هم می‌آورد. هر عضو پورتفولیوی خودش را دارد، اما ارزش اصلی در ترکیب این مهارت‌ها برای ساخت نرم‌افزار واقعی کسب‌وکار است.',
		},
		services: {
			kicker: 'خدمات',
			title: 'تیمی مدیریت‌شده برای نرم‌افزارهایی که یک هلدینگ در مسیر رشد مدام نیاز دارد.',
			text: 'ما سطح‌های پرتکرار محصول در شرکت‌های فروش‌محور را پوشش می‌دهیم: ابزار فروشنده، صفحات ERP، اپ مشتری، جریان پرداخت، عملیات نقشه‌محور، پنل ادمین، یکپارچه‌سازی و وب‌سایت آماده لانچ.',
		},
		software: {
			kicker: 'پوشش نیازهای هلدینگ',
			title: 'به جای گالری نمونه‌کار، توانمندی‌های قابل استفاده را نشان می‌دهیم.',
			text: 'این بخش توضیح می‌دهد یک هلدینگ فروش آنلاین یا خرده‌فروشی معمولا چه نرم‌افزارهایی لازم دارد، تیم در کجا وارد می‌شود و چرا این بخش‌ها باید کنار هم دیده شوند.',
		},
		process: {
			kicker: 'فرایند',
			title: 'تحویل منظم از گردش‌کار مبهم تا سیستم قابل استفاده در production.',
			step: 'مرحله',
		},
		stackRange: 'دامنه تکنولوژی',
		bestFitTitle: 'برای چه تیم‌هایی مناسبیم؟',
		bestFit:
			'شرکت‌هایی که سطح‌های محصولی جدی می‌خواهند، اما نمی‌خواهند برای هر مسیر طراحی، فرانت‌اند، بک‌اند، موبایل، کامرس و عملیات یک تیم جدا بسازند.',
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
	const { capabilities, teamMembers, serviceGroups, signals, softwareNeeds, process, stack, ui } =
		locale === 'fa' ? homeFa : homeEn;

	return (
		<main id="main-content" role="main" className="min-h-dvh overflow-hidden bg-black text-white">
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
										<Layers3 className="ms-2 size-4" />
										{ui.capabilitiesCta}
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
									<Link href="#software">
										<ExternalLink className="ms-2 size-4" />
										{ui.viewSoftware}
									</Link>
								</Button>
							</div>
						</motion.div>

						<motion.aside variants={reduceMotion ? undefined : itemVariants} className="grid gap-4">
							<Card className="border-white/10 bg-white/[0.06] text-white shadow-2xl shadow-cyan-950/20 backdrop-blur">
								<CardHeader>
									<CardTitle className="text-xl">{ui.teamOs}</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-col gap-4">
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

					<AnimatedSection id="software" className="pb-16">
						<SectionTitle
							icon={Layers3}
							kicker={ui.software.kicker}
							title={ui.software.title}
							text={ui.software.text}
						/>
						<div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
							{softwareNeeds.map((need, index) => (
								<motion.article
									key={need.title}
									initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
									whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
									viewport={{ once: true, margin: '-80px' }}
									transition={{ delay: index * 0.04, type: 'spring', stiffness: 180, damping: 22 }}
									whileHover={reduceMotion ? undefined : { y: -5 }}
									className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] text-white backdrop-blur transition hover:border-cyan-300/35 hover:bg-white/[0.07]">
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />
									<div className="relative flex h-full flex-col gap-5 p-5">
										<div className="flex items-start justify-between gap-4">
											<div className="flex size-11 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
												<need.icon className="size-5" />
											</div>
											<span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-zinc-400">
												{String(index + 1).padStart(2, '0')}
											</span>
										</div>
										<div>
											<h3 className="text-lg font-semibold text-white">{need.title}</h3>
											<p className="mt-3 text-sm leading-6 text-zinc-400">{need.description}</p>
										</div>
										<div className="mt-auto flex flex-wrap gap-2">
											{need.items.map((item) => (
												<span
													key={item}
													className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-200">
													{item}
												</span>
											))}
										</div>
										<p className="border-t border-white/10 pt-4 text-xs leading-5 text-cyan-100/80">
											{need.outcome}
										</p>
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
							<div className="flex flex-col gap-5">
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

						<aside className="flex flex-col gap-6">
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
