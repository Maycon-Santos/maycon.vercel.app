/** Ícones próprios da mesa e do Dock. Desenhos simples, sem marcas da Apple. */

export function IconGradients() {
  return (
    <svg width="0" height="0" className="sr-defs" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="g-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5AA9FF" />
          <stop offset="1" stopColor="#1A6CF0" />
        </linearGradient>
        <linearGradient id="g-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFB547" />
          <stop offset="1" stopColor="#F2791C" />
        </linearGradient>
        <linearGradient id="g-violet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B07CFF" />
          <stop offset="1" stopColor="#6B3FE0" />
        </linearGradient>
        <linearGradient id="g-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4A4A52" />
          <stop offset="1" stopColor="#1E1E22" />
        </linearGradient>
        <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7FD3FF" />
          <stop offset="1" stopColor="#2496E8" />
        </linearGradient>
        <linearGradient id="g-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6FE08A" />
          <stop offset="1" stopColor="#22A447" />
        </linearGradient>
        <linearGradient id="g-folder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8CCBFF" />
          <stop offset="1" stopColor="#4AA3F2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const svg = { viewBox: "0 0 64 64", "aria-hidden": true, focusable: false } as const;

export const AboutIcon = () => (
  <svg {...svg}>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#g-blue)" />
    <circle cx="32" cy="25" r="9" fill="#fff" />
    <path d="M15 50c2-9 9-14 17-14s15 5 17 14" fill="#fff" />
  </svg>
);

export const ExperienceIcon = () => (
  <svg {...svg}>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#g-orange)" />
    <rect x="14" y="22" width="36" height="25" rx="4" fill="#fff" />
    <path d="M25 22v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" stroke="#fff" strokeWidth="3.5" fill="none" />
    <path d="M14 32h36" stroke="#F2791C" strokeWidth="2.5" />
  </svg>
);

export const ProjectsIcon = () => (
  <svg {...svg}>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#g-violet)" />
    <rect x="13" y="17" width="38" height="30" rx="5" fill="none" stroke="#fff" strokeWidth="3.5" />
    <path d="M28 25l10 7-10 7z" fill="#fff" />
  </svg>
);

export const TerminalIcon = () => (
  <svg {...svg}>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#g-dark)" />
    <path d="M16 24l9 7-9 7" stroke="#EDEDF2" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 40h16" stroke="#EDEDF2" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export const ContactIcon = () => (
  <svg {...svg}>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#g-sky)" />
    <rect x="13" y="19" width="38" height="26" rx="4" fill="#fff" />
    <path d="M14 21l18 13 18-13" stroke="#2496E8" strokeWidth="3" fill="none" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg {...svg}>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="#0A66C2" />
    <text x="32" y="43" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="#fff">
      in
    </text>
  </svg>
);

export const GitHubIcon = () => (
  <svg {...svg}>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#g-green)" />
    <path
      d="M24 22l-9 10 9 10M40 22l9 10-9 10M35 18l-6 28"
      stroke="#fff"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FolderIcon = () => (
  <svg {...svg}>
    <path d="M6 16a5 5 0 0 1 5-5h14l5 5h23a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5z" fill="url(#g-folder)" />
    <path d="M6 24h52v25a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5z" fill="#fff" opacity=".22" />
  </svg>
);

export const PdfIcon = () => (
  <svg {...svg}>
    <path d="M14 6h26l12 12v38a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" fill="#fff" />
    <path d="M40 6v9a3 3 0 0 0 3 3h9" fill="#E3E3E8" />
    <rect x="17" y="40" width="30" height="11" rx="2.5" fill="#E5484D" />
    <text x="32" y="48.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8" fill="#fff">
      PDF
    </text>
    <path d="M18 24h28M18 29h28M18 34h18" stroke="#C9C9D0" strokeWidth="2" />
  </svg>
);

/** Ícones pequenos dos botões vermelho, amarelo e verde. */
export const CloseGlyph = () => (
  <svg viewBox="0 0 8 8" aria-hidden="true" focusable="false">
    <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);
export const MinimizeGlyph = () => (
  <svg viewBox="0 0 8 8" aria-hidden="true" focusable="false">
    <path d="M1 4h6" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);
export const ZoomGlyph = () => (
  <svg viewBox="0 0 8 8" aria-hidden="true" focusable="false">
    <path d="M1.5 6.5V3l3.5 3.5zM6.5 1.5V5L3 1.5z" fill="currentColor" />
  </svg>
);
export const PlayGlyph = () => (
  <svg width="9" height="10" viewBox="0 0 9 10" aria-hidden="true" focusable="false">
    <path d="M0 0l9 5-9 5z" fill="#fff" />
  </svg>
);
