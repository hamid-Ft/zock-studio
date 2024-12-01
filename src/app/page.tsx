import { Banner } from './_components/banner';
import { Hero } from './_components/hero';
import { DockMenu } from './_components/dock-menu';
import { Project } from './_components/projects';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { ComingSoon } from './_components/coming-soon';
import TechStackTrail from './_components/tech-stack-trail';

export default function Home() {
	return (
		<TracingBeam className="px-6">
			<DockMenu />
			<Banner />
			<Hero />
			<Project />
			{/* <Lamp /> */}
			<TechStackTrail />
			<ComingSoon />
		</TracingBeam>
	);
}
