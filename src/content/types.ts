export type Locale = "pt" | "en";

export type WindowId = "about" | "experience" | "projects" | "terminal" | "contact" | "resume" | "viewer";

export type Job = {
  id: string;
  company: string;
  /** Caminho do logo em /public. Sem logo, mostra as iniciais. */
  logo?: string;
  initials: string;
  period: string;
  role: string;
  meta: string;
  bullets: string[];
  tags: string[];
};

export type Project = {
  id: string;
  file: string;
  video: string;
  poster: string;
  title: string;
  text: string;
  link?: { href: string; label: string };
};

export type Content = {
  locale: Locale;
  htmlLang: string;
  meta: { title: string; description: string; ogAlt: string };
  langSwitch: { label: string; href: string; ariaLabel: string };
  appearance: { label: string; system: string; light: string; dark: string };
  menu: Record<Exclude<WindowId, "viewer">, string>;
  desk: { projects: string; resume: string; terminal: string };
  dock: { linkedin: string; github: string };
  windowControls: { close: string; minimize: string; zoom: string };
  about: {
    title: string;
    name: string;
    role: string;
    summary: string;
    download: string;
    contact: string;
  };
  experience: { title: string; since: string; tabsLabel: string; jobs: Job[] };
  projects: {
    title: string;
    subtitle: string;
    caption: string;
    openLabel: string;
    viewerTitle: string;
    items: Project[];
  };
  terminal: {
    title: string;
    prompt: string;
    inputLabel: string;
    intro: { command: string; output: string[] }[];
    hint: string;
    help: string;
    opening: Record<"about" | "experience" | "projects" | "resume", string>;
    /** Modelo com {command} no lugar do comando digitado. */
    notFound: string;
    commands: Record<string, "about" | "experience" | "projects" | "contact" | "resume" | "stack" | "help" | "clear" | "whoami">;
  };
  contact: {
    title: string;
    text: string;
    copy: string;
    copied: string;
    copyFallback: string;
    download: string;
  };
  resume: { title: string; toolbar: string; download: string };
  pdf: { href: string };
  links: { email: string; linkedin: string; github: string };
};
