import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import styles from './page.module.scss'
import { SignInButton, SignOutButton } from '../components'

export default async function DashboardPage2() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>
        Dashboard Page 2
      </h1>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        Another Super Secret Page
      </h2>
      <h3 className={`${styles.container__title} ${styles.container__title_h3}`}>
        this is a server component
      </h3>

      <div className={styles.container__buttons_wrapper}>
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  )
}
