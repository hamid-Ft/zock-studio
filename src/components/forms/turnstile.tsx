"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

type TurnstileApi = {
	render: (
		container: HTMLElement,
		options: {
			sitekey: string;
			theme: "dark";
			language: string;
			action: string;
			callback: (token: string) => void;
			"expired-callback": () => void;
			"error-callback": () => void;
		},
	) => string;
	remove: (widgetId: string) => void;
};

declare global {
	interface Window {
		turnstile?: TurnstileApi;
	}
}

export function Turnstile({
	siteKey,
	language,
	onToken,
}: {
	siteKey: string;
	language: "en" | "fa";
	onToken: (token: string) => void;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const widgetIdRef = useRef<string | null>(null);
	const onTokenRef = useRef(onToken);
	onTokenRef.current = onToken;

	const renderWidget = useCallback(() => {
		if (!containerRef.current || !window.turnstile || widgetIdRef.current) {
			return;
		}

		widgetIdRef.current = window.turnstile.render(containerRef.current, {
			sitekey: siteKey,
			theme: "dark",
			language,
			action: "project-intake",
			callback: (token) => onTokenRef.current(token),
			"expired-callback": () => onTokenRef.current(""),
			"error-callback": () => onTokenRef.current(""),
		});
	}, [language, siteKey]);

	useEffect(() => {
		renderWidget();
		return () => {
			if (widgetIdRef.current && window.turnstile) {
				window.turnstile.remove(widgetIdRef.current);
				widgetIdRef.current = null;
			}
		};
	}, [renderWidget]);

	return (
		<>
			<Script
				id="cloudflare-turnstile"
				src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
				strategy="afterInteractive"
				onReady={renderWidget}
			/>
			<div ref={containerRef} className="turnstile-widget" />
		</>
	);
}
