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
          Sou um desenvolvedor fullstack apaixonado por criar experiências
          incríveis no frontend. Com foco em Next.js, React, TypeScript, React
          Native e Git, construo aplicações web e mobile rápidas, escaláveis e
          elegantes. Com sólidos conhecimentos em controle de versão e boas
          práticas, entrego soluções de alta qualidade. Comprometido com
          aprendizado contínuo e resolução de problemas, estou pronto para
          transformar suas ideias em realidade e colaborar em projetos
          desafiadores. Vamos trabalhar juntos para alcançar resultados
          incríveis!
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the s standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic
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
