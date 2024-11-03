"use client";

import { useState, useEffect, useRef } from "react";

import styles from "../components/sass_components/Slogan.module.css";

import { initAnimationsAos } from "../aos/aos";

import ButtonAbout from "./buttons/ButtonAbout";
import ButtonContacts from "./buttons/ButtonContacts";

const Slogan = () => {
  const [showSlogan, setShowSlogan] = useState<Boolean>(false);
  const span_one = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    initAnimationsAos();
    setShowSlogan(true);
  }, []);

  setTimeout(() => {
    setShowSlogan(true);
  }, 6000);

  return (
    <>
      {showSlogan && (
        <>
          <div className={styles.slogan_banner}>
            <span ref={span_one} className={styles.span_slogan}>
              Onde a funcionalidade guia a estética.
            </span>
          </div>
          <div className={styles.buttons}>
            <ButtonAbout valueBtn="Sobre" />
            <ButtonContacts valueBtn="Contatos" />
          </div>
        </>
      )}
    </>
  );
};

export default Slogan;
