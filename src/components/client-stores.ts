"use client";

import { useSyncExternalStore } from "react";
import { THEME_KEY } from "@/lib/boot";

/* Aparência: sistema, claro ou escuro. Fica no localStorage e no atributo data-theme do <html>. */

export type ThemeMode = "system" | "light" | "dark";
const THEME_EVENT = "themechange";

function readTheme(): ThemeMode {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : "system";
  } catch {
    return "system";
  }
}

export function setTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "system") root.removeAttribute("data-theme");
  else root.dataset.theme = mode;
  try {
    if (mode === "system") localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, mode);
  } catch {
    // Sem armazenamento (janela anônima, por exemplo): o tema vale só nesta visita.
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

function subscribeTheme(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useThemeMode(): ThemeMode {
  return useSyncExternalStore(subscribeTheme, readTheme, () => "system");
}


/* Movimento reduzido */

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

/* Relógio da barra de menus, atualizado a cada 15 segundos */

function subscribeClock(callback: () => void) {
  const id = window.setInterval(callback, 15_000);
  return () => window.clearInterval(id);
}

export function useClock(locale: string): string {
  return useSyncExternalStore(
    subscribeClock,
    () =>
      new Intl.DateTimeFormat(locale, {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
        .format(new Date())
        .replace(/\./g, ""),
    () => "",
  );
}

/** Mesa larga o bastante para janelas livres. Abaixo disso, as janelas viram folhas empilhadas. */
export function isWideDesk(): boolean {
  return window.matchMedia("(min-width: 900px) and (min-height: 600px)").matches;
}
