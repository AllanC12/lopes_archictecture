import React from "react";

import styles from '../sass_components/buttonStyles/ButtonIconMenu.module.scss';

type Props = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonIconMenu = ({setMenuOpen}:Props) => {
  return (
    <div onClick={() => setMenuOpen(true)} className={styles.icon}>
      
      <input type="checkbox" className={styles.checkbox} />
      <label htmlFor="checkbox" className={styles.toggle}>
        <div className={`${styles.bars} ${styles.bar1}`}></div>
        <div className={`${styles.bars} ${styles.bar2}`}></div>
        <div className={`${styles.bars} ${styles.bar3}`}></div>
      </label>
    </div>
  );
};

export default ButtonIconMenu;
