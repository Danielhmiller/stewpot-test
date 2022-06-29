import React from 'react'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <Footer />
    </>
  )
}

export default Layout