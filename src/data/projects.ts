import snakeGameImage from '@/assets/projects/snake-game.jpg'
import enevaImage from '@/assets/projects/eneva.jpg'
import cortevaImage from '@/assets/projects/corteva.jpg'
import risqueImage from '@/assets/projects/risque.jpg'
import infograficoANPImage from '@/assets/projects/infografico-anp.png'

export const projects = [
  {
    name: 'Jogo da Cobrinha Multiplayer com IA: Desafie seus Amigos ou Enfrente a Máquina!',
    description:
      'O projeto "Jogo da Cobrinha Multiplayer com IA" é um jogo desenvolvido para proporcionar uma experiência divertida e desafiadora, permitindo que os jogadores desafiem seus amigos em partidas de cobrinha ou enfrentem a inteligência artificial do jogo. O jogo possui suporte para multiplayer em rede local ou no mesmo computador, além de ser responsivo e funcionar em dispositivos móveis, como celulares.',
    image: snakeGameImage,
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
    links: {
      liveDemo: 'https://www.risque.com.br/',
    },
  },
  {
    name: 'A Realidade do Saneamento Básico no Brasil',
    description:
      'Descubra a realidade do saneamento básico e endemias em cada estado e no Distrito Federal. O aplicativo interativo apresenta dados atualizados sobre cobertura, investimentos per capita e participação privada. Explore indicadores essenciais para entender a qualidade dos serviços de água e esgoto. Além disso, conheça os investimentos previstos para os próximos três anos, permitindo uma visão abrangente do futuro do setor. Tome decisões informadas com informações detalhadas e relevantes em um só lugar.',
    image: infograficoANPImage,
    links: {
      video:
        'https://drive.google.com/file/d/169xxq-2of__cr-_DE2922GgNwsN14cxP/view?usp=sharing',
      liveDemo:
        'https://noticias.portaldaindustria.com.br/especiais/infografico-a-realidade-do-saneamento-basico-no-brasil/',
    },
  },
]
