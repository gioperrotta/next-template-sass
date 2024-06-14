import { ToogleTheme } from '@/components/ToogleTheme'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HOME</h1>
      <ToogleTheme />
    </main>
  )
}
