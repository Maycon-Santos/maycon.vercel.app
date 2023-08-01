import { PropsWithChildren, useState } from 'react'
import Navbar from '../navbar'
import ProfileAside from '@/components/profile-aside'
import SocialButtons from '@/components/social-buttons'
import SwitchThemeModeButton from '@/components/shared/switch-theme-mode-button'
import styles from './layout.module.css'

const Layout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [asideIsOpen, setAsideIsOpen] = useState(false)

  return (
    <>
      <Navbar onOpenAside={() => setAsideIsOpen(true)} />
      <div className={styles.wrapper}>
        <ProfileAside
          open={asideIsOpen}
          onClose={() => setAsideIsOpen(false)}
        />
        <main className={styles.main}>
          {children}
          <footer className={styles.footer}>
            © 2023 Maycon Santos. All rights reserved.
          </footer>
        </main>
        <div className={styles.aside}>
          <div className={styles['switch-theme-mode-button-container']}>
            <SwitchThemeModeButton />
          </div>
          <SocialButtons />
        </div>
      </div>
    </>
  )
}

export default Layout
