import { Canvas } from "@react-three/fiber";
import { Planet } from "../_components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../_components/AnimatedHeaderSection";

const Hero = () => {
	const isMobile = useMediaQuery({ maxWidth: 853 });
	const text = `I help brands and startups grow their business with professional, results-driven website design and development`;
	return (
		<section id="home" className="flex flex-col justify-end min-h-screen">
			<AnimatedHeaderSection
				subTitle={"404 Page Not Found, But Hope Is Found"}
				title={"IMAN JAFARI"}
				text={text}
				textColor={"text-black"}
			/>
			<figure
				className="absolute inset-0 -z-50"
				style={{ width: "100vw", height: "100vh" }}
			>
				<Canvas
					shadows
					camera={{ position: [2, 0, -10], fov: 17.5, near: 1, far: 20 }}
				>
					<ambientLight intensity={0.5} />
					<Float speed={0.5}>
						<Planet
							scale={isMobile ? 0.3 : 0.24}
							rotation={isMobile ? [4, 2, 1] : [5, 3.2, 0]}
							position={[0, 0, 0]}
						/>
					</Float>
					<Environment resolution={256}>
						<group rotation={[-Math.PI / 2, 4, 10]}>
							<Lightformer
								form={"circle"}
								intensity={2}
								position={[0, 5, -9]}
								scale={10}
							/>
							<Lightformer
								form={"circle"}
								intensity={2}
								position={[0, 3, 1]}
								scale={10}
							/>
							<Lightformer
								form={"circle"}
								intensity={2}
								position={[-5, -1, -1]}
								scale={10}
							/>
							<Lightformer
								form={"circle"}
								intensity={2}
								position={[10, 1, 0]}
								scale={16}
							/>
						</group>
					</Environment>
				</Canvas>
			</figure>
		</section>
	);
};

export default Hero;