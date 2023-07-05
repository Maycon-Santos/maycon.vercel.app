'use client'

import { useThemeMode } from '@/components/shared/theme-mode'
import styles from './switch-theme-mode-button.module.css'

const SwitchThemeModeButton: React.FC = () => {
  const { match } = useThemeMode()

  return (
    <button className={styles.wrapper}>
      <i className="symbol">
        {match({
          dark: 'light_mode',
          light: 'dark_mode',
        })}
      </i>
    </button>
  )
}

export default SwitchThemeModeButton
