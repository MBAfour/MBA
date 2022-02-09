import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.menu}>
          {/*로그인 하지 않았을 때*/}
          <li className={styles.li}>
            <Link to="/login">LOGIN</Link>
          </li>
          <li className={styles.li}>
            <Link to="/signup">SIGN UP</Link>
          </li>
          {/*로그인 후*/}
          <li className={styles.li}>
            <Link to="/logout">LOGOUT</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
