'use client'

import { useEffect } from "react";

import { initAnimations } from "@/aos/aos";

import Image from "next/image";
import SocialMediaButtons from "./buttons/SocialMediaButtons";

import styles from "../components/sass_components/Contacts.module.css";


const Contacts = () => {

  useEffect(() => {
    initAnimations()
  },[])

  return (
    <div id="contacts" className={styles.contacts}>
      <h2 className={styles.title_session_contacts}>
        <span className={styles.number_session_contacts}>3</span> Como nos achar
      </h2>
      <div className={`${styles.square_one} ${styles.square}`}></div>
      <div className={`${styles.square_two} ${styles.square}`}></div>

      <div className={styles.title_container}>
        <div className={styles.line}></div>
        <h2 className={styles.title_contact_us}>Entre em contato</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.container_logo}>
        <Image
          src="/images/logo.png"
          width={500}
          height={400}
          alt="Imagem da logomarca"
          data-aos="fade-down-right"
        />
        
        <SocialMediaButtons/>
      </div>
    </div>
  );
};

export default Contacts;
