'use client';

import LightRays from '@/components/ui/light-ray';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import SplitText from '@/components/ui/text-split-effect';
import { motion } from 'motion/react';

export function Banner() {
	return (
		<>
			{/* <AuroraBackground> */}
			<div style={{ width: '100%', height: '100vh', position: 'relative' }}>
				<LightRays
					raysOrigin="top-center"
					// raysColor="#00ffff"
					raysSpeed={1.5}
					lightSpread={0.8}
					rayLength={1.2}
					followMouse={true}
					mouseInfluence={0.1}
					noiseAmount={0.1}
					distortion={0.05}
					className="custom-rays"
				/>
			</div>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className="relative flex flex-col gap-4 items-center justify-center px-4 -mt-[calc(100vh-150px)]">
				<SplitText text={'MOON STUDIO'} />
				<TextGenerateEffect words={'By MoonLancers'} />
				{/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">ZOCK STUDIO</div> */}
			</motion.div>
			{/* </AuroraBackground> */}
		</>
	);
}
