//page.tsx
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <Badge tone="accent">Trusted picks • fast</Badge>

            <h1 className="text-5xl font-bold mt-4 mb-4">Style &amp; Beauty</h1>

            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Your personal beauty shopper.
              Discover skincare & haircare that truly fits your needs — curated with clarity, trust, and any budget in mind.

            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/onboarding" variant="accent" size="lg">
                Get started
              </Button>

              <Link
                href="/products"
                className="
  rounded-full px-5 py-3
  border border-[rgba(var(--border))]
  text-[var(--text)]
  hover:bg-[rgba(230,164,180,0.10)]
  transition
"

              >
                Browse products
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] overflow-hidden shadow-sm">
              <img
                src="/onboarding/hero.png"
                alt="Style & Beauty"
                className="block w-full h-[360px] lg:h-[460px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



