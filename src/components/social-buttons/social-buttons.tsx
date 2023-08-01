'use client'

import Image from 'next/image'
import classNames from 'classnames'
import { socialData } from '@/data/profile'
import styles from './social-buttons.module.css'
import { useState } from 'react'

const SocialButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <ul
        className={classNames(styles['button-list'], { [styles.open]: isOpen })}
      >
        {socialData.map(({ name, icon, label, link }) => (
          <li className={styles['button-item']} key={name}>
            <a href={link} target="_blank" title={label}>
              <Image src={icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
      <button
        className={styles['see-more-button']}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`${isOpen ? 'fechar' : 'abrir'} redes sociais`}
      >
        <i
          className={classNames('symbol', styles.icon, {
            [styles.close]: isOpen,
          })}
        >
          add
        </i>
      </button>
    </div>
  )
}

export default SocialButtons
