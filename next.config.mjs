import createMDX from "@next/mdx";

function getAllowedAnalyticsOrigin() {
	try {
		return process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL
			? new URL(process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL).origin
			: "";
	} catch {
		return "";
	}
}

const analyticsOrigin = getAllowedAnalyticsOrigin();
const scriptSources = [
	"'self'",
	"'unsafe-inline'",
	"'unsafe-eval'",
	"https://challenges.cloudflare.com",
	analyticsOrigin,
].filter(Boolean);
const connectSources = [
	"'self'",
	"https://challenges.cloudflare.com",
	analyticsOrigin,
].filter(Boolean);

const securityHeaders = [
	{
		key: "Content-Security-Policy",
		value: `default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; connect-src ${connectSources.join(" ")}; img-src 'self' data: https:; font-src 'self'; script-src ${scriptSources.join(" ")}; style-src 'self' 'unsafe-inline'; object-src 'none'; media-src 'self'; frame-src https://challenges.cloudflare.com; manifest-src 'self'; worker-src 'self' blob:; upgrade-insecure-requests`,
	},
	{
		key: "X-Frame-Options",
		value: "DENY",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "Referrer-Policy",
		value: "strict-origin-when-cross-origin",
	},
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=()",
	},
	{
		key: "Cross-Origin-Opener-Policy",
		value: "same-origin",
	},
	{
		key: "Cross-Origin-Resource-Policy",
		value: "same-site",
	},
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	typedRoutes: true,
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	async headers() {
		return [
			{
				source: "/((?!api|_next|.*\\..*).*)",
				headers: securityHeaders,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "aceternity.com",
			},
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
		unoptimized: true,
	},
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
