/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/thumbless-website',
  assetPrefix: '/thumbless-website/',
};

export default nextConfig;
