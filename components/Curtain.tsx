'use client'

import styles from "../components/sass_components/Curtain.module.css";

import { useRef,useEffect,useState } from "react";

const Curtain = () => {
  
  const curtain = useRef<HTMLDivElement>(null)
  const [pageLoaded,setPageLoaded] = useState<boolean>(false)
  const timeInDevEnv = 3200
  const timeInProdEnv = 4650

  const hideCurtain = () => {
    setTimeout(() => {
      if(curtain.current !== null){
        curtain.current?.style.setProperty('display', 'none')
      }
    },timeInProdEnv)
  }

  useEffect(() => {
    setPageLoaded(true)
  },[])

  useEffect(() => {
    hideCurtain()
  },[pageLoaded])



  return (
    <div ref={curtain} className={styles.curtain}>
      <div className={styles.text_curtain}>
        <span></span>
        <span>{pageLoaded && "LOPES ARCHITECTURE"}</span>
        <span></span>
      </div>
    </div>
  );
};



export default Curtain;
