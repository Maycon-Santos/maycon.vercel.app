'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import SocialButtons from '@/components/social-buttons'
import ProfileAside from '@/components/profile-aside'
import Section from '@/components/shared/section'
import styles from './page.module.css'

export default function Home() {
  const [asideIsOpen, setAsideIsOpen] = useState(false)

  return (
    <>
      <Navbar onOpenAside={() => setAsideIsOpen(true)} />
      <main className={styles.main}>
        <Section>
          <Section.Heading align="left">
            <Section.Title
              fragmentSizes={['large']}
              fragmentStyles={['outline']}
            >
              Olá,
            </Section.Title>
            <Section.Title fragmentSizes={['medium']} fragmentStyles={['fill']}>
              Bem-vindo(a)!
            </Section.Title>
          </Section.Heading>
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

        {Array(100).fill(<br />)}
      </main>
      <SocialButtons />
      <ProfileAside open={asideIsOpen} onClose={() => setAsideIsOpen(false)} />
    </>
  )
}
