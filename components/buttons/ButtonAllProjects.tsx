import React from 'react'

import styles from './buttonStyles/ButtonAllProjects.module.scss';

const ButtonAllProjects = () => {
  return (
    <span className={styles.fancy}>
    <span className={styles.top_key}></span>
    <span className={styles.text}>Ver Mais</span>
    <span className={styles.bottom_key_1}></span>
    <span className={styles.bottom_key_2}></span>
  </span>
  )
}

export default ButtonAllProjects