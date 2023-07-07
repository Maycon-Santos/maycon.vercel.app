import Image from 'next/image'
import classNames from 'classnames'
import Gallery from '@/components/shared/gallery'
import { Experience } from '@/data/experiences'
import styles from './experiences.module.css'

type ExperiencesProps = {
  items: Experience[]
  titleSize?: 'small' | 'medium'
}

const Experiences: React.FC<ExperiencesProps> = (props) => {
  const { items, titleSize = 'medium' } = props

  return (
    <div className={styles.wrapper}>
      <ul className={styles['experience-list']}>
        {items.map(
          ({ company, description, logoImage, dateRange, medias, links }) => (
            <li className={styles['experience-item']} key={company}>
              <Image
                src={logoImage}
                className={styles['company-logo']}
                alt=""
              />
              <h3
                className={classNames(
                  styles['company-name'],
                  styles[`company-name-${titleSize}`],
                )}
              >
                {company}{' '}
                <span className={styles['date-range']}>
                  ({dateRange.join(' - ')})
                </span>
              </h3>
              <div className={styles['experience-description']}>
                {description.map((fragment) => (
                  <p
                    className={styles['experience-description-paragraph']}
                    key={fragment}
                  >
                    {fragment}
                  </p>
                ))}
              </div>
              {medias && (
                <div className={styles['gallery-container']}>
                  <Gallery medias={medias} />
                </div>
              )}
              {links && (
                <ul className={styles['link-list']}>
                  {links.map(({ href, text }) => (
                    <li key={href} className={styles['link-item-container']}>
                      <a
                        href={href}
                        className={styles['link-item']}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

export default Experiences
