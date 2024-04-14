'use client'

import { useRef,useEffect } from 'react';

import styles from '../shapes/sass_shapes/Square.module.scss';

interface propsSquare {
    isWhite: boolean
    isTransparent: boolean
}

const Square = ({isWhite,isTransparent}: propsSquare) => {

  const refSquare = useRef<HTMLDivElement | null>(null)

  const definePropertiesSquare = () => {
    if(isWhite){
      refSquare.current?.style.setProperty('background-color','#fff')  

    }
    if(isTransparent){
      refSquare.current?.style.setProperty('background-color','transparent')  
    }
 }

 useEffect(() => {
   definePropertiesSquare()
 },[])

  return (
    <div className={styles.square} ref={refSquare}></div>
  )
}

export default Square