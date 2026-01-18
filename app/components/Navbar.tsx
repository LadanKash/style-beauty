//app/components/Navbar.tsx
import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(250,247,244,0.85)] backdrop-blur border-b border-[rgba(var(--border))]">

      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
         <div className="h-9 w-9 rounded-xl bg-[rgb(var(--accent))] text-white grid place-items-center font-semibold">
  SB
</div>

          <div className="leading-tight">
            <div className="font-semibold">Style & Beauty</div>
            <div className="text-xs text-gray-500">Trusted picks • fast</div>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link className="text-[var(--muted)] hover:text-[var(--text)] transition"
           href="/products">
            Products
          </Link>
          <Link className="text-[var(--muted)] hover:text-[var(--text)] transition"
           href="/quiz">
            Find my routine
          </Link>
      <Button href="/products" variant="accent" className="shadow-md">
  Browse
</Button>

<Link
  href="/disclosure"
  className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition"
>
  Disclosure
</Link>

<Link
  href="/privacy"
  className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition"
>
  Privacy
</Link>


        </nav>
      </div>
    </header>
  );
}
