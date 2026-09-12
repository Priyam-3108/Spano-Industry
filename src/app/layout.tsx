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

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = rawBasePath ? (rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`) : "";

export const metadata: Metadata = {
  title: "SPANO Industry | Industrial Racking & Storage Solutions",
  description:
    "SPANO Industry has 30 years of expertise manufacturing heavy duty warehouse storage racks, industrial slotted angle shelving, and locker, library & storewell cupboards for factories, warehouses, and institutions, plus supermarket and retail racking across India.",
  icons: {
    icon: `${basePath}/icon.png`,
    apple: `${basePath}/apple-icon.png`,
  },
  keywords: [
    "heavy duty storage racks",
    "industrial racking manufacturer",
    "slotted angle racks",
    "locker cupboard manufacturer",
    "library cupboard",
    "storewell cupboard",
    "warehouse pallet racking",
    "supermarket display racks",
    "retail display stands",
    "custom retail fixtures",
    "racking manufacturer Surat India",
  ],
  openGraph: {
    title: "SPANO Industry | Industrial Racking & Storage Solutions",
    description:
      "30 years of expertise manufacturing heavy duty warehouse storage racks, industrial shelving, and storage cupboards for factories, warehouses, and institutions across India.",
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
