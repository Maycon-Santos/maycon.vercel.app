import { StaticImageData } from 'next/image'
import { Media } from '@/components/shared/gallery'

import snakeGameImage from '@/assets/images/projects/snake/image-1.png'
import snakeGameImage2 from '@/assets/images/projects/snake/image-2.png'
import snakeGameImage3 from '@/assets/images/projects/snake/video.gif'

import enevaImage from '@/assets/images/projects/eneva/image-1.png'
import enevaImage2 from '@/assets/images/projects/eneva/image-2.png'
import enevaImage3 from '@/assets/images/projects/eneva/video.gif'

import cortevaImage from '@/assets/images/projects/corteva/image-1.png'
import cortevaImage2 from '@/assets/images/projects/corteva/image-2.png'
import cortevaImage3 from '@/assets/images/projects/corteva/video.gif'

import risqueImage from '@/assets/images/projects/risque/image-1.png'
import risqueImage2 from '@/assets/images/projects/risque/image-2.png'
import risqueImage3 from '@/assets/images/projects/risque/video.gif'

import infograficoANPImage from '@/assets/images/projects/Infografico/image-1.png'
import infograficoANPImage2 from '@/assets/images/projects/Infografico/image-2.png'
import infograficoANPImage3 from '@/assets/images/projects/Infografico/video.gif'

export type Project = {
  name: string
  description: string
  image: StaticImageData
  medias: Media[]
  links?: {
    video?: string
    repository?: string
    liveDemo?: string
  }
}

export const projects: Project[] = [
  {
    name: 'Jogo da Cobrinha Multiplayer com IA: Desafie seus Amigos ou Enfrente a Máquina!',
    description:
      'O projeto "Jogo da Cobrinha Multiplayer com IA" é um jogo desenvolvido para proporcionar uma experiência divertida e desafiadora, permitindo que os jogadores desafiem seus amigos em partidas de cobrinha ou enfrentem a inteligência artificial do jogo. O jogo possui suporte para multiplayer em rede local ou no mesmo computador, além de ser responsivo e funcionar em dispositivos móveis, como celulares.',
    image: snakeGameImage,
    medias: [
      {
        type: 'image',
        src: snakeGameImage,
        thumbSrc: snakeGameImage,
        alt: '',
      },
      {
        type: 'image',
        src: snakeGameImage2,
        thumbSrc: snakeGameImage2,
        alt: '',
      },
      {
        type: 'video',
        src: '/video/1GYQuk3ICwEFQ7b3NrN6_dsa0DaHdTLIT',
        thumbSrc: snakeGameImage3,
      },
    ],
    links: {
      video:
        'https://drive.google.com/file/d/16qrfBdScKx0X5mES1UlU9EIYrxUGi0WA/view?usp=sharing',
      repository: 'https://github.com/Maycon-Santos/snake-game',
    },
  },
  {
    name: 'Explorando as Conquistas da Eneva: Uma Jornada Virtual pelas Montanhas',
    description:
      'O projeto "Explorando as Conquistas da Eneva" é uma aplicação web interativa em 2D que permite aos usuários embarcar em uma jornada virtual pelas montanhas, descobrindo e aprendendo sobre as metas alcançadas pela Eneva, uma empresa líder no setor de energia. Nesta aplicação, os usuários poderão navegar por uma paisagem montanhosa onde encontram marcos que representam cada meta cumprida, obtendo informações detalhadas sobre cada uma delas.',
    image: enevaImage,
    medias: [
      {
        type: 'image',
        src: enevaImage,
        thumbSrc: enevaImage,
        alt: '',
      },
      {
        type: 'image',
        src: enevaImage2,
        thumbSrc: enevaImage2,
        alt: '',
      },
      {
        type: 'video',
        src: '/video/1Zu5kn4QLD6-0npRUuXlYW1diowfHbi9q',
        thumbSrc: enevaImage3,
      },
    ],
    links: {
      video:
        'https://drive.google.com/file/d/1qCY_qRHybi1A5a9Jq8Fo879c-7TBINxQ/view?usp=sharing',
    },
  },
  {
    name: 'Quiz Interativo Corteva: Gire a Roleta e Ganhe Prêmios!',
    description:
      'O projeto "Quiz Interativo Corteva" é uma aplicação web desenvolvida para ser exibida em uma TV touchscreen durante um evento da empresa. A proposta é oferecer aos participantes uma experiência de jogo divertida, educativa e interativa, na qual eles têm a chance de ganhar prêmios girando uma roleta virtual. A aplicação apresenta perguntas relacionadas à empresa Corteva, oferecendo uma oportunidade para os participantes testarem seu conhecimento e ganharem recompensas.',
    image: cortevaImage,
    medias: [
      {
        type: 'image',
        src: cortevaImage,
        thumbSrc: cortevaImage,
        alt: '',
      },
      {
        type: 'image',
        src: cortevaImage2,
        thumbSrc: cortevaImage2,
        alt: '',
      },
      {
        type: 'video',
        src: '/video/1gT49uLn5bz5hlTJNBiFdpzyB1x0J5USc',
        thumbSrc: cortevaImage3,
      },
    ],
    links: {
      video:
        'https://drive.google.com/file/d/1CCYNLwsH7QPBO4KggH_Ds75jxcqL8sEU/view?usp=sharing',
    },
  },
  {
    name: 'Simulador de Esmaltes RISQUÉ: Descubra seu Estilo Único',
    description:
      'O projeto "Simulador de Esmaltes RISQUÉ" é uma plataforma online desenvolvida para permitir que os usuários explorem a linha de produtos da marca RISQUÉ e experimentem diferentes tons de esmaltes em uma simulação interativa. A plataforma é projetada para oferecer uma experiência envolvente e personalizada, permitindo que os usuários encontrem o esmalte perfeito para complementar seus tons de pele.',
    image: risqueImage,
    medias: [
      {
        type: 'image',
        src: risqueImage,
        thumbSrc: risqueImage,
        alt: '',
      },
      {
        type: 'image',
        src: risqueImage2,
        thumbSrc: risqueImage2,
        alt: '',
      },
      {
        type: 'video',
        src: '/video/1Oe_1a_tIwz4P9Z5WUzVqExSeLJNu_X-f',
        thumbSrc: risqueImage3,
      },
    ],
    links: {
      liveDemo: 'https://www.risque.com.br/',
    },
  },
  {
    name: 'A Realidade do Saneamento Básico no Brasil',
    description:
      'Descubra a realidade do saneamento básico e endemias em cada estado e no Distrito Federal. O aplicativo interativo apresenta dados atualizados sobre cobertura, investimentos per capita e participação privada. Explore indicadores essenciais para entender a qualidade dos serviços de água e esgoto. Além disso, conheça os investimentos previstos para os próximos três anos, permitindo uma visão abrangente do futuro do setor. Tome decisões informadas com informações detalhadas e relevantes em um só lugar.',
    image: infograficoANPImage,
    medias: [
      {
        type: 'image',
        src: infograficoANPImage,
        thumbSrc: infograficoANPImage,
        alt: '',
      },
      {
        type: 'image',
        src: infograficoANPImage2,
        thumbSrc: infograficoANPImage2,
        alt: '',
      },
      {
        type: 'video',
        src: '/video/1VaSsCgZf318qYKb534dcBPXSeyYECyxU',
        thumbSrc: infograficoANPImage3,
      },
    ],
    links: {
      video:
        'https://drive.google.com/file/d/169xxq-2of__cr-_DE2922GgNwsN14cxP/view?usp=sharing',
      liveDemo:
        'https://noticias.portaldaindustria.com.br/especiais/infografico-a-realidade-do-saneamento-basico-no-brasil/',
    },
  },
]
