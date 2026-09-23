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
  title: "MCybernix Solutions — Web, AI Automation & App Development",
  description:
    "From custom web and app development to AI-driven workflow automation, MCybernix Solutions helps forward-thinking companies work smarter and grow faster.",
  keywords: [
    "Web Development",
    "AI Automation",
    "App Development",
    "MCybernix Solutions",
    "Software Startup",
    "Digital Products",
  ],
  authors: [{ name: "MCybernix Solutions" }],
  openGraph: {
    title: "MCybernix Solutions — We Build, Automate, and Scale Your Next Digital Advantage",
    description:
      "From custom web and app development to AI-driven workflow automation, MCybernix Solutions helps forward-thinking companies work smarter and grow faster.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCybernix Solutions — We Build, Automate, and Scale Your Next Digital Advantage",
    description:
      "From custom web and app development to AI-driven workflow automation, MCybernix Solutions helps forward-thinking companies work smarter and grow faster.",
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
