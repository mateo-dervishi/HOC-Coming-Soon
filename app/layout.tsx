import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
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
    <html lang="en" className={`${inter.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
