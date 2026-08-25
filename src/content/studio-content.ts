import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export const memberSlugs = [
	"hamid-ft",
	"sepide-soltanpour",
	"mohammadreza-vasebi",
	"mohammadreza-parsaeian",
	"mehdi-alikhani",
	"keyvan-moradkhani",
	"omid-nikroo",
	"iman-jafari",
] as const;

export type MemberSlug = (typeof memberSlugs)[number];

export type MemberProfile = {
	slug: MemberSlug;
	index: string;
	name: string;
	role: LocalizedText;
	responsibility: LocalizedText;
	summary: LocalizedText;
	systemTypes: LocalizedList;
	technicalRange: string[];
	deliveryRemit: LocalizedList;
};

export const members: MemberProfile[] = [
	{
		slug: "hamid-ft",
		index: "01",
		name: "Hamid Fattahi",
		role: { en: "Product Interface Engineer", fa: "مهندس رابط‌های محصول" },
		responsibility: {
			en: "Frontend architecture across commerce, ERP, fintech, logistics, and operational control surfaces.",
			fa: "طراحی معماری فرانت‌اند برای محصولات فروش آنلاین، ERP، فین‌تک، لجستیک و ابزارهای مدیریت عملیات.",
		},
		summary: {
			en: "Shapes complex workflows into durable Next.js interfaces and keeps design, state, maps, data, and API behavior coherent through delivery.",
			fa: "جریان‌های پیچیده کاری را به تجربه‌ای روشن در Next.js تبدیل می‌کند؛ از دیزاین سیستم و مدیریت state تا نقشه، داده و اتصال درست به API.",
		},
		systemTypes: {
			en: [
				"ERP and backoffice panels",
				"Seller and marketplace tools",
				"Fintech and map-based interfaces",
			],
			fa: [
				"پنل‌های ERP و مدیریت داخلی",
				"پنل فروشنده و مارکت‌پلیس",
				"محصولات فین‌تک و نقشه‌محور",
			],
		},
		technicalRange: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"TanStack Query",
			"Maps",
		],
		deliveryRemit: {
			en: [
				"Interface architecture",
				"Design-system implementation",
				"Frontend integration",
				"Responsive and release QA",
			],
			fa: [
				"معماری فرانت‌اند",
				"ساخت و نگه‌داری دیزاین سیستم",
				"اتصال فرانت‌اند به سرویس‌ها",
				"بازبینی واکنش‌گرایی و آماده‌سازی انتشار",
			],
		},
	},
	{
		slug: "sepide-soltanpour",
		index: "02",
		name: "Sepide Soltanpour",
		role: {
			en: "Data & AI Interface Engineer",
			fa: "مهندس رابط‌های داده و هوش مصنوعی",
		},
		responsibility: {
			en: "Data-heavy admin systems, AI-assisted consultation flows, forms, charts, maps, and resilient frontend delivery.",
			fa: "ساخت پنل‌های داده‌محور، تجربه‌های مشاوره با AI، فرم‌های پیچیده، نمودار و نقشه با تمرکز بر تحویل مطمئن فرانت‌اند.",
		},
		summary: {
			en: "Builds clear interfaces for dense operational data and assistant workflows, with attention to performance, validation, and maintainable structure.",
			fa: "اطلاعات شلوغ و فرآیندهای چندمرحله‌ای را به رابطی قابل فهم تبدیل می‌کند؛ با اعتبارسنجی درست، عملکرد روان و کدی که قابل توسعه بماند.",
		},
		systemTypes: {
			en: [
				"Admin and analytics panels",
				"AI consultation products",
				"Map and reporting interfaces",
			],
			fa: [
				"پنل مدیریت و گزارش‌گیری",
				"محصولات مشاوره با AI",
				"ابزارهای نقشه و تحلیل داده",
			],
		},
		technicalRange: [
			"Next.js",
			"React",
			"TypeScript",
			"TanStack Query",
			"Chart.js",
			"Mapbox",
		],
		deliveryRemit: {
			en: [
				"Complex forms and states",
				"Data visualization",
				"AI interaction surfaces",
				"CI/CD-aware frontend delivery",
			],
			fa: [
				"فرم‌ها و فرآیندهای چندمرحله‌ای",
				"نمودار و نمایش داده",
				"طراحی تعامل با AI",
				"تحویل فرانت‌اند در چرخه CI/CD",
			],
		},
	},
	{
		slug: "mohammadreza-vasebi",
		index: "03",
		name: "Mohammadreza Vasebi",
		role: { en: "Mobile Operations Engineer", fa: "مهندس اپلیکیشن‌های عملیاتی" },
		responsibility: {
			en: "Cross-platform mobile products spanning shopping, delivery, credit, QR, realtime communication, and map-based field workflows.",
			fa: "ساخت اپ‌های چندسکویی برای خرید، تحویل، اعتبار، اسکن QR، ارتباط لحظه‌ای و کارهای میدانی مبتنی بر نقشه.",
		},
		summary: {
			en: "Connects customer and field activity to reliable mobile states, APIs, realtime events, device capabilities, and map interactions.",
			fa: "تجربه مشتری و نیروی میدانی را در یک اپ پایدار کنار هم می‌آورد؛ از اتصال API و رویدادهای realtime تا امکانات دستگاه و نقشه.",
		},
		systemTypes: {
			en: [
				"Commerce and delivery apps",
				"Loan and wallet flows",
				"QR and field-operation tools",
			],
			fa: [
				"اپ‌های فروش و تحویل",
				"درخواست اعتبار و کیف پول",
				"ابزارهای QR و تیم میدانی",
			],
		},
		technicalRange: [
			"React Native",
			"Expo",
			"TypeScript",
			"TanStack Query",
			"Socket.io",
			"Mapbox",
		],
		deliveryRemit: {
			en: [
				"Mobile architecture",
				"Native capability integration",
				"Realtime product states",
				"Performance and device QA",
			],
			fa: [
				"معماری موبایل",
				"اتصال امکانات بومی دستگاه",
				"مدیریت داده و رویدادهای realtime",
				"بهینه‌سازی عملکرد و تست روی دستگاه",
			],
		},
	},
	{
		slug: "mohammadreza-parsaeian",
		index: "04",
		name: "MohammadReza Parsaeian",
		role: { en: "Backend Systems Lead", fa: "راهبر فنی بک‌اند" },
		responsibility: {
			en: "Distributed backend services for payments, delivery, GPS platforms, notifications, monitoring, and team-level technical direction.",
			fa: "معماری و هدایت فنی سرویس‌های بک‌اند در پرداخت، تحویل، ردیابی GPS، اعلان و مانیتورینگ.",
		},
		summary: {
			en: "Defines service boundaries and operational safeguards for platforms that coordinate money, movement, devices, and high-volume system events.",
			fa: "برای سامانه‌هایی که با تراکنش، جابه‌جایی، دستگاه و حجم بالای رویداد سروکار دارند، ساختار سرویس‌ها و مسیرهای خطا را روشن و قابل کنترل نگه می‌دارد.",
		},
		systemTypes: {
			en: [
				"Payment and credit services",
				"GPS and device platforms",
				"Delivery and notification services",
			],
			fa: [
				"سرویس‌های پرداخت و اعتبار",
				"سامانه‌های GPS و مدیریت دستگاه",
				"سرویس‌های تحویل و اعلان",
			],
		},
		technicalRange: [
			"Golang",
			"PHP",
			"Laravel",
			"Node.js",
			"PostgreSQL",
			"Redis",
			"RabbitMQ",
		],
		deliveryRemit: {
			en: [
				"Service architecture",
				"Technical leadership",
				"Observability and reliability",
				"Backend delivery ownership",
			],
			fa: [
				"معماری سرویس",
				"رهبری فنی",
				"مانیتورینگ و پایداری سرویس",
				"مسئولیت تحویل بک‌اند",
			],
		},
	},
	{
		slug: "mehdi-alikhani",
		index: "05",
		name: "Mehdi Alikhani",
		role: { en: "Commerce Platform Engineer", fa: "مهندس پلتفرم فروش آنلاین" },
		responsibility: {
			en: "Headless commerce, Laravel microservices, Magento ecosystems, payment packages, messaging, testing, and Linux operations.",
			fa: "توسعه Headless Commerce، میکروسرویس‌های Laravel، محصولات Magento، زیرساخت پرداخت و پیام‌رسانی، تست و عملیات Linux.",
		},
		summary: {
			en: "Builds the service layer behind inventory, marketplace, payment, delivery, and travel workflows where integrations must remain replaceable and testable.",
			fa: "سرویس‌های پشت موجودی، مارکت‌پلیس، پرداخت، تحویل و سفر را طوری طراحی می‌کند که اتصال‌ها قابل تست باشند و تغییر یک سرویس، کل محصول را درگیر نکند.",
		},
		systemTypes: {
			en: [
				"Headless and multi-vendor commerce",
				"Inventory and delivery services",
				"Payment and message-broker packages",
			],
			fa: [
				"فروشگاه Headless و چندفروشنده",
				"سرویس‌های موجودی و تحویل",
				"زیرساخت پرداخت و Message Broker",
			],
		},
		technicalRange: [
			"Laravel",
			"Magento 2",
			"GraphQL",
			"RabbitMQ",
			"Kafka",
			"MySQL",
			"Linux",
		],
		deliveryRemit: {
			en: [
				"Commerce service design",
				"Integration packages",
				"Automated testing",
				"Deployment and server operations",
			],
			fa: [
				"طراحی سرویس‌های تجارت آنلاین",
				"توسعه بسته‌های اتصال سرویس",
				"تست خودکار",
				"استقرار و عملیات سرور",
			],
		},
	},
	{
		slug: "keyvan-moradkhani",
		index: "06",
		name: "Keyvan Moradkhani",
		role: { en: "Commerce Backend Engineer", fa: "مهندس بک‌اند فروش آنلاین" },
		responsibility: {
			en: "Multi-vendor commerce, REST APIs, catalog and pricing rules, tax automation, promotions, storage, and full-stack operational tools.",
			fa: "توسعه بک‌اند فروشگاه‌های چندفروشنده، REST API، منطق کاتالوگ و قیمت، ارسال خودکار صورتحساب مالیاتی و ابزارهای مدیریت فروش.",
		},
		summary: {
			en: "Turns commercial rules into maintainable backend workflows and focused control surfaces for sellers, stores, finance teams, and operators.",
			fa: "قواعد پیچیده فروش را به سرویس‌ها و ابزارهایی تبدیل می‌کند که فروشنده، شعبه، تیم مالی و اپراتور بتوانند هر روز با آن‌ها کار کنند.",
		},
		systemTypes: {
			en: [
				"Multi-vendor marketplaces",
				"Tax and promotion automation",
				"Booking and rental platforms",
			],
			fa: [
				"مارکت‌پلیس‌های چندفروشنده",
				"اتوماسیون مالیات و کمپین فروش",
				"پلتفرم‌های رزرو و اجاره",
			],
		},
		technicalRange: [
			"PHP",
			"Laravel",
			"PostgreSQL",
			"MySQL",
			"Redis",
			"Docker",
			"React",
		],
		deliveryRemit: {
			en: [
				"API and data modeling",
				"Commerce rule implementation",
				"Operational dashboards",
				"Third-party integration",
			],
			fa: [
				"مدل‌سازی API و داده",
				"پیاده‌سازی منطق فروش و قیمت‌گذاری",
				"داشبوردهای عملیاتی",
				"اتصال به سرویس‌های بیرونی",
			],
		},
	},
	{
		slug: "omid-nikroo",
		index: "07",
		name: "Omid Nikroo",
		role: { en: "ERP Backend Engineer", fa: "مهندس بک‌اند ERP" },
		responsibility: {
			en: ".NET backend systems for warehouse, sales, distribution, HR, route planning, realtime updates, and database-intensive ERP work.",
			fa: "توسعه سرویس‌های .NET برای ERP، انبار، فروش، پخش، منابع انسانی، برنامه‌ریزی مسیر و داده‌های لحظه‌ای.",
		},
		summary: {
			en: "Connects domain rules, data integrity, and realtime communication across the internal modules that keep operations running.",
			fa: "منطق کسب‌وکار، سلامت داده و ارتباط لحظه‌ای را بین ماژول‌های داخلی هماهنگ می‌کند تا کار روزانه شرکت بدون وقفه جلو برود.",
		},
		systemTypes: {
			en: [
				"Warehouse and sales ERP",
				"Distribution and route planning",
				"B2B and ordering systems",
			],
			fa: [
				"ERP انبار و فروش",
				"پخش و برنامه‌ریزی مسیر",
				"سامانه‌های B2B و سفارش",
			],
		},
		technicalRange: [
			"C#",
			"ASP.NET Core",
			"Entity Framework",
			"SQL Server",
			"MongoDB",
			"Redis",
			"SignalR",
		],
		deliveryRemit: {
			en: [
				"Domain and service modeling",
				"ERP module delivery",
				"Database optimization",
				"Realtime backend integration",
			],
			fa: [
				"مدل‌سازی دامنه و سرویس",
				"توسعه ماژول‌های ERP",
				"بهینه‌سازی پایگاه داده",
				"اتصال سرویس‌های realtime",
			],
		},
	},
	{
		slug: "iman-jafari",
		index: "08",
		name: "Iman Jafari",
		role: { en: "Frontend Delivery Engineer", fa: "توسعه‌دهنده فرانت‌اند محصول" },
		responsibility: {
			en: "Modern React and Next.js interfaces, component systems, product forms, state management, and responsive public-facing experiences.",
			fa: "پیاده‌سازی رابط‌های React و Next.js، کامپوننت‌های مشترک، فرم‌های محصول، مدیریت state و صفحات واکنش‌گرا.",
		},
		summary: {
			en: "Supports rapid frontend delivery with reusable components, typed product behavior, clean responsive implementation, and contemporary web tooling.",
			fa: "با کامپوننت‌های قابل استفاده مجدد و کد Type-safe، سرعت توسعه فرانت‌اند را بالا می‌برد و جزئیات تجربه در موبایل و دسکتاپ را یکدست نگه می‌دارد.",
		},
		systemTypes: {
			en: [
				"Public product surfaces",
				"Commerce and catalog interfaces",
				"Interactive forms and content systems",
			],
			fa: [
				"وب‌سایت و صفحات عمومی محصول",
				"رابط فروشگاه و کاتالوگ",
				"فرم‌های تعاملی و محصولات محتوایی",
			],
		},
		technicalRange: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Zustand",
			"Drizzle",
		],
		deliveryRemit: {
			en: [
				"Component implementation",
				"Responsive UI delivery",
				"Frontend state integration",
				"Interaction polish",
			],
			fa: [
				"پیاده‌سازی کامپوننت",
				"پیاده‌سازی واکنش‌گرا",
				"مدیریت و اتصال state فرانت‌اند",
				"بهبود جزئیات تعامل",
			],
		},
	},
];

export function isMemberSlug(value: string): value is MemberSlug {
	return (memberSlugs as readonly string[]).includes(value);
}

export function getMember(slug: MemberSlug) {
	const member = members.find((item) => item.slug === slug);
	if (!member) {
		throw new Error(`Unknown Moonlancer member: ${slug}`);
	}
	return member;
}

export const studioCopy = {
	en: {
		nav: {
			capabilities: "Capabilities",
			work: "Work",
			team: "Team",
			process: "Process",
			cta: "Start a brief",
		},
		headerDescriptor: "Product systems studio",
		hero: {
			eyebrow: "Connected software / one accountable squad",
			headline: "Software for operations that cannot break.",
			body: "Moonlancer maps, designs, and builds the connected commerce, ERP, fintech, and field-operation systems your business runs on—from the interface to the service boundary.",
			primary: "Start a project brief",
			secondary: "Explore capabilities",
			availability: "Now shaping Q4 product engagements",
		},
		signals: [
			{ label: "Commerce", value: "Order to operation" },
			{ label: "ERP", value: "Data to decision" },
			{ label: "Fintech", value: "State to settlement" },
			{ label: "Field operations", value: "Plan to proof" },
			{ label: "Interfaces", value: "Signal to action" },
		],
		capabilities: {
			kicker: "System entry points",
			title: "Six ways into one operating system.",
			intro:
				"We enter where the operational pressure is highest, then design the boundaries and connections needed to make the whole system hold.",
			items: [
				{
					number: "01",
					title: "Keep commerce moving as one operation",
					scope:
						"Storefronts, seller panels, catalog governance, pricing, orders, fulfillment, returns, and backoffice control.",
					tags: ["B2B / B2C", "Marketplace", "Order ops"],
				},
				{
					number: "02",
					title: "Turn internal work into a reliable ERP flow",
					scope:
						"Warehouse, purchasing, sales, HR, finance, permissions, approvals, and cross-team operational records.",
					tags: ["ERP", "Warehouse", "Workflow"],
				},
				{
					number: "03",
					title: "Make every money state traceable",
					scope:
						"Payments, credit, wallets, reconciliation, failure recovery, transaction history, and operator support surfaces.",
					tags: ["Payments", "Credit", "Ledger UX"],
				},
				{
					number: "04",
					title: "Connect plans to work in the field",
					scope:
						"Mobile apps, maps, routes, zones, QR and PDA workflows, offline states, and realtime dispatch signals.",
					tags: ["Mobile", "Maps", "Realtime"],
				},
				{
					number: "05",
					title: "Give operators a faster decision surface",
					scope:
						"Tables, search, filters, charts, exceptions, map views, operational KPIs, and role-specific dashboards.",
					tags: ["Decision UI", "Data", "Control"],
				},
				{
					number: "06",
					title: "Build the platform behind the interfaces",
					scope:
						"APIs, services, queues, caching, integrations, monitoring, data boundaries, and deployment-aware architecture.",
					tags: ["Backend", "Integration", "Platform"],
				},
			],
		},
		work: {
			kicker: "Representative system patterns",
			title: "Work is a connected surface, not a gallery.",
			intro:
				"These are representative delivery patterns assembled from the team’s demonstrated product range. They are not published client case studies or performance claims.",
			labels: {
				constraint: "Operational constraint",
				surfaces: "Connected surfaces",
				boundary: "Moonlancer boundary",
				effect: "Intended operating effect",
				evidence: "Evidence status",
			},
			items: [
				{
					number: "A/01",
					title: "Commerce control plane",
					constraint:
						"Orders, catalog rules, seller activity, payments, and fulfillment live in separate tools with no shared operational picture.",
					surfaces: [
						"Storefront",
						"Seller panel",
						"Admin control",
						"Inventory",
						"Payment states",
					],
					boundary:
						"Product architecture, interface system, frontend delivery, service contracts, and integration QA.",
					effect:
						"One traceable flow from commercial action to backoffice response.",
					evidence: "Representative pattern — client proof requires approval.",
				},
				{
					number: "A/02",
					title: "ERP decision spine",
					constraint:
						"Warehouse, sales, finance, and management teams act on duplicated records and delayed reports.",
					surfaces: [
						"ERP modules",
						"Role workflows",
						"Approval states",
						"Dashboards",
						"Audit trail",
					],
					boundary:
						"Domain mapping, workflow design, frontend and backend delivery, permissions, data states, and release support.",
					effect:
						"A dependable internal path from record creation to accountable decision.",
					evidence: "Representative pattern — no metric is asserted.",
				},
				{
					number: "A/03",
					title: "Field execution loop",
					constraint:
						"Plans made at a desk lose context when they reach drivers, visitors, stores, and devices in the field.",
					surfaces: [
						"Planning console",
						"Mobile app",
						"Routes and zones",
						"QR/PDA",
						"Realtime status",
					],
					boundary:
						"Map UX, mobile delivery, API integration, realtime states, exception handling, and operator visibility.",
					effect:
						"A closed loop between planning, execution, exception, and review.",
					evidence:
						"Representative pattern — visual evidence is approval-gated.",
				},
			],
		},
		team: {
			kicker: "One delivery system",
			title: "Eight specialists. One responsibility map.",
			intro:
				"Profiles show what each specialist owns inside a system—not private biography, employment history, or a disconnected list of tools.",
			profileCta: "View system profile",
		},
		process: {
			kicker: "Delivery sequence",
			title: "Clarity before velocity.",
			items: [
				{
					number: "01",
					title: "Map",
					text: "Trace actors, decisions, data, failure points, and the boundary Moonlancer is accountable for.",
				},
				{
					number: "02",
					title: "Shape",
					text: "Turn the operation into product surfaces, system states, technical contracts, and a build sequence.",
				},
				{
					number: "03",
					title: "Build",
					text: "Deliver the interfaces and services in testable slices with integration, performance, and accessibility built in.",
				},
				{
					number: "04",
					title: "Operate",
					text: "Support launch, observe real use, resolve exceptions, and extend the system without losing coherence.",
				},
			],
		},
		fit: {
			kicker: "Best fit",
			title: "The product crosses team boundaries. Ownership should not.",
			body: "Moonlancer fits operational companies and commerce teams that need senior product, frontend, mobile, backend, and platform work to move as one accountable system.",
			cta: "Describe the system",
		},
		intake: {
			kicker: "Two-minute project intake",
			title: "Turn the operational problem into a useful first brief.",
			intro:
				"Choose the system and its current stage. We will structure the context before asking for contact details.",
			steps: ["System", "Stage", "Brief"],
			systemLegend: "What kind of system needs attention?",
			systems: [
				"Commerce platform",
				"ERP or internal tools",
				"Payments or fintech",
				"Mobile or field operations",
				"Data and decision interface",
				"Platform or integration",
			],
			stageLegend: "Where is the product now?",
			stages: [
				"New system to shape",
				"Existing product to redesign",
				"Connected systems to integrate",
				"Production system to stabilize",
			],
			back: "Back",
			next: "Continue",
			briefLabel: "Structured brief",
			copy: "Copy brief",
			copied: "Brief copied",
			name: "Your name",
			email: "Work email",
			consent:
				"I agree that Moonlancer may use these details to respond to this project inquiry.",
			privacy:
				"Your answers stay in this browser if delivery fails. Contact details are sent only through the project-intake endpoint.",
			submit: "Send project brief",
			pending: "Sending brief…",
			success: "Brief received. The studio can now review the system boundary.",
			error:
				"The brief could not be delivered. Your answers are preserved; copy the brief or try again.",
			required: "Choose one option to continue.",
			contactRequired:
				"Add a name, valid work email, and consent before sending.",
			briefTemplate: (system: string, stage: string) =>
				`System type: ${system}\nCurrent stage: ${stage}\nPrimary need: Map the operational constraint, connected surfaces, and Moonlancer responsibility boundary.`,
		},
		footer: {
			statement: "Connected software for serious operations.",
			description:
				"Moonlancer is a senior product-systems squad for commerce, ERP, fintech, field operations, and the interfaces that connect them.",
			language: "Language",
			handoff: "Implementation handoff",
			copyright: "Moon Studio / Moonlancer",
		},
		profile: {
			kicker: "System profile",
			responsibility: "System responsibility",
			systems: "Selected system types",
			technical: "Technical range",
			remit: "Delivery remit",
			team: "Back to the squad",
			cta: "Start a project brief",
			position: "Position in the delivery system",
		},
	},
	fa: {
		nav: {
			capabilities: "توانمندی‌ها",
			work: "الگوها",
			team: "تیم",
			process: "فرآیند",
			cta: "تعریف پروژه",
		},
		headerDescriptor: "استودیو طراحی و توسعه محصول",
		hero: {
			eyebrow: "یک تیم ارشد؛ از صورت مسئله تا محصول پایدار",
			headline: "نرم‌افزاری برای عملیاتی که جای خطا ندارد.",
			body: "Moonlancer کنار تیم‌هایی می‌ایستد که نرم‌افزار، بخش اصلی کار روزانه‌شان است. فروش آنلاین، ERP، فین‌تک و عملیات میدانی را یکپارچه طراحی می‌کنیم و از تجربه کاربر تا سرویس‌های پشت محصول، مسئول تحویل می‌مانیم.",
			primary: "پروژه را تعریف کنیم",
			secondary: "مشاهده توانمندی‌ها",
			availability: "برای همکاری روی چند پروژه‌ی تازه آماده‌ایم",
		},
		signals: [
			{ label: "فروش آنلاین", value: "سفارش، فروشنده، عملیات" },
			{ label: "ERP", value: "فرآیند، داده، تصمیم" },
			{ label: "فین‌تک", value: "تراکنش تا تسویه" },
			{ label: "عملیات میدانی", value: "برنامه تا اجرای واقعی" },
			{ label: "رابط تصمیم‌گیری", value: "اطلاعات تا اقدام" },
		],
		capabilities: {
			kicker: "از کجا می‌توانیم وارد شویم؟",
			title: "مسئله ممکن است از یک بخش شروع شود؛ راه‌حل باید کل مسیر را ببیند.",
			intro:
				"معمولاً همکاری از یک گره جدی شروع می‌شود: سفارش‌هایی که درست جلو نمی‌روند، پنلی که تیم را کند کرده یا سرویس‌هایی که با هم حرف نمی‌زنند. همان نقطه را حل می‌کنیم، بدون اینکه تصویر بزرگ‌تر را از دست بدهیم.",
			items: [
				{
					number: "۰۱",
					title: "فروش آنلاین را با عملیات پشت صحنه یکپارچه می‌کنیم",
					scope:
						"از Storefront و پنل فروشنده تا کاتالوگ، قیمت‌گذاری، سفارش، ارسال، مرجوعی و ابزارهای مدیریت داخلی.",
					tags: ["B2B / B2C", "Marketplace", "سفارش و ارسال"],
				},
				{
					number: "۰۲",
					title: "فرآیندهای پراکنده را به یک ERP قابل اتکا تبدیل می‌کنیم",
					scope:
						"انبار، خرید، فروش، منابع انسانی، مالی، سطح دسترسی، تأییدها و اطلاعاتی که باید بین چند تیم هماهنگ بماند.",
					tags: ["ERP", "انبار", "فرآیند داخلی"],
				},
				{
					number: "۰۳",
					title: "هر تراکنش را از شروع تا تسویه قابل پیگیری می‌کنیم",
					scope:
						"پرداخت، اعتبار، کیف پول، مغایرت‌گیری، برگشت از خطا، تاریخچه تراکنش و ابزار پشتیبانی اپراتور.",
					tags: ["Payments", "Credit", "تجربه‌ی تراکنش"],
				},
				{
					number: "۰۴",
					title: "دفتر، اپ و نیروی میدانی را به هم وصل می‌کنیم",
					scope:
						"اپ موبایل، نقشه، مسیر و محدوده، QR و PDA، کار در حالت آفلاین و وضعیت لحظه‌ای ارسال یا بازدید.",
					tags: ["Mobile", "Maps", "لحظه‌ای"],
				},
				{
					number: "۰۵",
					title: "تصمیم‌گیری را برای اپراتورها ساده‌تر و سریع‌تر می‌کنیم",
					scope:
						"جدول‌های پرحجم، جست‌وجو و فیلتر، نمودار، خطاها و استثناها، نقشه، KPI و داشبورد متناسب با هر نقش.",
					tags: ["Decision UI", "Data", "داشبورد"],
				},
				{
					number: "۰۶",
					title: "زیرساختی می‌سازیم که محصول روی آن دوام بیاورد",
					scope:
						"API و سرویس‌ها، Queue، Cache، اتصال سرویس‌های بیرونی، مانیتورینگ، ساختار داده و معماری آماده‌ی استقرار.",
					tags: ["Backend", "Integration", "زیرساخت"],
				},
			],
		},
		work: {
			kicker: "سه الگوی رایج همکاری",
			title: "ما پروژه را مجموعه‌ای از چند صفحه نمی‌بینیم.",
			intro:
				"این سه الگو نشان می‌دهند مسئله را چطور در امتداد کل عملیات می‌بینیم. نمونه‌ها از تجربه‌ی واقعی تیم آمده‌اند، اما تا پیش از تأیید مشتری، مطالعه‌ی موردی یا نتیجه‌ی اندازه‌گیری‌شده محسوب نمی‌شوند.",
			labels: {
				constraint: "مسئله",
				surfaces: "بخش‌های درگیر",
				boundary: "تعهد Moonlancer",
				effect: "ارزش عملیاتی",
				evidence: "وضعیت مستندات",
			},
			items: [
				{
					number: "الگو / ۰۱",
					title: "اتاق فرمان فروش آنلاین",
					constraint:
						"سفارش، کاتالوگ، فروشنده، پرداخت و ارسال هرکدام در ابزار جداگانه‌ای مدیریت می‌شوند و هیچ‌کس تصویر کامل عملیات را نمی‌بیند.",
					surfaces: [
						"Storefront",
						"پنل فروشنده",
						"پنل مدیریت",
						"انبار و موجودی",
						"وضعیت پرداخت",
					],
					boundary:
						"شناخت جریان، معماری محصول، دیزاین سیستم، توسعه فرانت‌اند، تعریف قرارداد سرویس‌ها و تست اتصال بین بخش‌ها.",
					effect:
						"یک مسیر روشن و قابل پیگیری از ثبت سفارش تا اقدام تیم عملیات.",
					evidence:
						"الگوی همکاری است؛ انتشار نام و مستندات مشتری نیاز به تأیید دارد.",
				},
				{
					number: "الگو / ۰۲",
					title: "ستون فقرات عملیات ERP",
					constraint:
						"انبار، فروش، مالی و مدیریت با فایل‌ها و رکوردهای تکراری کار می‌کنند؛ گزارش دیر می‌رسد و مسئول هر تصمیم روشن نیست.",
					surfaces: [
						"ماژول‌های ERP",
						"فرآیند هر نقش",
						"تأیید و دسترسی",
						"داشبورد",
						"تاریخچه تغییرات",
					],
					boundary:
						"مدل‌سازی کسب‌وکار، طراحی فرآیند، توسعه فرانت‌اند و بک‌اند، تعریف دسترسی‌ها، کنترل وضعیت داده و همراهی در راه‌اندازی.",
					effect:
						"هر رکورد از زمان ثبت تا تصمیم نهایی، صاحب و تاریخچه‌ی مشخصی دارد.",
					evidence:
						"الگوی همکاری است و هیچ عدد یا نتیجه‌ی تأییدنشده‌ای به آن نسبت داده نشده.",
				},
				{
					number: "الگو / ۰۳",
					title: "چرخه‌ی اجرای میدانی",
					constraint:
						"برنامه در دفتر نوشته می‌شود، اما وقتی به راننده، ویزیتور یا شعبه می‌رسد، اطلاعات ناقص است و بازخورد مسیر به تیم عملیات برنمی‌گردد.",
					surfaces: [
						"پنل برنامه‌ریزی",
						"اپ موبایل",
						"مسیر و محدوده",
						"QR/PDA",
						"وضعیت لحظه‌ای",
					],
					boundary:
						"طراحی تجربه نقشه، توسعه اپ موبایل، اتصال API، وضعیت‌های لحظه‌ای، مدیریت خطا و ساخت ابزار نظارت برای اپراتور.",
					effect:
						"برنامه‌ریزی، اجرا، خطا و بازبینی در یک چرخه‌ی پیوسته به هم وصل می‌شوند.",
					evidence:
						"الگوی همکاری است؛ نمایش تصویر یا نام پروژه منوط به اجازه‌ی مشتری است.",
				},
			],
		},
		team: {
			kicker: "تیم Moonlancer",
			title: "هشت تخصص؛ یک تیم مسئول.",
			intro:
				"در هر پروفایل می‌بینید آن فرد در یک پروژه مسئول چه چیزی است، با چه نوع محصولاتی کار کرده و کجای مسیر تحویل را جلو می‌برد؛ بدون اطلاعات شخصی و رزومه‌های طولانی.",
			profileCta: "دیدن نقش در تیم",
		},
		process: {
			kicker: "روش همکاری",
			title: "اول مسئله را روشن می‌کنیم؛ بعد سراغ ساخت می‌رویم.",
			items: [
				{
					number: "۰۱",
					title: "شناخت",
					text: "آدم‌ها، تصمیم‌ها، داده‌ها و نقاطی را که کار در آن‌ها متوقف می‌شود کنار هم می‌گذاریم و تعهد تیم را دقیق مشخص می‌کنیم.",
				},
				{
					number: "۰۲",
					title: "طراحی راه‌حل",
					text: "فرآیند واقعی کسب‌وکار را به تجربه‌ی محصول، وضعیت‌های سیستم، قراردادهای فنی و یک برنامه‌ی ساخت قابل اجرا تبدیل می‌کنیم.",
				},
				{
					number: "۰۳",
					title: "ساخت و اتصال",
					text: "محصول را مرحله‌به‌مرحله می‌سازیم و از همان ابتدا اتصال سرویس‌ها، عملکرد، دسترس‌پذیری و سناریوهای خطا را تست می‌کنیم.",
				},
				{
					number: "۰۴",
					title: "راه‌اندازی و بهبود",
					text: "در انتشار کنار تیم می‌مانیم، رفتار واقعی کاربران را بررسی می‌کنیم و بدون به‌هم‌زدن انسجام محصول، آن را بهتر و کامل‌تر می‌کنیم.",
				},
			],
		},
		fit: {
			kicker: "چه زمانی انتخاب خوبی هستیم؟",
			title: "وقتی محصول از چند تیم عبور می‌کند، مسئولیت نباید بین آن‌ها گم شود.",
			body: "اگر محصول شما هم‌زمان به طراحی، فرانت‌اند، موبایل، بک‌اند و زیرساخت نیاز دارد و نمی‌خواهید هماهنگی این بخش‌ها خودش به یک پروژه‌ی جدا تبدیل شود، Moonlancer برای همین نقطه ساخته شده است.",
			cta: "از مسئله بگویید",
		},
		intake: {
			kicker: "شروع گفت‌وگو در دو دقیقه",
			title: "مسئله را کوتاه و روشن برای ما تعریف کنید.",
			intro:
				"ابتدا نوع پروژه و وضعیت فعلی آن را می‌پرسیم. بعد یک خلاصه‌ی مرتب می‌سازیم تا بدون جلسه‌های طولانی، نقطه‌ی شروع مشترکی داشته باشیم.",
			steps: ["نوع پروژه", "وضعیت فعلی", "جمع‌بندی"],
			systemLegend: "مسئله‌ی اصلی به کدام بخش نزدیک‌تر است؟",
			systems: [
				"فروشگاه یا مارکت‌پلیس",
				"ERP و ابزارهای داخلی",
				"پرداخت، اعتبار یا کیف پول",
				"اپ موبایل و عملیات میدانی",
				"پنل داده و تصمیم‌گیری",
				"بک‌اند و اتصال سرویس‌ها",
			],
			stageLegend: "محصول الان کجای مسیر است؟",
			stages: [
				"یک ایده یا محصول تازه داریم",
				"محصول فعلی به بازطراحی نیاز دارد",
				"چند سیستم باید به هم متصل شوند",
				"محصول فعال است اما باید پایدارتر شود",
			],
			back: "بازگشت",
			next: "ادامه",
			briefLabel: "خلاصه‌ی پروژه",
			copy: "کپی خلاصه",
			copied: "خلاصه کپی شد",
			name: "نام شما",
			email: "ایمیل کاری",
			consent:
				"موافقم Moonlancer فقط برای پیگیری همین درخواست با من در تماس باشد.",
			privacy:
				"اگر ارسال با خطا روبه‌رو شود، پاسخ‌ها روی همین مرورگر می‌مانند. اطلاعات تماس فقط برای بررسی این درخواست ارسال می‌شود.",
			submit: "ارسال برای Moonlancer",
			pending: "در حال ارسال…",
			success:
				"درخواستتان رسید. مسئله و محدوده‌ی پروژه را بررسی می‌کنیم و برای ادامه خبر می‌دهیم.",
			error:
				"ارسال انجام نشد، اما پاسخ‌ها محفوظ‌اند. می‌توانید دوباره تلاش کنید یا خلاصه را کپی کنید.",
			required: "برای ادامه، یکی از گزینه‌ها را انتخاب کنید.",
			contactRequired:
				"برای ارسال، نام و ایمیل کاری معتبر را وارد و گزینه‌ی موافقت را انتخاب کنید.",
			briefTemplate: (system: string, stage: string) =>
				`نوع پروژه: ${system}\nوضعیت فعلی: ${stage}\nنقطه‌ی شروع پیشنهادی: بررسی مسئله‌ی اصلی، بخش‌های درگیر و محدوده‌ای که Moonlancer می‌تواند مسئولیت آن را بر عهده بگیرد.`,
		},
		footer: {
			statement: "یک تیم برای تمام بخش‌هایی که باید با هم کار کنند.",
			description:
				"Moonlancer تیمی از متخصصان محصول، فرانت‌اند، موبایل و بک‌اند است که نرم‌افزارهای فروش آنلاین، ERP، فین‌تک و عملیات میدانی را یکپارچه طراحی و توسعه می‌دهد.",
			language: "زبان",
			handoff: "راهنمای پیاده‌سازی",
			copyright: "Moon Studio / Moonlancer",
		},
		profile: {
			kicker: "نقش در تیم",
			responsibility: "در پروژه مسئول چیست؟",
			systems: "تجربه در چه محصولاتی؟",
			technical: "ابزارها و تکنولوژی‌ها",
			remit: "چه بخشی را تحویل می‌دهد؟",
			team: "بازگشت به تیم",
			cta: "پروژه را تعریف کنیم",
			position: "نقش در اجرای پروژه",
		},
	},
} as const;
