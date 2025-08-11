import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Reduce hydration warnings
    optimizePackageImports: ['react-syntax-highlighter'],
  },
  // Suppress hydration warnings in development for faster debugging
  reactStrictMode: true,
};

export default nextConfig;
