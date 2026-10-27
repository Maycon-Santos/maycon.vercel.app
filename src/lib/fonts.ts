import localFont from "next/font/local";

/**
 * Geist (interface): pré-carregada, porque aparece na primeira tela.
 * Com "optional", a fonte só entra se chegar a tempo; em rede lenta, a primeira visita usa a fonte do sistema
 * e o texto não é redesenhado depois (melhor LCP e sem salto de layout).
 */
export const geistSans = localFont({
  src: "../fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "optional",
});

/** Geist Mono (terminal e e-mail): sem pré-carregamento, para não disputar banda com a primeira tela. */
export const geistMono = localFont({
  src: "../fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false,
});
