import React from 'react'
import styles from './styles.module.css'
import igniteLogoImg from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
        <img className={styles.img} src={igniteLogoImg} alt="" />
    </header>
  )
}
