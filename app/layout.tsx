import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coming Soon | House of Clarence",
  description:
    "House of Clarence is arriving soon. Curated collections of luxury bathroom, kitchen, and interior finishing materials for discerning spaces.",
  openGraph: {
    title: "Coming Soon | House of Clarence",
    description:
      "Curated collections of luxury bathroom, kitchen, and interior finishing materials for discerning spaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon for light mode (black icon) */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-black-32.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-black-16.png"
          media="(prefers-color-scheme: light)"
        />
        {/* Favicon for dark mode (white icon) */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-white-32.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-white-16.png"
          media="(prefers-color-scheme: dark)"
        />
        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-light.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-dark.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
