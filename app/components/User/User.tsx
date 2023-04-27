'use client'

import { useSession } from 'next-auth/react'
import styles from './User.module.scss'

export const User = () => {
  const { data: session } = useSession()
  console.log('User (Client Session): ', session)

  return <pre className={styles.pre}>{JSON.stringify(session, null, 2)}</pre>
}
