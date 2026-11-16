import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/lib/resume-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Mahmudul Haque — Full-Stack Software & AI Engineer";
const description =
  "Full-Stack Software & AI Engineer with 5+ years of experience building scalable web and mobile applications with React, Next.js, React Native, Node.js and NestJS, now specialising in LLM-powered products: RAG pipelines, AI agents, LangChain and LangGraph.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title,
  description,
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "LangChain",
    "RAG",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.website,
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png" },
  themeColor: "#fafaf9",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.tagline,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref,
  url: profile.website,
  sameAs: [profile.github, profile.linkedin, profile.facebook],
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  knowsAbout: [
    "React.js",
    "Next.js",
    "React Native",
    "Node.js",
    "NestJS",
    "TypeScript",
    "LangChain",
    "LangGraph",
    "Retrieval-Augmented Generation",
    "AI Agents",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-stone-50 font-sans text-stone-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
