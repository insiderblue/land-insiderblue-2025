import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  telemetry: false,
  swcMinify: true,
  images: {
    domains: ['www.datocms-assets.com'],
  },
};

export default nextConfig;
