import type { Metadata, Viewport } from "next";
import { SITE_URL, links } from "@/content/shared";
import type { Content } from "@/content/types";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFD3AE" },
    { media: "(prefers-color-scheme: dark)", color: "#2A1D57" },
  ],
};

/** Metadados da página inicial de cada idioma, com hreflang entre as duas versões. */
export function homeMetadata(content: Content): Metadata {
  const path = content.locale === "pt" ? "/" : "/en";
  return {
    metadataBase: new URL(SITE_URL),
    title: content.meta.title,
    description: content.meta.description,
    applicationName: "Maycon Pereira dos Santos",
    authors: [{ name: "Maycon Pereira dos Santos", url: SITE_URL }],
    alternates: {
      canonical: path,
      languages: { "pt-BR": "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      url: path,
      siteName: "Maycon Pereira dos Santos",
      title: content.meta.title,
      description: content.meta.description,
      locale: content.locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: content.locale === "pt" ? ["en_US"] : ["pt_BR"],
      firstName: "Maycon",
      lastName: "Pereira dos Santos",
    },
    twitter: { card: "summary_large_image", title: content.meta.title, description: content.meta.description },
    icons: { icon: "/icon.svg" },
    robots: { index: true, follow: true },
  };
}

/** Dados estruturados schema.org Person. */
export function personJsonLd(content: Content) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maycon Pereira dos Santos",
    jobTitle: content.about.role,
    description: content.meta.description,
    url: content.locale === "pt" ? SITE_URL : `${SITE_URL}/en`,
    email: `mailto:${links.email}`,
    address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
    sameAs: [links.linkedin, links.github],
    knowsAbout: ["TypeScript", "Node.js", "NestJS", "React", "Next.js", "React Native", "Expo", "PostgreSQL", "MongoDB", "Redis", "AWS", "Design System"],
    knowsLanguage: ["pt-BR", "en"],
  };
}

/** Serializa o JSON-LD sem permitir que um "<" feche a tag <script>. */
export function jsonLdString(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
