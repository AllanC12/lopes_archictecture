'use client'

import { useRef,useEffect } from 'react'

import Image from 'next/image'

import runSlides from '../app/slider_config/run_slide'

import Slogan from "./Slogan";
import FooterBanner from "./FooterBanner";

import styles from "../components/sass_components/Banner.module.scss";

const Banner = () => {
  const refContainerSlide = useRef<HTMLDivElement>(null);

  useEffect(() => {
    runSlides(refContainerSlide)
  },[])
  
  return (
    <div id="init" className={styles.banner}>
      <Slogan/>
      <div
          ref={refContainerSlide}
          data-aos="fade-left"
          className={styles.slide_banner}
        >
          <Image
            className={styles.selected}
            src="/images/banner_one.png"
            layout="fill" objectFit="cover"
            alt="Imagem de projeto"
          />
          <Image
            src="/images/banner_two.png"
            layout="fill" objectFit="cover"
            alt="Imagem de projeto"
          />
          <Image
            src="/images/banner_three.png"
            layout="fill" objectFit="cover"
            alt="Imagem de projeto"
          />
        </div>
      <FooterBanner/>
    </div>
  );
};

export default Banner;
