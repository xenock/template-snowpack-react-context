import React from 'react'
import styles from '../App.module.css'
import sword from '../sword.png'

const Main = () => {
  return (
    <main className={styles.app}>
      <img src={sword} className={styles.appLogo} alt='logo' />
    </main>
  )
}

export default Main
