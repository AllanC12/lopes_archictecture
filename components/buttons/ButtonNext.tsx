import React from 'react'
import {AiOutlineRight} from "react-icons/ai";
import styles from "./sass_buttons/ButtonSlide.module.css";

const ButtonNext = () => {
  return (
    <button className={`${styles.button_slide} ${styles.button_slide_next}`}>
        <AiOutlineRight />
    </button>
  )
}

export default ButtonNext