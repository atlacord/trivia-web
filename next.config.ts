import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? 'https://trivia.atlacord.com' : '',
  allowedDevOrigins: [ '10.125.175.177' ],
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
