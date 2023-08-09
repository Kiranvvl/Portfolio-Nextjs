/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
