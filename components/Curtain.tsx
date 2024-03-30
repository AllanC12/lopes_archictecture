'use client'

import styles from "../components/sass_components/Curtain.module.css";

import { useRef,useEffect } from "react";

const Curtain = () => {
  const curtain = useRef<HTMLDivElement>(null)

  const hideCurtain = () => {
    setTimeout(() => {
    if(curtain.current !== null){
      curtain.current?.style.setProperty('display', 'none')
    }
    },6000)
  }

  // useEffect(() => {
  //     hideCurtain()
  // },[])


  return (
    <div ref={curtain} className={styles.curtain}>
      <div className={styles.text_curtain}>
        <span></span>
        <span>LOPES ARCHITECTURE</span>
        <span></span>
      </div>
    </div>
  );
};

export default Curtain;
