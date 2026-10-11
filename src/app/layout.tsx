import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nairobi Search Studio | SEO Consultant in Kenya",
  description:
    "Grow organic traffic and search visibility with technical SEO audits, content strategy, and local SEO for businesses in Nairobi and across Kenya.",
  openGraph: {
    title: "Nairobi Search Studio | SEO Consultant in Kenya",
    description:
      "Practical technical SEO, content strategy, and local search optimisation for ambitious Kenyan businesses.",
    siteName: "Nairobi Search Studio",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nairobi Search Studio | SEO Consultant in Kenya",
    description:
      "Grow organic traffic and search visibility with practical SEO built for Kenyan businesses.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-KE"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
