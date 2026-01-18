// import Button from "@/app/components/ui/Button";
// import Badge from "@/app/components/ui/Badge";
// import Link from "next/link";

// export default function QuizPage() {
//   return (
//     <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
//       <div className="mx-auto max-w-6xl px-6 py-12">
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <Badge tone="accent">Coming next</Badge>
//             <h1 className="text-3xl font-bold mt-2">Find my routine</h1>
//             <p className="text-gray-700 mt-2">
//               Next step: we’ll build a short quiz that recommends the best products for you.
//             </p>
//           </div>

//           <Link className="text-sm text-gray-600 hover:text-black" href="/products">
//             Browse products →
//           </Link>
//         </div>

//         <div className="bg-[var(--surface)] border border-[rgba(var(--border))] rounded-3xl p-8 shadow-sm max-w-2xl">
//           <p className="text-gray-700 mb-6">
//             For now, you can browse products while we build the quiz logic.
//           </p>
//           <Button href="/products" variant="accent" size="lg">
//             Browse products
//           </Button>
//         </div>
//       </div>
//     </main>
//   );
// }

//quiz 1

// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";
// import { products, type Product } from "@/app/data/products";
// import Button from "@/app/components/ui/Button";
// import Badge from "@/app/components/ui/Badge";

// type QuizCategory = "skincare" | "haircare";
// type QuizBudget = Product["budget"] | "any";

// type QuizState = {
//   category?: QuizCategory;
//   concern?: string;
//   budget?: QuizBudget;
// };

// export default function QuizPage() {
//   const [step, setStep] = useState(1);
//   const [quiz, setQuiz] = useState<QuizState>({});

//   const concernsForCategory = useMemo(() => {
//     if (!quiz.category) return [];
//     const set = new Set<string>();
//     products
//       .filter((p) => p.category === quiz.category)
//       .forEach((p) => p.concerns.forEach((c) => set.add(c)));
//     return Array.from(set).sort((a, b) => a.localeCompare(b));
//   }, [quiz.category]);

//   const matches = useMemo(() => {
//     if (!quiz.category || !quiz.concern || !quiz.budget) return [];
//     return products.filter((p) => {
//       return (
//         p.category === quiz.category &&
//         p.budget === quiz.budget &&
//         p.concerns.includes(quiz.concern!)
//       );
//     });
//   }, [quiz.category, quiz.concern, quiz.budget]);

//   const reset = () => {
//     setQuiz({});
//     setStep(1);
//   };

//   const Chip = ({
//     active,
//     children,
//     onClick,
//   }: {
//     active: boolean;
//     children: React.ReactNode;
//     onClick: () => void;
//   }) => (
//     <button
//       type="button"
//       onClick={onClick}
//       className={[
//         "rounded-full px-4 py-2 text-sm transition border focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(230,164,180,0.35)]",
//         active
//           ? "bg-[rgb(var(--accent))] text-white border-transparent"
//           : "bg-[var(--surface)] text-[var(--text)] border-[rgba(var(--border))] hover:bg-[rgba(230,164,180,0.10)]",
//       ].join(" ")}
//     >
//       {children}
//     </button>
//   );

//   return (
//     <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
//       <div className="mx-auto max-w-6xl px-6 py-12">
//         <div className="flex items-start justify-between gap-6 mb-10">
//           <div>
//             <Badge tone="accent">Quiz</Badge>
//             <h1 className="text-3xl font-bold mt-2">Find my routine</h1>
//             <p className="text-[var(--muted)] mt-2 max-w-2xl">
//               Answer 3 quick questions — we’ll recommend products that match your needs and budget.
//             </p>
//           </div>

//           <Link className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition" href="/products">
//             Browse products →
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* Left: quiz card */}
//           <div className="lg:col-span-7">
//             <div className="bg-[var(--surface)] border border-[rgba(var(--border))] rounded-3xl p-8 shadow-sm">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="text-sm text-[var(--muted)]">Step {step} of 3</div>
//                 <button
//                   type="button"
//                   onClick={reset}
//                   className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition"
//                 >
//                   Reset
//                 </button>
//               </div>

//               {/* Step 1 */}
//               {step === 1 && (
//                 <>
//                   <h2 className="text-xl font-semibold mb-2">What are you shopping for?</h2>
//                   <p className="text-[var(--muted)] mb-6">Choose a category.</p>

//                   <div className="flex flex-wrap gap-3">
//                     <Chip
//                       active={quiz.category === "skincare"}
//                       onClick={() => setQuiz((q) => ({ ...q, category: "skincare", concern: undefined }))}
//                     >
//                       Skincare
//                     </Chip>
//                     <Chip
//                       active={quiz.category === "haircare"}
//                       onClick={() => setQuiz((q) => ({ ...q, category: "haircare", concern: undefined }))}
//                     >
//                       Haircare
//                     </Chip>
//                   </div>

//                   <div className="mt-8">
//                     <Button
//                       variant="accent"
//                       size="lg"
//                       onClick={() => setStep(2)}
//                       disabled={!quiz.category}
//                     >
//                       Continue
//                     </Button>
//                   </div>
//                 </>
//               )}

//               {/* Step 2 */}
//               {step === 2 && (
//                 <>
//                   <h2 className="text-xl font-semibold mb-2">What’s your main concern?</h2>
//                   <p className="text-[var(--muted)] mb-6">
//                     Pick one. (We’ll keep it simple for now.)
//                   </p>

//                   <div className="flex flex-wrap gap-2">
//                     {concernsForCategory.map((c) => (
//                       <Chip
//                         key={c}
//                         active={quiz.concern === c}
//                         onClick={() => setQuiz((q) => ({ ...q, concern: c }))}
//                       >
//                         {c.replaceAll("-", " ")}
//                       </Chip>
//                     ))}
//                   </div>

//                   <div className="mt-8 flex gap-3">
//                     <Button variant="ghost" onClick={() => setStep(1)}>
//                       Back
//                     </Button>
//                     <Button
//                       variant="accent"
//                       size="lg"
//                       onClick={() => setStep(3)}
//                       disabled={!quiz.concern}
//                     >
//                       Continue
//                     </Button>
//                   </div>
//                 </>
//               )}

//               {/* Step 3 */}
//               {step === 3 && (
//                 <>
//                   <h2 className="text-xl font-semibold mb-2">What’s your budget?</h2>
//                   <p className="text-[var(--muted)] mb-6">Choose a price range.</p>

//                   <div className="flex flex-wrap gap-3">
//                     {(["$", "$$", "$$$"] as QuizBudget[]).map((b) => (
//                       <Chip
//                         key={b}
//                         active={quiz.budget === b}
//                         onClick={() => setQuiz((q) => ({ ...q, budget: b }))}
//                       >
//                         {b}
//                       </Chip>
//                     ))}
//                   </div>

//                   <div className="mt-8 flex gap-3">
//                     <Button variant="ghost" onClick={() => setStep(2)}>
//                       Back
//                     </Button>
//                     <Button variant="accent" size="lg" onClick={() => setStep(4)} disabled={!quiz.budget}>
//                       See results
//                     </Button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Right: results */}
//           <div className="lg:col-span-5">
//             <div className="bg-[var(--surface)] border border-[rgba(var(--border))] rounded-3xl p-8 shadow-sm">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="font-semibold">Results</div>
//                 <Badge tone="accent">{matches.length}</Badge>
//               </div>

//               {step !== 4 ? (
//                 <p className="text-[var(--muted)]">
//                   Complete the quiz to see your matches here.
//                 </p>
//               ) : matches.length === 0 ? (
//                 <div>
//                   <p className="text-[var(--muted)] mb-4">
//                     No exact matches yet — your catalog is still small. Try a different budget or concern.
//                   </p>
//                   <div className="flex gap-3">
//                     <Button variant="ghost" onClick={() => setStep(2)}>
//                       Change concern
//                     </Button>
//                     <Button href="/products" variant="accent">
//                       Browse all
//                     </Button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {matches.slice(0, 3).map((p) => (
//                     <Link
//                       key={p.id}
//                       href={`/products/${p.slug}`}
//                       className="block rounded-2xl border border-[rgba(var(--border))] p-4 hover:bg-[rgba(230,164,180,0.06)] transition"
//                     >
//                       <div className="text-sm text-[var(--muted)] mb-1">
//                         {p.brand} • {p.budget}
//                       </div>
//                       <div className="font-semibold">{p.name}</div>
//                       <div className="text-sm text-[var(--muted)] mt-1 line-clamp-2">
//                         {p.description}
//                       </div>
//                     </Link>
//                   ))}

//                   <div className="pt-2">
//                     <Button href="/products" variant="primary" className="w-full">
//                       See all products
//                     </Button>
//                   </div>
//                 </div>
//               )}

//               <div className="mt-6 text-xs text-[var(--muted)]">
//                 Affiliate disclosure: We may earn commission from some links.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


//quiz 2 with $$$ active


"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products, type Product } from "@/app/data/products";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";

type QuizCategory = Product["category"]; // ✅ supports skincare/haircare/bags/accessories/clothing
type QuizBudget = "any" | Product["budget"];

type QuizState = {
  category?: QuizCategory;
  concern?: string;
  budget?: QuizBudget;
};


export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [quiz, setQuiz] = useState<QuizState>({});

  const isAny = !quiz.budget || quiz.budget === "any";

  const concernsForCategory = useMemo(() => {
    if (!quiz.category) return [];
    const set = new Set<string>();

    products
      .filter((p) => p.category === quiz.category)
      .forEach((p) => p.concerns.forEach((c) => set.add(c)));

    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [quiz.category]);

  // Budgets that exist for the chosen category + concern
  const availableBudgets = useMemo(() => {
    if (!quiz.category || !quiz.concern) return new Set<Product["budget"]>();

    const set = new Set<Product["budget"]>();
    products
      .filter((p) => p.category === quiz.category && p.concerns.includes(quiz.concern!))
      .forEach((p) => set.add(p.budget));

    return set;
  }, [quiz.category, quiz.concern]);

  // Matches (budget filters only when user picked $/$$/$$$; Any means no budget filtering)
  const matches = useMemo(() => {
    if (!quiz.category || !quiz.concern) return [];

    return products.filter((p) => {
      const okCategory = p.category === quiz.category;
      const okConcern = p.concerns.includes(quiz.concern!);
      const okBudget = isAny ? true : p.budget === quiz.budget;

      return okCategory && okConcern && okBudget;
    });
  }, [quiz.category, quiz.concern, quiz.budget, isAny]);

  const reset = () => {
    setQuiz({});
    setStep(1);
  };

  const Chip = ({
    active,
    disabled,
    children,
    onClick,
  }: {
    active: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "rounded-full px-4 py-2 text-sm transition border",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(230,164,180,0.35)]",
        disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "",
        active
          ? "bg-[rgb(var(--accent))] text-white border-transparent"
          : "bg-[var(--surface)] text-[var(--text)] border-[rgba(var(--border))] hover:bg-[rgba(230,164,180,0.10)]",
      ].join(" ")}
    >
      {children}
    </button>
  );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <Badge tone="accent">Quiz</Badge>
            <h1 className="text-3xl font-bold mt-2">Find my routine</h1>
            <p className="text-[var(--muted)] mt-2 max-w-2xl">
              Answer 3 quick questions — we’ll recommend products that match your needs and budget.
            </p>
          </div>

          <Link
            className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition"
            href="/products"
          >
            Browse products →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: quiz card */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--surface)] border border-[rgba(var(--border))] rounded-3xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-[var(--muted)]">Step {step} of 3</div>
                <button
                  type="button"
                  onClick={reset}
                  className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition"
                >
                  Reset
                </button>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <>
                  <h2 className="text-xl font-semibold mb-2">What are you shopping for?</h2>
                  <p className="text-[var(--muted)] mb-6">Choose a category.</p>

                  <div className="flex flex-wrap gap-3">
                    <Chip
                      active={quiz.category === "skincare"}
                      onClick={() =>
                        setQuiz({
                          category: "skincare",
                          concern: undefined,
                          budget: "any",
                        })
                      }
                    >
                      Skincare
                    </Chip>

                    <Chip
                      active={quiz.category === "haircare"}
                      onClick={() =>
                        setQuiz({
                          category: "haircare",
                          concern: undefined,
                          budget: "any",
                        })
                      }
                    >
                      Haircare
                    </Chip>

                        <Chip
                      active={quiz.category === "clothing"}
                      onClick={() =>
                        setQuiz({
                          category: "clothing",
                          concern: undefined,
                          budget: "any",
                        })
                      }
                    >
                      Clothing
                    </Chip>

                    <Chip
  active={quiz.category === "bags"}
  onClick={() =>
    setQuiz({
      category: "bags",
      concern: undefined,
      budget: "any",
    })
                 }
                  >
                  Bags
                  </Chip>

                   <Chip
                    active={quiz.category === "accessories"}
                   onClick={() =>
                   setQuiz({
                   category: "accessories",
                     concern: undefined,
                   budget: "any",
                  })
                 }
                  >
                Accessories
                 </Chip>

                  </div>

                  <div className="mt-8">
                    <Button
                      variant="accent"
                      size="lg"
                      onClick={() => setStep(2)}
                      disabled={!quiz.category}
                    >
                      Continue
                    </Button>
                  </div>
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <>
                  <h2 className="text-xl font-semibold mb-2">What’s your main concern?</h2>
                  <p className="text-[var(--muted)] mb-6">Pick one. (We’ll keep it simple for now.)</p>

                  <div className="flex flex-wrap gap-2">
                    {concernsForCategory.map((c) => (
                      <Chip
                        key={c}
                        active={quiz.concern === c}
                        onClick={() =>
                          setQuiz((q) => ({
                            ...q,
                            concern: c,
                            budget: "any", // reset budget when concern changes
                          }))
                        }
                      >
                        {c.replaceAll("-", " ")}
                      </Chip>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Button variant="ghost" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button
                      variant="accent"
                      size="lg"
                      onClick={() => setStep(3)}
                      disabled={!quiz.concern}
                    >
                      Continue
                    </Button>
                  </div>
                </>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <>
                  <h2 className="text-xl font-semibold mb-2">What’s your budget?</h2>
                  <p className="text-[var(--muted)] mb-6">Choose a price range.</p>

                  <div className="flex flex-wrap gap-3">
                    <Chip active={isAny} onClick={() => setQuiz((q) => ({ ...q, budget: "any" }))}>
                      Any
                    </Chip>

                    {(["$", "$$", "$$$"] as Product["budget"][]).map((b) => {
                      const disabled =
                        !!quiz.category &&
                        !!quiz.concern &&
                        !availableBudgets.has(b);

                      return (
                        <Chip
                          key={b}
                          active={!isAny && quiz.budget === b}
                          disabled={disabled}
                          onClick={() => setQuiz((q) => ({ ...q, budget: b }))}
                        >
                          {b}
                        </Chip>
                      );
                    })}
                  </div>

                  <div className="mt-3 text-sm text-[var(--muted)]">
                    Tip: choose <b>$ / $$ / $$$</b> to filter by price, or <b>Any</b> to see all.
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Button variant="ghost" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button
                      variant="accent"
                      size="lg"
                      onClick={() => setStep(4)}
                      disabled={!quiz.category || !quiz.concern}
                    >
                      See results
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right: results */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--surface)] border border-[rgba(var(--border))] rounded-3xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="font-semibold">Results</div>
                <Badge tone="accent">{step === 4 ? matches.length : 0}</Badge>
              </div>

              {step !== 4 ? (
                <p className="text-[var(--muted)]">Complete the quiz to see your matches here.</p>
              ) : matches.length === 0 ? (
                <div>
                  <p className="text-[var(--muted)] mb-4">
                    No exact matches yet — your catalog is still small. Try a different budget or concern.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="ghost" onClick={() => setStep(2)}>
                      Change concern
                    </Button>
                    <Button href="/products" variant="accent">
                      Browse all
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {matches.slice(0, 3).map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      className="block rounded-2xl border border-[rgba(var(--border))] p-4 hover:bg-[rgba(230,164,180,0.06)] transition"
                    >
                      <div className="text-sm text-[var(--muted)] mb-1">
                        {p.brand} • {p.budget}
                      </div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-sm text-[var(--muted)] mt-1 line-clamp-2">
                        {p.description}
                      </div>
                    </Link>
                  ))}

                  <div className="pt-2">
                    <Button href="/products" variant="primary" className="w-full">
                      See all products
                    </Button>
                  </div>
                </div>
              )}

              <div className="mt-6 text-xs text-[var(--muted)]">
                Affiliate disclosure: We may earn commission from some links.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
