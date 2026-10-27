"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { stackLines } from "@/content/shared";
import type { Content } from "@/content/types";
import { useReducedMotion } from "./client-stores";

type Line = { kind: "cmd" | "out" | "hint"; text: string };
type Action = "about" | "experience" | "projects" | "contact" | "resume";

function introLines(terminal: Content["terminal"]): Line[] {
  return [
    ...terminal.intro.flatMap(({ command, output }): Line[] => [
      { kind: "cmd", text: command },
      ...output.map((text): Line => ({ kind: "out", text })),
    ]),
    { kind: "hint", text: terminal.hint },
  ];
}

type Props = {
  terminal: Content["terminal"];
  email: string;
  onOpen: (action: Action) => void;
};

export function Terminal({ terminal, email, onOpen }: Props) {
  const reducedMotion = useReducedMotion();
  // No servidor e antes da hidratação, o terminal já mostra a apresentação completa (para buscadores e sem JavaScript).
  const [lines, setLines] = useState<Line[]>(() => introLines(terminal));
  const [typing, setTyping] = useState<string | null>(null);
  const [phase, setPhase] = useState<"ssr" | "typing" | "ready">("ssr");
  const [value, setValue] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Digita a apresentação uma vez. Com movimento reduzido, mostra tudo pronto.
  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));
    async function run() {
      await wait(0);
      if (cancelled) return;
      if (reducedMotion) {
        setTyping(null);
        setLines(introLines(terminal));
        setPhase("ready");
        return;
      }
      setLines([]);
      setPhase("typing");
      for (const { command, output } of terminal.intro) {
        for (let i = 1; i <= command.length; i++) {
          if (cancelled) return;
          setTyping(command.slice(0, i));
          await wait(45);
        }
        await wait(160);
        if (cancelled) return;
        setTyping(null);
        setLines((current) => [...current, { kind: "cmd", text: command }, ...output.map((text): Line => ({ kind: "out", text }))]);
        await wait(260);
      }
      if (cancelled) return;
      setLines((current) => [...current, { kind: "hint", text: terminal.hint }]);
      setPhase("ready");
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [terminal, reducedMotion]);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [lines, typing]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const raw = value.trim();
    setValue("");
    if (!raw) return;
    const action = terminal.commands[raw.toLowerCase()];
    const echo: Line = { kind: "cmd", text: raw };
    if (action === "clear") {
      setLines([]);
      return;
    }
    let output: string[];
    switch (action) {
      case "help":
        output = [terminal.help];
        break;
      case "stack":
        output = stackLines;
        break;
      case "whoami":
        output = terminal.intro[0].output;
        break;
      case "contact":
        onOpen("contact");
        output = [email];
        break;
      case "about":
      case "experience":
      case "projects":
      case "resume":
        onOpen(action);
        output = [terminal.opening[action]];
        break;
      default:
        output = [terminal.notFound.replace("{command}", raw)];
    }
    setLines((current) => [...current, echo, ...output.map((text): Line => ({ kind: "out", text }))]);
  }

  return (
    <div
      className="term"
      ref={bodyRef}
      onClick={() => {
        if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
      }}
    >
      <div className="term-out" data-phase={phase} aria-live="polite">
        {lines.map((line, index) => (
          <p key={index} className={`tl tl-${line.kind}`}>
            {line.kind === "cmd" ? <span className="p">{terminal.prompt} </span> : null}
            {line.text}
          </p>
        ))}
        {typing !== null ? (
          <p className="tl tl-cmd" aria-hidden="true">
            <span className="p">{terminal.prompt} </span>
            {typing}
          </p>
        ) : null}
      </div>
      {phase !== "typing" ? (
        <form className="term-form" onSubmit={submit} autoComplete="off">
          <label htmlFor="cmd" className="p">
            {terminal.prompt}
          </label>
          <input
            ref={inputRef}
            id="cmd"
            type="text"
            spellCheck={false}
            autoCapitalize="off"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            aria-label={terminal.inputLabel}
          />
        </form>
      ) : null}
    </div>
  );
}
