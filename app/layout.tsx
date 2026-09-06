import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Mcybernix Solutions — Web, AI Automation & App Development",
  description:
    "Mcybernix Solutions builds digital products, automates workflows with AI, and creates experiences that help startups and businesses grow faster.",
  keywords: [
    "Web Development",
    "AI Automation",
    "App Development",
    "Mcybernix Solutions",
    "Software Startup",
    "Digital Products",
  ],
  authors: [{ name: "Mcybernix Solutions" }],
  openGraph: {
    title: "Mcybernix Solutions — Work Smarter Together",
    description:
      "Web development, AI automation and app development for modern businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mcybernix Solutions — Work Smarter Together",
    description:
      "Web development, AI automation and app development for modern businesses.",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
