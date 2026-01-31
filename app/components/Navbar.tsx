// //app/components/Navbar.tsx
// import Link from "next/link";
// import Button from "@/app/components/ui/Button";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 bg-[rgba(250,247,244,0.85)] backdrop-blur border-b border-[rgba(var(--border))]">

//       <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
//         <Link href="/" className="flex items-center gap-2">
//          <div className="h-9 w-9 rounded-xl bg-[rgb(var(--accent))] text-white grid place-items-center font-semibold">
//   SB
// </div>

//           <div className="leading-tight">
//             <div className="font-semibold">Style & Beauty</div>
//             <div className="text-xs text-gray-500">Trusted picks • fast</div>
//           </div>
//         </Link>

//         <nav className="flex items-center gap-6 text-sm">
//           <Link className="text-[var(--muted)] hover:text-[var(--text)] transition"
//            href="/products">
//             Products
//           </Link>
//           <Link className="text-[var(--muted)] hover:text-[var(--text)] transition"
//            href="/quiz">
//             Find my routine
//           </Link>
//       <Button href="/products" variant="accent" className="shadow-md">
//   Browse
// </Button>

// <Link
//   href="/disclosure"
//   className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition"
// >
//   Disclosure
// </Link>

// <Link
//   href="/privacy"
//   className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition"
// >
//   Privacy
// </Link>


//         </nav>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import Button from "@/app/components/ui/Button";

const links = [
  { href: "/products", label: "Products" },
  { href: "/quiz", label: "Find my routine" },
  { href: "/products", label: "Browse", variant: "accent" }, // 👈
  { href: "/disclosure", label: "Disclosure", size: "small" },
  { href: "/privacy", label: "Privacy", size: "small" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(var(--border))] bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-[rgb(var(--accent-soft))] flex items-center justify-center font-bold">
            SB
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Style &amp; Beauty</div>
            <div className="text-xs text-[var(--muted)]">Trusted picks • fast</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              className="text-[var(--muted)] hover:text-[var(--text)] transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden rounded-xl border border-[rgba(var(--border))] px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[rgba(var(--border))] bg-[var(--background)]">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:bg-[rgba(var(--border))] transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
