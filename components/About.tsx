'use client'

import { useEffect } from "react";

import Image from "next/image";

import styles from "../components/sass_components/About.module.scss";

import { initAnimationsAos } from "@/aos/aos";

const About = () => {

  useEffect(() => { 
    initAnimationsAos()
  },[])

  return (
    <div id="about" className={styles.about}>
      <h2 className={styles.title_session_about}>
        <span className={styles.number_session_about}>2</span> Sobre mim
      </h2>
      <div className={`${styles.square_one} ${styles.square}`}></div>
      <div className={`${styles.square_two} ${styles.square}`}></div>

      <div className={styles.container_text_photo}>

        <div data-aos="fade-right"className={styles.text_about}>
          <p className={styles.text}>
            In reprehenderit consectetur do et non officia dolore anim excepteur
            dolor fugiat minim. Voluptate velit magna aliquip do et veniam
            dolore. Lorem irure excepteur esse est aute duis minim. Nisi Lorem
            in ut magna dolore velit occaecat anim mollit cupidatat.
          </p>
        </div>

        <div className={styles.container_photo}>
            <div className={styles.photo}>
                <Image data-aos="fade-down-right"src="/images/architect.jpg" width={320} height={370} alt="arquiteto"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
