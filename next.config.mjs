const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value:
			"default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; connect-src 'self' https:; img-src 'self' data: https:; font-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; object-src 'none'; media-src 'self'; frame-src 'none'; manifest-src 'self'; worker-src 'self' blob:; upgrade-insecure-requests",
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
	{
		key: 'Cross-Origin-Opener-Policy',
		value: 'same-origin',
	},
	{
		key: 'Cross-Origin-Resource-Policy',
		value: 'same-site',
	},
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/((?!api|_next|.*\\..*).*)',
				headers: securityHeaders,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'aceternity.com',
			},
			{
				protocol: 'https',
				hostname: 'plus.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
		unoptimized: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.glb$/,
			use: {
				loader: 'file-loader',
				options: {
					publicPath: '/_next/static/models/',
					outputPath: 'static/models/',
					name: '[name].[hash].[ext]',
				},
			},
		});

		return config;
	},
};

export default nextConfig;
