import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.link} to="/mypage">마이페이지</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to="/book">경매 등록</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar