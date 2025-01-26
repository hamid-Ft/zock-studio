'use client';
import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';

import Card from './_components/Card';
import { projects } from '../../../constanse';

import { useScroll } from 'framer-motion';
import Lenis from 'lenis';

export default function Home() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,

		offset: ['start start', 'end end'],
	});

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);

			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
	return (
		<main className={styles.main} ref={container}>
			{projects.map((project, i) => {
				const targetScale = 1 - (projects.length - i) * 0.05;
				return (
					<Card
						key={project.id}
						{...project}
						i={i}
						progress={scrollYProgress}
						range={[i * 0.25, 1]}
						targetScale={targetScale}
					/>
				);
			})}
		</main>
	);
}
