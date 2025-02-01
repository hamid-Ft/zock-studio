import { IconCloud } from '@/components/ui/icon-cloud';

const slugs = [
	'typescript',
	'javascript',
	'react',
	'android',
	'html5',
	'css3',
	'nodedotjs',
	'express',
	'nextdotjs',
	'prisma',
	'amazonaws',
	'postgresql',
	'firebase',
	'nginx',
	'vercel',
	'testinglibrary',
	'jest',
	'cypress',
	'docker',
	'git',
	'jira',
	'github',
	'gitlab',
	'visualstudiocode',
	'androidstudio',
	'figma',
	'csharp',
];

export function TechStack() {
	return (
		<div className="relative flex size-full max-w-lg mx-auto items-center justify-center overflow-hidden rounded-lg border  px-20  bg-white/15 ">
			<IconCloud iconSlugs={slugs} />
		</div>
	);
}
