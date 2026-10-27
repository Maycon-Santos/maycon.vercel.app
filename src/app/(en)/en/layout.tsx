import type { ReactNode } from "react";
import { RootDocument } from "@/components/RootDocument";
import "../../globals.css";

export { viewport } from "@/lib/metadata";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
