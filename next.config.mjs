/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
