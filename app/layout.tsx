import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DUPLOX - Focus on Profits, We'll Handle Presence",
  description: "Next-gen creative and media agency. We blend strategy, storytelling, and smart design to create digital ecosystems that convert. Social media, paid ads, and Shopify expertise.",
  keywords: ["creative agency", "media agency", "social media marketing", "paid ads", "shopify", "digital marketing", "content creation", "brand building"],
  authors: [{ name: "DUPLOX" }],
  openGraph: {
    title: "DUPLOX - Focus on Profits, We'll Handle Presence",
    description: "Next-gen creative and media agency. 100K+ people reached monthly. 15+ brands elevated.",
    url: "https://duplox.in",
    siteName: "DUPLOX",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DUPLOX - Focus on Profits, We'll Handle Presence",
    description: "Next-gen creative and media agency. We create digital ecosystems that convert.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
