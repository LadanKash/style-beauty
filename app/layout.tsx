
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
