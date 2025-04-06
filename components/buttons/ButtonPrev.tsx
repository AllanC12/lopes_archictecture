import React from 'react'
import {AiOutlineLeft} from "react-icons/ai";
import styles from "./sass_buttons/ButtonSlide.module.css";

const ButtonPrev = () => {
  return (
    <button className={`${styles.button_slide_prev} ${styles.button_slide}`}>
        <AiOutlineLeft />
    </button>
  )
}

export default ButtonPrev