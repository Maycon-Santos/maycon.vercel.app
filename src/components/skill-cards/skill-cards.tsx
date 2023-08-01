import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { skills } from '@/data/skills'
import styles from './skill-cards.module.css'

const SkillCards: React.FC = () => {
  const [seeAll, setSeeAll] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles['card-list']}>
          {skills.map(({ name, description, logoImage }) => {
            return (
              <li
                className={classNames(styles['card-item'], {
                  [styles['visible']]: seeAll,
                })}
                key={name}
              >
                <div className={styles['skill-image-container']}>
                  <Image
                    src={logoImage}
                    className={styles['skill-image']}
                    alt=""
                  />
                </div>
                <h3 className={styles['skill-name']}>{name}</h3>
                <span className={styles['skill-description']}>
                  {description}
                </span>
              </li>
            )
          })}
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <li
                className={classNames(styles['card-item'], styles['ghost'], {
                  [styles['visible']]: seeAll,
                })}
                key={index}
              />
            ))}
        </ul>
      </div>
      {!seeAll && (
        <button
          className={styles['see-all-button']}
          onClick={() => setSeeAll(true)}
        >
          VEJA MAIS SKILLS
        </button>
      )}
    </div>
  )
}

export default SkillCards
