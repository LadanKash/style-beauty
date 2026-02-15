// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// //update 
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async headers() {
//     return [
//       {
//         source: "/products.json",
//         headers: [
//           { key: "Access-Control-Allow-Origin", value: "*" },
//           { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
//           { key: "Access-Control-Allow-Headers", value: "Content-Type" },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // allow both feeds (products + looks)
        source: "/:file(products|looks).json",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
};

export default nextConfig;
