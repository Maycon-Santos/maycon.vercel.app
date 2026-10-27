"use client";

import { useRef, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { isWideDesk } from "./client-stores";
import { CloseGlyph, MinimizeGlyph, ZoomGlyph } from "./icons";

/** Posição inicial em frações da mesa e tamanho em px. Sem altura, a janela acompanha o conteúdo. */
export type Geometry = { x: number; y: number; w: number; h?: number };

export type WindowFlags = {
  /** Fechada: some em qualquer tela. */
  closed: boolean;
  /** Fechada só no computador: no celular aparece na pilha. */
  deskHidden: boolean;
  minimized: boolean;
  zoomed: boolean;
};

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  geometry: Geometry;
  flags: WindowFlags;
  zIndex: number;
  front: boolean;
  labels: { close: string; minimize: string; zoom: string };
  className?: string;
  bodyClassName?: string;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onZoom: () => void;
  children: ReactNode;
};

const MIN_W = 320;
const MIN_H = 180;
const EDGES = ["n", "s", "e", "w", "ne", "nw", "se", "sw"] as const;
type Edge = (typeof EDGES)[number];

export function Window({
  id,
  title,
  subtitle,
  geometry,
  flags,
  zIndex,
  front,
  labels,
  className,
  bodyClassName,
  onFocus,
  onClose,
  onMinimize,
  onZoom,
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const resize = useRef<{ edge: Edge; x: number; y: number; left: number; top: number; w: number; h: number } | null>(null);

  const style = {
    "--x": geometry.x,
    "--y": geometry.y,
    "--w": `${geometry.w}px`,
    ...(geometry.h ? { "--h": `${geometry.h}px` } : {}),
    zIndex,
  } as CSSProperties;

  const classes = [
    "win",
    className,
    geometry.h ? null : "auto-height",
    flags.closed ? "closed" : null,
    flags.deskHidden ? "desk-hidden" : null,
    flags.minimized ? "min" : null,
    flags.zoomed ? "zoomed" : null,
    front ? "front" : null,
  ]
    .filter(Boolean)
    .join(" ");

  const desk = () => ref.current?.parentElement;

  // Arrastar pela barra de título
  function onBarPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !isWideDesk() || flags.zoomed || (event.target as HTMLElement).closest(".lights")) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { x: event.clientX, y: event.clientY, left: el.offsetLeft, top: el.offsetTop };
  }
  function onBarPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const el = ref.current;
    const area = desk();
    if (!drag.current || !el || !area) return;
    const left = Math.max(-el.offsetWidth + 120, Math.min(area.clientWidth - 120, drag.current.left + event.clientX - drag.current.x));
    const top = Math.max(0, Math.min(area.clientHeight - 60, drag.current.top + event.clientY - drag.current.y));
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
  }
  function onBarPointerUp() {
    drag.current = null;
  }

  // Redimensionar pelas bordas e cantos
  function onEdgePointerDown(edge: Edge, event: ReactPointerEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el || !isWideDesk() || flags.zoomed) return;
    event.preventDefault();
    event.stopPropagation();
    onFocus();
    event.currentTarget.setPointerCapture(event.pointerId);
    resize.current = { edge, x: event.clientX, y: event.clientY, left: el.offsetLeft, top: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight };
  }
  function onEdgePointerMove(event: ReactPointerEvent<HTMLSpanElement>) {
    const el = ref.current;
    const area = desk();
    const start = resize.current;
    if (!start || !el || !area) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    let { left, top, w, h } = start;
    if (start.edge.includes("e")) w = Math.max(MIN_W, start.w + dx);
    if (start.edge.includes("s")) h = Math.max(MIN_H, Math.min(area.clientHeight - start.top, start.h + dy));
    if (start.edge.includes("w")) {
      w = Math.max(MIN_W, start.w - dx);
      left = start.left + start.w - w;
    }
    if (start.edge.includes("n")) {
      h = Math.max(MIN_H, Math.min(start.top + start.h, start.h - dy));
      top = start.top + start.h - h;
    }
    Object.assign(el.style, { left: `${left}px`, top: `${top}px`, width: `${w}px`, height: `${h}px` });
  }
  function onEdgePointerUp() {
    resize.current = null;
  }

  return (
    <section
      ref={ref}
      id={`w-${id}`}
      className={classes}
      style={style}
      aria-labelledby={`t-${id}`}
      onPointerDown={() => {
        if (isWideDesk()) onFocus();
      }}
    >
      <div
        className={subtitle ? "bar tall" : "bar"}
        onPointerDown={onBarPointerDown}
        onPointerMove={onBarPointerMove}
        onPointerUp={onBarPointerUp}
        onPointerCancel={onBarPointerUp}
        onDoubleClick={(event) => {
          if (isWideDesk() && !(event.target as HTMLElement).closest(".lights")) onZoom();
        }}
      >
        <div className="lights">
          <button className="l close" type="button" aria-label={`${labels.close} ${title}`} onClick={onClose}>
            <CloseGlyph />
          </button>
          <button className="l min" type="button" aria-label={`${labels.minimize} ${title}`} onClick={onMinimize}>
            <MinimizeGlyph />
          </button>
          <button className="l zoom" type="button" aria-label={`${labels.zoom} ${title}`} onClick={onZoom}>
            <ZoomGlyph />
          </button>
        </div>
        <h2 className="wt" id={`t-${id}`}>
          {title}
          {subtitle ? <span className="sub">{subtitle}</span> : null}
        </h2>
        <span />
      </div>
      <div className={bodyClassName ? `body ${bodyClassName}` : "body"}>{children}</div>
      {EDGES.map((edge) => (
        <span
          key={edge}
          className={`rz rz-${edge}`}
          aria-hidden="true"
          onPointerDown={(event) => onEdgePointerDown(edge, event)}
          onPointerMove={onEdgePointerMove}
          onPointerUp={onEdgePointerUp}
          onPointerCancel={onEdgePointerUp}
        />
      ))}
    </section>
  );
}
