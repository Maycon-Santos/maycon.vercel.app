'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import SocialButtons from '@/components/social-buttons'
import ProfileAside from '@/components/profile-aside'
import Section from '@/components/shared/section'
import SkillCards from '@/components/skill-cards'
import Education from '@/components/education'
import styles from './page.module.css'

export default function Home() {
  const [asideIsOpen, setAsideIsOpen] = useState(false)

  return (
    <>
      <Navbar onOpenAside={() => setAsideIsOpen(true)} />
      <main className={styles.main}>
        <Section>
          <Section.Header>
            <Section.Title
              fragmentSizes={['large']}
              fragmentStyles={['outline']}
            >
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
          <Section.Header align="right">
            <Section.Title
              fragmentSizes={['medium', 'large']}
              fragmentStyles={['fill', 'outline']}
              fragmentTextTransforms={['capitalize', 'uppercase']}
            >
              Hard skills
            </Section.Title>
          </Section.Header>
          <Section.Body paddingLeft={false} paddingRight={false}>
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
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic
          </Section.Body>
        </Section>

        <Section>
          <Section.Header>
            <Section.Title
              fragmentSizes={['sm-large']}
              fragmentStyles={['outline']}
              fragmentTextTransforms={['uppercase']}
            >
              Formação
            </Section.Title>
          </Section.Header>
          <Section.Body>
            <Education />
          </Section.Body>
        </Section>

        <hr className={styles.separator} />

        <Section>
          <Section.Header align="right">
            <Section.Title
              fragmentSizes={['medium', 'sm-large']}
              fragmentStyles={['fill', 'outline']}
              fragmentTextTransforms={['capitalize', 'uppercase']}
            >
              Meu portifólio
            </Section.Title>
          </Section.Header>
          <Section.Body></Section.Body>
        </Section>

        {Array(100).fill(<br />)}
      </main>
      <SocialButtons />
      <ProfileAside open={asideIsOpen} onClose={() => setAsideIsOpen(false)} />
    </>
  )
}
