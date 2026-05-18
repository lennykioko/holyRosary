import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://holy-rosary-365.vercel.app";
const siteName = "Holy Rosary — A Devotion";
const siteDescription =
  "A simple, sacred place to grow in devotion to the Holy Rosary — the mysteries, scripture, guided videos, rosaries in song, and the 15 promises of Our Lady.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s — Holy Rosary`,
  },
  description: siteDescription,
  applicationName: "Holy Rosary Devotion",
  keywords: [
    "Holy Rosary",
    "Rosary",
    "Catholic prayer",
    "Mysteries of the Rosary",
    "Joyful Mysteries",
    "Sorrowful Mysteries",
    "Glorious Mysteries",
    "Luminous Mysteries",
    "15 Promises of the Rosary",
    "Marian devotion",
    "Our Lady of Africa",
  ],
  authors: [{ name: "Holy Rosary Devotion" }],
  category: "religion",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main id="main" className="flex-1">
            <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
              {children}
            </div>
          </main>
          <footer className="border-t border-border bg-surface-alt">
            <div className="mx-auto max-w-5xl px-5 sm:px-8 py-10 sm:py-12 text-center">
              <div aria-hidden="true" className="text-accent text-xl leading-none mb-3">
                ✠
              </div>
              <blockquote className="mx-auto max-w-2xl text-[clamp(1.25rem,1.6vw+0.75rem,1.625rem)] font-extrabold leading-snug tracking-tight text-text">
                <em>“Pray, hope, and don’t worry.”</em>
              </blockquote>
              <div className="mt-2 text-[13px] font-bold uppercase tracking-[0.14em] text-text-muted">
                — St. Padre Pio
              </div>
              <p className="mt-8 text-[11px] leading-relaxed text-text-muted max-w-2xl mx-auto">
                Scripture excerpts adapted from the New American Bible, Revised
                Edition (NABRE). Videos linked from their original publishers
                on YouTube. Sung rosary recordings by <strong>Donna</strong>.
              </p>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
