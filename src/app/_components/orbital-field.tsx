"use client";

import { useEffect, useRef } from "react";

export function OrbitalField() {
	const fieldRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const field = fieldRef.current;
		if (!field) return;

		let frame = 0;
		let visible = true;

		const updatePausedState = () => {
			field.dataset.paused = document.hidden || !visible ? "true" : "false";
		};

		const handlePointerMove = (event: PointerEvent) => {
			if (event.pointerType === "touch" || document.hidden || !visible) return;
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const bounds = field.getBoundingClientRect();
				const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
				const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;
				field.style.setProperty(
					"--orbit-shift-x",
					`${Math.max(-8, Math.min(8, x)).toFixed(2)}px`,
				);
				field.style.setProperty(
					"--orbit-shift-y",
					`${Math.max(-8, Math.min(8, y)).toFixed(2)}px`,
				);
			});
		};

		const resetPointer = () => {
			field.style.setProperty("--orbit-shift-x", "0px");
			field.style.setProperty("--orbit-shift-y", "0px");
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
				updatePausedState();
			},
			{ threshold: 0.05 },
		);

		observer.observe(field);
		field.addEventListener("pointermove", handlePointerMove, { passive: true });
		field.addEventListener("pointerleave", resetPointer);
		document.addEventListener("visibilitychange", updatePausedState);

		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			field.removeEventListener("pointermove", handlePointerMove);
			field.removeEventListener("pointerleave", resetPointer);
			document.removeEventListener("visibilitychange", updatePausedState);
		};
	}, []);

	return (
		<div ref={fieldRef} className="orbital-field" aria-hidden="true">
			<div className="orbital-field__parallax">
				<svg className="orbital-field__svg" viewBox="0 0 920 780" fill="none">
					<defs>
						<linearGradient
							id="orbit-line"
							x1="120"
							y1="90"
							x2="790"
							y2="660"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="var(--cyan-400)" stopOpacity="0" />
							<stop
								offset="0.44"
								stopColor="var(--cyan-400)"
								stopOpacity="0.72"
							/>
							<stop
								offset="1"
								stopColor="var(--violet-500)"
								stopOpacity="0.08"
							/>
						</linearGradient>
						<radialGradient id="node-core">
							<stop stopColor="var(--paper-50)" />
							<stop offset="0.35" stopColor="var(--cyan-300)" />
							<stop offset="1" stopColor="var(--cyan-400)" stopOpacity="0" />
						</radialGradient>
						<filter
							id="node-glow"
							x="-400%"
							y="-400%"
							width="800%"
							height="800%"
						>
							<feGaussianBlur stdDeviation="5" />
						</filter>
					</defs>

					<g className="orbital-field__grid">
						<path d="M90 116H858M62 256H858M48 396H858M62 536H858M94 676H858" />
						<path d="M184 46V724M350 28V744M516 18V756M682 32V738M848 72V696" />
					</g>

					<g className="orbital-field__ticks">
						<path d="M84 108v16M176 108v10M268 108v10M360 108v16M452 108v10M544 108v10M636 108v16M728 108v10M820 108v10" />
						<path d="M842 152h16M848 224h10M848 296h10M842 368h16M848 440h10M848 512h10M842 584h16" />
					</g>

					<g className="orbital-field__orbit orbital-field__orbit--slow">
						<ellipse
							cx="520"
							cy="390"
							rx="455"
							ry="214"
							transform="rotate(-17 520 390)"
						/>
						<ellipse
							cx="524"
							cy="388"
							rx="363"
							ry="145"
							transform="rotate(21 524 388)"
						/>
					</g>
					<g className="orbital-field__orbit orbital-field__orbit--reverse">
						<ellipse
							cx="520"
							cy="390"
							rx="273"
							ry="352"
							transform="rotate(64 520 390)"
						/>
						<ellipse
							cx="520"
							cy="390"
							rx="178"
							ry="408"
							transform="rotate(71 520 390)"
						/>
					</g>

					<path
						className="orbital-field__active-path"
						d="M89 477C182 171 441 92 688 205C832 271 880 431 788 564C680 719 402 727 225 601C142 542 122 456 170 375"
						stroke="url(#orbit-line)"
						pathLength="1"
					/>
					<path
						className="orbital-field__active-path orbital-field__active-path--delay"
						d="M202 648C368 533 456 396 455 240C455 154 519 95 618 112C766 138 847 296 783 422C723 541 535 566 399 505C286 454 206 357 127 242"
						stroke="url(#orbit-line)"
						pathLength="1"
					/>

					<g className="orbital-field__vector-lines">
						<path d="M183 207L316 315L455 240L589 381L745 330" />
						<path d="M225 601L399 505L548 585L700 496" />
					</g>

					<g
						className="orbital-field__node orbital-field__node--one"
						transform="translate(316 315)"
					>
						<circle r="18" fill="url(#node-core)" filter="url(#node-glow)" />
						<circle r="4" className="orbital-field__node-ring" />
						<circle r="1.8" className="orbital-field__node-core" />
					</g>
					<g
						className="orbital-field__node orbital-field__node--two"
						transform="translate(589 381)"
					>
						<circle r="20" fill="url(#node-core)" filter="url(#node-glow)" />
						<circle r="5" className="orbital-field__node-ring" />
						<circle r="2" className="orbital-field__node-core" />
					</g>
					<g
						className="orbital-field__node orbital-field__node--three"
						transform="translate(548 585)"
					>
						<circle r="16" fill="url(#node-core)" filter="url(#node-glow)" />
						<circle r="4" className="orbital-field__node-ring" />
						<circle r="1.8" className="orbital-field__node-core" />
					</g>

					<g className="orbital-field__telemetry">
						<path d="M589 381h91l18-18h74" />
						<path d="M316 315h-72l-15-15h-61" />
						<path d="M548 585h76l17 17h88" />
						<text x="704" y="357">
							SYS / 04
						</text>
						<text x="120" y="294">
							SIG / ACTIVE
						</text>
						<text x="649" y="623">
							SYNC / 98.4
						</text>
					</g>
				</svg>
			</div>
			<div className="orbital-field__fade" />
		</div>
	);
}
