import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.abcz.workers.dev',
        port: '',
        pathname: '/api/fitlog/**',
      },
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
