import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { PageTransition } from "@/components/ui/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/components/seo/schemas";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://spanoindustry.com'),
  title: {
    default: "SPANO Industry | Industrial Racking & Storage Solutions",
    template: "%s | SPANO Industry",
  },
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SPANO Industry | Industrial Racking & Storage Solutions",
    description:
      "30 years of expertise manufacturing heavy duty warehouse storage racks, industrial shelving, and storage cupboards for factories, warehouses, and institutions across India.",
    url: "https://spanoindustry.com",
    siteName: "SPANO Industry",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPANO Industry | Industrial Racking & Storage Solutions",
    description: "30 years of expertise manufacturing heavy duty warehouse storage racks and retail shelving.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <JsonLd data={organizationSchema} />
        <ScrollProgressBar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
