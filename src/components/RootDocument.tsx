import type { ReactNode } from "react";
import { bootScript } from "@/lib/boot";
import { geistMono, geistSans } from "@/lib/fonts";

/** <html> e <body> comuns aos dois idiomas. Cada idioma tem o próprio layout raiz para o atributo lang. */
export function RootDocument({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
