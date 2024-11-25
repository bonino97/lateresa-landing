import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  feedbackWidget: false,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      const originalEntry = config.entry as () => Promise<
        Record<string, string[]>
      >;
      config.entry = async () => {
        const entries = await originalEntry();
        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./client/dev-error-overlay')
        ) {
          entries['main.js'].unshift('next/dist/client/dev-error-overlay');
        }
        return entries;
      };
    }
    return config;
  },
};

export default nextConfig;
