import { getServerSession } from 'next-auth'
import styles from './page.module.scss'
import { authOptions } from './api/auth/[...nextauth]/route'
import { SignInButton, SignOutButton, User } from './components'

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  return (
    <main className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>
        Next Auth and Prisma
      </h1>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        ( Database: PostgreSQL )
      </h2>

      <div className={styles.container__buttons_wrapper}>
        <SignInButton />
        <SignOutButton />
      </div>

      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        Server Call (Server Component)
      </h2>
      <pre className={styles.container__pre}>{JSON.stringify(session, null, 2)}</pre>

      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        Client Call (Client Component)
      </h2>
      <User />
    </main>
  )
}
