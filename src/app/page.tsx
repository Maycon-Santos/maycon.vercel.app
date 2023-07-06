'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import SocialButtons from '@/components/social-buttons'
import ProfileAside from '@/components/profile-aside'
import styles from './page.module.css'

export default function Home() {
  const [asideIsOpen, setAsideIsOpen] = useState(false)

  return (
    <>
      <Navbar onOpenAside={() => setAsideIsOpen(true)} />
      <main className={styles.main}>{Array(100).fill(<br />)}</main>
      <SocialButtons />
      <ProfileAside open={asideIsOpen} onClose={() => setAsideIsOpen(false)} />
    </>
  )
}
