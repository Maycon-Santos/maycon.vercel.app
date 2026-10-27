import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Página 404 única para os dois layouts raiz (português e inglês).
    globalNotFound: true,
  },
};

export default nextConfig;
