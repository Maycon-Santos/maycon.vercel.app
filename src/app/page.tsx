import Navbar from '@/components/navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{Array(10000).fill('test').join(' ')}</main>
    </>
  )
}
