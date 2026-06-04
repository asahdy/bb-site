import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i0.wp.com" },
      { hostname: "bcc-newspack.s3.amazonaws.com" },
      { hostname: "americanahighways.org" },
      { hostname: "media.zenfs.com" },
    ],
  },
};

export default nextConfig;
