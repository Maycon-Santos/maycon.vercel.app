import reactLogoImage from '@/assets/images/skills/react-js.svg'
import typescriptLogoImage from '@/assets/images/skills/typescript.svg'
import nodeLogoImage from '@/assets/images/skills/node-js.svg'
import nextLogoImage from '@/assets/images/skills/next-js.svg'
import reactNativeLogoImage from '@/assets/images/skills/react-native.svg'
import electronLogoImage from '@/assets/images/skills/electron.svg'
import gitLogoImage from '@/assets/images/skills/git.svg'
import goLang from '@/assets/images/skills/golang.svg'
import pythonLogoImage from '@/assets/images/skills/python.svg'
import phpLogoImage from '@/assets/images/skills/php.svg'
import mySql from '@/assets/images/skills/mysql.svg'
import postgresqlLogoImage from '@/assets/images/skills/postgresql.svg'
import mongoDBLogoImage from '@/assets/images/skills/mongodb.svg'
import angularLogoImage from '@/assets/images/skills/angular.svg'
import vueLogoImage from '@/assets/images/skills/vue.svg'
import dockerLogoImage from '@/assets/images/skills/docker.svg'

export const skills = [
  {
    name: 'React.js',
    description:
      'React.js é uma biblioteca JavaScript para criar interfaces de usuário interativas. Com componentes reutilizáveis e uma programação declarativa, constrói-se interfaces dinâmicas e escaláveis. É uma ferramenta poderosa para o desenvolvimento web moderno e eficiente.',
    logoImage: reactLogoImage,
  },
  {
    name: 'Typescript',
    description:
      'TypeScript é uma linguagem de programação de código aberto que adiciona verificação de tipos ao JavaScript. Com ela, é possível escrever código mais seguro e escalável, com detecção de erros em tempo de compilação. É amplamente utilizado em projetos JavaScript de grande escala para desenvolvimento confiável e eficiente.',
    logoImage: typescriptLogoImage,
  },

  {
    name: 'Go',
    description:
      'Go, também conhecida como Golang, é uma linguagem de programação eficiente e concorrente. Projetada pelo Google, ela combina a simplicidade de sintaxe com recursos avançados, como coleta de lixo automática e concorrência nativa. É amplamente usada para desenvolvimento de sistemas de rede, serviços web e aplicativos de alta performance.',
    logoImage: goLang,
  },
  {
    name: 'Next.js',
    description:
      'Next.js é um framework que permite a construção de aplicativos web modernos e escaláveis. Ele combina as vantagens do React com recursos como renderização do lado do servidor, roteamento avançado e otimizações de desempenho. Com Next.js, é fácil criar aplicativos rápidos, com boa experiência do usuário e fácil manutenção.',
    logoImage: nextLogoImage,
  },
  {
    name: 'Node.js',
    description:
      'Node.js é uma plataforma de programação em JavaScript, ótima para desenvolver aplicativos de servidor. Com ela, posso executar meu código JavaScript no lado do servidor e aproveitar sua natureza assíncrona e orientada a eventos. É incrível porque posso criar aplicativos escaláveis e rápidos, com uma ampla variedade de bibliotecas disponíveis.',
    logoImage: nodeLogoImage,
  },
  {
    name: 'Docker',
    description:
      'O Docker é uma plataforma de virtualização de contêineres que permite empacotar, distribuir e executar aplicativos e suas dependências de forma isolada. Isso simplifica o desenvolvimento e implantação, garantindo consistência entre diferentes ambientes.',
    logoImage: dockerLogoImage,
  },
  {
    name: 'React Native',
    description:
      'React Native é um framework de desenvolvimento de aplicativos móveis multiplataforma baseado no React. Com React Native, é possível criar aplicativos nativos para iOS e Android usando JavaScript e componentes reutilizáveis. Ele oferece alto desempenho e uma experiência de usuário nativa, permitindo o compartilhamento de código entre as plataformas.',
    logoImage: reactNativeLogoImage,
  },
  {
    name: 'Electron',
    description:
      'Com ele, é possível criar aplicativos usando HTML, CSS e JavaScript para Windows, macOS e Linux. O Electron combina o poder do Chromium e do Node.js, permitindo que os desenvolvedores construam aplicativos de desktop com interfaces ricas em recursos e alto desempenho.',
    logoImage: electronLogoImage,
  },
  {
    name: 'MongoDB',
    description:
      'MongoDB é um banco de dados NoSQL de alta performance e escalabilidade. Com sua estrutura de documentos flexível e indexação poderosa, é ideal para armazenar e processar grandes volumes de dados não estruturados. É amplamente utilizado em aplicações web, análise de dados e gerenciamento de conteúdo, oferecendo agilidade e eficiência no armazenamento e acesso aos dados.',
    logoImage: mongoDBLogoImage,
  },
  {
    name: 'Angular',
    description:
      'Angular é uma poderosa plataforma de desenvolvimento de aplicativos web. Com base no TypeScript, oferece um conjunto abrangente de recursos para criação de interfaces de usuário dinâmicas e interativas. Com suporte a componentização, roteamento, injeção de dependência e reatividade, o Angular é amplamente utilizado para construir aplicações web escaláveis e de alto desempenho.',
    logoImage: angularLogoImage,
  },
  {
    name: 'Vue',
    description:
      'Vue2 é um framework JavaScript progressivo e de fácil aprendizado para criação de interfaces de usuário interativas. Com uma sintaxe intuitiva, ele permite criar componentes reutilizáveis e oferece recursos avançados, como vinculação de dados bidirecional e renderização eficiente.',
    logoImage: vueLogoImage,
  },
  {
    name: 'Git',
    description:
      'O Git é um sistema de controle de versão amplamente utilizado. Ele permite que você acompanhe e registre alterações em arquivos, colabore com outros desenvolvedores e reverta alterações indesejadas. É eficiente, flexível e essencial para o desenvolvimento de software moderno.',
    logoImage: gitLogoImage,
  },
  {
    name: 'Python',
    description:
      'Python é uma linguagem de programação de alto nível, interpretada e versátil. Com uma sintaxe limpa e legível, é amplamente usada para desenvolvimento web, análise de dados, automação, inteligência artificial e muito mais. Com sua vasta biblioteca padrão e comunidade ativa, é uma escolha popular para programadores de todos os níveis de experiência.',
    logoImage: pythonLogoImage,
  },
  {
    name: 'PHP',
    description:
      'PHP é uma linguagem de programação amplamente usada para desenvolvimento web. É especialmente adequada para criar sites dinâmicos e interativos. Com sua vasta comunidade e extensa biblioteca, o PHP permite integrar bancos de dados, processar formulários e criar aplicativos web robustos de forma eficiente.',
    logoImage: phpLogoImage,
  },
  {
    name: 'MySQL',
    description:
      'MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é amplamente utilizado em aplicações web para armazenar e gerenciar grandes quantidades de dados. Com sua rápida velocidade de processamento e recursos avançados, como suporte a transações e replicação.',
    logoImage: mySql,
  },
  {
    name: 'Postgresql',
    description:
      'PostgreSQL é um banco de dados relacional de código aberto conhecido por sua confiabilidade, desempenho e recursos avançados. Com suporte a transações ACID, replicação, extensibilidade e recursos geoespaciais, é uma escolha popular para empresas e projetos que exigem um banco de dados escalável e flexível.',
    logoImage: postgresqlLogoImage,
  },
]
