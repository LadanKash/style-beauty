

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
  source: "/products.json",
  headers: [
    { key: "Access-Control-Allow-Origin", value: "*" },
    { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
    { key: "Access-Control-Allow-Headers", value: "Content-Type" },
    { key: "Cache-Control", value: "no-store, max-age=0" },
  ],
},
{
  source: "/looks.json",
  headers: [
    { key: "Access-Control-Allow-Origin", value: "*" },
    { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
    { key: "Access-Control-Allow-Headers", value: "Content-Type" },
    { key: "Cache-Control", value: "no-store, max-age=0" },
  ],
},

    ];
  },
};

export default nextConfig;
