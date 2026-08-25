import type { Metadata } from "next";
import type { ReactNode } from "react";

import { createRouteMetadata } from "../seo";
import { getRequestLocale } from "../seo-server";

import "./portfolio.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createRouteMetadata({
    title: {
      en: "Iman Jafari Portfolio",
      fa: "پورتفولیوی فرانت‌اند ایمان جعفری",
    },
    description: {
      en: "Frontend developer portfolio covering React, Next.js, TypeScript, Tailwind, Shadcn UI, Docker, Drizzle, and interactive web experiences.",
      fa: "پورتفولیوی توسعه‌دهنده فرانت‌اند با تمرکز بر React، Next.js، TypeScript، Tailwind، Shadcn UI، Docker، Drizzle و تجربه‌های تعاملی وب.",
    },
    path: "/iman-jafari",
    keywords: [
      "frontend developer",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    locale,
  });
}

export default function ImanJafariLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main>{children}</main>;
}
