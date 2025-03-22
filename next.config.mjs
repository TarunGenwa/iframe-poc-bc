/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [];
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/iframe-poc' : '',
  reactStrictMode: true,
  swcMinify: true,
  // Set the port to 3001
  webpack: (config) => {
    return config;
  },
  // Override the default port 3000 to 3001
  serverRuntimeConfig: {
    port: 3001,
  },
};

export default nextConfig;