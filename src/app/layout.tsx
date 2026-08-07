import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { PageTransition } from "@/components/ui/PageTransition";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPANO Industry | Retail Display & Storage Racking Solutions",
  description:
    "SPANO Industry has 30 years of expertise in manufacturing innovative, durable, and functional racking systems for supermarkets, departmental stores, and warehouses across India.",
  keywords: [
    "supermarket display racks",
    "retail display stands",
    "heavy duty storage racks",
    "slotted angle racks",
    "custom retail fixtures",
    "racking manufacturer Surat India",
  ],
  openGraph: {
    title: "SPANO Industry | Retail Display & Storage Racking Solutions",
    description:
      "30 years of expertise in manufacturing innovative racking systems for supermarkets, departmental stores, and warehouses.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body className="min-h-full antialiased">
        <ScrollProgressBar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
