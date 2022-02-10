import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header () {
  const [login, setLogin] = useState(true)
  const onClick = () => {
    setLogin((prev) => !prev)
  }

  return (
    <>
      <header className={styles.header}>
        <ul className={styles.menu}>
          {/*로그인, 로그아웃 하나의 버튼으로 전환*/}
          {login ? (
          <li className={styles.li}><Link to="/signin"><button className={styles.btn} onClick={onClick}>로그인</button></Link></li>
          ) : (
          <li className={styles.li}><Link to="/"><button className={styles.btn} onClick={onClick}>로그아웃</button></Link></li>
          )}
          <li className={styles.li}>
            <Link to="/signup"><button className={styles.btn} onClick={onClick}>회원가입</button></Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
