import type { NextConfig } from "next";
import path from "path";
import { BASE_PATH } from "./src/lib/site";

const nextConfig: NextConfig = {
  // Static export only for production builds — avoids dev server 500 errors
  ...(process.env.NODE_ENV === "production" ? { output: "export" as const } : {}),
  basePath: BASE_PATH,
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;