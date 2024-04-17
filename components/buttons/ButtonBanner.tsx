'use client'
import React from "react";
import styles from "./sass_buttons/ButtonBanner.module.css";

type Props = {
  valueBtn: string;
};

const ButtonBanner = ({ valueBtn }: Props) => {
  return (
    <button data-aos="flip-left" className={styles.btn_17}>
      <span className={styles.text_container}>
        <span className={styles.text}>{valueBtn}</span>
      </span>
    </button>
  );
};

export default ButtonBanner;
