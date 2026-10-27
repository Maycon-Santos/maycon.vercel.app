import type { Metadata } from "next";
import Link from "next/link";
import { ResumeDocument } from "@/components/ResumeDocument";
import { pt } from "@/content/pt";
import { SITE_URL } from "@/content/shared";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Currículo | Maycon Pereira dos Santos",
  description: pt.meta.description,
  alternates: { canonical: "/curriculo" },
  openGraph: { type: "profile", url: "/curriculo", title: "Currículo | Maycon Pereira dos Santos", description: pt.meta.description, locale: "pt_BR" },
  icons: { icon: "/icon.svg" },
};

export default function ResumePage() {
  return (
    <div className="resume-page">
      <nav className="cv-tools" aria-label="Currículo">
        <Link href="/">Voltar para a mesa</Link>
        <a className="btn primary" href={pt.pdf.href} download>
          {pt.resume.download}
        </a>
      </nav>
      <main>
        <ResumeDocument headingLevel={1} />
      </main>
    </div>
  );
}
