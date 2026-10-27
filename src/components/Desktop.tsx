"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import type { Content, WindowId } from "@/content/types";
import { isWideDesk, setTheme, useClock, useReducedMotion, useThemeMode, type ThemeMode } from "./client-stores";
import {
  AboutIcon,
  ContactIcon,
  ExperienceIcon,
  FolderIcon,
  GitHubIcon,
  IconGradients,
  LinkedInIcon,
  PdfIcon,
  PlayGlyph,
  ProjectsIcon,
  TerminalIcon,
} from "./icons";
import { Terminal } from "./Terminal";
import { Window, type Geometry, type WindowFlags } from "./Window";

const GEOMETRY: Record<WindowId, Geometry> = {
  about: { x: 0.035, y: 0.04, w: 540 },
  experience: { x: 0.47, y: 0.04, w: 660, h: 440 },
  projects: { x: 0.42, y: 0.5, w: 620, h: 340 },
  terminal: { x: 0.05, y: 0.61, w: 520, h: 260 },
  contact: { x: 0.3, y: 0.22, w: 420, h: 250 },
  resume: { x: 0.2, y: 0.03, w: 700, h: 640 },
  viewer: { x: 0.22, y: 0.08, w: 720, h: 560 },
};

const CLOSED: WindowFlags = { closed: true, deskHidden: false, minimized: false, zoomed: false };
const OPEN: WindowFlags = { closed: false, deskHidden: false, minimized: false, zoomed: false };

const INITIAL: Record<WindowId, WindowFlags> = {
  about: OPEN,
  experience: OPEN,
  projects: OPEN,
  terminal: OPEN,
  // Contato começa fechado no computador, mas aparece na pilha do celular.
  contact: { ...OPEN, deskHidden: true },
  resume: CLOSED,
  viewer: CLOSED,
};

// Janelas que, no celular, abrem como folha sobre a pilha em vez de rolar até ela.
const SHEETS: WindowId[] = ["resume", "viewer"];

const THEME_CYCLE: ThemeMode[] = ["system", "light", "dark"];

/** `resume` chega pronto do servidor, para o texto do currículo não entrar no JavaScript do navegador. */
export function Desktop({ content, resume }: { content: Content; resume: ReactNode }) {
  const c = content;
  const reducedMotion = useReducedMotion();
  const themeMode = useThemeMode();
  const clock = useClock(c.htmlLang);

  const [flags, setFlags] = useState(INITIAL);
  const [order, setOrder] = useState<WindowId[]>(["experience", "projects", "terminal", "about"]);
  const [job, setJob] = useState(0);
  const [project, setProject] = useState(0);
  const [copyLabel, setCopyLabel] = useState(c.contact.copy);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mailRef = useRef<HTMLElement>(null);

  const update = useCallback((id: WindowId, patch: Partial<WindowFlags>) => {
    setFlags((current) => ({ ...current, [id]: { ...current[id], ...patch } }));
  }, []);

  const bringToFront = useCallback((id: WindowId) => {
    setOrder((current) => (current[current.length - 1] === id ? current : [...current.filter((item) => item !== id), id]));
  }, []);

  const open = useCallback(
    (id: WindowId) => {
      update(id, { closed: false, deskHidden: false, minimized: false });
      bringToFront(id);
      if (!isWideDesk() && !SHEETS.includes(id)) {
        window.requestAnimationFrame(() =>
          document.getElementById(`w-${id}`)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" }),
        );
      }
    },
    [update, bringToFront, reducedMotion],
  );

  function close(id: WindowId) {
    update(id, { closed: true, zoomed: false });
  }

  function windowProps(id: WindowId) {
    return {
      id,
      geometry: GEOMETRY[id],
      flags: flags[id],
      zIndex: 10 + Math.max(0, order.indexOf(id)),
      front: order[order.length - 1] === id,
      labels: c.windowControls,
      onFocus: () => bringToFront(id),
      onClose: () => close(id),
      onMinimize: () => update(id, { minimized: true }),
      onZoom: () => update(id, { zoomed: !flags[id].zoomed }),
    };
  }

  function showProject(index: number) {
    setProject(index);
    open("viewer");
  }

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (index + step + c.experience.jobs.length) % c.experience.jobs.length;
    setJob(next);
    tabRefs.current[next]?.focus();
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(c.links.email);
      setCopyLabel(c.contact.copied);
    } catch {
      const node = mailRef.current;
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
      }
      setCopyLabel(c.contact.copyFallback);
    }
    window.setTimeout(() => setCopyLabel(c.contact.copy), 2400);
  }

  const appearanceText = { system: c.appearance.system, light: c.appearance.light, dark: c.appearance.dark }[themeMode];
  const running = (id: WindowId) => !flags[id].closed && !flags[id].deskHidden;
  const current = c.projects.items[project];

  return (
    <>
      <IconGradients />

      <header className="menubar">
        <span className="brand">Maycon</span>
        <nav className="menus" aria-label={c.locale === "pt" ? "Janelas" : "Windows"}>
          {(Object.keys(c.menu) as (keyof Content["menu"])[]).map((id) => (
            <button key={id} type="button" onClick={() => open(id)}>
              {c.menu[id]}
            </button>
          ))}
        </nav>
        <div className="right">
          <button
            type="button"
            onClick={() => setTheme(THEME_CYCLE[(THEME_CYCLE.indexOf(themeMode) + 1) % THEME_CYCLE.length])}
          >
            {c.appearance.label}: {appearanceText}
          </button>
          <Link className="lang" href={c.langSwitch.href} hrefLang={c.locale === "pt" ? "en" : "pt-BR"} aria-label={c.langSwitch.ariaLabel}>
            {c.langSwitch.label}
          </Link>
          <span className="clock" suppressHydrationWarning>
            {clock}
          </span>
        </div>
      </header>

      <main className="desk">
        <div className="icons">
          <button className="icon" type="button" onClick={() => open("projects")}>
            <FolderIcon />
            <span>{c.desk.projects}</span>
          </button>
          <button className="icon" type="button" onClick={() => open("resume")}>
            <PdfIcon />
            <span>{c.desk.resume}</span>
          </button>
          <button className="icon" type="button" onClick={() => open("terminal")}>
            <TerminalIcon />
            <span>{c.desk.terminal}</span>
          </button>
        </div>

        <Window {...windowProps("about")} title={c.about.title}>
          <div className="about">
            <h1>{c.about.name}</h1>
            <p className="role">{c.about.role}</p>
            <p>{c.about.summary}</p>
            <div className="btns">
              <a className="btn primary" href={c.pdf.href} download>
                {c.about.download}
              </a>
              <button className="btn" type="button" onClick={() => open("contact")}>
                {c.about.contact}
              </button>
              <a className="btn" href={c.links.linkedin} rel="me">
                LinkedIn
              </a>
              <a className="btn" href={c.links.github} rel="me">
                GitHub
              </a>
            </div>
          </div>
        </Window>

        <Window {...windowProps("experience")} title={c.experience.title}>
          <div className="split">
            <div className="side" role="tablist" aria-label={c.experience.tabsLabel} aria-orientation="vertical">
              <p className="side-label">{c.experience.since}</p>
              {c.experience.jobs.map((item, index) => (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  className="tab"
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-controls={`job-${item.id}`}
                  aria-selected={job === index}
                  tabIndex={job === index ? 0 : -1}
                  onClick={() => setJob(index)}
                  onKeyDown={(event) => onTabKey(event, index)}
                >
                  <Logo job={item} size={28} />
                  <strong>{item.company}</strong>
                  <span>{item.period}</span>
                </button>
              ))}
            </div>
            <div>
              {c.experience.jobs.map((item, index) => (
                <div
                  key={item.id}
                  className="pane"
                  role="tabpanel"
                  id={`job-${item.id}`}
                  aria-labelledby={`tab-${item.id}`}
                  hidden={job !== index}
                >
                  <Logo job={item} size={44} large />
                  <h3>{item.role}</h3>
                  <p className="meta">{item.meta}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {item.tags.length ? (
                    <ul className="tags">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Window>

        <Window {...windowProps("projects")} title={c.projects.title} subtitle={c.projects.subtitle}>
          <ul className="finder">
            {c.projects.items.map((item, index) => (
              <li key={item.id}>
                <button className="file" type="button" onClick={() => showProject(index)}>
                  <span className="thumb">
                    <Image src={item.poster} alt="" width={640} height={360} sizes="(max-width: 899px) 45vw, 180px" />
                    <span className="play">
                      <PlayGlyph />
                    </span>
                  </span>
                  <b>{item.file}</b>
                  <small>{c.projects.caption}</small>
                  <span className="sr-only">
                    {c.projects.openLabel} {item.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Window>

        <Window {...windowProps("terminal")} title={c.terminal.title} bodyClassName="term-body">
          <Terminal
            terminal={c.terminal}
            email={c.links.email}
            onOpen={open}
          />
        </Window>

        <Window {...windowProps("contact")} title={c.contact.title}>
          <div className="about contact">
            <p className="lead">{c.contact.text}</p>
            <div className="btns center">
              <code ref={mailRef} className="mail">
                {c.links.email}
              </code>
              <button className="btn" type="button" onClick={copyEmail} aria-live="polite">
                {copyLabel}
              </button>
            </div>
            <div className="btns">
              <a className="btn" href={c.links.linkedin} rel="me">
                LinkedIn
              </a>
              <a className="btn" href={c.links.github} rel="me">
                GitHub
              </a>
              <a className="btn primary" href={c.pdf.href} download>
                {c.contact.download}
              </a>
            </div>
          </div>
        </Window>

        <Window {...windowProps("resume")} title={c.resume.title} bodyClassName="preview">
          <div className="cv-tools">
            <span>{c.resume.toolbar}</span>
            <a className="btn primary" href={c.pdf.href} download>
              {c.resume.download}
            </a>
          </div>
          {resume}
        </Window>

        <Window {...windowProps("viewer")} title={flags.viewer.closed ? c.projects.viewerTitle : current.file} bodyClassName="viewer">
          {!flags.viewer.closed ? (
            <video
              key={current.id}
              src={current.video}
              poster={current.poster}
              controls
              playsInline
              muted
              loop
              preload="metadata"
              autoPlay={!reducedMotion}
            />
          ) : null}
          {c.projects.items.map((item, index) => (
            <div className="info" key={item.id} hidden={index !== project}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.link ? (
                <p>
                  <a href={item.link.href}>{item.link.label}</a>
                </p>
              ) : null}
            </div>
          ))}
        </Window>
      </main>

      <nav className="dock" aria-label="Dock">
        <DockButton label={c.menu.about} running={running("about")} onClick={() => open("about")}>
          <AboutIcon />
        </DockButton>
        <DockButton label={c.menu.experience} running={running("experience")} onClick={() => open("experience")}>
          <ExperienceIcon />
        </DockButton>
        <DockButton label={c.menu.projects} running={running("projects")} onClick={() => open("projects")}>
          <ProjectsIcon />
        </DockButton>
        <DockButton label={c.menu.terminal} running={running("terminal")} onClick={() => open("terminal")}>
          <TerminalIcon />
        </DockButton>
        <span className="sep" aria-hidden="true" />
        <DockButton label={c.menu.contact} running={running("contact")} onClick={() => open("contact")}>
          <ContactIcon />
        </DockButton>
        <a className="app" href={c.links.linkedin} rel="me">
          <span className="tip" aria-hidden="true">
            {c.dock.linkedin}
          </span>
          <span className="sr-only">{c.dock.linkedin}</span>
          <LinkedInIcon />
        </a>
        <a className="app" href={c.links.github} rel="me">
          <span className="tip" aria-hidden="true">
            {c.dock.github}
          </span>
          <span className="sr-only">{c.dock.github}</span>
          <GitHubIcon />
        </a>
      </nav>
    </>
  );
}

function DockButton({ label, running, onClick, children }: { label: string; running: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button className={running ? "app running" : "app"} type="button" onClick={onClick}>
      <span className="tip" aria-hidden="true">
        {label}
      </span>
      <span className="sr-only">{label}</span>
      {children}
    </button>
  );
}

function Logo({ job, size, large }: { job: Content["experience"]["jobs"][number]; size: number; large?: boolean }) {
  const className = large ? "logo lg" : "logo";
  if (!job.logo) {
    return (
      <i className={className} aria-hidden="true">
        {job.initials}
      </i>
    );
  }
  return <Image className={className} src={job.logo} alt="" width={size} height={size} />;
}
