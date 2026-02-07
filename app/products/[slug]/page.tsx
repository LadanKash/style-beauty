// import Link from "next/link";
// import { products } from "@/app/data/products";

// export default function ProductPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   const product = products.find((p) => p.slug === slug);

//   if (!product) {
//     return (
//       <main className="min-h-screen bg-[var(--background)] text-[var(--text)] p-10">
//         <h1 className="text-2xl font-bold">Product not found</h1>
//         <Link className="underline mt-4 inline-block" href="/products">
//           Back to products
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[var(--background)] text-[var(--text)] p-10">
//       <Link className="underline" href="/products">
//         ← Back to products
//       </Link>

//       <div className="mt-6 flex flex-col gap-2">
//         <h1 className="text-3xl font-bold">{product.name}</h1>

//         <div className="text-sm text-[var(--muted)] flex flex-wrap items-center gap-2">
//           <span>{product.brand}</span>
//           <span>•</span>
//           <span>{product.budget}</span>

//           {typeof product.price !== "undefined" && (
//             <>
//               <span>•</span>
//               <span className="rounded-full border border-[rgba(var(--border))] px-2 py-1 text-xs">
//                 ${product.price} {product.currency ?? "CAD"}
//               </span>
//             </>
//           )}
//         </div>

//         {product.tag && (
//           <div className="inline-flex w-fit text-xs rounded-full px-3 py-1 bg-[rgba(230,164,180,0.18)] text-[var(--text)] mt-2">
//             {product.tag}
//           </div>
//         )}
//       </div>

//       {/* Images */}
//       {product.images?.length ? (
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {product.images.map((src, i) => (
//             <div
//               key={`${product.slug}-${i}`}
//               className="rounded-2xl overflow-hidden bg-gray-100 border border-[rgba(var(--border))]"
//             >
//               <img
//                 src={src}
//                 alt={`${product.name} image ${i + 1}`}
//                 className="w-full h-auto object-cover"
//                 loading={i === 0 ? "eager" : "lazy"}
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="mt-6 rounded-2xl border border-[rgba(var(--border))] bg-[var(--surface)] p-6 text-[var(--muted)]">
//           No images available.
//         </div>
//       )}

//       {/* Description */}
//       <p className="mt-6 text-[var(--muted)] leading-relaxed">
//         {product.description}
//       </p>

//       {/* Concerns */}
//       {product.concerns?.length ? (
//         <div className="mt-6 flex flex-wrap gap-2">
//           {product.concerns.map((c) => (
//             <span
//               key={`${product.slug}-${c}`}
//               className="text-xs border border-[rgba(var(--border))] rounded-full px-3 py-1"
//             >
//               {c.replaceAll("-", " ")}
//             </span>
//           ))}
//         </div>
//       ) : null}

//       {/* CTA */}
//       {product.affiliateUrl ? (
//         <a
//           href={product.affiliateUrl}
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex mt-8 rounded-full px-5 py-3 bg-black text-white hover:opacity-90 transition"
//         >
//           Shop now
//         </a>
//       ) : (
//         <div className="mt-8 text-sm text-[var(--muted)]">
//           Link coming soon.
//         </div>
//       )}
//     </main>
//   );
// }

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


// import Link from "next/link"; 
// import { products } from "@/app/data/products";

//  export default async function ProductPage({ params, }: 
//   { params: Promise<{ slug: string }>; }) 
//   { const { slug } = await params; const product = products.find((p) => 
//     p.slug === slug); if (!product) { return ( <main className="min-h-screen p-10"> <h1 className="text-2xl font-bold">Product not found</h1>
//      <Link className="underline" href="/products"> Back to products </Link> 
//      </main> ); } return ( <main className="min-h-screen p-10"> 
//       <Link className="underline" href="/products"> ← Back to products </Link>
//        <h1 className="text-3xl font-bold mt-6">{product.name}</h1> 
//        <p className="text-gray-600">{product.brand} • {product.budget}</p>
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"> 
//           {product.images?.map((src, i) => ( <div key={i} className="rounded-2xl overflow-hidden bg-gray-100 border">
//              <img src={src} alt={${product.name} ${i + 1}} className="w-full h-auto object-cover" /> 
//              </div> ))} </div>
//               <p className="mt-6 text-gray-700">{product.description}</p> 
//               <a href={product.affiliateUrl} target="_blank" rel="noreferrer" 
//               className="inline-flex mt-6 rounded-full px-5 py-3 bg-black text-white hover:opacity-90 transition" > Shop now </a>
//                </main> ); }





