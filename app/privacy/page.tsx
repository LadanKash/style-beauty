export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-[var(--muted)] mb-4">
          Your privacy is important to us. This page explains how information is
          handled on Style & Beauty.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Information We Collect
       </h2>

      <p className="text-[var(--muted)] mb-4">
       We do not require users to create an account or submit personal information to browse this website.
      {/* </p>

      <p className="text-[var(--muted)] mb-4"> */}
        We do not currently collect analytics or tracking data about visitors to this
      website.
</p>


        <h2 className="text-xl font-semibold mt-8 mb-3">
          Affiliate Links & Third-Party Sites
        </h2>

        <p className="text-[var(--muted)] mb-4">
          When you click on an affiliate link, you will be redirected to a
          third-party retailer’s website. We are not responsible for the privacy
          practices or content of those websites.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Cookies
       </h2>

      <p className="text-[var(--muted)] mb-4">
       This website does not currently use cookies to track users or collect personal
       data. However, third-party services and affiliate partners linked from this
       website may use cookies or similar technologies in accordance with their own
       privacy policies.
      </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Contact
        </h2>

        <p className="text-[var(--muted)]">
          If you have any questions about this Privacy Policy, you can contact us
          through the website.
        </p>
      </div>
    </main>
  );
}
