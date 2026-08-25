type AnalyticsProperties = Record<string, string | number | boolean>;

declare global {
	interface Window {
		umami?: {
			track: (event: string, properties?: AnalyticsProperties) => void;
		};
	}
}

export function trackEvent(event: string, properties?: AnalyticsProperties) {
	if (typeof window === "undefined") return;
	window.umami?.track(event, properties);
}
