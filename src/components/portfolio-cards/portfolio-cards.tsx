import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'
import { Project } from '@/data/projects'
import styles from './portfolio-cards.module.css'

type PortfolioCardsProps = {
  items: Project[]
}

const PortfolioCards: React.FC<PortfolioCardsProps> = (props) => {
  const { items } = props

  return (
    <div className={styles.wrapper}>
      <ul className={styles['card-list']}>
        {items.map(({ name, image }) => (
          <li className={styles['card-item']} key={name}>
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
