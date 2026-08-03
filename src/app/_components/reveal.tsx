"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-72px" }}
			transition={{ duration: reduceMotion ? 0.12 : 0.42, ease }}
		>
			{children}
		</motion.div>
	);
}
