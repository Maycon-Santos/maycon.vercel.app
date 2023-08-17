import { StaticImageData } from 'next/image'
import { Media } from '@/components/shared/gallery'

import codezoneLogoImage from '@/assets/images/experiences/codezone.jpg'
import hurbLogoImage from '@/assets/images/experiences/hurb.jpg'
import olimpiadaDoConhecimentoImage from '@/assets/images/experiences/olimpiada-do-conhecimento.png'

import Olimpiada1Image from '@/assets/images/experiences/olimpiada-1.jpg'
import Olimpiada2Image from '@/assets/images/experiences/olimpiada-2.jpg'
import Olimpiada3Image from '@/assets/images/experiences/olimpiada-3.png'

export type Experience = {
  logoImage: StaticImageData
  company: string
  dateRange: string[]
  description: string[]
  medias?: Media[]
  links?: {
    text: string
    href: string
  }[]
}

export const experiences: Experience[] = [
  {
    logoImage: hurbLogoImage,
    company: 'Hurb',
    dateRange: ['2019', '2022'],
    description: [
      'Trabalhar na Hurb, uma renomada agência de turismo digital, foi uma experiência extremamente enriquecedora para o meu crescimento profissional. Ao longo do meu tempo nesta empresa inovadora, tive a oportunidade de me envolver com um conjunto diversificado de tecnologias que impulsionam a indústria do turismo e além.',
      'Uma das principais tecnologias que tive a chance de explorar foi o Node.js. Com essa plataforma de desenvolvimento, pude criar aplicações web de alto desempenho, escaláveis e em tempo real. Através do Node.js, fui capaz de desenvolver soluções eficientes e modernas, agregando valor aos projetos em que estive envolvido.',
      'Além do Node.js, também trabalhei com o Next.js, um poderoso framework baseado em React. Essa tecnologia me permitiu construir aplicações web modernas, com foco em desempenho e otimização de SEO. Através do Next.js, pude entregar experiências de usuário envolventes e interfaces de alta qualidade.',
      'Durante minha jornada na Hurb, também tive a oportunidade de trabalhar com GoLang, uma linguagem de programação altamente eficiente e escalável. Com o GoLang, pude criar aplicações de alta performance, aproveitando ao máximo os recursos do hardware e garantindo tempos de resposta rápidos.',
      'Quanto aos bancos de dados, tive experiência com tecnologias como MySQL, PostgreSQL e MongoDB. Esses sistemas de gerenciamento de banco de dados me permitiram armazenar, acessar e manipular dados de forma eficiente, garantindo a integridade e a confiabilidade das informações.',
      'Além disso, a Hurb valoriza a qualidade do código e a estabilidade dos sistemas, incentivando a prática de testes unitários. Através desses testes, pude garantir a qualidade do código que desenvolvi, detectando e corrigindo problemas de forma precoce e mantendo um alto nível de confiabilidade.',
      'Por fim, a empresa adota uma abordagem de microserviços, uma arquitetura moderna que permite o desenvolvimento de sistemas escaláveis e flexíveis. Trabalhar nesse contexto me permitiu colaborar com equipes multifuncionais, desenvolver serviços independentes e especializados, e criar sistemas mais robustos e escaláveis.',
      'Em resumo, a minha jornada na Hurb foi extremamente enriquecedora para o meu crescimento profissional. Através do trabalho com tecnologias como Node.js, Next.js, Python, GoLang, PHP e bancos de dados como MySQL, PostgreSQL e MongoDB, juntamente com a prática de testes unitários e a adoção de microserviços, ampliei meu conhecimento e desenvolvi habilidades valiosas. Estou confiante de que essas experiências na Hurb serão fundamentais para o meu crescimento contínuo e para o sucesso da minha carreira no setor de desenvolvimento de software.',
    ],
  },
  {
    logoImage: codezoneLogoImage,
    company: 'Codezone',
    dateRange: ['2018', '2019'],
    description: [
      'Trabalhei na Codezone Digital Business e tive a oportunidade incrível de participar de diversos projetos para grandes marcas, como Nestlé, Uber, Colgate e Banco do Brasil. Fiquei impressionado com a quantidade de projetos que recebemos de agências renomadas, como LiveTeam, AMPFY e Publicis. Foi muito gratificante ver a confiança que essas agências depositaram na Codezone.',
      'Durante o meu tempo na empresa, pude trabalhar com uma variedade de tecnologias modernas, como React, Angular, Vue, React Native e Node.js. Foi muito estimulante poder me envolver com diferentes ferramentas e aprender a aplicá-las em projetos reais. Essa diversidade tecnológica realmente reflete a versatilidade da Codezone e a capacidade de atender às demandas dos clientes em diferentes plataformas.',
      'Cada projeto foi único e apresentou seus próprios desafios. No entanto, com minha experiência e conhecimento, pude desenvolver soluções eficientes e de alta qualidade. Foi gratificante ver as marcas de renome reconhecendo o trabalho que fizemos e alcançando resultados impressionantes.',
      'Trabalhar com essas grandes marcas também proporcionou uma oportunidade única de colaborar com equipes talentosas e adquirir valiosas habilidades de comunicação e trabalho em equipe. Foi enriquecedor poder aprender com profissionais experientes e compartilhar conhecimentos uns com os outros.',
      'Além disso, enfrentei prazos apertados e situações de pressão, mas isso só me ajudou a desenvolver ainda mais minhas habilidades de resolução de problemas e minha capacidade de me adaptar a novos desafios. Acredito que esse ambiente de trabalho dinâmico me ajudou a crescer tanto pessoal quanto profissionalmente.',
      'No geral, minha experiência na Codezone Digital Business foi incrível. Tive a chance de trabalhar com tecnologias modernas, colaborar com grandes marcas e agências renomadas, além de desenvolver habilidades valiosas ao enfrentar desafios complexos. Estou extremamente grato por ter feito parte dessa equipe talentosa e contribuído para o sucesso dos projetos.',
    ],
  },
]

export const awards: Experience[] = [
  {
    logoImage: olimpiadaDoConhecimentoImage,
    dateRange: ['2017'],
    company:
      'Experiência de Destaque na Olimpíada do Conhecimento de Web Design da FIRJAN',
    description: [
      'Minha participação na Olimpíada do Conhecimento promovida pela FIRJAN foi uma experiência incrível e desafiadora! Desde a etapa escolar, na unidade de Niterói do SENAI, eu me destaquei e conquistei o primeiro lugar entre os alunos competidores.',
      'Avançando para a etapa estadual, que ocorreu na unidade de Maracanã, fiquei muito orgulhoso por alcançar o segundo lugar, competindo com os vencedores das demais unidades SENAI do estado do Rio de Janeiro. Foi uma competição acirrada e emocionante, na qual pude demonstrar meu conhecimento e habilidades.',
      'Minha participação foi na categoria de Web Design, na qual fui desafiado com tarefas que colocaram à prova minhas habilidades em HTML, CSS, JavaScript, PHP e MySQL. Essas linguagens e tecnologias são fundamentais para a criação e desenvolvimento de websites, e me dediquei ao máximo para apresentar soluções criativas e funcionais.',
      'Participar dessa olimpíada me proporcionou a oportunidade de aprimorar minhas habilidades técnicas, expandir meus conhecimentos na área de Web Design e também me conectar com outros estudantes talentosos. Foi uma jornada de aprendizado e superação, na qual enfrentei desafios estimulantes e ganhei valiosa experiência.',
      'Estou extremamente grato pela oportunidade de ter participado da Olimpíada do Conhecimento promovida pela FIRJAN e de representar minha unidade SENAI. Essa conquista certamente foi o primeiro grande passo na minha carreira no campo de desenvolvimento web.',
    ],
    links: [
      {
        text: 'Saiba mais no blog da FIRJAN',
        href: 'https://firjansenai.com.br/cursorio/blog/senai-rio-premia-alunos-na-fase-estadual-da-olimpiada-do-conhecimento',
      },
    ],
    medias: [
      {
        type: 'image',
        src: Olimpiada1Image,
        alt: '',
      },
      {
        type: 'image',
        src: Olimpiada2Image,
        alt: '',
      },
      {
        type: 'image',
        src: Olimpiada3Image,
        alt: '',
      },
    ],
  },
]
