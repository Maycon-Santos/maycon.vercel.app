import { Desktop } from "@/components/Desktop";
import { ResumeDocument } from "@/components/ResumeDocument";
import { en } from "@/content/en";
import { homeMetadata, jsonLdString, personJsonLd } from "@/lib/metadata";

export const metadata = homeMetadata(en);

export default function EnglishHome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(personJsonLd(en)) }} />
      <Desktop content={en} resume={<ResumeDocument />} />
    </>
  );
}
