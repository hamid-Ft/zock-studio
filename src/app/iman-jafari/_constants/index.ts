// index.ts

import type { StaticImageData } from "next/image";
import Html from "../_assets/Html.svg";
import Css from "../_assets/Css.svg";
import Docker from "../_assets/Docker.svg";
import Drizzle from "../_assets/Drizzle.svg";
import Git from "../_assets/Git.svg";
import Github from "../_assets/Github.svg";
import Graphql from "../_assets/Graphql.svg";
import Gsap from "../_assets/Gsap.svg";
import Javascript from "../_assets/Javascript.svg";
import Materiaui from "../_assets/Materiaui.svg";
import Nextjs from "../_assets/Nextjs.svg";
import React from "../_assets/React.svg";
import ReactQuery from "../_assets/ReactQuery.svg";
import Redux from "../_assets/Redux.svg";
import Sass from "../_assets/Sass.svg";
import Shadcn from "../_assets/Shadcn.svg";
import Tailwindcss from "../_assets/Tailwindcss.svg";
import Typescript from "../_assets/Typescript.svg";
import Zustand from "../_assets/Zustand.svg";
import Postman from "../_assets/Postman.svg";

export type ServiceItem = {
	icon: StaticImageData;
};

export type Service = {
	title: string;
	description: string;
	items: ServiceItem[];
};

export const servicesData: Service[] = [
	{
		title: "LANGUAGES",
		description:
			"Core programming languages that power scalable, maintainable, and modern web applications.",
		items: [{ icon: Javascript }, { icon: Typescript }],
	},
	{
		title: "FRONTEND TECHNOLOGIES",
		description:
			"Essential technologies for building fast, accessible, and visually consistent user interfaces.",
		items: [
			{ icon: Html },
			{ icon: Css },
			{ icon: Sass },
			{ icon: Tailwindcss },
			{ icon: Materiaui },
			{ icon: Shadcn },
		],
	},

	{
		title: "FRAMEWORKS",
		description:
			"Modern frameworks that enable high-performance applications with optimized rendering.",
		items: [{ icon: Nextjs }, { icon: React }],
	},
	{
		title: "LIBRARIES",
		description:
			"Powerful libraries that enhance state management, animations, data fetching, and application flow.",
		items: [
			{ icon: Redux },
			{ icon: Zustand },
			{ icon: ReactQuery },
			{ icon: Graphql },
			{ icon: Gsap },
		],
	},
	{
		title: "TOOLS",
		description:
			"Development and deployment tools that streamline workflows and ensure reliable delivery.",
		items: [
			{ icon: Git },
			{ icon: Github },
			{ icon: Docker },
			{ icon: Postman },
			{ icon: Drizzle },
		],
	},
];

export type Framework = {
	id: number;
	name: string;
};

export type Project = {
	id: number;
	name: string;
	description: string;
	href: string;
	image: string;
	bgImage: string;
	frameworks: Framework[];
};

export const projects: Project[] = [
	{
		id: 1,
		name: "Bazarinet",
		description:
			"An online store offering a wide variety of products, including clothing, phone accessories, and more.",
		href: "",
		image: "/iman-jafari/images/bazarinet.png",
		bgImage: "/iman-jafari/images/bazarinet.png",
		frameworks: [
			{ id: 1, name: "React" },
			{ id: 2, name: "Next.js" },
			{ id: 3, name: "React Query" },
			{ id: 4, name: "Zustand" },
			{ id: 5, name: "Tailwind CSS" },
		],
	},
	{
		id: 2,
		name: "Berlanshop",
		description:
			"A clothing store offering top-quality, stylish apparel at the most affordable prices for every customer.",
		href: "",
		image: "/iman-jafari/images/berlanshop.png",
		bgImage: "/iman-jafari/images/berlanshop.png",
		frameworks: [
			{ id: 1, name: "PostgreSQL" },
			{ id: 2, name: "FullStack Next.js" },
			{ id: 3, name: "Leaflet" },
			{ id: 4, name: "Zustand" },
			{ id: 5, name: "Tailwind CSS" },
		],
	},
	{
		id: 3,
		name: "Gap Chat",
		description:
			"developed a chat application that not only supports real-time messaging but also includes video call functionality.",
		href: "",
		image: "/iman-jafari/images/gap-chat.png",
		bgImage: "/iman-jafari/images/gap-chat.png",
		frameworks: [
			{ id: 1, name: "Websocket" },
			{ id: 2, name: "Next.js" },
			{ id: 3, name: "Database" },
			{ id: 4, name: "Zustand" },
			{ id: 5, name: "Tailwind CSS" },
		],
	},
	{
		id: 4,
		name: "GSAP landing",
		description:
			"created a landing page project with the main goal of practicing GSAP for animations and interactive effects, while also getting familiar with the challenges of animation and learning how to handle them effectively.",
		href: "",
		image: "/iman-jafari/images/gsap.png",
		bgImage: "/iman-jafari/images/gsap.png",
		frameworks: [
			{ id: 1, name: "gsap" },
			{ id: 2, name: "Vite" },
			{ id: 3, name: "Tailwind CSS" },
		],
	},
];

export type Social = {
	name: string;
	href: string;
};

export const socials: Social[] = [
	{ name: "Telegram", href: "https://t.me/iman_iji" },
	{
		name: "Email",
		href: "mailto:imancx.cx@gmail.com",
	},
	{ name: "GitHub", href: "https://github.com/iman-iji" },
	{ name: "linkedin", href: "https://linkedin.com/in/iman-jafari-cx" },
];