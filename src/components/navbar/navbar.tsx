import Image from 'next/image'
import { profileImage, profileName, profileOffice } from '@/data/profile'
import styles from './navbar.module.css'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles['profile-container']}>
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
      </div>
    </nav>
  )
}

export default Navbar
