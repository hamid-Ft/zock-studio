import type { Locale } from "@/lib/i18n";
import type { MemberSlug } from "./studio-content";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;
export type FreelanceSlug = Exclude<MemberSlug, "iman-jafari">;
export type CVContact = {
	kind: "email" | "phone" | "linkedin" | "github";
	label: string;
	href: string;
};
export type FreelanceCV = {
	name: LocalizedText;
	role: LocalizedText;
	intro: LocalizedText;
	services: LocalizedList;
	location: LocalizedText;
	contacts: CVContact[];
	skills: { title: LocalizedText; items: string[] }[];
	experience: {
		company: LocalizedText;
		role: LocalizedText;
		period: LocalizedText;
		arrangement: LocalizedText;
		summary: LocalizedText;
	}[];
	projects: {
		name: string;
		summary: LocalizedText;
		stack?: string;
		href?: string;
	}[];
	education: {
		degree: LocalizedText;
		school: LocalizedText;
		period: LocalizedText;
	}[];
};

// Career dates, employers, contacts, skills, and projects are preserved from the
// individual CV pages in revision de8a8e6; introductions and services are edited
// for personal freelance portfolios. Employment types retain their original meaning.
export const freelanceCVs: Record<FreelanceSlug, FreelanceCV> = {
	"hamid-ft": {
		name: {
			en: "Hamid Fattahi",
			fa: "حمید فتاحی",
		},
		role: {
			en: "Freelance Frontend Developer",
			fa: "توسعه‌دهنده فریلنس فرانت‌اند",
		},
		intro: {
			en: "I build React and Next.js websites, dashboards, and web applications. My work spans marketplace interfaces, payment journeys, map-based tools, and WordPress sites, with close attention to responsive design and the details people use every day.",
			fa: "وب‌سایت، داشبورد و اپلیکیشن وب را با React و Next.js می‌سازم. تجربه‌ام از رابط‌های مارکت‌پلیس و پرداخت تا ابزارهای نقشه‌محور و سایت‌های وردپرسی را در بر می‌گیرد؛ با توجه ویژه به طراحی واکنش‌گرا و جزئیاتی که کاربر هر روز با آن‌ها کار می‌کند.",
		},
		services: {
			en: [
				"React and Next.js websites and web apps",
				"Admin dashboards and seller panels",
				"Figma-to-code and responsive UI",
				"Maps, API integration, and WordPress development",
			],
			fa: [
				"وب‌سایت و اپلیکیشن وب با React و Next.js",
				"داشبورد مدیریت و پنل فروشنده",
				"تبدیل طرح Figma به رابط واکنش‌گرا",
				"نقشه، اتصال API و توسعه وردپرس",
			],
		},
		location: {
			en: "Tehran, Iran",
			fa: "تهران، ایران",
		},
		contacts: [
			{
				kind: "email",
				label: "hamidfattahi.a@gmail.com",
				href: "mailto:hamidfattahi.a@gmail.com",
			},
			{
				kind: "linkedin",
				label: "LinkedIn",
				href: "https://www.linkedin.com/in/hamidft",
			},
			{
				kind: "github",
				label: "GitHub",
				href: "https://github.com/hamid-Ft",
			},
		],
		skills: [
			{
				title: {
					en: "Frontend Core",
					fa: "هسته فرانت‌اند",
				},
				items: ["TypeScript", "React", "Next.js", "JavaScript", "HTML5", "CSS"],
			},
			{
				title: {
					en: "Design Systems",
					fa: "سیستم‌های طراحی",
				},
				items: [
					"Tailwind CSS",
					"Shadcn UI",
					"Figma",
					"Front-End Design",
					"Responsive UI",
				],
			},
			{
				title: {
					en: "Product Surfaces",
					fa: "رابط‌های محصول",
				},
				items: [
					"ERP Panels",
					"Admin Panels",
					"Seller Panels",
					"PDA Apps",
					"Backoffice Tools",
				],
			},
			{
				title: {
					en: "Delivery Stack",
					fa: "ابزارهای توسعه",
				},
				items: [
					"Git",
					"WordPress",
					"React Query",
					"Redux",
					"Maps",
					"E-Commerce",
				],
			},
		],
		experience: [
			{
				company: {
					en: "Aldy",
					fa: "Aldy",
				},
				role: {
					en: "Frontend Developer",
					fa: "توسعه‌دهنده فرانت‌اند",
				},
				period: {
					en: "January 2025 - Present",
					fa: "ژانویه 2025 تا اکنون (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Built DailyMarket and WallMarket backoffice panels, logistics PDA apps, and Aldy marketplace admin and seller interfaces. Contributed to WPG payment products, BNPL, loan, and wallet flows.",
					fa: "ساخت پنل‌های مدیریتی DailyMarket و WallMarket، اپلیکیشن‌های PDA لجستیک و رابط‌های مدیریت و فروشنده مارکت‌پلیس آلدی؛ مشارکت در محصولات پرداخت WPG، خرید اعتباری، وام و کیف پول.",
				},
			},
			{
				company: {
					en: "DESNA CO",
					fa: "DESNA CO",
				},
				role: {
					en: "Frontend Developer",
					fa: "توسعه‌دهنده فرانت‌اند",
				},
				period: {
					en: "December 2023 - Present",
					fa: "دسامبر 2023 تا اکنون (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Built BAT route planning and survey interfaces, Unilever B2B ordering, RoyalJeans commerce pages, and GhajariFood delivery and zone-pricing tools.",
					fa: "ساخت رابط برنامه‌ریزی مسیر و نظرسنجی BAT، سفارش‌گیری B2B برای Unilever، صفحات فروشگاهی RoyalJeans و ابزارهای تحویل و قیمت‌گذاری محدوده در GhajariFood.",
				},
			},
			{
				company: {
					en: "Niklink Agency",
					fa: "Niklink Agency",
				},
				role: {
					en: "WordPress Developer",
					fa: "توسعه‌دهنده وردپرس",
				},
				period: {
					en: "November 2019 - December 2020",
					fa: "نوامبر 2019 تا دسامبر 2020 (میلادی)",
				},
				arrangement: {
					en: "Agency",
					fa: "آژانس",
				},
				summary: {
					en: "Developed responsive WordPress websites for Nik Yazd Holding and its subsidiaries, including PPNY, Nikpu, and Nikbaspar. Implemented Figma designs and worked on SEO fundamentals.",
					fa: "توسعه وب‌سایت‌های وردپرسی واکنش‌گرا برای هلدینگ نیک یزد و شرکت‌های PPNY، نیک‌پلی‌یورتان و نیک‌بسپار؛ پیاده‌سازی طرح‌های Figma و کار روی مبانی سئو.",
				},
			},
			{
				company: {
					en: "Kiasoren",
					fa: "Kiasoren",
				},
				role: {
					en: "Full-stack Developer",
					fa: "توسعه‌دهنده فول‌استک",
				},
				period: {
					en: "August 2016 - December 2019",
					fa: "اوت 2016 تا دسامبر 2019 (میلادی)",
				},
				arrangement: {
					en: "Internship",
					fa: "کارآموزی",
				},
				summary: {
					en: "Developed web programming foundations through mentored work in WordPress, frontend development, PHP, SQL, algorithms, and deployment concepts.",
					fa: "یادگیری و تمرین توسعه وب زیر نظر منتور، شامل وردپرس، فرانت‌اند، PHP، SQL، الگوریتم و مبانی استقرار نرم‌افزار.",
				},
			},
		],
		projects: [
			{
				name: "Aldy Marketplace",
				summary: {
					en: "Marketplace and commerce interface work spanning platform migration, admin tooling, and seller workflows.",
					fa: "توسعه رابط مارکت‌پلیس، مهاجرت پلتفرم و ابزارهای مدیریت و فروشنده.",
				},
				href: "https://www.aldy.ir",
			},
			{
				name: "GhajariFood",
				summary: {
					en: "Catering platform with internal delivery management, zone pricing logic, and sales operation tools.",
					fa: "پیاده‌سازی رابط پلتفرم تهیه غذا، مدیریت تحویل، قیمت‌گذاری محدوده و ابزارهای فروش.",
				},
				href: "https://ghajarifood.com",
			},
			{
				name: "Niklink Agency",
				summary: {
					en: "Agency website and client delivery experience tied to WordPress and SEO-focused implementation.",
					fa: "توسعه وب‌سایت آژانس و وب‌سایت‌های مشتریان با وردپرس و توجه به ساختار سئو.",
				},
				href: "https://niklinkagency.com",
			},
		],
		education: [
			{
				degree: {
					en: "Master of Science - MS, Plasma and High-Temperature Physics",
					fa: "کارشناسی ارشد فیزیک پلاسما و دماهای بالا",
				},
				school: {
					en: "K. N. Toosi University of Technology",
					fa: "دانشگاه صنعتی خواجه نصیرالدین طوسی",
				},
				period: {
					en: "September 2022",
					fa: "سپتامبر 2022 (میلادی)",
				},
			},
			{
				degree: {
					en: "Bachelor of Science - BS, Plasma and High-Temperature Physics",
					fa: "کارشناسی فیزیک پلاسما و دماهای بالا",
				},
				school: {
					en: "Islamic Azad University, Science And Research Branch",
					fa: "دانشگاه آزاد اسلامی، واحد علوم و تحقیقات",
				},
				period: {
					en: "2019 - 2021",
					fa: "2019 تا 2021 (میلادی)",
				},
			},
			{
				degree: {
					en: "Bachelor's degree, Engineering Physics",
					fa: "کارشناسی مهندسی فیزیک",
				},
				school: {
					en: "Islamic Azad University, Science And Research Branch",
					fa: "دانشگاه آزاد اسلامی، واحد علوم و تحقیقات",
				},
				period: {
					en: "2011 - 2015",
					fa: "2011 تا 2015 (میلادی)",
				},
			},
			{
				degree: {
					en: "High School Diploma, Mathematics",
					fa: "دیپلم ریاضی",
				},
				school: {
					en: "Dr. Moein Highschool",
					fa: "دبیرستان دکتر معین",
				},
				period: {
					en: "2009 - 2010",
					fa: "2009 تا 2010 (میلادی)",
				},
			},
		],
	},
	"sepide-soltanpour": {
		name: {
			en: "Sepide Soltanpour",
			fa: "سپیده سلطان‌پور",
		},
		role: {
			en: "Freelance Frontend Developer",
			fa: "توسعه‌دهنده فریلنس فرانت‌اند",
		},
		intro: {
			en: "I create responsive React and Next.js interfaces for web products, admin dashboards, and AI-assisted experiences. I enjoy making complex forms, charts, and data flows feel clear and approachable.",
			fa: "با React و Next.js رابط‌های واکنش‌گرا برای محصولات وب، داشبوردهای مدیریتی و تجربه‌های مبتنی بر هوش مصنوعی می‌سازم. دوست دارم فرم‌ها، نمودارها و جریان‌های پیچیده داده را به تجربه‌ای روشن و قابل فهم تبدیل کنم.",
		},
		services: {
			en: [
				"React and Next.js frontend development",
				"Admin panels, charts, and complex forms",
				"AI assistant interfaces and API integration",
				"Responsive implementation from Figma designs",
			],
			fa: [
				"توسعه فرانت‌اند با React و Next.js",
				"پنل مدیریت، نمودار و فرم‌های پیچیده",
				"رابط دستیار هوش مصنوعی و اتصال API",
				"پیاده‌سازی واکنش‌گرا از روی طرح Figma",
			],
		},
		location: {
			en: "Tehran, Iran",
			fa: "تهران، ایران",
		},
		contacts: [
			{
				kind: "phone",
				label: "00989198127391",
				href: "tel:+989198127391",
			},
		],
		skills: [
			{
				title: {
					en: "Frontend Core",
					fa: "هسته فرانت‌اند",
				},
				items: [
					"Next.js",
					"React",
					"TypeScript",
					"JavaScript",
					"Tailwind CSS",
					"Material UI",
				],
			},
			{
				title: {
					en: "Forms & Data",
					fa: "فرم و داده",
				},
				items: [
					"React Hook Form",
					"React Query",
					"Redux",
					"Zustand",
					"Yup",
					"Zod",
				],
			},
			{
				title: {
					en: "Product UI",
					fa: "رابط محصول",
				},
				items: ["Chart.js", "Mapbox", "Figma", "Responsive UI", "Admin Panels"],
			},
			{
				title: {
					en: "Delivery & Testing",
					fa: "توسعه و تست",
				},
				items: [
					"Docker",
					"CI/CD",
					"Jest",
					"Monorepo",
					"SignalR",
					"WebSocket",
					"gulp",
				],
			},
		],
		experience: [
			{
				company: {
					en: "Remote Canadian Team",
					fa: "تیم کانادایی، دورکاری",
				},
				role: {
					en: "Front-End Developer",
					fa: "توسعه‌دهنده فرانت‌اند",
				},
				period: {
					en: "January 2026 - Present",
					fa: "ژانویه 2026 تا اکنون (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Developed an AI-powered consultation platform with assistant features and responsive interfaces, focusing on performance and maintainable architecture.",
					fa: "توسعه پلتفرم مشاوره مبتنی بر هوش مصنوعی، قابلیت‌های دستیار و رابط‌های واکنش‌گرا با تمرکز بر عملکرد و معماری قابل نگه‌داری.",
				},
			},
			{
				company: {
					en: "Tejarat Electronic Farhangian",
					fa: "تجارت الکترونیک فرهنگیان",
				},
				role: {
					en: "Front-End Developer",
					fa: "توسعه‌دهنده فرانت‌اند",
				},
				period: {
					en: "May 2025 - December 2025",
					fa: "مه 2025 تا دسامبر 2025 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Built four Next.js admin panels using TypeScript, MUI, Chart.js, and TanStack Query in a monorepo. Implemented Docker-based CI/CD and complex application data flows.",
					fa: "ساخت چهار پنل مدیریتی با Next.js، TypeScript، MUI، Chart.js و TanStack Query در ساختار مونوریپو؛ پیاده‌سازی CI/CD با Docker و جریان‌های پیچیده داده.",
				},
			},
			{
				company: {
					en: "Desna Co.",
					fa: "Desna Co.",
				},
				role: {
					en: "Front-End Developer",
					fa: "توسعه‌دهنده فرانت‌اند",
				},
				period: {
					en: "November 2023 - May 2025",
					fa: "نوامبر 2023 تا مه 2025 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Developed React and Next.js web applications, implemented UX/UI designs, and improved performance through code reviews.",
					fa: "توسعه اپلیکیشن‌های وب با React و Next.js، پیاده‌سازی طرح‌های رابط کاربری و بهبود عملکرد از طریق بازبینی کد.",
				},
			},
			{
				company: {
					en: "Zegara Company",
					fa: "Zegara Company",
				},
				role: {
					en: "Front-End Developer Intern",
					fa: "کارآموز فرانت‌اند",
				},
				period: {
					en: "February 2023 - June 2023",
					fa: "فوریه 2023 تا ژوئن 2023 (میلادی)",
				},
				arrangement: {
					en: "Internship",
					fa: "کارآموزی",
				},
				summary: {
					en: "Studied programming fundamentals and algorithms, and built small Next.js projects during a frontend internship.",
					fa: "یادگیری مبانی برنامه‌نویسی و الگوریتم و ساخت پروژه‌های کوچک Next.js در دوره کارآموزی فرانت‌اند.",
				},
			},
		],
		projects: [
			{
				name: "Ghajari Restaurant",
				summary: {
					en: "Restaurant website built with app router architecture, maps, charts, and modern state management.",
					fa: "وب‌سایت رستوران با Next.js، TypeScript، نقشه Mapbox، نمودار و مدیریت state با Zustand.",
				},
				stack:
					"Next.js v14 / TypeScript / Tailwind / Zustand / Chart.js / Mapbox",
			},
			{
				name: "Royal Jeans",
				summary: {
					en: "Developed and maintained a commerce-facing web experience for apparel workflows.",
					fa: "توسعه و نگه‌داری تجربه فروشگاهی پوشاک با React، Next.js، Bootstrap و Redux.",
				},
				stack: "React / Next.js / Bootstrap / Redux",
			},
			{
				name: "BAT Retailer App",
				summary: {
					en: "Client and admin sections implemented from Figma designs with data-heavy forms and dashboards.",
					fa: "پیاده‌سازی بخش مشتری و مدیریت از روی طرح Figma، همراه با فرم‌های داده‌محور و داشبورد.",
				},
				stack:
					"Next.js v13 / Tailwind / MUI / Chart.js / Redux / React Hook Form / Yup",
			},
		],
		education: [
			{
				degree: {
					en: "B.Sc. in Industrial Engineering",
					fa: "کارشناسی مهندسی صنایع",
				},
				school: {
					en: "Damghan University",
					fa: "دانشگاه دامغان",
				},
				period: {
					en: "2018",
					fa: "2018 (میلادی)",
				},
			},
			{
				degree: {
					en: "Front-End Development Course",
					fa: "دوره توسعه فرانت‌اند",
				},
				school: {
					en: "Sematec Institute",
					fa: "مؤسسه سماتک",
				},
				period: {
					en: "",
					fa: "",
				},
			},
		],
	},
	"mohammadreza-vasebi": {
		name: {
			en: "Mohammadreza Vasebi",
			fa: "محمدرضا واسبی",
		},
		role: {
			en: "Freelance React Native Developer",
			fa: "توسعه‌دهنده فریلنس React Native",
		},
		intro: {
			en: "I build mobile apps with React Native, Expo, and TypeScript. My experience includes shopping, delivery, wallet, and real-estate apps, with maps, realtime features, and careful attention to performance on the device.",
			fa: "با React Native، Expo و TypeScript اپلیکیشن موبایل می‌سازم. تجربه‌ام شامل اپ‌های خرید، تحویل، کیف پول و املاک است؛ همراه با نقشه، قابلیت‌های لحظه‌ای و توجه به عملکرد روی دستگاه.",
		},
		services: {
			en: [
				"Cross-platform mobile app development",
				"Expo and React Native feature development",
				"Maps, QR scanning, and realtime integration",
				"Mobile performance improvements and bug fixes",
			],
			fa: [
				"توسعه اپلیکیشن موبایل چندسکویی",
				"توسعه قابلیت با Expo و React Native",
				"نقشه، اسکن QR و ارتباط لحظه‌ای",
				"بهبود عملکرد موبایل و رفع باگ",
			],
		},
		location: {
			en: "Tehran, Iran",
			fa: "تهران، ایران",
		},
		contacts: [
			{
				kind: "email",
				label: "reza.vaseb@yahoo.com",
				href: "mailto:reza.vaseb@yahoo.com",
			},
			{
				kind: "phone",
				label: "09332738864",
				href: "tel:+989332738864",
			},
			{
				kind: "linkedin",
				label: "LinkedIn",
				href: "https://linkedin.com/in/mreza-vasebi",
			},
			{
				kind: "github",
				label: "GitHub",
				href: "https://github.com/MrezaVasebi",
			},
		],
		skills: [
			{
				title: {
					en: "Mobile",
					fa: "موبایل",
				},
				items: ["React Native", "JavaScript (ES6+)", "TypeScript", "Expo"],
			},
			{
				title: {
					en: "State Management",
					fa: "مدیریت state",
				},
				items: ["React Query", "Zustand", "Redux Toolkit"],
			},
			{
				title: {
					en: "Backend & APIs",
					fa: "بک‌اند و API",
				},
				items: ["REST APIs", "Firebase", "Supabase", "Socket.io"],
			},
			{
				title: {
					en: "Maps & Tools",
					fa: "نقشه و ابزارها",
				},
				items: ["Google Maps", "Mapbox", "Git", "Axios"],
			},
		],
		experience: [
			{
				company: {
					en: "Aldy",
					fa: "Aldy",
				},
				role: {
					en: "Mobile Developer",
					fa: "توسعه‌دهنده موبایل",
				},
				period: {
					en: "August 2024 - Present",
					fa: "اوت 2024 تا اکنون (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Worked on a React Native super app spanning shopping, delivery, loans, wallets, grocery, and taxi modules. Integrated maps, QR scanning, Socket.io, Firebase, and Supabase.",
					fa: "کار روی سوپراپ React Native شامل خرید، تحویل، وام، کیف پول، خواربار و تاکسی؛ اتصال نقشه، اسکن QR، Socket.io، Firebase و Supabase.",
				},
			},
			{
				company: {
					en: "Remote Collaboration",
					fa: "همکاری دورکاری",
				},
				role: {
					en: "Mobile Developer",
					fa: "توسعه‌دهنده موبایل",
				},
				period: {
					en: "January 2025 - May 2025",
					fa: "ژانویه 2025 تا مه 2025 (میلادی)",
				},
				arrangement: {
					en: "Part-Time",
					fa: "پاره‌وقت",
				},
				summary: {
					en: "Contributed features to a new mobile app and fixed bugs in an existing product during a remote, part-time collaboration with a team in Turkey.",
					fa: "توسعه قابلیت برای یک اپلیکیشن موبایل جدید و رفع باگ محصول موجود در همکاری دورکاری و پاره‌وقت با تیمی در ترکیه.",
				},
			},
			{
				company: {
					en: "MelkeTabriz",
					fa: "MelkeTabriz",
				},
				role: {
					en: "Mobile Developer",
					fa: "توسعه‌دهنده موبایل",
				},
				period: {
					en: "December 2021 - December 2023",
					fa: "دسامبر 2021 تا دسامبر 2023 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Built an Expo-based real-estate mobile app and an admin-oriented mobile experience, focusing on maintainability and product stability.",
					fa: "ساخت اپلیکیشن موبایل املاک با Expo و تجربه موبایلی برای مدیریت، با تمرکز بر نگه‌داری‌پذیری و پایداری محصول.",
				},
			},
			{
				company: {
					en: "Sharestoon",
					fa: "Sharestoon",
				},
				role: {
					en: "Mobile Developer",
					fa: "توسعه‌دهنده موبایل",
				},
				period: {
					en: "May 2022 - December 2022",
					fa: "مه 2022 تا دسامبر 2022 (میلادی)",
				},
				arrangement: {
					en: "Part-Time Remote",
					fa: "دورکاری پاره‌وقت",
				},
				summary: {
					en: "Developed mobile app features using the React Native Bare CLI in a part-time remote role.",
					fa: "توسعه قابلیت‌های اپلیکیشن موبایل با React Native Bare CLI در همکاری دورکاری و پاره‌وقت.",
				},
			},
		],
		projects: [
			{
				name: "React Native Components",
				summary: {
					en: "Common React Native components such as radio buttons, checkbox buttons, simple inputs, safe inputs, and icon inputs, developed with TypeScript.",
					fa: "مجموعه کامپوننت‌های TypeScript برای React Native شامل ورودی، دکمه رادیویی، چک‌باکس و ورودی امن.",
				},
			},
			{
				name: "React Native State Management",
				summary: {
					en: "State management examples for React Native demonstrating four common tools with synchronous and asynchronous implementation methods.",
					fa: "نمونه‌های مدیریت state در React Native با چهار ابزار رایج و روش‌های همگام و ناهمگام.",
				},
			},
			{
				name: "Monkey Food",
				summary: {
					en: "Food delivery app developed with Expo and TypeScript from a prepared Figma UI, without backend integration.",
					fa: "رابط اپلیکیشن سفارش غذا با Expo و TypeScript بر اساس طرح Figma؛ بدون اتصال به بک‌اند.",
				},
			},
		],
		education: [
			{
				degree: {
					en: "Master of Computer Engineering",
					fa: "کارشناسی ارشد مهندسی کامپیوتر",
				},
				school: {
					en: "Shabestar Azad University",
					fa: "دانشگاه آزاد اسلامی شبستر",
				},
				period: {
					en: "2014 - 2017",
					fa: "2014 تا 2017 (میلادی)",
				},
			},
			{
				degree: {
					en: "Bachelor of Computer Engineering",
					fa: "کارشناسی مهندسی کامپیوتر",
				},
				school: {
					en: "Khaneh Karagar Tabriz",
					fa: "خانه کارگر تبریز",
				},
				period: {
					en: "2011 - 2014",
					fa: "2011 تا 2014 (میلادی)",
				},
			},
		],
	},
	"mohammadreza-parsaeian": {
		name: {
			en: "MohammadReza Parsaeian",
			fa: "محمدرضا پارسائیان",
		},
		role: {
			en: "Freelance Senior Backend Developer",
			fa: "توسعه‌دهنده ارشد فریلنس بک‌اند",
		},
		intro: {
			en: "I design and develop backend services with Go, PHP, Laravel, and Node.js. My background covers payment integrations, GPS tracking, delivery services, and server monitoring, alongside experience leading developers.",
			fa: "با Go، PHP، Laravel و Node.js سرویس‌های بک‌اند را طراحی و توسعه می‌دهم. سابقه‌ام شامل اتصال درگاه پرداخت، ردیابی GPS، سرویس‌های تحویل و پایش سرور است و تجربه هدایت توسعه‌دهندگان را هم دارم.",
		},
		services: {
			en: [
				"Backend services and API development",
				"Payment gateway and notification integrations",
				"GPS and device-management platforms",
				"Backend reviews, monitoring, and technical guidance",
			],
			fa: [
				"توسعه سرویس بک‌اند و API",
				"اتصال درگاه پرداخت و سرویس اعلان",
				"پلتفرم ردیابی GPS و مدیریت دستگاه",
				"بازبینی بک‌اند، پایش و راهنمایی فنی",
			],
		},
		location: {
			en: "Tehran, Iran",
			fa: "تهران، ایران",
		},
		contacts: [
			{
				kind: "email",
				label: "m.parsa@workmail.com",
				href: "mailto:m.parsa@workmail.com",
			},
			{
				kind: "phone",
				label: "+98 912 765 73 34",
				href: "tel:+989127657334",
			},
			{
				kind: "linkedin",
				label: "LinkedIn",
				href: "https://www.linkedin.com/in/m-parsa",
			},
			{
				kind: "github",
				label: "GitHub",
				href: "https://github.com/parsidev",
			},
		],
		skills: [
			{
				title: {
					en: "Languages & Frameworks",
					fa: "زبان‌ها و فریم‌ورک‌ها",
				},
				items: ["PHP", "Laravel", "Golang", "NodeJs", "C#", "ASP.NET"],
			},
			{
				title: {
					en: "Databases",
					fa: "پایگاه‌های داده",
				},
				items: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"],
			},
			{
				title: {
					en: "Platform & Messaging",
					fa: "زیرساخت و پیام‌رسانی",
				},
				items: [
					"gRPC",
					"Redis",
					"ELK",
					"Prometheus",
					"Zabbix",
					"Docker",
					"RabbitMQ",
				],
			},
			{
				title: {
					en: "Operating Systems",
					fa: "سیستم‌عامل‌ها",
				},
				items: ["Windows", "Linux", "Mac OS"],
			},
		],
		experience: [
			{
				company: {
					en: "Aldy",
					fa: "Aldy",
				},
				role: {
					en: "Developer Team Lead",
					fa: "سرپرست تیم توسعه",
				},
				period: {
					en: "November 2023 - Now",
					fa: "نوامبر 2023 تا اکنون (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Led development work on the Rocket courier service and Aldy Pay digital debit and credit services.",
					fa: "هدایت توسعه سرویس پیک Rocket و سرویس بدهی و اعتبار دیجیتال Aldy Pay.",
				},
			},
			{
				company: {
					en: "Sika Group",
					fa: "Sika Group",
				},
				role: {
					en: "Senior Back-End Developer",
					fa: "توسعه‌دهنده ارشد بک‌اند",
				},
				period: {
					en: "April 2023 - October 2023",
					fa: "آوریل 2023 تا اکتبر 2023 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Developed Zarinpal and Sibank payment services, Firebase notifications, and Sepidar integration.",
					fa: "توسعه سرویس‌های پرداخت زرین‌پال و سیبانک، اعلان‌های Firebase و اتصال سپیدار.",
				},
			},
			{
				company: {
					en: "Basir Andishan",
					fa: "بصیر اندیشان",
				},
				role: {
					en: "Senior Full-Stack Engineer",
					fa: "مهندس ارشد فول‌استک",
				},
				period: {
					en: "February 2019 - March 2023",
					fa: "فوریه 2019 تا مارس 2023 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Redesigned a GPS tracking backend in Go, migrated its database to MongoDB, introduced Redis caching, and monitored services with Zabbix and Prometheus.",
					fa: "بازطراحی بک‌اند ردیابی GPS با Go، انتقال پایگاه داده به MongoDB، افزودن کش Redis و پایش سرویس‌ها با Zabbix و Prometheus.",
				},
			},
			{
				company: {
					en: "Basir Andishan",
					fa: "بصیر اندیشان",
				},
				role: {
					en: "DevOps",
					fa: "مهندس DevOps",
				},
				period: {
					en: "August 2017 - August 2019",
					fa: "اوت 2017 تا اوت 2019 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Managed virtual server infrastructure using VMware ESXi.",
					fa: "مدیریت زیرساخت سرورهای مجازی با VMware ESXi.",
				},
			},
			{
				company: {
					en: "Basir Andishan",
					fa: "بصیر اندیشان",
				},
				role: {
					en: "Senior Back-End Engineer",
					fa: "مهندس ارشد بک‌اند",
				},
				period: {
					en: "July 2015 - August 2017",
					fa: "ژوئیه 2015 تا اوت 2017 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Built Node.js services for car GPS devices, plus admin and user panels for device and account management.",
					fa: "ساخت سرویس‌های Node.js برای دستگاه GPS خودرو و پنل‌های مدیریت و کاربر برای مدیریت دستگاه‌ها و حساب‌ها.",
				},
			},
			{
				company: {
					en: "Basir Andishan",
					fa: "بصیر اندیشان",
				},
				role: {
					en: "Web Developer",
					fa: "توسعه‌دهنده وب",
				},
				period: {
					en: "October 2014 - February 2015",
					fa: "اکتبر 2014 تا فوریه 2015 (میلادی)",
				},
				arrangement: {
					en: "Part-Time",
					fa: "پاره‌وقت",
				},
				summary: {
					en: "Developed a web application and admin panel for controlling home security alarm devices.",
					fa: "توسعه اپلیکیشن وب و پنل مدیریت برای کنترل دستگاه‌های دزدگیر خانگی.",
				},
			},
		],
		projects: [
			{
				name: "HR Telegram Bot in Golang",
				summary: {
					en: "An HR Telegram bot written in Go for Basir Andishan.",
					fa: "ربات تلگرام منابع انسانی با زبان Go برای بصیر اندیشان.",
				},
			},
			{
				name: "Xenotic Tracker",
				summary: {
					en: "A GPS tracking project at Basir Andishan.",
					fa: "پروژه ردیابی GPS در بصیر اندیشان.",
				},
			},
			{
				name: "Zarinpal Payment Gateway",
				summary: {
					en: "Zarinpal payment gateway service development at Sika Group.",
					fa: "توسعه سرویس اتصال به درگاه پرداخت زرین‌پال در Sika Group.",
				},
			},
		],
		education: [
			{
				degree: {
					en: "Associate's in Computer Science",
					fa: "کاردانی علوم کامپیوتر",
				},
				school: {
					en: "Islamic Azad University",
					fa: "دانشگاه آزاد اسلامی",
				},
				period: {
					en: "Expected May 2015",
					fa: "پیش‌بینی‌شده: مه 2015 (میلادی)",
				},
			},
		],
	},
	"mehdi-alikhani": {
		name: {
			en: "Mehdi Alikhani",
			fa: "مهدی علیخانی",
		},
		role: {
			en: "Freelance Laravel & Magento Developer",
			fa: "توسعه‌دهنده فریلنس Laravel و Magento",
		},
		intro: {
			en: "I develop PHP backends, Laravel services, and Magento stores. I work on headless commerce, third-party integrations, payment gateways, and messaging, with hands-on experience in testing and Linux server operations.",
			fa: "بک‌اند PHP، سرویس‌های Laravel و فروشگاه‌های Magento را توسعه می‌دهم. روی فروشگاه‌های هدلس، اتصال سرویس‌های بیرونی، درگاه پرداخت و پیام‌رسانی کار می‌کنم و در تست نرم‌افزار و مدیریت سرور لینوکس تجربه عملی دارم.",
		},
		services: {
			en: [
				"Laravel applications and microservices",
				"Magento 2 stores and custom modules",
				"Headless commerce and GraphQL integration",
				"Payment, messaging, and Linux server integration",
			],
			fa: [
				"اپلیکیشن و میکروسرویس Laravel",
				"فروشگاه Magento 2 و ماژول اختصاصی",
				"فروشگاه هدلس و اتصال GraphQL",
				"اتصال پرداخت، پیام‌رسانی و سرور لینوکس",
			],
		},
		location: {
			en: "Tehran, Iran",
			fa: "تهران، ایران",
		},
		contacts: [
			{
				kind: "email",
				label: "alikhani.mehdi@hotmail.com",
				href: "mailto:alikhani.mehdi@hotmail.com",
			},
			{
				kind: "phone",
				label: "+98-930-352-2525",
				href: "tel:+989303522525",
			},
		],
		skills: [
			{
				title: {
					en: "Backend Core",
					fa: "هسته بک‌اند",
				},
				items: [
					"PHP",
					"Laravel",
					"Magento 2",
					"GraphQL",
					"REST API",
					"Livewire",
				],
			},
			{
				title: {
					en: "Data & Search",
					fa: "داده و جست‌وجو",
				},
				items: ["MariaDB", "MySQL", "MongoDB", "ElasticSearch"],
			},
			{
				title: {
					en: "Platform & DevOps",
					fa: "زیرساخت و DevOps",
				},
				items: ["Linux", "CI/CD", "NGINX", "RabbitMQ", "Kafka", "PHPUnit"],
			},
			{
				title: {
					en: "Frontend & Delivery",
					fa: "فرانت‌اند و ابزار توسعه",
				},
				items: [
					"KnockoutJS",
					"JavaScript",
					"jQuery",
					"HTML",
					"CSS",
					"Jira",
					"Git",
				],
			},
		],
		experience: [
			{
				company: {
					en: "Zoot Co",
					fa: "Zoot Co",
				},
				role: {
					en: "Laravel Developer",
					fa: "توسعه‌دهنده Laravel",
				},
				period: {
					en: "2023 - Present",
					fa: "2023 تا اکنون (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Built Laravel microservices, payment gateway and RabbitMQ/Kafka messaging packages, a delivery SaaS app, and unit and feature tests.",
					fa: "ساخت میکروسرویس‌های Laravel، پکیج درگاه پرداخت و پیام‌رسانی RabbitMQ/Kafka، نرم‌افزار خدمات تحویل و تست‌های واحد و قابلیت.",
				},
			},
			{
				company: {
					en: "Sepehr Rayan",
					fa: "سپهر رایان",
				},
				role: {
					en: "Magento and Laravel Developer, DevOps",
					fa: "توسعه‌دهنده Magento و Laravel و مهندس DevOps",
				},
				period: {
					en: "2023 - Present",
					fa: "2023 تا اکنون (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Developed hotel and airline booking services with Laravel, maintained Magento projects including headless Ordme, and automated Linux server operations.",
					fa: "توسعه سرویس رزرو هتل و بلیت هواپیما با Laravel، نگه‌داری پروژه‌های Magento از جمله Ordme هدلس و خودکارسازی عملیات سرور لینوکس.",
				},
			},
			{
				company: {
					en: "Alinland - Ecommerce platform (Mihan Holding)",
					fa: "Alinland - Ecommerce platform (Mihan Holding)",
				},
				role: {
					en: "Laravel and Magento Developer",
					fa: "توسعه‌دهنده Laravel و Magento",
				},
				period: {
					en: "2021 - 2023",
					fa: "2021 تا 2023 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Developed Magento 2 marketplace modules, a GraphQL-based headless PWA, and Laravel inventory integration for Alinland.",
					fa: "توسعه ماژول‌های مارکت‌پلیس Magento 2، اپلیکیشن PWA هدلس با GraphQL و اتصال موجودی با Laravel برای آلین‌لند.",
				},
			},
			{
				company: {
					en: "Military service",
					fa: "خدمت سربازی",
				},
				role: {
					en: "Laravel Developer",
					fa: "توسعه‌دهنده Laravel",
				},
				period: {
					en: "2020 - 2022",
					fa: "2020 تا 2022 (میلادی)",
				},
				arrangement: {
					en: "Service",
					fa: "دوره خدمت",
				},
				summary: {
					en: "Developed two projects from scratch for Instagram integration and data processing during military service.",
					fa: "توسعه دو پروژه از ابتدا برای اتصال به اینستاگرام و پردازش داده در دوره خدمت سربازی.",
				},
			},
			{
				company: {
					en: "Setareh",
					fa: "Setareh",
				},
				role: {
					en: "Backend Developer",
					fa: "توسعه‌دهنده بک‌اند",
				},
				period: {
					en: "2021",
					fa: "2021 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Built integrations between warehouse systems and WordPress, including a custom WordPress plugin.",
					fa: "ساخت اتصال میان سیستم‌های انبار و وردپرس، شامل توسعه افزونه اختصاصی وردپرس.",
				},
			},
		],
		projects: [
			{
				name: "Microservices Platform",
				summary: {
					en: "Account, Marketing, API-Gateway, Inventory, payment gateway, message broker, and delivery SaaS services for a Laravel microservice ecosystem.",
					fa: "سرویس‌های حساب، بازاریابی، API Gateway، موجودی، پرداخت، پیام‌رسانی و خدمات تحویل در اکوسیستم میکروسرویس Laravel.",
				},
			},
			{
				name: "Headless Magento Commerce",
				summary: {
					en: "Magento 2 and GraphQL headless commerce work, including PWA flows, inventory handling, marketplace modules, and Laravel service integration.",
					fa: "توسعه فروشگاه هدلس با Magento 2 و GraphQL، جریان‌های PWA، موجودی، ماژول‌های مارکت‌پلیس و اتصال Laravel.",
				},
			},
			{
				name: "Travel Service Provider",
				summary: {
					en: "Laravel-based agency service provider covering hotel and airline ticket workflows with backend automation and server operations.",
					fa: "سرویس آژانس مسافرتی مبتنی بر Laravel برای رزرو هتل و بلیت هواپیما، همراه با اتوماسیون سرور.",
				},
			},
		],
		education: [
			{
				degree: {
					en: "Bachelor's Degree in Software Engineering",
					fa: "کارشناسی مهندسی نرم‌افزار",
				},
				school: {
					en: "University Science and Culture",
					fa: "دانشگاه علم و فرهنگ",
				},
				period: {
					en: "2016 - 2018",
					fa: "2016 تا 2018 (میلادی)",
				},
			},
			{
				degree: {
					en: "Associate degree in Software Engineering",
					fa: "کاردانی مهندسی نرم‌افزار",
				},
				school: {
					en: "Amir Kabir Technical University",
					fa: "دانشگاه فنی امیرکبیر",
				},
				period: {
					en: "2014 - 2016",
					fa: "2014 تا 2016 (میلادی)",
				},
			},
		],
	},
	"keyvan-moradkhani": {
		name: {
			en: "Keyvan Moradkhani",
			fa: "کیوان مرادخانی",
		},
		role: {
			en: "Freelance Backend & Full-stack Developer",
			fa: "توسعه‌دهنده فریلنس بک‌اند و فول‌استک",
		},
		intro: {
			en: "I build Laravel backends and full-stack web applications, from online stores and marketplaces to booking platforms and internal tools. I work across APIs, databases, and React interfaces to turn a project brief into usable software.",
			fa: "بک‌اند Laravel و اپلیکیشن وب فول‌استک می‌سازم؛ از فروشگاه و مارکت‌پلیس تا پلتفرم رزرو و ابزارهای داخلی. با API، پایگاه داده و رابط React کار می‌کنم تا شرح یک پروژه را به نرم‌افزاری قابل استفاده تبدیل کنم.",
		},
		services: {
			en: [
				"Laravel APIs and full-stack web development",
				"Multi-vendor stores and commerce features",
				"Booking platforms and business automation",
				"Database optimization and third-party integrations",
			],
			fa: [
				"توسعه API با Laravel و وب فول‌استک",
				"فروشگاه چندفروشنده و قابلیت‌های فروش آنلاین",
				"پلتفرم رزرو و خودکارسازی فرآیند کسب‌وکار",
				"بهینه‌سازی پایگاه داده و اتصال سرویس بیرونی",
			],
		},
		location: {
			en: "Tehran, Iran",
			fa: "تهران، ایران",
		},
		contacts: [
			{
				kind: "email",
				label: "keyvan.moradkhani1996@gmail.com",
				href: "mailto:keyvan.moradkhani1996@gmail.com",
			},
			{
				kind: "phone",
				label: "+98 918 780 9783",
				href: "tel:+989187809783",
			},
			{
				kind: "linkedin",
				label: "LinkedIn",
				href: "https://linkedin.com/in/keyvan-moradkhani",
			},
		],
		skills: [
			{
				title: {
					en: "Backend Core",
					fa: "هسته بک‌اند",
				},
				items: ["PHP", "Laravel", "REST API", "Job Scheduling", "TDD", "SOLID"],
			},
			{
				title: {
					en: "Frontend",
					fa: "فرانت‌اند",
				},
				items: [
					"React.js",
					"JavaScript",
					"Tailwind CSS",
					"HTML5",
					"CSS3",
					"Material-UI",
					"Blade",
				],
			},
			{
				title: {
					en: "Data & Storage",
					fa: "داده و ذخیره‌سازی",
				},
				items: [
					"MySQL",
					"PostgreSQL",
					"Microsoft SQL Server",
					"Redis",
					"MinIO",
				],
			},
			{
				title: {
					en: "Tools & Operations",
					fa: "ابزار و عملیات",
				},
				items: [
					"Docker",
					"Git",
					"Graylog",
					"WordPress",
					"Design Patterns",
					"Performance",
				],
			},
		],
		experience: [
			{
				company: {
					en: "Aldy",
					fa: "Aldy",
				},
				role: {
					en: "Full-stack Developer",
					fa: "توسعه‌دهنده فول‌استک",
				},
				period: {
					en: "December 2023 - Present",
					fa: "دسامبر 2023 تا اکنون (میلادی)",
				},
				arrangement: {
					en: "On-site",
					fa: "حضوری",
				},
				summary: {
					en: "Designed backend architecture for Aldy Shop and Shop Plus, built REST APIs and multi-vendor features, integrated MinIO and Graylog, and automated tax invoice submission.",
					fa: "طراحی معماری بک‌اند Aldy Shop و Shop Plus، توسعه REST API و قابلیت چندفروشندگی، اتصال MinIO و Graylog و خودکارسازی ارسال صورتحساب مالیاتی.",
				},
			},
			{
				company: {
					en: "Arnikup",
					fa: "Arnikup",
				},
				role: {
					en: "Full-stack Developer",
					fa: "توسعه‌دهنده فول‌استک",
				},
				period: {
					en: "December 2021 - September 2023",
					fa: "دسامبر 2021 تا سپتامبر 2023 (میلادی)",
				},
				arrangement: {
					en: "Remote",
					fa: "دورکاری",
				},
				summary: {
					en: "Developed an internal HR platform for Divar, applying design patterns and modern frontend practices.",
					fa: "توسعه پلتفرم داخلی منابع انسانی دیوار با استفاده از الگوهای طراحی و روش‌های نوین فرانت‌اند.",
				},
			},
			{
				company: {
					en: "Arnika Mehr Kish",
					fa: "Arnika Mehr Kish",
				},
				role: {
					en: "Full-stack Developer",
					fa: "توسعه‌دهنده فول‌استک",
				},
				period: {
					en: "December 2020 - October 2021",
					fa: "دسامبر 2020 تا اکتبر 2021 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Built Bootimar for domestic and international flight booking and Navaran for car rental.",
					fa: "ساخت Bootimar برای رزرو پرواز داخلی و خارجی و Navaran برای اجاره خودرو.",
				},
			},
			{
				company: {
					en: "Self-employed",
					fa: "فعالیت مستقل",
				},
				role: {
					en: "Programmer",
					fa: "برنامه‌نویس",
				},
				period: {
					en: "December 2020 - November 2021",
					fa: "دسامبر 2020 تا نوامبر 2021 (میلادی)",
				},
				arrangement: {
					en: "Independent",
					fa: "مستقل",
				},
				summary: {
					en: "Delivered independent software development projects for web products.",
					fa: "انجام پروژه‌های مستقل توسعه نرم‌افزار برای محصولات وب.",
				},
			},
			{
				company: {
					en: "Ashabrasaneh",
					fa: "Ashabrasaneh",
				},
				role: {
					en: "Full-stack Web Developer",
					fa: "توسعه‌دهنده وب فول‌استک",
				},
				period: {
					en: "August 2018 - August 2019",
					fa: "اوت 2018 تا اوت 2019 (میلادی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Worked on full-stack web development and production software delivery.",
					fa: "توسعه وب فول‌استک و مشارکت در آماده‌سازی نرم‌افزار برای استفاده عملیاتی.",
				},
			},
		],
		projects: [
			{
				name: "Aldy Shop Multi Vendor",
				summary: {
					en: "Multi-vendor e-commerce platform with custom pricing and product variation capabilities.",
					fa: "مارکت‌پلیس چندفروشنده با قیمت‌گذاری اختصاصی، تنوع محصول و بک‌اند Laravel.",
				},
				stack: "Laravel / PHP / MySQL / MinIO / Graylog",
			},
			{
				name: "Automated Tax Invoice Submission",
				summary: {
					en: "Automated tax reporting process for online and offline DailyMarket sales.",
					fa: "خودکارسازی گزارش مالیاتی فروش آنلاین و آفلاین DailyMarket با Laravel و Blade.",
				},
				stack: "Laravel / Blade",
			},
			{
				name: "Bootimar & Navaran",
				summary: {
					en: "Online flight ticket booking and trust-based car rental platforms built at Arnika Mehr Kish.",
					fa: "پلتفرم‌های رزرو بلیت پرواز و اجاره خودرو، توسعه‌یافته در آرنیکا مهر کیش.",
				},
				stack: "Full-stack",
			},
		],
		education: [
			{
				degree: {
					en: "Bachelor's in Computer Software Engineering",
					fa: "کارشناسی مهندسی نرم‌افزار کامپیوتر",
				},
				school: {
					en: "Ilam University",
					fa: "دانشگاه ایلام",
				},
				period: {
					en: "2014 - 2018",
					fa: "2014 تا 2018 (میلادی)",
				},
			},
			{
				degree: {
					en: "Diploma in Mathematics & Physics",
					fa: "دیپلم ریاضی و فیزیک",
				},
				school: {
					en: "Farabi State School",
					fa: "دبیرستان دولتی فارابی",
				},
				period: {
					en: "2010 - 2014",
					fa: "2010 تا 2014 (میلادی)",
				},
			},
		],
	},
	"omid-nikroo": {
		name: {
			en: "Omid Nikroo",
			fa: "امید نیکرو",
		},
		role: {
			en: "Freelance .NET Backend Developer",
			fa: "توسعه‌دهنده فریلنس بک‌اند .NET",
		},
		intro: {
			en: "I develop C# and ASP.NET Core backends for business applications, ecommerce, and ERP. My work includes warehouse and sales modules, location-based routing, B2B ordering, realtime communication, and database optimization.",
			fa: "بک‌اند C# و ASP.NET Core را برای نرم‌افزارهای کسب‌وکار، فروش آنلاین و ERP توسعه می‌دهم. تجربه‌ام شامل ماژول‌های انبار و فروش، مسیریابی مکانی، سفارش‌گیری B2B، ارتباط لحظه‌ای و بهینه‌سازی پایگاه داده است.",
		},
		services: {
			en: [
				"C# and ASP.NET Core APIs",
				"ERP modules and business applications",
				"Database design and query optimization",
				"SignalR and location-based service integration",
			],
			fa: [
				"API با C# و ASP.NET Core",
				"ماژول ERP و نرم‌افزار کسب‌وکار",
				"طراحی پایگاه داده و بهینه‌سازی کوئری",
				"اتصال SignalR و سرویس‌های مکان‌محور",
			],
		},
		location: {
			en: "Tehran, Iran",
			fa: "تهران، ایران",
		},
		contacts: [
			{
				kind: "email",
				label: "onik2390@gmail.com",
				href: "mailto:onik2390@gmail.com",
			},
			{
				kind: "phone",
				label: "09362066797",
				href: "tel:+989362066797",
			},
		],
		skills: [
			{
				title: {
					en: ".NET Backend",
					fa: "بک‌اند .NET",
				},
				items: [
					"C#",
					".NET Core",
					"ASP.NET Core",
					"RESTful API",
					"Entity Framework",
					"Dapper",
				],
			},
			{
				title: {
					en: "Architecture",
					fa: "معماری",
				},
				items: [
					"Clean Architecture",
					"Onion Architecture",
					"CQRS",
					"DDD",
					"Agile/Scrum",
				],
			},
			{
				title: {
					en: "Data & Realtime",
					fa: "داده و ارتباط لحظه‌ای",
				},
				items: ["SQL Server", "MongoDB", "Redis", "Elastic Search", "SignalR"],
			},
			{
				title: {
					en: "Delivery",
					fa: "ابزار توسعه",
				},
				items: ["IIS", "Git", "Docker", "Unit Testing", "ReactJs"],
			},
		],
		experience: [
			{
				company: {
					en: "Lina Group",
					fa: "گروه لینا",
				},
				role: {
					en: "Backend Developer",
					fa: "توسعه‌دهنده بک‌اند",
				},
				period: {
					en: "1404 - Present (Solar Hijri)",
					fa: "1404 تا اکنون (شمسی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Developed ERP modules for warehouse, sales, distribution, and human resources, coordinating backend features with frontend development.",
					fa: "توسعه ماژول‌های ERP برای انبار، فروش، پخش و منابع انسانی و هماهنگی قابلیت‌های بک‌اند با توسعه فرانت‌اند.",
				},
			},
			{
				company: {
					en: "DESNA",
					fa: "DESNA",
				},
				role: {
					en: "Backend Developer",
					fa: "توسعه‌دهنده بک‌اند",
				},
				period: {
					en: "1400 - 1404 (Solar Hijri)",
					fa: "1400 تا 1404 (شمسی)",
				},
				arrangement: {
					en: "Full-Time",
					fa: "تمام‌وقت",
				},
				summary: {
					en: "Built ecommerce, sales, route planning, restaurant ordering, and B2B systems. Supported and optimized production databases.",
					fa: "ساخت سیستم‌های فروش آنلاین، فروش، برنامه‌ریزی مسیر، سفارش‌گیری رستوران و B2B؛ پشتیبانی و بهینه‌سازی پایگاه‌های داده عملیاتی.",
				},
			},
		],
		projects: [
			{
				name: "ERP Modules",
				summary: {
					en: "Warehouse, sales, distribution, and HR modules built for operational ERP workflows using .NET backend patterns.",
					fa: "ماژول‌های انبار، فروش، پخش و منابع انسانی برای ERP با الگوهای بک‌اند .NET.",
				},
			},
			{
				name: "Route Plan Systems",
				summary: {
					en: "Location-based distribution and routing systems supporting field operations and sales execution.",
					fa: "سیستم توزیع و برنامه‌ریزی مسیر مبتنی بر موقعیت مکانی برای نیروهای میدانی و فروش.",
				},
			},
			{
				name: "Commerce & B2B Systems",
				summary: {
					en: "E-commerce websites, B2B applications, restaurant ordering software, and backend database optimization.",
					fa: "وب‌سایت‌های فروشگاهی، اپلیکیشن‌های B2B، سفارش‌گیری رستوران و بهینه‌سازی پایگاه داده.",
				},
			},
		],
		education: [
			{
				degree: {
					en: "Bachelor's Degree in Electronics Engineering",
					fa: "کارشناسی مهندسی الکترونیک",
				},
				school: {
					en: "Islamic Azad University, Garmsar",
					fa: "دانشگاه آزاد اسلامی گرمسار",
				},
				period: {
					en: "",
					fa: "",
				},
			},
		],
	},
};
