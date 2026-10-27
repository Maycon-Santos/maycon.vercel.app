import type { ReactNode } from "react";
import { RootDocument } from "@/components/RootDocument";
import "../globals.css";

export { viewport } from "@/lib/metadata";

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="pt-BR">{children}</RootDocument>;
}
