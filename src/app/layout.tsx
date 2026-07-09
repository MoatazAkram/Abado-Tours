import type { Metadata } from "next";
import { Cinzel, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappFloatingButton from "@/components/layout/WhatsappFloatingButton";
import { siteConfig } from "@/lib/site-config";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Private Egypt Day Tours in Giza, Cairo, Alexandria & Fayoum`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
   verification: {
    google: "XAYNjSD-mah3AlbN3SEpA1DmdgYFJqoGuyyqfCuebzc",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Egypt tours",
    "Giza pyramids tour",
    "Cairo day tour",
    "Alexandria day trip",
    "Fayoum tour",
    "Sphinx tour",
    "private Egyptologist guide",
    "السياحة في مصر",
    "رحلات الاهرامات",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Private Egypt Day Tours`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/sphinx-pyramid.webp",
        width: 1200,
        height: 630,
        alt: "The Great Sphinx and the Pyramids of Giza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Private Egypt Day Tours`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Giza",
    addressCountry: "EG",
  },
  areaServed: ["Giza", "Cairo", "Alexandria", "Fayoum"],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${workSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-papyrus text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFloatingButton />
      </body>
    </html>
  );
}
