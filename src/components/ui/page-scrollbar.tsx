'use client';

import { useEffect, useState } from 'react';

const TRACK_START = 3;
const TRACK_HEIGHT = 94;
const MIN_THUMB_HEIGHT = 14;

function getScrollbarState() {
	if (typeof window === 'undefined') {
		return { thumbHeight: TRACK_HEIGHT, thumbY: TRACK_START };
	}

	const documentElement = document.documentElement;
	const scrollableHeight = documentElement.scrollHeight - window.innerHeight;
	const thumbRatio = window.innerHeight / documentElement.scrollHeight;
	const thumbHeight = Math.max(MIN_THUMB_HEIGHT, Math.min(TRACK_HEIGHT, TRACK_HEIGHT * thumbRatio));
	const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
	const thumbY = TRACK_START + (TRACK_HEIGHT - thumbHeight) * Math.min(1, Math.max(0, progress));

	return { thumbHeight, thumbY };
}

export function PageScrollbar() {
	const [scrollbarState, setScrollbarState] = useState(getScrollbarState);

	useEffect(() => {
		let frame = 0;

		const update = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => setScrollbarState(getScrollbarState()));
		};

		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, []);

	return (
		<aside aria-hidden="true" className="page-scrollbar">
			<svg
				className="h-full w-full"
				viewBox="0 0 24 100"
				preserveAspectRatio="none"
				focusable="false">
				<line
					x1="12"
					x2="12"
					y1={TRACK_START}
					y2={TRACK_START + TRACK_HEIGHT}
					stroke="rgba(255,255,255,0.12)"
					strokeWidth="1.2"
					strokeLinecap="round"
				/>
				<rect
					x="8.5"
					y={scrollbarState.thumbY}
					width="7"
					height={scrollbarState.thumbHeight}
					rx="3.5"
					fill="url(#page-scrollbar-thumb)"
				/>
				<defs>
					<linearGradient id="page-scrollbar-thumb" x1="8.5" x2="15.5" y1="0" y2="100" gradientUnits="userSpaceOnUse">
						<stop stopColor="#67e8f9" />
						<stop offset="0.5" stopColor="#f0abfc" />
						<stop offset="1" stopColor="#facc15" />
					</linearGradient>
				</defs>
			</svg>
		</aside>
	);
}
