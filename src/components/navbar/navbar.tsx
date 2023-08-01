import Image from 'next/image'
import Link from 'next/link'
import SwitchThemeModeButton from '@/components/shared/switch-theme-mode-button'
import { profileImage, profileName, profileOffice } from '@/data/profile'
import styles from './navbar.module.css'

type NavbarProps = {
  onOpenAside: () => void
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { onOpenAside } = props

  return (
    <nav className={styles.wrapper}>
      <Link href="/" className={styles['profile-container']}>
        <div className={styles['profile-image-container']}>
          <Image
            src={profileImage}
            className={styles['profile-image']}
            alt=""
          />
        </div>
        <div className={styles['profile-text-container']}>
          <span className={styles['profile-name']}>{profileName}</span>
          <span className={styles['profile-label']}>{profileOffice}</span>
        </div>
      </Link>
      <div className={styles['buttons-container']}>
        <SwitchThemeModeButton />
        <button
          className={styles['open-sidebar-button']}
          onClick={onOpenAside}
          aria-label="visualizar perfil"
        />
      </div>
    </nav>
  )
}

export default Navbar
