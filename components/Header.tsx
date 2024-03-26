import React from 'react'

import styles from '../components/sass_components/Header.module.css'

const Header = () => {
  return (
   <header className={styles.header}>
     <div className={styles.logo}>
        <span>Lopes <br/>Architecture</span>
     </div>
   </header>
  )
}

export default Header