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
    "Trabalho com Scrum e, no Jira, crio tasks e gerencio épicos grandes. Escrevo testes, faço code review e configuro pipelines de CI/CD com Docker e GitHub Actions. Uso IA no desenvolvimento, com Claude, GitHub Copilot e Kiro.",
  ],
  experience: [
    {
      role: "Engenheiro de Software Full Stack",
      meta: "Omelete Company, São Paulo, SP. Nov 2025 até o momento.",
      bullets: [
        "Faço entregas de ponta a ponta no ciclo completo de desenvolvimento: back-end, web e app mobile.",
        "Desenvolvo um app de sócio-torcedor de esports, com feed da comunidade, bolões com ranking, badges e carteirinha digital.",
        "Desenvolvo a arquitetura back-end com NestJS e TypeORM. Modelo e integro dados em PostgreSQL, MongoDB e Redis, e uso filas AWS SQS.",
        "Gerencio o desenvolvimento, o build e a publicação dos apps Android e iOS com React Native e Expo.",
        "Crio aplicações web com Next.js e React, com renderização SSR e SSG.",
        "Controlo a qualidade do código com code review, padrões de arquitetura e linting com ESLint e Biome.",
        "Trabalho com Scrum. Uso o Jira para criar tasks e gerenciar épicos grandes.",
      ],
    },
    {
      role: "Engenheiro de Software Front-End",
      meta: "Paag, Belo Horizonte, MG. Fev 2024 a out 2025.",
      bullets: [
        "Criei do zero o Design System da Paag, uma fintech de pagamentos. Ele unificou a interface de 4 produtos em 2 repositórios e acelerou as entregas.",
        "Desenvolvi aplicações com React, Next.js, TypeScript e Tailwind CSS.",
        "Criei e mantive o Design System com Storybook. Organizei o código em monorepo com Turborepo e publiquei os pacotes no GitHub Packages. Os produtos Shield, Payments e Finance usam esse Design System.",
        "Escrevi testes unitários e de integração com Jest e React Testing Library.",
        "Usei Docker no ambiente local e configurei pipelines de CI/CD com GitHub Actions.",
      ],
    },
    {
      role: "Professor de Desenvolvimento Back-End",
      meta: "Firjan SENAI, Niterói, RJ. Nov 2023 a fev 2024.",
      bullets: [
        "Formei novos desenvolvedores em boas práticas de Node.js e modelagem de banco de dados.",
        "Ajudei na formação das turmas com aulas de teoria e exercícios práticos de programação.",
        "Ensinei arquitetura e desenvolvimento de APIs com Node.js e PostgreSQL.",
      ],
    },
    {
      role: "Desenvolvedor de Software Freelancer",
      meta: "Autônomo, remoto. Fev 2023 a out 2023.",
      bullets: [
        "Desenvolvi projetos de software para clientes como freelancer.",
        "Estudei para atualizar meus conhecimentos técnicos.",
      ],
    },
    {
      role: "Engenheiro de Software Full Stack",
      meta: "Hurb, Rio de Janeiro, RJ. Out 2019 a jan 2023.",
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
      role: "Desenvolvedor de Software Web e Mobile",
      meta: "Codezone, Niterói, RJ. Mai 2018 a set 2019.",
      bullets: [
        "Desenvolvi do zero os projetos web que a empresa recebia de agências parceiras.",
        "Construí sites e interfaces responsivas com HTML5, CSS3, JavaScript, jQuery e Sass.",
        "Automatizei o build front-end com Gulp, Webpack, Babel e Node.js.",
        "Integrei os projetos ao WordPress.",
        "Apliquei técnicas de otimização de performance e de compatibilidade entre navegadores.",
        "Também desenvolvi algumas aplicações com React e participei de um projeto mobile com React Native.",
      ],
    },
  ],
  skills: [
    ["Linguagens", "TypeScript, JavaScript (ES6+), Go (Golang), PHP, Python."],
    ["Front-end", "React (React.js), Next.js (SSR/SSG), Tailwind CSS, Styled Components, HTML5, CSS3, Sass, Acessibilidade (WCAG/a11y), SEO, Web Performance."],
    ["Mobile", "React Native, Expo (build e publicação Android e iOS)."],
    ["Back-end e bancos de dados", "Node.js, NestJS, TypeORM, APIs RESTful, Microsserviços, PostgreSQL, MySQL, MongoDB, Redis, Filas (AWS SQS, NSQ)."],
    ["DevOps e infraestrutura", "Docker, CI/CD (GitHub Actions), AWS, Vercel, Git, GitHub Packages."],
    ["IA no desenvolvimento", "Claude, GitHub Copilot, Kiro. Também testei Google Antigravity e OpenAI Codex."],
    ["Arquitetura, testes e metodologias", "Clean Code, SOLID, Testes Automatizados (Jest, React Testing Library), Storybook, Design System, Monorepo (Turborepo), ESLint, Biome, Versionamento Semântico, Code Review, Metodologias Ágeis (Scrum, Kanban), Jira."],
  ] as const,
  languages: "Português: nativo. Inglês: básico (leitura técnica). Faço aulas particulares.",
  education: [
    { course: "Engenharia da Computação", meta: "Centro Universitário Internacional Uninter, bacharelado. 2026, em andamento." },
    { course: "Análise e Desenvolvimento de Sistemas", meta: "Universidade Estácio de Sá, tecnólogo. 2018 a 2020." },
    {
      course: "Técnico em Informática",
      meta: "SENAI, Niterói, RJ. 2015 a 2017.",
      note: "Projeto de destaque: desenvolvi uma plataforma de serviços técnicos com integração ao Google Maps, banco de dados e chat em tempo real.",
    },
  ],
  awards: {
    title: "Olimpíada do Conhecimento (Web Design)",
    meta: "Firjan SENAI, Rio de Janeiro, RJ. 2017.",
    bullets: [
      "1º lugar na etapa escolar, na unidade SENAI de Niterói.",
      "2º lugar na etapa estadual, no Maracanã, com os vencedores de todas as unidades do estado.",
      "O desafio testou a resolução de problemas sob pressão. Criei sistemas responsivos com HTML, CSS, JavaScript, PHP e MySQL.",
    ],
  },
};
