// import { writeFileSync, mkdirSync } from "node:fs";
// import { join } from "node:path";

// import { products } from "../app/data/products";

// const SITE_URL = "https://stylebeauti.com";

// // ✅ debug
// console.log("products is array:", Array.isArray(products));
// console.log("products length:", Array.isArray(products) ? products.length : "N/A");

// if (!Array.isArray(products)) {
//   throw new Error("❌ 'products' is not an array. Check export in app/data/products.ts");
// }

// const output = products.map((p: any) => ({
//   id: String(p.id),
//   slug: p.slug,
//   name: p.name,
//   brand: p.brand,
//   category: p.category ?? "",
//   concerns: p.concerns ?? [],
//   price: Number(p.price ?? 0),
//   currency: p.currency ?? "CAD",
//   budget: p.budget ?? "",
//   description: p.description ?? "",
//   affiliateUrl: p.affiliateUrl ?? "",
//   // your products.ts has images: string[]
//   imageUrl: Array.isArray(p.images) && p.images[0]
//     ? `${SITE_URL}${p.images[0]}`
//     : "",
//   images: Array.isArray(p.images)
//     ? p.images.map((x: string) => `${SITE_URL}${x}`)
//     : [],
//   tag: p.tag ?? "",
// }));

// mkdirSync(join(process.cwd(), "public"), { recursive: true });

// const filePath = join(process.cwd(), "public", "products.json");
// writeFileSync(filePath, JSON.stringify(output, null, 2), "utf8");

// console.log("✅ Wrote", output.length, "products to", filePath);


import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

import { products, type Product } from "../app/data/products";

const SITE_URL = "https://stylebeauti.com";

const buildUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path}`;
};

console.log("products is array:", Array.isArray(products));
console.log("products length:", products.length);

const output = products.map((p: Product) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  brand: p.brand,
  category: p.category,
  concerns: p.concerns,
  showPriceCTA: Boolean(p.showPriceCTA),
  price: p.price,
  currency: p.currency ?? "CAD",
  budget: p.budget,
  description: p.description,
  affiliateUrl: p.affiliateUrl,

  imageUrl:
    Array.isArray(p.images) && p.images.length > 0
      ? buildUrl(p.images[0])
      : "",

  images:
    Array.isArray(p.images)
      ? p.images.map(buildUrl)
      : [],

  tag: p.tag ?? "",
}));

mkdirSync(join(process.cwd(), "public"), { recursive: true });

const filePath = join(process.cwd(), "public", "products.json");

writeFileSync(filePath, JSON.stringify(output, null, 2), "utf8");

console.log("✅ Wrote", output.length, "products to", filePath);
