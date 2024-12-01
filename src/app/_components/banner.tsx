'use client';

import { AuroraBackground } from '@/components/ui/aurora-background';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import SplitText from '@/components/ui/text-split-effect';
import { motion } from 'framer-motion';
import React from 'react';

export function Banner() {
	return (
		<>
			<AuroraBackground>
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className="relative flex flex-col gap-4 items-center justify-center px-4">
					<SplitText text={'ZOCK STUDIO'} />
					<TextGenerateEffect words={'By Hamid Fattahi'} />
					{/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">ZOCK STUDIO</div> */}
				</motion.div>
			</AuroraBackground>
		</>
	);
}
