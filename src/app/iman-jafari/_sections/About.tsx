import { useRef } from "react";
import AnimatedHeaderSection from "../_components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../_components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
	const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from localhost to production`;
	const aboutText = `Obsessed with building beautiful and performant frontend experiences. 💻✨ From React components to smooth animations, I craft UIs that just feel right.
  After shipping code:
⚡️ I'm usually open-sourcing a new idea or contributing to other cool projects.
📚 Constantly leveling up my skills with YouTube and official docs.
⚔️ I solve challenges and hone my logic on Codewars.
🎮 You can find me battling it out in my favorite video games.`;
	const imgRef = useRef<HTMLImageElement>(null);
	useGSAP(() => {
		gsap.to("#about", {
			scale: 0.95,
			scrollTrigger: {
				trigger: "#about",
				start: "bottom 80%",
				end: "bottom 20%",
				scrub: true,
				markers: false,
			},
			ease: "power1.inOut",
		});

		gsap.set(imgRef.current, {
			clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
		});
		gsap.to(imgRef.current, {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			duration: 2,
			ease: "power4.out",
			scrollTrigger: { trigger: imgRef.current },
		});
	});
	return (
		<section id="about" className="min-h-screen bg-black rounded-b-4xl">
			<AnimatedHeaderSection
				subTitle={"Cod with purpose, Built to scale"}
				title={"About"}
				text={text}
				textColor={"text-white"}
				withScrollTrigger={true}
			/>
			<div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
				<img
					ref={imgRef}
					src="/iman-jafari/images/me.png"
					alt="man"
					className="w-md rounded-3xl"
				/>
				<AnimatedTextLines text={aboutText} className={"w-full"} />
			</div>
		</section>
	);
};

export default About;