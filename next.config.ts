import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "theaterstuecke-online.de",
      },
      {
        protocol: "https",
        hostname: "www.theaterstuecke-online.de",
      },
    ],
  },
};

export default nextConfig;
