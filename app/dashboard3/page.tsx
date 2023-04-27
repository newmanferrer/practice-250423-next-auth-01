import styles from './page.module.scss'

export default function DashboardPage3() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>
        Dashboard Page 3
      </h1>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        Super Secret Page
      </h2>
      <h3 className={`${styles.container__title} ${styles.container__title_h3}`}>
        this is a server component
      </h3>
    </div>
  )
}
