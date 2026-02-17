// // app/looks/[id]/page.tsx

import Link from "next/link";

type LookItem = { productId: string; label?: string };

type Look = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  items: LookItem[];
};

type Product = {
  id: string;
  slug: string;
  name: string;
  brand?: string;
  budget?: string;
  description?: string;
  imageUrl?: string;
  affiliateUrl?: string;
  showPriceCTA?: boolean;
};

async function fetchJSON<T>(path: string): Promise<T> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${base}${path}`, { cache: "no-store" });
  if (!res.ok) return [] as T;
  return res.json();
}

export default async function LookDetailPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const { id } = await Promise.resolve(params);

  const looks = await fetchJSON<Look[]>("/looks.json");
  const products = await fetchJSON<Product[]>("/products.json");

  const look = looks.find((l) => l.id === id);

  if (!look) {
    return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--text)] overflow-x-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-2xl font-bold">Look not found</h1>
          <p className="mt-3 text-gray-600">We couldn’t find this look.</p>
          <Link className="inline-block mt-6 underline" href="/looks">
            ← Back to Looks
          </Link>
        </div>
      </main>
    );
  }

  const resolvedItems = look.items
    .map((it) => ({
      item: it,
      product: products.find((p) => p.id === it.productId),
    }))
    .filter((x) => x.product);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)] overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <Link href="/looks" className="text-sm text-gray-600 hover:text-black">
            ← Back to Looks
          </Link>
          <Link href="/products" className="text-sm text-gray-600 hover:text-black">
            Browse products →
          </Link>
        </div>

        {/* <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
            <img src={look.imageUrl} alt={look.title} className="w-full h-[360px] object-cover" />
            <div className="p-5">
              <h1 className="text-3xl font-bold">{look.title}</h1>
              {look.subtitle && <p className="mt-2 text-gray-600">{look.subtitle}</p>}
              <p className="mt-4 text-sm text-gray-500">{look.items.length} items in this look</p>
            </div>
          </div> */}

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">

    {/* FIXED IMAGE */}
    <div className="w-full aspect-[4/3] overflow-hidden">
      <img
        src={look.imageUrl}
        alt={look.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-5">
      <h1 className="text-3xl font-bold">{look.title}</h1>
      {look.subtitle && <p className="mt-2 text-gray-600">{look.subtitle}</p>}
      <p className="mt-4 text-sm text-gray-500">{look.items.length} items in this look</p>
    </div>
  </div>
          <div className="space-y-4">
            {resolvedItems.length === 0 ? (
              <div className="text-gray-600">
                No matching products found. Make sure looks.json productId matches products.json id (example: "p1").
              </div>
            ) : (
              resolvedItems.map(({ item, product }) => {
                const p = product!;
                return (
                  <div
                    key={`${look.id}-${p.id}`}
                    className="bg-white rounded-3xl border border-gray-200 p-4 flex gap-4"
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-24 h-24 rounded-2xl object-cover border border-gray-50"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm text-gray-500">
                            {item.label ? item.label : p.brand}
                            {p.budget ? ` • ${p.budget}` : ""}
                          </div>
                          <div className="font-semibold">{p.name}</div>
                          {p.description && (
                            <div className="mt-1 text-sm text-gray-600 line-clamp-2">{p.description}</div>
                          )}
                        </div>

                        <Link href={`/products/${p.slug}`} className="text-sm underline whitespace-nowrap">
                          View
                        </Link>
                      </div>

                      {p.affiliateUrl && (
                        <a
                          href={p.affiliateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex mt-3 items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
                        >
                          Check price on Amazon
                        </a>
                      )}

                      <div className="mt-2 text-xs text-gray-500">Affiliate link (no extra cost)</div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
