/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project deployment, set basePath to your repo name
  // basePath: '/thumbless-web-main',
  // assetPrefix: '/thumbless-web-main/',
};

export default nextConfig;
