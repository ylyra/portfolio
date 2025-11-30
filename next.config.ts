import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "46g41g612x.ufs.sh",
      },
    ],
    // biome-ignore lint/style/noMagicNumbers: https://nextjs.org/docs/app/building-your-application/optimizing/images#quality-dimensions
    qualities: [100, 75],
  },
};

export default nextConfig;
