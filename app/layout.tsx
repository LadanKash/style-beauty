
//2 with icon logo
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Style & Beauty",
  description:
    "Beauty, skincare, and style picks — curated just for you.",

  icons: {
    icon: "/icon.png", // uses your app/icon.png automatically
  },

  openGraph: {
    title: "Style & Beauty",
    description:
      "Beauty, skincare, and style picks — curated just for you.",
    images: ["/og.png"], // social preview image
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
  <Navbar />
  <main className="flex-1">{children}</main>

  <footer className="border-t py-8 text-sm text-center text-[var(--muted)]">
    <div className="space-x-4">
      <a href="/privacy" className="hover:underline">Privacy Policy</a>
      <span>|</span>
      <a href="/disclosure" className="hover:underline">Affiliate Disclosure</a>
      <span>|</span>
      <a href="/terms" className="hover:underline">Terms of Service</a>
    </div>
  </footer>
</body>

    </html>
  );
}
