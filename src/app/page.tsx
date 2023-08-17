'use client'

import Section from '@/components/shared/section'
import SkillCards from '@/components/skill-cards'
import Education from '@/components/education'
import PortfolioCards from '@/components/portfolio-cards'
import Experiences from '@/components/experiences'
import Layout from '@/components/layout'
import SocialLinks from '@/components/social-links'
import { awards, experiences } from '@/data/experiences'
import { projects } from '@/data/projects'
import styles from './page.module.css'

export default function Home() {
  return (
    <Layout>
      <Section>
        <Section.Header className={styles['section-header-main']}>
          <Section.Title fragmentSizes={['large']} fragmentStyles={['outline']}>
            Olá,
          </Section.Title>
          <Section.Title fragmentSizes={['medium']} fragmentStyles={['fill']}>
            Bem-vindo(a)!
          </Section.Title>
        </Section.Header>
        <Section.Body>
          Olá, eu sou o Maycon Santos, um programador fullstack. Eu tenho
          experiência em desenvolver telas responsivas e aplicações escaláveis
          com testes unitários usando tecnologias como Go, Node.js, Express,
          Adonis.js, React, React Native, Nextjs entre outras. O que me
          diferencia como programador fullstack é a minha proatividade para
          buscar e criar soluções que atendam às necessidades dos meus clientes
          e parceiros. O meu objetivo é ser uma liderança de um time que
          desenvolve projetos inovadores e de qualidade. Você pode conhecer mais
          sobre o meu trabalho no meu perfil do Linkedin ou entrar em contato
          comigo pelo meu e-mail. Estou sempre disposto a aprender novas
          habilidades e acompanhar as principais notícias do mundo da
          tecnologia.
        </Section.Body>
      </Section>

      <Section>
        <Section.Header
          className={styles['section-header-skills']}
          align="right"
        >
          <Section.Title
            fragmentSizes={['medium', 'large']}
            fragmentStyles={['fill', 'outline']}
            fragmentTextTransforms={['capitalize', 'uppercase']}
          >
            Hard skills
          </Section.Title>
        </Section.Header>
        <Section.Body spacingLeft={false} spacingRight={false}>
          <SkillCards />
        </Section.Body>
      </Section>

      <Section>
        <Section.Header>
          <Section.Title
            fragmentSizes={['medium', 'large']}
            fragmentStyles={['fill', 'outline']}
            fragmentTextTransforms={['capitalize', 'uppercase']}
          >
            Soft skills
          </Section.Title>
        </Section.Header>
        <Section.Body>
          Uma das coisas que mais me ajudaram na minha carreira foi desenvolver
          habilidades interpessoais, como comunicação e trabalho em equipe. Isso
          me permitiu construir relacionamentos profissionais de confiança e
          colaboração, além de aprender com diferentes perspectivas e
          experiências. Também me tornei capaz de me adaptar a mudanças e lidar
          com pressão, o que é essencial em um mercado dinâmico e competitivo.
          Por fim, sou proativo para buscar e desenvolver soluções, sempre
          buscando aprimorar meus conhecimentos e competências. Essas são as
          qualidades que me diferenciam e me fazem crescer na minha carreira.
        </Section.Body>
      </Section>

      <Section>
        <Section.Header className={styles['section-header-education']}>
          <Section.Title
            fragmentSizes={['md-large']}
            fragmentStyles={['outline']}
            fragmentTextTransforms={['uppercase']}
          >
            Formação
          </Section.Title>
        </Section.Header>
        <Section.Body spacingLeft={false} spacingRight={false}>
          <Education />
        </Section.Body>
      </Section>

      <hr className={styles.separator} />

      <Section>
        <Section.Header
          className={styles['section-header-portfolio']}
          align="right"
        >
          <Section.Title
            fragmentSizes={['medium', 'md-large']}
            fragmentStyles={['fill', 'outline']}
            fragmentTextTransforms={['capitalize', 'uppercase']}
          >
            Meu portifólio
          </Section.Title>
        </Section.Header>
        <Section.Body>
          <PortfolioCards items={projects} />
        </Section.Body>
      </Section>

      <Section>
        <Section.Header
          className={styles['section-header-experiences']}
          align="center"
        >
          <Section.Title
            fragmentSizes={['medium']}
            fragmentStyles={['fill']}
            fragmentTextTransforms={['capitalize']}
          >
            Experiência
          </Section.Title>
          <Section.Title
            fragmentSizes={['sm-large']}
            fragmentStyles={['outline']}
            fragmentTextTransforms={['uppercase']}
          >
            Profissional
          </Section.Title>
        </Section.Header>
        <Section.Body>
          <Experiences items={experiences} />
        </Section.Body>
      </Section>

      <div className={styles['separator-2']}>
        <hr />
      </div>

      <Section>
        <Section.Header className={styles['section-header-award']}>
          <Section.Title
            fragmentSizes={['sm-large']}
            fragmentStyles={['outline']}
            fragmentTextTransforms={['uppercase']}
          >
            Premiação!
          </Section.Title>
        </Section.Header>
        <Section.Body>
          <Experiences items={awards} titleSize="small" descriptionFullWidth />
        </Section.Body>
      </Section>

      <Section>
        <Section.Header>
          <Section.Title fragmentSizes={['medium']}>
            Onde me encontrar:
          </Section.Title>
        </Section.Header>
        <Section.Body>
          <SocialLinks />
        </Section.Body>
      </Section>
    </Layout>
  )
}
