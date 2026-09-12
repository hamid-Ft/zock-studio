import { Icon } from "@iconify/react";
import starFourPoints from "@iconify-icons/mdi/star-four-points";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(Observer);

type MarqueeProps = {
	items: string[];
	className?: string;
	icon?: typeof starFourPoints;
	iconClassName?: string;
	reverse?: boolean;
};

type LoopConfig = {
	repeat?: number;
	paused?: boolean;
	speed?: number;
	paddingRight?: number;
	reversed?: boolean;
	snap?: number | false;
};

type LoopTimeline = gsap.core.Timeline & {
	next: (vars?: unknown) => gsap.core.Tween;
	previous: (vars?: unknown) => gsap.core.Tween;
	current: () => number;
	toIndex: (index: number, vars?: unknown) => gsap.core.Tween;
	times: number[];
};

const Marquee = ({
	items,
	className = "text-white bg-black",
	icon = starFourPoints,
	iconClassName = "",
	reverse = false,
}: MarqueeProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const itemsRef = useRef<(HTMLSpanElement | null)[]>([]);

	function horizontalLoop(
		itemsRaw: HTMLElement[],
		config: LoopConfig = {}
	): LoopTimeline {
		const items = gsap.utils.toArray<HTMLElement>(itemsRaw);
		config = config || {};
		const tl = gsap.timeline({
			repeat: config.repeat,
			paused: config.paused,
			defaults: { ease: "none" },
			onReverseComplete: () =>
				tl.totalTime(tl.rawTime() + tl.duration() * 100),
		}) as LoopTimeline;
		let length = items.length,
			startX = items[0].offsetLeft,
			times: number[] = [],
			widths: number[] = [],
			xPercents: number[] = [],
			curIndex = 0,
			pixelsPerSecond = (config.speed || 1) * 100,
			snap =
				config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1),
			totalWidth: number,
			curX: number,
			distanceToStart: number,
			distanceToLoop: number,
			item: HTMLElement,
			i: number;
		gsap.set(items, {
			// convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
			xPercent: (i, el) => {
				const w = parseFloat(gsap.getProperty(el, "width", "px") as string);
				widths[i] = w;
				xPercents[i] = snap(
					(parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
						(gsap.getProperty(el, "xPercent") as number)
				);
				return xPercents[i];
			},
		});
		gsap.set(items, { x: 0 });
		totalWidth =
			items[length - 1].offsetLeft +
			(xPercents[length - 1] / 100) * widths[length - 1] -
			startX +
			items[length - 1].offsetWidth *
				(gsap.getProperty(items[length - 1], "scaleX") as number) +
			(parseFloat(
				`${config.paddingRight || 0}`
			) as unknown as number);
		for (i = 0; i < length; i++) {
			item = items[i];
			curX = (xPercents[i] / 100) * widths[i];
			distanceToStart = item.offsetLeft + curX - startX;
			distanceToLoop =
				distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
			tl.to(
				item,
				{
					xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
					duration: distanceToLoop / pixelsPerSecond,
				},
				0
			)
				.fromTo(
					item,
					{
						xPercent: snap(
							((curX - distanceToLoop + totalWidth) / widths[i]) * 100
						),
					},
					{
						xPercent: xPercents[i],
						duration:
							(curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
						immediateRender: false,
					},
					distanceToLoop / pixelsPerSecond
				)
				.add(`label${i}`, distanceToStart / pixelsPerSecond);
			times[i] = distanceToStart / pixelsPerSecond;
		}
		function toIndex(index: number, vars?: gsap.TweenVars) {
			vars = vars || {};
			if (Math.abs(index - curIndex) > length / 2) {
				// Always go in the shortest direction.
				index += index > curIndex ? -length : length;
			}
			const newIndex = gsap.utils.wrap(0, length, index);
			let time = times[newIndex];
			if (time > tl.time() !== index > curIndex) {
				// if we're wrapping the timeline's playhead, make the proper adjustments
				vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
				time += tl.duration() * (index > curIndex ? 1 : -1);
			}
			curIndex = newIndex;
			vars.overwrite = true;
			return tl.tweenTo(time, vars);
		}
		tl.next = (vars?: unknown) => toIndex(curIndex + 1, vars as gsap.TweenVars);
		tl.previous = (vars?: unknown) => toIndex(curIndex - 1, vars as gsap.TweenVars);
		tl.current = () => curIndex;
		tl.toIndex = (index, vars?: unknown) =>
			toIndex(index, vars as gsap.TweenVars);
		tl.times = times;
		tl.progress(1, true).progress(0, true); // pre-render for performance
		if (config.reversed) {
			tl.vars.onReverseComplete?.();
			tl.reverse();
		}
		return tl;
	}

	useEffect(() => {
		const tl = horizontalLoop(itemsRef.current.filter(Boolean) as HTMLElement[], {
			repeat: -1,
			paddingRight: 30,
			reversed: reverse,
		});

		const observer = Observer.create({
			onChangeY(self) {
				let factor = 2.5;
				if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
					factor *= -1;
				}
				gsap
					.timeline({
						defaults: {
							ease: "none",
						},
					})
					.to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
					.to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
			},
		});
		return () => {
			tl.kill();
			observer.kill();
		};
	}, [items, reverse]);
	return (
		<div
			ref={containerRef}
			className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
		>
			<div className="flex">
				{items.map((text, index) => (
					<span
						key={index}
						ref={(el) => {
							itemsRef.current[index] = el;
						}}
						className="flex items-center px-16 gap-x-32"
					>
						{text} <Icon icon={icon} className={iconClassName} />
					</span>
				))}
			</div>
		</div>
	);
};

export default Marquee;
