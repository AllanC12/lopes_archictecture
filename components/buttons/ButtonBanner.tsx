import React from "react";
import styles from "../sass_components/buttonStyles/ButtonBanner.module.css";

type Props = {
  valueBtn: string;
};

const ButtonBanner = ({ valueBtn }: Props) => {
  return (
    <button className={styles.btn_17}>
      <span className={styles.text_container}>
        <span className={styles.text}>{valueBtn}</span>
      </span>
    </button>
  );
};

export default ButtonBanner;
