import Image from 'next/image'
import Link from 'next/link'

import { styles } from './Header.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.linkContainer}>
        <Image src="/logo.svg" alt="logo" width="90" height="90" />
        <h1 className={styles.h1}>WeatherApp</h1>
      </Link>
    </header>
  )
}
