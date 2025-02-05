"use client";

import { useEffect } from "react";

import Image from "next/image";

import styles from "../components/sass_components/About.module.scss";

import { initAnimationsAos } from "@/aos/aos";

const About = () => {
  useEffect(() => {
    initAnimationsAos();
  }, []);

  return (
    <div id="about" className={styles.wraper_about}>
      <div className={styles.about}>
        <h2 className={styles.title_session_about}>
          <span className={styles.number_session_about}>2</span> Sobre mim
        </h2>
        <div className={`${styles.square_one} ${styles.square}`}></div>
        <div className={`${styles.square_two} ${styles.square}`}></div>

        <div className={styles.container_text_photo}>
          <div data-aos="fade-right" className={styles.text_about}>
            <p className={styles.text}>
              Olá, sou Carlos Eduardo Lopes, estudante de Arquitetura e
              Urbanismo na Anhanguera Divinópolis, atualmente cursando o sexto
              período. Com 23 anos, estou em uma fase de aprendizado e
              crescimento contínuos, onde busco aliar criatividade e técnica em
              meus projetos. Estou comprometido em desenvolver soluções
              inovadoras que equilibrem estética, funcionalidade e
              sustentabilidade. No meu portfólio, você encontrará trabalhos que
              refletem essa busca por excelência e o meu entusiasmo pelo
              campo do design.
            </p>
          </div>

          <div className={styles.container_photo}>
            <div className={styles.photo}>
              <Image
                data-aos="fade-down-right"
                src="/images/architect_.jpg"
                width={320}
                height={370}
                alt="arquiteto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
