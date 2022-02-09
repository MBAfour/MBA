import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/">MY PAGE</Link>
        </li>
        <li>
          <Link to="/">경매 등록</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar