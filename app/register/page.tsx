import { RegisterForm } from '../components'
import styles from './page.module.scss'

export default async function RegisterPage() {
  return (
    <main className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>Register Page</h1>

      <RegisterForm />
    </main>
  )
}
