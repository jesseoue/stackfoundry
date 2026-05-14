import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stackfoundry.dev/";
const title = "StackFoundry";
const description = "A source registry for production SaaS modules.";
const ogImage = "/opengraph-image";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${title}`,
  },
  description,
  applicationName: title,
  keywords: [
    "SaaS",
    "Next.js",
    "Drizzle",
    "registry",
    "source registry",
    "registry blocks",
    "developer tools",
    "source code",
    "SaaS modules",
    "Stripe",
    "Clerk",
    "Cloudflare",
    "Vercel",
  ],
  authors: [{ name: "Jesse Ouellette", url: "https://github.com/jesseoue" }],
  creator: "Jesse Ouellette",
  publisher: "StackFoundry",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "StackFoundry source registry for production SaaS modules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable}`} lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
