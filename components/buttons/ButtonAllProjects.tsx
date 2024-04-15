import React from 'react'

import styles from './buttonStyles/ButtonAllProjects.module.scss';

const ButtonAllProjects = () => {
  return (
    <a className={styles.fancy} href="#">
    <span className={styles.top_key}></span>
    <span className={styles.text}>Ver Mais</span>
    <span className={styles.bottom_key_1}></span>
    <span className={styles.bottom_key_2}></span>
  </a>
  )
}

export default ButtonAllProjects