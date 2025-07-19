import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['uploadthing.com', 'ufs.sh'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ufs.sh',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
