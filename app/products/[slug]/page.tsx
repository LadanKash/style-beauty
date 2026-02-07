
//2 app/products/[slug]/page.tsx

import Link from "next/link";
import { products } from "@/app/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link className="underline" href="/products">
          Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-10">
      <Link className="underline" href="/products">
        ← Back to products
      </Link>

      <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
      <p className="text-gray-600">{product.brand} • {product.budget}</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {product.images?.map((src, i) => (
          <div key={i} className="rounded-2xl overflow-hidden bg-gray-100 border">
            <img src={src} alt={`${product.name} ${i + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-700">{product.description}</p>

      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex mt-6 rounded-full px-5 py-3 bg-black text-white hover:opacity-90 transition"
      >
        Shop now
      </a>
    </main>
  );
}






