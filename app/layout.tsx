import type { Metadata, Viewport } from "next";
import { Fraunces, Lato } from "next/font/google";
import "./globals.css";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SleadsBadge from "@/components/SleadsBadge";
import { content } from "@/content";
import { seo, site } from "@/lib/site";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: seo.title, template: "%s | Hoveniersbedrijf Wentink" },
  description: seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const viewport: Viewport = { themeColor: "#008357" };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapeService",
  name: site.name,
  telephone: "+31547362825",
  email: site.email,
  areaServed: ["Markelo", "Diepenheim", "Goor", "Delden", "Hof van Twente"],
  slogan: site.tagline,
  foundingDate: "1986",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${lato.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}>
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-full flex-col pb-36 md:pb-0">
        <a href="#inhoud" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
          Naar de inhoud
        </a>
        <Header />
        <main id="inhoud" className="flex-1">{children}</main>
        <Footer />
        <BottomBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
