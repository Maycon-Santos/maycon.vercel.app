import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'
import { projects } from '@/data/projects'
import styles from './portfolio-cards.module.css'

const PortfolioCards: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles['card-list']}>
        {projects.map(({ name, image }) => (
          <li className={styles['card-item']} key={name}>
            {(() => {
              console.log(slugify(name), name)
              return null
            })()}
            <Link
              href={`/portfolio/${slugify(name, {
                strict: true,
                lower: true,
              })}`}
            >
              <Image src={image} className={styles['card-image']} alt="" />
              <span className={styles['card-label']}>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PortfolioCards
