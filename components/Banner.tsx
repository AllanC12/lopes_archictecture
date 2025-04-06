"use client";

import { useRef, useEffect } from "react";

import Image from "next/image";

import runSlides from "../app/slider_config/run_slide";

import Slogan from "./Slogan";
import FooterBanner from "./FooterBanner";

import styles from "../components/sass_components/Banner.module.scss";

const Banner = () => {
  const refContainerSlide = useRef<HTMLDivElement>(null);

  useEffect(() => {
    runSlides(refContainerSlide);
  }, []);

  return (
    <div id="init" className={styles.banner}>
      <Slogan />
      <div
        ref={refContainerSlide}
        data-aos="fade-left"
        className={styles.slide_banner}
      >
        <div
          style={{ backgroundImage: `url(/images/banner_one.png)` }}
          className={`${styles.selected} ${styles.banner_img} ${styles.banner_one}`}
        ></div>
        <div
          style={{ backgroundImage: `url(/images/banner_two.png)` }}
          className={`${styles.banner_img} ${styles.banner_two}`}
        ></div>
        <div
          style={{ backgroundImage: `url(/images/banner_three.png)` }}
          className={`${styles.banner_img} ${styles.banner_three}`}
        ></div>
      </div>
      <FooterBanner />
    </div>
  );
};

export default Banner;
