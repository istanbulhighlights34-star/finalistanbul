import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/stadiums/fenerbahce-sukru-saracoglu",
        destination: "/stadiums/chobani-stadium",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
