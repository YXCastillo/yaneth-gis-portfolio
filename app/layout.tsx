import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "./back-to-top";

export const metadata: Metadata = {
  title: "Yaneth Castillo, GISP | GIS Portfolio",
  description: "GIS analyst turning spatial questions, tangled records, and complex systems into clear, dependable GIS.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<BackToTop/></body>
    </html>
  );
}
