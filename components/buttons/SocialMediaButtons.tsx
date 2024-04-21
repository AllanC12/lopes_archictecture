'use client'

import { useEffect } from "react";

import Link from "next/link";

import styles from "../buttons/sass_buttons/SocialMediaButtons.module.scss";

import { initAnimations } from "@/aos/aos";

import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const SocialMediaButtons = () => {

  useEffect(() => {
    initAnimations()
  },[])
  
  return (
    <>
      <div className={styles.card}>

        <Link
        data-aos="fade-right"
          className={`${styles.socialContainer} ${styles.containerTwo}  ${styles.container_icon}`}
          href="#"
        >
          <MdOutlineMailOutline/>
        </Link>


        <Link
          data-aos="fade-left"
          className={`${styles.socialContainer} ${styles.containerFour}  ${styles.container_icon}`}
          href="#"
        >
          <FaWhatsapp/>
        </Link>
      </div>
    </>
  );
};

export default SocialMediaButtons;
