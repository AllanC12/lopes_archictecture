"use client";

import { useRef, useEffect } from "react";

import { initAnimationsAos } from "@/aos/aos";

import Image from "next/image";

import styles from "./sass_components/Logo.module.scss";

interface propsLogo {
  sizeTitleOne: number;
  sizeTitleTwo: number;
  width: number;
  height: number;
}

const Logo = ({ sizeTitleOne, sizeTitleTwo, width, height }: propsLogo) => {
  const refTitleOne = useRef<HTMLSpanElement>(null);
  const refTitleTwo = useRef<HTMLSpanElement>(null);

  const defineSizeFonts = () => {
    refTitleOne.current?.style.setProperty("font-size", `${sizeTitleOne}px`);
    refTitleTwo.current?.style.setProperty("font-size", `${sizeTitleTwo}px`);
  };

  useEffect(() => {
    defineSizeFonts();
    initAnimationsAos();
  }, []);

  return (
    <span data-aos="zoom-in-up" className={styles.span_logo} id="begin">
      {/* <Image
        src="/images/logo_image.png"
        width={width}
        height={height}
        alt="logomarca"
      /> */}
      <span
        ref={refTitleOne}
        className={styles.title_part_one}
      >
        Portfólio de arquitetura
      </span>
      <span
        ref={refTitleTwo}
        className={styles.title_part_two}
      >
       por Carlos Eduardo Lopes
      </span>
    </span>
  );
};

export default Logo;
