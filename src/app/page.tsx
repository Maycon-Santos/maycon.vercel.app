import Navbar from '@/components/navbar'
import SocialButtons from '@/components/social-buttons'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{Array(100).fill(<br />)}</main>
      <SocialButtons />
    </>
  )
}
