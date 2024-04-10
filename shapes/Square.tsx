'use client'

import { useRef,useEffect } from 'react';

import styles from '../shapes/sass_shapes/Square.module.scss';

interface propsSquare {
    isBlack: boolean
}

const Square = ({isBlack}: propsSquare) => {

  const refSquare = useRef<HTMLDivElement | null>(null)

  const definePropertiesSquare = () => {
    if(isBlack){
      refSquare.current?.style.setProperty('background-color','black')  
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