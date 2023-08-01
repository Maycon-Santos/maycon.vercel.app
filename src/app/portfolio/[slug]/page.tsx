'use client'

import { NextPage } from 'next'
import slugify from 'slugify'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout/layout'
import Gallery from '@/components/shared/gallery/gallery'
import { projects } from '@/data/projects'
import styles from './page.module.css'
import PortfolioCards from '@/components/portfolio-cards/portfolio-cards'

type PortfolioPageProps = {
  params: {
    slug: string
  }
}

const Portfolio: NextPage<PortfolioPageProps> = (props) => {
  const {
    params: { slug },
  } = props
  const router = useRouter()

  const project = projects.find(
    ({ name }) => slugify(name, { strict: true, lower: true }) === slug,
  )

  if (!project) {
    return null
  }

  return (
    <Layout>
      <div className={styles.wrapper}>
        <button
          className={styles['back-button']}
          onClick={() => router.back()}
          aria-label="voltar"
        >
          <i className="symbol">arrow_back</i>
        </button>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.name}</h1>
          <span className={styles.description}>{project.description}</span>
        </header>
        <div className={styles['gallery-container']}>
          <Gallery medias={project?.medias} thumbs />
        </div>
        <div className={styles['see-more-container']}>
          <h2 className={styles['see-more-title']}>
            Veja <span>MAIS</span>
          </h2>
          <div className={styles['portfolio-cards-container']}>
            <PortfolioCards
              items={projects.filter((item) => item !== project)}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
