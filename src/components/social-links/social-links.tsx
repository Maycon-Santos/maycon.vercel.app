import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './social-links.module.css'
import { socialData } from '@/data/profile'

type SocialLinksProps = {}

const SocialLinks: React.FC<SocialLinksProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['social-list']}>
        {socialData.map(({ icon, label, link, name }) => (
          <Link
            href={link}
            target="_blank"
            className={styles['social-item']}
            key={name}
          >
            <div className={styles['social-icon-container']}>
              <Image src={icon} alt="" />
            </div>
            <span className={styles['social-name']}>
              {name}: {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
