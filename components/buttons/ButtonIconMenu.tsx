'use client'

import {useEffect, useRef} from 'react'

import styles from './sass_buttons/ButtonIconMenu.module.scss';

type Props = {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonIconMenu = ({menuOpen,setMenuOpen}:Props) => {

  const refCheckbox = useRef<HTMLInputElement>(null)


  const controlCheckbox = () => {
    if(menuOpen){
      refCheckbox.current!.checked = true
    }else{
      refCheckbox.current!.checked = false
    }
  }
  
  const handleVisibilityMenu = () => {
    if(menuOpen){
      setMenuOpen(false)
    }else{
      setMenuOpen(true)
    }
  }
  
  useEffect(() => {
    controlCheckbox()
  },[menuOpen])

  return (
    <div onClick={handleVisibilityMenu} className={styles.icon}>
      
      <input ref={refCheckbox} type="checkbox" className={styles.checkbox} />
      <label htmlFor="checkbox" className={styles.toggle}>
        <div className={`${styles.bars} ${styles.bar1}`}></div>
        <div className={`${styles.bars} ${styles.bar2}`}></div>
        <div className={`${styles.bars} ${styles.bar3}`}></div>
      </label>
    </div>
  );
};

export default ButtonIconMenu;
