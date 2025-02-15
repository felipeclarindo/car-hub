import { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-intersection-observer"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
      },
    ],
  },
};

export default nextConfig;
