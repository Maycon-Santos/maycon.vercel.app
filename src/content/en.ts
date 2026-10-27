import { pt } from "./pt";
import { links, media, pdf, snakeRepo, stackLines } from "./shared";
import type { Content, Job } from "./types";

const ptJobs = Object.fromEntries(pt.experience.jobs.map((job) => [job.id, job]));

/** Mantém logo, iniciais e tags do português e troca só o texto. */
function job(id: string, text: Pick<Job, "period" | "role" | "meta" | "bullets">): Job {
  return { ...ptJobs[id], ...text };
}

export const en: Content = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "Maycon Pereira dos Santos | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer with more than 7 years of experience in TypeScript, Node.js, React and React Native, on esports, payments and travel products.",
    ogAlt: "Desktop with the About window of Maycon Pereira dos Santos, Full Stack Software Engineer.",
  },
  langSwitch: { label: "EN", href: "/", ariaLabel: "EN, switch the language to Portuguese" },
  appearance: { label: "Appearance", system: "system", light: "light", dark: "dark" },
  menu: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    terminal: "Terminal",
    contact: "Contact",
    resume: "Resume",
  },
  desk: { projects: "Projects", resume: "Resume.pdf", terminal: "Terminal" },
  dock: { linkedin: "LinkedIn", github: "GitHub" },
  windowControls: { close: "Close", minimize: "Minimize", zoom: "Zoom" },
  about: {
    title: "About",
    name: "Maycon Pereira dos Santos",
    role: "Full Stack Software Engineer",
    summary:
      "I have more than 7 years of experience. I have worked on esports fan engagement, payments and travel products, and on web projects for brands at a digital agency.",
    download: "Download resume (PT)",
    contact: "Contact",
  },
  experience: {
    title: "Experience",
    since: "Since 2018",
    tabsLabel: "Companies",
    jobs: [
      job("omelete", {
        period: "2025 to present",
        role: "Full Stack Software Engineer",
        meta: "Omelete Company, São Paulo, Brazil. November 2025 to present.",
        bullets: [
          "I build an esports fan membership app, with a community feed, prediction pools with rankings, badges and a digital membership card.",
          "I design the back-end architecture with NestJS and TypeORM. I model and integrate data in PostgreSQL, MongoDB and Redis, and I use AWS SQS queues.",
          "I manage the development, build and release of the Android and iOS apps with React Native and Expo.",
          "I build web applications with Next.js and React, with SSR and SSG rendering.",
        ],
      }),
      job("paag", {
        period: "2024 to 2025",
        role: "Front-End Software Engineer",
        meta: "Paag, Belo Horizonte, Brazil. February 2024 to October 2025.",
        bullets: [
          "I created Paag's Design System from scratch at a payments fintech. It came to serve 4 products in 2 repositories.",
          "I organized the code in a Turborepo monorepo, documented the components in Storybook and published the packages to GitHub Packages.",
          "I built applications with React, Next.js, TypeScript and Tailwind CSS, with unit and integration tests in Jest and React Testing Library.",
          "I used Docker for local development and set up CI/CD pipelines with GitHub Actions.",
        ],
      }),
      job("firjan", {
        period: "2023 to 2024",
        role: "Back-End Development Instructor",
        meta: "Firjan SENAI, Niterói, Brazil. November 2023 to February 2024.",
        bullets: [
          "I taught API architecture and development with Node.js and PostgreSQL.",
          "I gave theory classes and hands-on exercises on Node.js good practices and database modeling.",
        ],
      }),
      job("freelance", {
        period: "2023",
        role: "Freelance Software Developer",
        meta: "Remote. February to October 2023.",
        bullets: [
          "I built software projects for clients as a freelancer.",
          "I studied to update my technical knowledge.",
        ],
      }),
      job("hurb", {
        period: "2019 to 2023",
        role: "Full Stack Software Engineer",
        meta: "Hurb, Rio de Janeiro, Brazil. October 2019 to January 2023.",
        bullets: [
          "I maintained and evolved the legacy PHP core, which worked as a hub between the microservices.",
          "I built a Go application that imports a supplier's data, normalizes it and saves it to the company database.",
          "I built the whole front-end purchase flow for that supplier's products.",
          "I worked on cross-functional teams with Scrum and Kanban.",
        ],
      }),
      job("codezone", {
        period: "2018 to 2019",
        role: "Web and Mobile Software Developer",
        meta: "Codezone, Niterói, Brazil. May 2018 to September 2019.",
        bullets: [
          "I built from scratch the web projects the company received from partner agencies.",
          "I built responsive websites and interfaces with HTML5, CSS3, JavaScript, jQuery and Sass, integrated with WordPress.",
          "I automated the front-end build with Gulp, Webpack, Babel and Node.js.",
          "I also built a few applications with React and took part in a mobile project with React Native.",
        ],
      }),
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "made before AI coding tools",
    caption: "Video, 14 s",
    openLabel: "Open",
    viewerTitle: "Project",
    items: [
      {
        id: "snake",
        file: "jogo-da-cobrinha.mp4",
        ...media.snake,
        title: "Multiplayer Snake game",
        text: "A snake game with matches between friends, over a local network or on the same computer, and a mode against the computer. It also works on phones. Built in 2018.",
        link: { href: snakeRepo, label: "View the code on GitHub" },
      },
      {
        id: "journey",
        file: "jornada-2d.mp4",
        ...media.journey,
        title: "Interactive 2D journey",
        text: "A 2D web application where people move through a mountain landscape and open milestones with the goals an energy company achieved.",
      },
      {
        id: "quiz",
        file: "quiz-touchscreen.mp4",
        ...media.quiz,
        title: "Touchscreen TV quiz",
        text: "A quiz with a prize wheel, built for a touchscreen TV at a company event. The questions were about the company.",
      },
      {
        id: "polish",
        file: "simulador-de-esmaltes.mp4",
        ...media.polish,
        title: "Nail polish simulator",
        text: "A simulator where people choose a skin tone and try on a cosmetics brand's nail polish colors.",
      },
      {
        id: "sanitation",
        file: "infografico-saneamento.mp4",
        ...media.sanitation,
        title: "Sanitation infographic",
        text: "An interactive infographic with a map of Brazil and sanitation data by state: coverage, investment per person and private-sector share.",
      },
    ],
  },
  terminal: {
    title: "maycon — zsh",
    prompt: "maycon@sp ~ %",
    inputLabel: "Terminal command. Type help to see the commands.",
    intro: [
      { command: "whoami", output: ["Maycon Pereira dos Santos, Full Stack Software Engineer"] },
      { command: "cat stack.txt", output: stackLines },
      { command: "echo $AVAILABILITY", output: ["Remote or hybrid roles in São Paulo"] },
    ],
    hint: "Type help to see the commands.",
    help: "Commands: about, experience, projects, stack, contact, resume, clear",
    opening: {
      about: "Opening About.",
      experience: "Opening Experience.",
      projects: "Opening Projects.",
      resume: "Opening Resume.",
    },
    notFound: "zsh: command not found: {command}. Type help.",
    commands: pt.terminal.commands,
  },
  contact: {
    title: "Contact",
    text: "Reach me by email or on LinkedIn.",
    copy: "Copy email",
    copied: "Email copied",
    copyFallback: "Email selected. Copy it with Ctrl+C or ⌘+C.",
    download: "Download resume (PT)",
  },
  resume: { title: "Resume.pdf", toolbar: "Resume in Portuguese", download: "Download PDF" },
  pdf,
  links,
};
