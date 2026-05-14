import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://axlspec.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AXL — The Agentic Experience Layer specification",
    template: "%s · AXL",
  },
  description:
    "The AXL Reference is an open specification for the Agentic Experience Layer — the personalization infrastructure that replaces the CDP-plus-A/B-plus-journey stack. Published by axlspec.org under CC BY 4.0.",
  openGraph: {
    title: "AXL — The Agentic Experience Layer specification",
    description:
      "An open specification defining the Agentic Experience Layer category. Published under CC BY 4.0.",
    url: SITE_URL,
    siteName: "AXL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXL — The Agentic Experience Layer specification",
    description:
      "An open specification defining the Agentic Experience Layer category.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
