import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.role}`,
  description:
    "Portfolio of a software engineer. Three years, twenty-plus shipped projects — web apps, dashboards and LLM systems that feel alive.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Three years, twenty-plus shipped projects — web apps, dashboards and LLM systems that feel alive.",
    type: "website",
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: site.location },
  sameAs: [site.githubUrl, site.linkedinUrl],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "LLM & AI Integration",
    "Data Engineering",
    "Web Performance",
  ],
};

export const viewport: Viewport = {
  themeColor: "#f7f5ef",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${fraunces.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
