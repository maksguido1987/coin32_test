/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['media.rawg.io'],
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
