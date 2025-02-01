'use client';
import ImageMouseTrail from '@/components/ui/mouse-trail-image';
import React from 'react';

const images = [
	'/svg/adobe.svg',
	'/svg/blender.svg',
	'/svg/chartjs.svg',
	'/svg/chrome.svg',
	'/svg/csharp.svg',
	'/svg/css.svg',
	'/svg/daily.dev.svg',
	'/svg/drizzle.svg',
	'/svg/figma.svg',
	'/svg/git.svg',
	'/svg/graphql.svg',
	'/svg/hono.svg',
	'/svg/html5.svg',
	'/svg/javascript.svg',
	'/svg/jwt.svg',
	'/svg/mongodb.svg',
	'/svg/nextjs.svg',
	'/svg/nodejs.svg',
	'/svg/OpenAI.svg',
	'/svg/PayloadCMS.svg',
	'/svg/postcss.svg',
	'/svg/postgresql.svg',
	'/svg/react.svg',
	'/svg/reactquery.svg',
	'/svg/redis.svg',
	'/svg/redux.svg',
	'/svg/sql-server.svg',
	'/svg/svg.svg',
	'/svg/tailwindcss.svg',
	'/svg/Three.js.svg',
	'/svg/turborepo.svg',
	'/svg/typescript.svg',
	'/svg/visual-studio.svg',
	'/svg/vitejs.svg',
	'/svg/vscode.svg',
	'/svg/wordpress.svg',
	'/svg/zod.svg',
];
export default function TechStackTrail() {
	return (
		<section>
			<ImageMouseTrail items={images} maxNumberOfImages={5} distance={20} imgClass="sm:w-20 w-18 sm:h-24 h-26">
				<h1 className="text-white text-center text-4xl font-bold">
					TechStack <br />
					Dynamic Mouse Trails
				</h1>
			</ImageMouseTrail>
		</section>
	);
}
