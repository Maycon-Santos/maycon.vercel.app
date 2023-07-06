import Image from 'next/image'
import { skills } from '@/data/skills'
import styles from './skill-cards.module.css'

const SkillCards: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles['card-list']}>
        {skills.map(({ name, description, logoImage }) => {
          return (
            <li className={styles['card-item']} key={name}>
              <div className={styles['skill-image-container']}>
                <Image
                  src={logoImage}
                  className={styles['skill-image']}
                  alt=""
                />
              </div>
              <h3 className={styles['skill-name']}>{name}</h3>
              <span className={styles['skill-description']}>{description}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SkillCards
