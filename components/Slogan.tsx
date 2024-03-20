"use client";

import { useEffect } from "react";

import styles from "../components/sass_components/Slogan.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import ButtonBanner from "./buttons/ButtonBanner";
import ButtonContacts from "./buttons/ButtonContacts";

const Slogan = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, delay: 100 });
  }, []);

  return (
    <>
      <p className={styles.slogan_banner}>
        <span className={styles.span_slogan} data-aos="fade-right">
          Arquitetura que ecoa a história,
        </span>
        <span className={styles.span_slogan} data-aos="fade-left">
          celebra o presente
        </span>
        <span className={styles.span_slogan} data-aos="fade-right">
          e vislumbra o futuro.
        </span>
      </p>
      <div className={styles.buttons}>
         <ButtonBanner valueBtn="Sobre"/>
         <ButtonContacts valueBtn="Contatos"/>
      </div>
    </>
  );
};

export default Slogan;
