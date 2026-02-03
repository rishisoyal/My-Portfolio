import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // If you ever use external URLs, add them here too:
    // remotePatterns: [{ protocol: 'https', hostname: 'example.com' }],
  },
};

export default nextConfig;

