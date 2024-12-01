'use client';
import { Vortex } from '@/components/ui/vortex';
import React from 'react';

export function ComingSoon() {
	return (
		<div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
			<Vortex
				backgroundColor="black"
				className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
				<h2 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
					COMING SOON
				</h2>
				<p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
					this site is under construction. I&apos;m working on it and will be ready soon.
				</p>
			</Vortex>
		</div>
	);
}
