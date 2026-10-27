import type { Metadata } from "next";
import Link from "next/link";
import { RootDocument } from "@/components/RootDocument";
import "./globals.css";

export const metadata: Metadata = {
  title: "Página não encontrada | Maycon Pereira dos Santos",
  robots: { index: false },
  icons: { icon: "/icon.svg" },
};

export default function GlobalNotFound() {
  return (
    <RootDocument lang="pt-BR">
      <main className="not-found">
        <section className="win front" aria-labelledby="nf-title">
          <div className="bar">
            <div className="lights" aria-hidden="true">
              <span className="l close" />
              <span className="l min" />
              <span className="l zoom" />
            </div>
            <h1 className="wt" id="nf-title">
              404
            </h1>
            <span />
          </div>
          <div className="about">
            <p className="lead">Esta página não existe.</p>
            <p lang="en">This page doesn&apos;t exist.</p>
            <div className="btns">
              <Link className="btn primary" href="/">
                Voltar para a mesa
              </Link>
              <Link className="btn" href="/en" lang="en">
                Back to the desktop
              </Link>
            </div>
          </div>
        </section>
      </main>
    </RootDocument>
  );
}
