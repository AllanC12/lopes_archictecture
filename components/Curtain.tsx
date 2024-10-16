'use client'

import styles from "../components/sass_components/Curtain.module.css";

import { useRef,useEffect,useState, RefObject } from "react";

const Curtain = () => {
  const text_curtain = useRef<HTMLDivElement>(null)
  const curtain = useRef<HTMLDivElement>(null)
  const [pageLoaded,setPageLoaded] = useState<boolean>(false)
  const timeInDevEnv = 3200
  const timeInProdEnv = 5800

  const hideElements = (element: HTMLDivElement | null,timer: number) => {
    setTimeout(() => {
      if(element !== null){
        element?.style.setProperty('display', 'none')
      }
    },timer)
  }
  useEffect(() => {
    setPageLoaded(true)
  },[])

  useEffect(() => {
    hideElements(text_curtain.current, timeInProdEnv - 100)
    hideElements(curtain.current,timeInProdEnv)
  },[pageLoaded])



  return (
    <div ref={curtain} className={styles.curtain}>
      <div ref={text_curtain}>
      <div className={styles.text_curtain}>
        <span></span>
        <span>{pageLoaded && "PORTFÓLIO DE ARQUITETURA"}</span>
        <span></span>
      </div>
      <div className={`${styles.text_curtain} ${styles.text_curtain_two}`}>
        <span></span>
        <span>{pageLoaded && "por Carlos Eduardo Lopes"}</span>
        <span></span>
      </div>
      </div>

    </div>
  );
};



export default Curtain;
