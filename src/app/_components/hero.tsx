'use client';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';

export function Hero() {
	return (
		<HeroHighlight>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="text-xl px-4 md:text-xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-10 lg:leading-relaxed text-center mx-auto ">
				We are a collaboration of Hamid&apos;s colleges and friends with vast specialities around
				<Highlight className="text-black dark:text-white">digital creation</Highlight>
				to achieve better and compact a team of
				<Highlight className="text-black dark:text-white">freelancers</Highlight>
				to deliver
				<Highlight className="text-black dark:text-white">business needs</Highlight>
				in more
				<Highlight className="text-black dark:text-white">managed</Highlight>
				way for our clients
			</motion.h1>
		</HeroHighlight>
	);
}
