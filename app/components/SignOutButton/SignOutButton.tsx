'use client'

import { signOut } from 'next-auth/react'
import styles from './SignOutButton.module.scss'

export const SignOutButton = () => {
  return (
    <button className={styles.button} onClick={() => signOut()}>
      Sign out
    </button>
  )
}
