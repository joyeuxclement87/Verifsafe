import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js image optimization (sharp) is enabled: local images are served
    // as resized WebP/AVIF. Sanity CDN images are optimised by urlFor() params
    // (services/equipment where those remain). Gallery images served from
    // Supabase Storage are resized on demand by the optimizer.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;