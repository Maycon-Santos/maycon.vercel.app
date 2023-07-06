import Image from 'next/image'
import { education } from '@/data/education'
import styles from './education.module.css'

const Education: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles['education-list']}>
        {education.map(({ image, description }) => (
          <li className={styles['education-item']} key={description}>
            <div className={styles['education-image-container']}>
              <Image src={image} className={styles['education-image']} alt="" />
            </div>
            <span className={styles['education-description']}>
              {description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education
