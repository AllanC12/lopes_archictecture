'use client'

import { useState } from "react";

import Slogan from "./Slogan";

import styles from "../components/sass_components/Banner.module.scss";


const Banner = () => {

  const [showSlogan,setShowSlogan] = useState<Boolean>(false)

  setTimeout(() => {
    setShowSlogan(true)
  },6200)

  return (
    <div className={styles.banner}>
      {showSlogan && <Slogan/>}
    </div>
  );
};

export default Banner;
