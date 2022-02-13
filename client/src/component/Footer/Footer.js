import React, { Component } from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contents}>
        <h2 className={styles.title}>
          충북대 중고 전공책 경매 사이트<br/>
          </h2>
      </div>
    </footer>
  )
}

export default Footer;