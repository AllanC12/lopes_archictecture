'use client'

import styles from './sass_buttons/ButtonContacts.module.css'

type Props = {
  valueBtn: string
}

const ButtonContacts = ({valueBtn}:Props) => {
  return (
    <button data-aos='flip-right' className={styles.button_contact}>
      <a href="#" className={styles.link_button}><span className={styles.span_button}>{valueBtn}</span></a> 
    </button>
  )
}

export default ButtonContacts