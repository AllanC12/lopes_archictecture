"use client";

import { useState, useEffect, useRef } from "react";

import styles from "../components/sass_components/Slogan.module.css";

import { initAnimationsAos } from "../aos/aos";

import ButtonBanner from "./buttons/ButtonBanner";
import ButtonContacts from "./buttons/ButtonContacts";

const Slogan = () => {

  const [showSlogan, setShowSlogan] = useState<Boolean>(false);
  const span_one = useRef<HTMLSpanElement>(null);
  const span_two = useRef<HTMLSpanElement>(null);
  const span_three = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    initAnimationsAos()
  }, []);

  setTimeout(() => {
    setShowSlogan(true);
  }, 6000);


  return (
    <>
      {showSlogan && (
        <>
          <p className={styles.slogan_banner}>
            <span
              ref={span_one}
              className={styles.span_slogan}
              data-aos="fade-right"
            >
              Onde a funcionalidade 
            </span>
            <span
              ref={span_two}
              className={styles.span_slogan}
              data-aos="fade-left"
            >
             guia a estética.
            </span>
            {/* <span
              ref={span_three}
              className={styles.span_slogan}
              data-aos="fade-right"
            >
              e vislumbra o futuro.
            </span> */}
          </p>
          <div className={styles.buttons}>
            <ButtonBanner valueBtn="Sobre" />
            <ButtonContacts valueBtn="Contatos" />
          </div>
        </>
      )}
    </>
  );
};

export default Slogan;
