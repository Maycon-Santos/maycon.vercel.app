import { links } from "./shared";

/** Texto do currículo ATS (curriculo-ats.html), sem o telefone. Fica em português nas duas versões do site. */
export const resume = {
  name: "Maycon Pereira dos Santos",
  title: "Engenheiro de Software Full Stack",
  location: "São Paulo, SP",
  email: links.email,
  linkedin: { href: links.linkedin, label: "linkedin.com/in/maycon-link" },
  github: { href: links.github, label: "github.com/Maycon-Santos" },
  summary: [
    "Engenheiro de Software Full Stack com mais de 7 anos de experiência. Trabalhei em produtos de engajamento de fãs de esports, pagamentos, viagens, e em projetos web para marcas em uma agência digital.",
    "No back-end, uso Node.js e NestJS com PostgreSQL, MongoDB e Redis. No front-end, uso React e Next.js. No mobile, uso React Native e Expo, inclusive no build e na publicação dos apps.",
    "Em uma fintech de pagamentos, criei do zero um Design System com Storybook e Turborepo. Ele passou a atender 4 produtos em 2 repositórios.",
    "Trabalho com Scrum e, no Jira, crio tasks e gerencio épicos grandes. Escrevo testes unitários e de fluxo com Jest e Playwright, faço code review e configuro pipelines de CI/CD com Docker e GitHub Actions. Uso IA no desenvolvimento, com Claude, GitHub Copilot e Kiro.",
  ],
  experience: [
    {
      role: "Desenvolvedor Full Stack",
      meta: "Omelete Company | São Paulo, SP · Remoto · Nov 2025 – Presente",
      bullets: [
        "Trabalho em seis projetos do mesmo produto: aplicação web, app mobile, API principal, serviço de pagamentos, painel administrativo e funções serverless.",
        "Desenvolvo um app de sócio-torcedor de esports, com feed da comunidade, bolões com ranking, badges, loja, jogos e carteirinha digital.",
        "Desenvolvo a aplicação web com Next.js, React e TypeScript, com renderização SSR e SSG e internacionalização.",
        "No app Android e iOS com React Native e Expo, desenvolvo a ponte com a aplicação web, módulos nativos e a navegação.",
        "Desenvolvo APIs com NestJS e TypeORM, com PostgreSQL, MongoDB, Redis e filas AWS SQS, e funções AWS Lambda em Node.js e Go.",
        "Implementei notificações push e atualizações em tempo real com Server-Sent Events.",
        "Escrevo testes unitários com Jest e testes de fluxo com Playwright. Mantenho no GitHub Actions o pipeline de qualidade (lint, tipos, testes em paralelo e cobertura) e os workflows de release Android e iOS.",
        "Faço code review e configuro instruções e skills para agentes de IA nos repositórios.",
        "Trabalho com Scrum e divido épicos grandes em fases e tarefas no Jira.",
      ],
    },
    {
      role: "Desenvolvedor Front-End",
      meta: "Paag | Belo Horizonte, MG · Remoto · Fev 2024 – Out 2025",
      bullets: [
        "Criei do zero o Design System da Paag, uma fintech de pagamentos. Ele unificou a interface de 4 produtos em 2 repositórios e acelerou as entregas.",
        "Desenvolvi aplicações com React, Next.js, TypeScript e Tailwind CSS.",
        "Criei e mantive o Design System com Storybook. Organizei o código em monorepo com Turborepo e publiquei os pacotes no GitHub Packages. Os produtos Shield, Payments e Finance usam esse Design System.",
        "Escrevi testes unitários e de integração com Jest e React Testing Library.",
        "Usei Docker no ambiente local e configurei pipelines de CI/CD com GitHub Actions.",
      ],
    },
    {
      role: "Professor de Programação Back-End",
      meta: "Firjan SENAI | Niterói, RJ · Remoto · Nov 2023 – Fev 2024",
      bullets: [
        "Formei novos desenvolvedores em boas práticas de Node.js e modelagem de banco de dados.",
        "Ajudei na formação de uma turma com aulas de teoria e exercícios práticos de programação.",
        "Ensinei arquitetura e desenvolvimento de APIs com Node.js e PostgreSQL.",
      ],
    },
    {
      role: "Desenvolvedor Full Stack (Freelancer)",
      meta: "Autônomo | Remoto · Fev 2023 – Out 2023",
      bullets: [
        "Desenvolvi projetos com TypeScript, Node.js, React e Next.js para clientes como freelancer.",
        "Estudei para atualizar meus conhecimentos técnicos.",
      ],
    },
    {
      role: "Desenvolvedor Full Stack",
      meta: "Hurb | Rio de Janeiro, RJ · Presencial e remoto · Out 2019 – Jan 2023",
      bullets: [
        "Modernizei serviços críticos legados e criei serviços novos para expandir verticais de negócio da plataforma de viagens.",
        "Mantive e evoluí o núcleo legado em PHP. Esse núcleo funcionava como hub entre os microsserviços.",
        "Desenvolvi em Go uma aplicação que importa os dados de um fornecedor, normaliza esses dados e salva no banco de dados da empresa.",
        "Desenvolvi todo o fluxo de compra no front-end para os produtos desse fornecedor.",
        "Tive contato com Python, PostgreSQL, filas NSQ e Docker.",
        "Trabalhei em times multidisciplinares com Scrum e Kanban.",
      ],
    },
    {
      role: "Desenvolvedor Front-End",
      meta: "Codezone | Niterói, RJ · Out 2018 – Set 2019",
      bullets: [
        "Desenvolvi do zero os projetos web que a empresa recebia de agências parceiras.",
        "Construí sites e interfaces responsivas com HTML5, CSS3, JavaScript, jQuery e Sass.",
        "Automatizei o build front-end com Gulp, Webpack, Babel e Node.js.",
        "Integrei os projetos ao WordPress.",
        "Também desenvolvi algumas aplicações com React e participei de um projeto mobile com React Native.",
      ],
    },
    {
      role: "Desenvolvedor Front-End (Estagiário)",
      meta: "Codezone | Niterói, RJ · Mai 2018 – Out 2018",
      bullets: [
        "Desenvolvi páginas promocionais para agências parceiras.",
        "Construí interfaces responsivas com HTML, CSS, JavaScript, Sass e Gulp.",
        "Preparei os layouts para integração com o WordPress.",
        "Apliquei técnicas de otimização de performance e de compatibilidade entre navegadores.",
      ],
    },
  ],
  skills: [
    ["Linguagens", "TypeScript, JavaScript (ES6+), Go (Golang), PHP."],
    ["Front-end", "React (React.js), Next.js (SSR/SSG), Tailwind CSS, Styled Components, HTML5, CSS3, Sass, jQuery, Internacionalização (next-intl), Acessibilidade (WCAG/a11y), SEO, Web Performance."],
    ["Build front-end", "Webpack, Babel, Gulp."],
    ["Mobile", "React Native, Expo (build e publicação Android e iOS)."],
    ["Back-end & Bancos de Dados", "Node.js, NestJS, TypeORM, APIs RESTful, Microsserviços, PostgreSQL, MySQL, MongoDB, Redis, NoSQL, Filas (AWS SQS, NSQ), Server-Sent Events, Arquitetura de software."],
    ["DevOps & Infraestrutura", "Docker, CI/CD (GitHub Actions), AWS, AWS Lambda, Google Cloud (GCP), Vercel, Git, GitHub Packages, Observabilidade (logs estruturados, APM)."],
    ["IA no desenvolvimento", "Claude, GitHub Copilot, Kiro. Também testei Google Antigravity e OpenAI Codex."],
    ["Arquitetura, Testes & Metodologias", "Clean Code, SOLID, Testes Automatizados (Jest, React Testing Library, Playwright), Storybook, Design System, Monorepo (Turborepo), ESLint, Biome, Versionamento Semântico, Code Review, Metodologias Ágeis (Scrum, Kanban), Jira."],
  ] as const,
  languages: "Português: nativo. Inglês: básico (leitura técnica). Faço aulas particulares.",
  education: [
    { course: "Engenharia de Software", meta: "Centro Universitário Internacional Uninter | Bacharelado · 2026 – Em andamento" },
    { course: "Análise e Desenvolvimento de Sistemas", meta: "Universidade Estácio de Sá | Tecnólogo · 2018 – 2020" },
    {
      course: "Técnico em Informática",
      meta: "SENAI | Niterói, RJ · 2015 – 2017",
      note: "Projeto de destaque: Desenvolvi uma plataforma de serviços técnicos com integração ao Google Maps, banco de dados e chat em tempo real.",
    },
  ],
  awards: {
    title: "Olimpíada do Conhecimento (Web Design)",
    meta: "FIRJAN SENAI | Rio de Janeiro, RJ · Out 2017",
    bullets: [
      "1º Lugar (Etapa Escolar): Competição sediada na unidade SENAI de Niterói.",
      "2º Lugar (Etapa Estadual): Competição no Maracanã com os vencedores de todas as unidades do estado.",
      "O desafio testou a resolução de problemas sob pressão. Criei sistemas responsivos com HTML, CSS, JavaScript, PHP e MySQL.",
    ],
  },
};
