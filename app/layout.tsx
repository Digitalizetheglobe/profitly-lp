import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Proftly | Connect with SEBI-Registered Financial Advisors",
    template: "%s | Proftly",
  },
  description:
    "Book consultations with SEBI-registered financial advisors, plan investment goals, and grow your portfolio with expert guidance on Proftly.",
  metadataBase: new URL("https://proftly.in"),
  openGraph: {
    title: "Proftly | Connect with SEBI-Registered Financial Advisors",
    description:
      "Book consultations with SEBI-registered financial advisors, plan investment goals, and grow your portfolio with expert guidance.",
    url: "https://proftly.in",
    siteName: "Proftly",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
