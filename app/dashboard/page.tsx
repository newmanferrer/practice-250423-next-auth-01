'use client'

import { useSession } from 'next-auth/react'
import { SignInButton, SignOutButton } from '../components'
import styles from './page.module.scss'

export default function DashboardPage() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      //* The user is not authenticated, handle it here
      console.log('Not logged in!')
    }
  })

  if (status === 'loading') {
    return (
      <div className={styles.loading_wrapper}>
        <span className={styles.loading_wrapper__span}>Loading... or unauthenticated</span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>Dashboard Page</h1>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        Super Secret Page
      </h2>
      <h3 className={`${styles.container__title} ${styles.container__title_h3}`}>
        this is a client component
      </h3>

      <div className={styles.container__buttons_wrapper}>
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  )
}
