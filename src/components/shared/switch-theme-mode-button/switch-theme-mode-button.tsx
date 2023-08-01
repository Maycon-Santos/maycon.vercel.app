'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { useThemeMode } from '@/components/shared/theme-mode'
import lightModeIcon from '@/assets/images/light-mode-icon.png'
import darkModeIcon from '@/assets/images/dark-mode-icon.png'
import styles from './switch-theme-mode-button.module.css'

const SwitchThemeModeButton: React.FC = () => {
  const { match, toggleThemeMode } = useThemeMode()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <button
      className={classNames(
        styles.wrapper,
        isClient && match({ dark: styles.dark, light: styles.light }),
      )}
      onClick={toggleThemeMode}
      aria-label={
        isClient
          ? match({
              dark: 'mudar para tema claro',
              light: 'mudar para tema escuro',
            })
          : 'mudar tema'
      }
    >
      {isClient && (
        <Image
          src={match({ dark: darkModeIcon, light: lightModeIcon })}
          className={styles.icon}
          alt=""
        />
      )}
    </button>
  )
}

export default SwitchThemeModeButton
