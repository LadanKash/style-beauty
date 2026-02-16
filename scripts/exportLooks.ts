// scripts/exportLooks.ts
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { LOOKS, type Look } from "../app/data/looks";

const SITE_URL = "https://www.stylebeauti.com";

const buildUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const output = LOOKS.map((l: Look) => ({
  id: l.id,
  title: l.title,
  subtitle: l.subtitle ?? "",
  imageUrl: buildUrl(l.imageUrl),
  items: (l.items ?? []).map((it) => ({
    productId: it.productId,
    label: it.label ?? "",
  })),
}));

mkdirSync(join(process.cwd(), "public"), { recursive: true });
writeFileSync(join(process.cwd(), "public", "looks.json"), JSON.stringify(output, null, 2), "utf8");

console.log(" Wrote", output.length, "looks to public/looks.json");
