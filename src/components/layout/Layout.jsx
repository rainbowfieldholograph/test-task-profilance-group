import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import styles from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
