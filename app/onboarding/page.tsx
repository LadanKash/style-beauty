//app/onboarding/page.tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";
import Link from "next/link";

type Step = {
  title: string;
  subtitle: string;
  bullets: { title: string; desc: string }[];
};

export default function OnboardingPage() {
  const router = useRouter();

  const steps: Step[] = useMemo(
    () => [
      {
        title: "Welcome to Style & Beauty",
        subtitle: "Your personal beauty shopper — fast, simple, trusted.",
        bullets: [
          { title: "Curated", desc: "Only the best picks — no endless scrolling." },
          { title: "Personal", desc: "Matched to your skin/hair + your budget." },
          { title: "Quick", desc: "Get a routine in seconds and shop in one tap." },
        ],
      },
      {
        title: "We help you choose with confidence",
        subtitle: "No fake reviews. No overwhelm. Just clear recommendations.",
        bullets: [
          { title: "Busy-friendly", desc: "Perfect if you don’t have time to research." },
          { title: "Trust-first", desc: "We explain why each product is recommended." },
          { title: "Budget-smart", desc: "We show $ / $$ / $$$ options — you decide." },
        ],
      },
      {
        title: "Transparent affiliate links",
        subtitle: "You never pay more — we may earn a commission if you buy.",
        bullets: [
          { title: "No extra cost", desc: "Same price for you, always." },
          { title: "Trusted retailers", desc: "We link to official stores when possible." },
          { title: "Your routine", desc: "Save favorites and come back anytime." },
        ],
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    try {
      const done = localStorage.getItem("sb_onboarded") === "true";
      if (done) router.replace("/products");
    } catch {}
  }, [router]);

  const step = steps[index];
  const isLast = index === steps.length - 1;

  const finish = () => {
    try {
      localStorage.setItem("sb_onboarded", "true");
    } catch {}
    // router.push("/quiz");
    router.push("/products");

  };

  const skip = () => {
    try {
      localStorage.setItem("sb_onboarded", "true");
    } catch {}
    router.push("/products");
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)] p-10">

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">

            ← Back
          </Link>

          <button className="text-sm text-gray-600 hover:text-black" onClick={skip}>
            Skip
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="bg-[var(--surface)] border border-[rgba(var(--border))] rounded-3xl p-8 shadow-sm">

            <div className="flex items-center gap-2 mb-4">
              <Badge tone="accent">Style & Beauty</Badge>
              <span className="text-sm text-gray-600">
                Step {index + 1} of {steps.length}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-3">{step.title}</h1>
            <p className="text-lg text-gray-700 mb-8">{step.subtitle}</p>

            <div className="space-y-4">
              {step.bullets.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent))]" />
                  <div>
                    <div className="font-semibold">{b.title}</div>
                    <div className="text-gray-600 text-sm">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition",
                      i === index ? "bg-[rgb(var(--accent))]" : "bg-[rgba(var(--border))]"
,
                    ].join(" ")}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                {index > 0 && (
                  <Button variant="ghost" onClick={() => setIndex((v) => v - 1)}>
                    Back
                  </Button>
                )}

                {!isLast ? (
                  <Button variant="accent" onClick={() => setIndex((v) => v + 1)}>
                    Continue
                  </Button>
                ) : (
                  <Button variant="accent" onClick={finish} size="lg">
                    Find my routine
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[rgb(var(--accent-soft))] blur-2xl opacity-60" />

            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm overflow-hidden">
              {/* Image (no border, good crop) */}
              <div className="rounded-2xl overflow-hidden shadow-sm mb-6">
                <img
                  src="/onboarding/hero.png"
                  alt="Style & Beauty onboarding"
                  className="block w-full h-[260px] sm:h-[320px] object-cover"
                />
              </div>

              <div className="text-sm text-gray-600 mb-3">Today’s vibe</div>
              <h2 className="text-2xl font-semibold mb-2">Fast picks. Real results.</h2>
              <p className="text-gray-700 mb-6">
                Tell us your skin/hair goal and budget — we’ll recommend the best match.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-gray-200 p-4">
                  <div className="text-xs text-gray-500 mb-2">Skincare</div>
                  <div className="font-semibold">Hydration + Glow</div>
                  <div className="mt-3">
                    <Badge tone="accent">Trusted</Badge>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 p-4">
                  <div className="text-xs text-gray-500 mb-2">Haircare</div>
                  <div className="font-semibold">Frizz + Shine</div>
                  <div className="mt-3">
                    <Badge tone="accent">$ / $$ / $$$</Badge>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 p-4 col-span-2">
                  <div className="text-xs text-gray-500 mb-2">One-tap shopping</div>
                  <div className="font-semibold mb-3">Buy from trusted retailers</div>
                  <Button href="/products" variant="primary" className="rounded-xl">
                    Browse products
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-xs text-gray-500">
                Affiliate disclosure: We may earn commission from some links.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

