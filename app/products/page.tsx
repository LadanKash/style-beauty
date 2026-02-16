// app/products/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products, type Product } from "@/app/data/products";
// import type { Product } from "@/app/data/products";

type CategoryFilter = "all" | Product["category"];
type BudgetFilter = "all" | Product["budget"];

export default function ProductsPage() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [budget, setBudget] = useState<BudgetFilter>("all");
  const [concern, setConcern] = useState<string>("all");
  const [query, setQuery] = useState("");

const allConcerns = useMemo(() => {
  const set = new Set<string>();
  products
    .filter((p) => (category === "all" ? true : p.category === category))
    .forEach((p) => p.concerns.forEach((c) => set.add(c)));

  return ["all", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
}, [category]);


  const filtered = useMemo(() => {
  const q = query.trim().toLowerCase();
  const showExactPrice = false;

  return products.filter((p) => {
    const matchesCategory = category === "all" ? true : p.category === category;
    const matchesBudget = budget === "all" ? true : p.budget === budget;
    const matchesConcern = concern === "all" ? true : p.concerns.includes(concern);

      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.concerns.some((c) => c.toLowerCase().includes(q));

      return matchesCategory && matchesBudget && matchesConcern && matchesQuery;
    });
  }, [category, budget, concern, query]);

  const reset = () => {
    setCategory("all");
    setBudget("all");
    setConcern("all");
    setQuery("");
  };

  const FilterButton = ({
    active,
    children,
    onClick,
  }: {
    active: boolean;
    children: React.ReactNode;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      type="button"
      className={[
        "rounded-full px-4 py-2 text-sm transition border",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(230,164,180,0.35)]",
        active
          ? "bg-[rgb(var(--accent))] text-white border-transparent"
          : "bg-[var(--surface)] text-[var(--text)] border-[rgba(var(--border))] hover:bg-[rgba(230,164,180,0.10)]",
      ].join(" ")}
    >
      {children}
    </button>
  );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)] p-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link className="underline" href="/">
          Back home
        </Link>
      </div>

      {/* Filters */}
      <div className="border border-[rgba(var(--border))] rounded-2xl p-6 mb-8 bg-[var(--surface)]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-[var(--muted)] mr-2">Category:</span>
              <FilterButton active={category === "all"} onClick={() => setCategory("all")}>
                All
              </FilterButton>
              <FilterButton
                active={category === "skincare"}
                onClick={() => setCategory("skincare")}
              >
                Skincare
              </FilterButton>
              <FilterButton
                active={category === "haircare"}
                onClick={() => setCategory("haircare")}
              >
                Haircare
              </FilterButton>

              {/*  important: category is "clothing" in your Product type */}
              <FilterButton
                active={category === "clothing"}
                onClick={() => setCategory("clothing")}
              >
                Clothing
              </FilterButton>

              <FilterButton active={category === "bags"} onClick={() => setCategory("bags")}>
               Bags
             </FilterButton>

               <FilterButton
              active={category === "accessories"}
              onClick={() => setCategory("accessories")}
                >
              Accessories
             </FilterButton>

            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-[var(--muted)] mr-2">Budget:</span>
              <FilterButton active={budget === "all"} onClick={() => setBudget("all")}>
                All
              </FilterButton>
              <FilterButton active={budget === "$"} onClick={() => setBudget("$")}>
                $
              </FilterButton>
              <FilterButton active={budget === "$$"} onClick={() => setBudget("$$")}>
                $$
              </FilterButton>
              <FilterButton active={budget === "$$$"} onClick={() => setBudget("$$$")}>
                $$$
              </FilterButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search brand, product, concern…"
              className="rounded-xl px-4 py-3 bg-[var(--surface)] text-[var(--text)] border border-[rgba(var(--border))] outline-none focus:ring-2 focus:ring-[rgba(230,164,180,0.35)]"
            />

            <select
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="rounded-xl px-4 py-3 bg-[var(--surface)] text-[var(--text)] border border-[rgba(var(--border))] outline-none focus:ring-2 focus:ring-[rgba(230,164,180,0.35)]"
            >
              {allConcerns.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All concerns" : c}
                </option>
              ))}
            </select>

            <button
              onClick={reset}
              type="button"
              className="rounded-xl px-4 py-3 border border-[rgba(var(--border))] hover:bg-[rgba(230,164,180,0.08)] transition bg-[var(--surface)]"
            >
              Reset filters
            </button>
          </div>

          <div className="text-sm text-[var(--muted)]">
            Showing <span className="font-semibold text-[var(--text)]">{filtered.length}</span> of{" "}
            {products.length}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p) => {
          const cover = p.images?.[0];
          const lifestyle = p.images?.[1];

          return (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className="group rounded-3xl border border-[rgba(var(--border))] bg-[var(--surface)] p-4 hover:shadow-lg transition overflow-hidden"
            >
              {/* Top images */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  {cover ? (
                    <img
                      src={cover}
                      alt={`${p.name} product`}
                      className="h-full w-full object-cover group-hover:scale-[1.02] transition"
                    />
                  ) : (
                    <div className="h-full w-full grid place-items-center text-xs text-gray-400">
                      No image
                    </div>
                  )}
                </div>

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  {lifestyle ? (
                    <img
                      src={lifestyle}
                      alt={`${p.name} lifestyle`}
                      className="h-full w-full object-cover group-hover:scale-[1.02] transition"
                    />
                  ) : (
                    <div className="h-full w-full grid place-items-center text-xs text-gray-400">
                      No image
                    </div>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="px-1 pb-2">
                <div className="text-sm text-[var(--muted)] mb-1 flex items-center justify-between gap-3">
                  <span>{p.brand}</span>

                  {/* show real price + budget once */}
                  {/* <span className="text-xs rounded-full border border-[rgba(var(--border))] px-2 py-1">
                    ${p.price} {p.currency ?? "CAD"} • {p.budget}
                  </span> */}

                  <span className="text-xs rounded-full border border-[rgba(var(--border))] px-2 py-1 text-[var(--muted)]">
                 {p.budget} • Check price on Amazon
                  </span>

                </div>

                <h2 className="text-lg font-semibold leading-snug mb-2">{p.name}</h2>

                {p.tag && (
                  <div className="inline-flex text-xs rounded-full px-3 py-1 bg-[rgba(230,164,180,0.18)] text-[var(--text)] mb-3">
                    {p.tag}
                  </div>
                )}

                <p className="text-[var(--muted)] text-sm line-clamp-2 mb-3">{p.description}</p>

                {/* concerns chips (not price) */}
                <div className="flex flex-wrap gap-2">
                  {p.concerns.slice(0, 4).map((c) => (
                    <span
                      key={c}
                      className="text-xs border border-[rgba(var(--border))] rounded-full px-3 py-1"
                    >
                      {c.replaceAll("-", " ")}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 text-[var(--muted)]">
          No results. Try removing a filter or changing your search.
        </div>
      )}
    </main>
  );
}

