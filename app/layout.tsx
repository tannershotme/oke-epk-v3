import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oke Okaro | Keynote Speaker & Strategic Advisor",
  description:
    "Book Oke Okaro for keynotes, fireside chats, and workshops on enterprise AI adoption, product strategy, and digital transformation. Proven impact at Reuters, Disney, Bloomberg, ESPN, Verizon, and Apple.",
  openGraph: {
    title: "Oke Okaro | Keynote Speaker & Strategic Advisor",
    description:
      "Keynotes, fireside chats, and workshops on enterprise AI adoption and product strategy.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oke Okaro | Keynote Speaker & Strategic Advisor",
    description:
      "Keynotes, fireside chats, and workshops on enterprise AI adoption and product strategy.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-black text-white font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
