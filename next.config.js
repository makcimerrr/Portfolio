// next.config.js
const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeholder.com", "assets.aceternity.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

const isBuild = process.env.NODE_ENV === "production";

module.exports = isBuild ? withContentlayer(nextConfig) : nextConfig;

