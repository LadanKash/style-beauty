// app/looks/page.tsx
import Link from "next/link";

type LookItem = { productId: string; label?: string };

type Look = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  items: LookItem[];
};

async function fetchJSON<T>(path: string): Promise<T | null> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${base}${path}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function LooksPage() {
  const looks = (await fetchJSON<Look[]>("/looks.json")) ?? [];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Looks</h1>
          <Link href="/products" className="text-sm text-gray-600 hover:text-black">
            Browse products →
          </Link>
        </div>

        <p className="mt-2 text-gray-600">
          Curated outfits & beauty routines — tap a look to see every item.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {looks.map((l) => (
            <Link
              key={l.id}
              href={`/looks/${l.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-md transition"
            >
              {/* <img src={l.imageUrl} alt={l.title} className="w-full h-52 object-cover" /> */}
 <div className="w-full aspect-[4/3] overflow-hidden">
  <img
    src={l.imageUrl}
    alt={l.title}
    className="w-full h-full object-cover object-center"
  />
</div>


              
              <div className="p-4">
                <div className="font-semibold text-lg">{l.title}</div>
                {l.subtitle && <div className="text-sm text-gray-600 mt-1">{l.subtitle}</div>}
                <div className="text-xs text-gray-500 mt-3">{l.items.length} items</div>
              </div>
            </Link>
          ))}
        </div>

        {looks.length === 0 && (
          <div className="mt-12 text-gray-600">
            No looks found. Check /looks.json
          </div>
        )}
      </div>
    </main>
  );
}
