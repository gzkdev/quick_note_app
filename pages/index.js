import styles from '../styles/Home.module.css'
import AppHead from '../components/AppHead'

export default function Home() {
  return (
    <>
      <AppHead />
      <div className={styles.container}>
        <h1>Hello world</h1>
      </div>
    </>
  )
}
