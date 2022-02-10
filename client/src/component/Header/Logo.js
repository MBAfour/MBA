import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <h1 className={styles.h1}>
        <Link className={styles.link} to='/'>MBA</Link>
      </h1>  
    </div>
  )
}

export default Logo