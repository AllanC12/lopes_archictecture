'use client'

import styles from "../components/sass_components/Curtain.module.css";

import { useRef,useEffect,useState } from "react";

const Curtain = () => {
  
  const curtain = useRef<HTMLDivElement>(null)
  const [pageLoaded,setPageLoaded] = useState<boolean>(false)

  const hideCurtain = () => {
    setTimeout(() => {
    if(curtain.current !== null){
      curtain.current?.style.setProperty('display', 'none')
    }
    },4000)
  }

  useEffect(() => {
      hideCurtain()
      setPageLoaded(true)
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
