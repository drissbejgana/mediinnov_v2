
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true, 
    eslint: { 
      ignoreDuringBuilds: true, 
    }, 
    images: {
      domains: ['mediinnov.ma'],
      unoptimized: true,
    },};

export default withNextIntl(nextConfig);
