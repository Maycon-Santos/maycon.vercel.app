import { Desktop } from "@/components/Desktop";
import { ResumeDocument } from "@/components/ResumeDocument";
import { pt } from "@/content/pt";
import { homeMetadata, jsonLdString, personJsonLd } from "@/lib/metadata";

export const metadata = homeMetadata(pt);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(personJsonLd(pt)) }} />
      <Desktop content={pt} resume={<ResumeDocument />} />
    </>
  );
}
