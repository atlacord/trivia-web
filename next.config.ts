import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [ '10.125.175.177' ],
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
