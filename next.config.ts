import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    const temporary = [
      ["/index.php", "/"],
      ["/over-wentink.php", "/over-ons"],
      ["/onderhoud.php", "/diensten/tuinonderhoud"],
      ["/aanleg.php", "/diensten/tuinaanleg"],
      ["/renovatie.php", "/diensten/tuinrenovatie"],
      ["/tuinarchitectuur.php", "/diensten/tuinontwerp"],
      ["/werk-in-beeld.php", "/werk-in-beeld"],
      ["/plantencentrum.php", "/plantencentrum"],
      ["/vacatures.php", "/over-ons"],
      ["/contact.php", "/contact"],
      ["/privacyverklaring.php", "/privacyverklaring"],
      ["/m/index.php", "/"],
      ["/m", "/"],
    ] as const;
    return temporary.map(([source, destination]) => ({ source, destination, permanent: false }));
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
