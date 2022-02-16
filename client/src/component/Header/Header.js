import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import LogoutProcess from '../../service/transaction/logout_process'
import styles from './Header.module.css'

const Header = ({logined}) => {
  console.log("logined ? : ")
  console.log(logined);
  /*
  const [login, setLogin] = useState(true)
  const onClick = () => {
    setLogin((prev) => !prev)
  }
  */

  logined = localStorage.getItem("mba-token");
  console.log("logined ?? : ")
  console.log(logined);

  return (
    <>
      <header className={styles.header}>
        <ul className={styles.menu}>
          {/*로그인, 로그아웃 하나의 버튼으로 전환*/}
          {logined ? (
            <li className={styles.li}>
                <Link to="/">
                <button className={styles.btn} onClick={LogoutProcess}>로그아웃
                </button>
                </Link>
              
            </li>
          ) : (
            <li className={styles.li}>
              <Link to="/signin">
                <button className={styles.btn}>로그인</button>
              </Link>
            </li>
          )}
          {logined ? (
            <li className={styles.li}>
            </li>
          ) : (
            <li className={styles.li}>
              <Link to="/signup"><button className={styles.btn}>회원가입</button></Link>
            </li>
          )}
          
        </ul>
      </header>
    </>
  )
          
};

export default Header
