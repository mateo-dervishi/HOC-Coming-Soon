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
      <body className="font-sans">{children}</body>
    </html>
  );
}
