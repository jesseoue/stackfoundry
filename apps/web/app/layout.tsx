import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StackFoundry",
  description: "Install production SaaS modules as editable source code.",
  openGraph: {
    title: "StackFoundry",
    description: "Source registry for production SaaS modules.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
