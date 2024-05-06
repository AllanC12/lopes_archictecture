'use client'

import styles from "../components/sass_components/Curtain.module.css";

import { useRef,useEffect,useState } from "react";

const Curtain = () => {
  
  const curtain = useRef<HTMLDivElement>(null)
  const [pageLoaded,setPageLoaded] = useState<boolean>(false)
  const timeInDevEnv = 4000
  const timeInProdEnv = 5000

  const hideCurtain = () => {
    setTimeout(() => {
    if(curtain.current !== null){
      curtain.current?.style.setProperty('display', 'none')
    }
    },timeInProdEnv)
  }

  useEffect(() => {
      hideCurtain()
      setPageLoaded(true)
      console.log('atualizado 2')
  },[])


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
