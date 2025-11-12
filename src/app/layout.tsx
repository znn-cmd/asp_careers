import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Star Properties — Careers",
  description:
    "Join Alpha Star Properties in Dubai. Private. Intelligent. Iconic. Explore roles across our real estate collective.",
  metadataBase: new URL("https://www.alphastar.properties"),
  openGraph: {
    title: "Work in Dubai Real Estate — Alpha Star Properties",
    description:
      "We build trust for those who value silence. Discover careers at Alpha Star Properties.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} bg-brand-black text-brand-smoke antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
