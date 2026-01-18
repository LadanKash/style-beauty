export default function DisclosurePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>

        <p className="text-[var(--muted)] mb-4">
          Style & Beauty is a curated shopping platform that recommends skincare,
          haircare, clothing, accessories, and beauty-related products.
        </p>

       <p className="text-[var(--muted)] mb-4">
          Some of the links on this website are affiliate links. This means that
          if you click on a product link and make a purchase, we may earn a small
          commission — at no extra cost to you.
        </p>

        <p className="text-[var(--muted)] mb-4">
          We only recommend products that we believe are high quality and useful.
          Affiliate partnerships do not influence our editorial decisions or the
          price you pay for any product.

        </p>

        <p className="text-[var(--muted)]">
          Prices, availability, and product details are provided by third-party
          retailers and may change at any time.
        </p>
      </div>
    </main>
  );
}
